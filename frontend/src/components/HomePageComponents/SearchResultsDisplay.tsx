import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { highlightQueryEdit } from '../../features/preferences/preferenceSlice'
import DataSection from '../Miscellaneous/InfoSection/DataSection'
import Pagination from '../Miscellaneous/Pagination/Pagination'
import {
  SwitchButtonWrapper,
  SwitchResultContainer,
  SwitchResultWrapper,
  SwitchText,
} from '../Miscellaneous/SearchBar/SearchBar.styled'
import {
  HighlightButton,
  SearchBarForm,
  SearchInputResultDisplay,
} from '../Miscellaneous/SearchBar/SearchFilter.styled'
import SwitchButton from '../Miscellaneous/SearchBar/SwitchButton'
interface SearchResultsDisplayProps {}

const SearchResultsDisplay: React.FC<SearchResultsDisplayProps> = () => {
  const dispatch = useAppDispatch()
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )
  const { data, query } = searchResults

  const searchResultsPage: any = useAppSelector(
    (state) => state.preference.searchResultsPage
  )
  const { start, end } = searchResultsPage
  const highlightQuery: string = useAppSelector(
    (state) => state.preference.highlightQuery
  )
  const FragmentsSource: any = useAppSelector(
    (state) => state.preference.sortFragmentsBySource
  )
  const { KrajowaInformacjaSkarbowa, IzbaSkarbowa, MinisterFinansów } =
    FragmentsSource
  const queryTrimmed = encodeURIComponent(query?.trim())

  const [isOnOne, setIsOnOne] = useState(false)
  const [isOnTwo, setIsOnTwo] = useState(false)
  const [isOnThree, setIsOnThree] = useState(false)
  const [highlightQueryLocal, setHighlightQuery] =
    useState<string>(highlightQuery)

  const helperFragmentSourceFilter = () => {
    let numbers: number[]
    switch (true) {
      case KrajowaInformacjaSkarbowa && !IzbaSkarbowa && !MinisterFinansów:
        numbers = [7]
        break
      case !KrajowaInformacjaSkarbowa && IzbaSkarbowa && !MinisterFinansów:
        numbers = [8]
        break
      case !KrajowaInformacjaSkarbowa && !IzbaSkarbowa && MinisterFinansów:
        numbers = [9]
        break
      case KrajowaInformacjaSkarbowa && IzbaSkarbowa && !MinisterFinansów:
        numbers = [7, 8]
        break
      case !KrajowaInformacjaSkarbowa && IzbaSkarbowa && MinisterFinansów:
        numbers = [8, 9]
        break
      case KrajowaInformacjaSkarbowa && !IzbaSkarbowa && MinisterFinansów:
        numbers = [7, 9]
        break
      case !KrajowaInformacjaSkarbowa && !IzbaSkarbowa && !MinisterFinansów:
        numbers = []
        break
      default:
        numbers = [7, 8, 9, 3]

        break
    }
    return numbers
  }

  const highlightHandler = (e: any) => {
    e.preventDefault()
    dispatch(highlightQueryEdit(highlightQueryLocal))
  }

  return (
    <>
      {' '}
      {data && data?.length > 0 && (
        <>
          {' '}
          <SwitchResultWrapper>
            <SwitchButtonWrapper>
              <h3>Wyniki wyszukiwania: {query}</h3>{' '}
            </SwitchButtonWrapper>
            <SwitchButtonWrapper>
              <h3>Ilość wyników: {data.length}</h3>{' '}
            </SwitchButtonWrapper>
            <SwitchButtonWrapper>
              <SearchBarForm onSubmit={highlightHandler}>
                <HighlightButton type='submit'>Podświetl frazę</HighlightButton>{' '}
                <SearchInputResultDisplay
                  type='highlight'
                  name='highlight'
                  placeholder='highlight'
                  autoComplete='highlight'
                  value={highlightQueryLocal}
                  onChange={(e: any) => setHighlightQuery(e.target.value)}
                />{' '}
              </SearchBarForm>
            </SwitchButtonWrapper>
          </SwitchResultWrapper>
          <SwitchResultWrapper>
            <SwitchButtonWrapper>
              <SwitchResultContainer>
                <SwitchButton
                  isOn={isOnOne}
                  setIsOn={setIsOnOne}
                  sortingOption='one'
                />
                <SwitchText isOn={isOnOne}>
                  Krajowa Informacja Skarbowa ({' '}
                  {
                    data.filter(
                      (dataFiltered: any) => dataFiltered.typSadu === 7
                    ).length
                  }{' '}
                  )
                </SwitchText>
              </SwitchResultContainer>
            </SwitchButtonWrapper>
            <SwitchButtonWrapper>
              <SwitchResultContainer>
                <SwitchButton
                  isOn={isOnTwo}
                  setIsOn={setIsOnTwo}
                  sortingOption='two'
                />
                <SwitchText isOn={isOnTwo}>
                  Izba Skarbowa ({' '}
                  {
                    data.filter(
                      (dataFiltered: any) => dataFiltered.typSadu === 8
                    ).length
                  }{' '}
                  )
                </SwitchText>
              </SwitchResultContainer>
            </SwitchButtonWrapper>
            <SwitchButtonWrapper>
              {' '}
              <SwitchResultContainer>
                <SwitchButton
                  isOn={isOnThree}
                  setIsOn={setIsOnThree}
                  sortingOption='three'
                />
                <SwitchText isOn={isOnThree}>
                  Minister Finansów ({' '}
                  {
                    data.filter(
                      (dataFiltered: any) => dataFiltered.typSadu === 9
                    ).length
                  }{' '}
                  )
                </SwitchText>
              </SwitchResultContainer>
            </SwitchButtonWrapper>
          </SwitchResultWrapper>
          <Pagination />
        </>
      )}
      {/* slice method returns shallow copy of the part between start and end - end not included, hence +1  */}
      {data
        .slice(start, end + 1)

        .filter(
          (dataSliced: any) =>
            helperFragmentSourceFilter().indexOf(dataSliced.typSadu) > -1
        )
        .map((fragmentArray: any) => (
          <DataSection
            highlightQuery={highlightQuery}
            variant='secondary'
            key={fragmentArray['uuid']}
            paddingTop='large'
            imgStart
            fragmentsFound={fragmentArray.fragment}
            metryka={fragmentArray.metryka}
            istota_interpretacji={fragmentArray.istota_interpretacji}
            query={queryTrimmed}
          />
        ))}
    </>
  )
}
export default SearchResultsDisplay
