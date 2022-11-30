import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { highlightQueryEdit } from '../../features/preferences/preferenceSlice'
import { HeroTitleMisc, HorizontalWrapperTight } from '../../styles/misc.styled'
import { ButtonSmall } from '../Miscellaneous/Buttons/BigButton.styled'
import DataSection from '../Miscellaneous/InfoSection/DataSection'
import DataSectionSimple from '../Miscellaneous/InfoSection/DataSectionSimple'
import Pagination from '../Miscellaneous/Pagination/Pagination'
import SearchBar from '../Miscellaneous/SearchBar/SearchBar'
import {
  SwitchButtonWrapper,
  SwitchResultContainer,
  SwitchResultWrapper,
  SwitchSectionWrapper,
  SwitchText,
} from '../Miscellaneous/SearchBar/SearchBar.styled'
import {
  HighlightButton,
  SearchBarForm,
  SearchInputResultDisplay,
} from '../Miscellaneous/SearchBar/SearchFilter.styled'
import SwitchButton from '../Miscellaneous/SearchBar/SwitchButton'
import HomeSearch from './HeroGridComponents.tsx/HomeSearch'
import {
  SearchResultsDashboardColumn,
  SearchResultsDashboardDiv,
  SearchResultsHorizontalWrapper,
  SearchResultsSectionWrapper,
  SearchResultsWrapper,
} from './SearchResultsDisplay.styled'
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
  const fragmentsSource: any = useAppSelector(
    (state) => state.preference.sortFragmentsBySource
  )
  const { KrajowaInformacjaSkarbowa, IzbaSkarbowa, MinisterFinansów } =
    fragmentsSource
  const queryTrimmed = encodeURIComponent(query?.trim())

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [simpleView, setSimpleView] = useState<boolean>(false)

  const simpleViewHandler = () => {
    setSimpleView((simpleView) => !simpleView)
  }
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
      {data && data?.length === 0 && <HomeSearch />}
      {data && data?.length > 0 && (
        <SearchResultsSectionWrapper>
          <SearchResultsDashboardDiv>
            <SwitchResultWrapper>
              <HeroTitleMisc>
                {query} - {data.length} wyników
              </HeroTitleMisc>
            </SwitchResultWrapper>
            <SearchResultsHorizontalWrapper>
              <SearchResultsDashboardColumn>
                <SwitchSectionWrapper>
                  <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    isOpen={false}
                    startDate={new Date()}
                    endDate={new Date()}
                    skip={1}
                    take={30}
                  />
                </SwitchSectionWrapper>
                <SwitchResultWrapper>
                  <SearchBarForm onSubmit={highlightHandler}>
                    <HighlightButton type='submit'>Zaznacz</HighlightButton>{' '}
                    <SearchInputResultDisplay
                      type='highlight'
                      name='highlight'
                      placeholder='podświetl'
                      autoComplete='highlight'
                      value={highlightQueryLocal}
                      onChange={(e: any) => setHighlightQuery(e.target.value)}
                    />
                  </SearchBarForm>
                </SwitchResultWrapper>
              </SearchResultsDashboardColumn>
              <SearchResultsDashboardColumn>
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
              </SearchResultsDashboardColumn>
            </SearchResultsHorizontalWrapper>
            <HorizontalWrapperTight>
              <ButtonSmall variant='secondary' onClick={simpleViewHandler}>
                {simpleView ? 'Widok rozszerzony' : 'Widok uproszczony'}
              </ButtonSmall>
            </HorizontalWrapperTight>
            <Pagination />
          </SearchResultsDashboardDiv>

          <SearchResultsWrapper simpleView={simpleView}>
            {!simpleView &&
              data
                .slice(start, end + 1)

                .filter(
                  (dataSliced: any) =>
                    helperFragmentSourceFilter().indexOf(dataSliced.typSadu) >
                    -1
                )
                .map((fragmentArray: any) => (
                  <DataSection
                    highlightQuery={highlightQuery}
                    variant='secondary'
                    key={fragmentArray['uuid']}
                    paddingTop='small'
                    imgStart
                    fragmentsFound={fragmentArray.fragment}
                    metryka={fragmentArray.metryka}
                    istota_interpretacji={fragmentArray.istota_interpretacji}
                    query={queryTrimmed}
                  />
                ))}
            {simpleView &&
              data
                .slice(start, end + 1)

                .filter(
                  (dataSliced: any) =>
                    helperFragmentSourceFilter().indexOf(dataSliced.typSadu) >
                    -1
                )
                .map((fragmentArray: any) => (
                  <DataSectionSimple
                    // highlightQuery={highlightQuery}
                    variant='secondary'
                    key={fragmentArray['uuid']}
                    paddingTop='small'
                    imgStart
                    fragmentsFound={fragmentArray.fragment}
                    metryka={fragmentArray.metryka}
                    istota_interpretacji={fragmentArray.istota_interpretacji}
                    query={queryTrimmed}
                  />
                ))}
          </SearchResultsWrapper>
        </SearchResultsSectionWrapper>
      )}
      {/* slice method returns shallow copy of the part between start and end - end not included, hence +1  */}
    </>
  )
}
export default SearchResultsDisplay
