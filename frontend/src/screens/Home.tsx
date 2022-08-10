import React from 'react'
import Toast from '../components/Toast/Toast'
import DataSection from '../components/InfoSection/DataSection'
import { UserInfo } from '../interfaces'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import {
  getSearchResults,
  getDocResult,
  getDocByNr,
} from '../features/searchResults/searchResultsSlice'
import SideMenuSecondary from '../components/SideMenu/SideMenuSecondary'
import { SendButton } from '../components/Buttons/Buttons.styled'
import HomeWelcome from '../components/InfoSection/HomeWelcome'
import Pagination from '../components/Pagination/Pagination'
// import SearchFilter from '../components/SearchFilter/SearchFilter'

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
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
  const submitHandler = (e: any) => {
    e.preventDefault()

    const query = 'poczta'
    //? the following is not accepted by the Api endpoint, what is the difference?
    // dispatch(getSearchResults(query.replace(/ /g, '%20')))
    //? this method works well
    const queryTrimmed = encodeURIComponent(query.trim())
    dispatch(getSearchResults(queryTrimmed))
  }

  const submitHandlerDoc = (e: any) => {
    e.preventDefault()

    const searchquery = {
      query: 'sp%C3%B3%C5%82ki+skarbu+pa%C5%84stwa',
      selectedDoc: 1,
      docNumber: 85725494,
    }

    dispatch(getDocResult(searchquery))
  }
  const submitHandlerDocNr = (e: any) => {
    e.preventDefault()
    const nr = 85725494
    dispatch(getDocByNr(nr))
  }
  // KrajowaInformacjaSkarbowa: boolean, IzbaSkarbowa: boolean, MinisterFinansów: boolean
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

  return (
    <>
      <Toast option='registerUser' />

      <SideMenuSecondary
        mainData={
          <>
            {data && data?.length === 0 && (
              <>
                {' '}
                <HomeWelcome variant='primary' />
              </>
            )}

            {data && data?.length > 0 && (
              <>
                <Pagination />
                {/* //*slice method returns shallow copy of the part between start and end - end not included, hence +1 */}

                {data
                  .slice(start, end + 1)
                  //! todo
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
                      paddingTop='large'
                      imgStart
                      fragmentsFound={fragmentArray.fragment}
                      metryka={fragmentArray.metryka}
                      istota_interpretacji={fragmentArray.istota_interpretacji}
                      query={queryTrimmed}
                    />
                  ))}
              </>
            )}
          </>
        }
      >
        {Object.keys(userInfo).length > 0 ? (
          <>
            <SendButton onClick={submitHandler}>Search Test</SendButton>
            <SendButton variant='success' onClick={submitHandlerDoc}>
              get Doc test TEST TEST
            </SendButton>
            <SendButton variant='secondary' onClick={submitHandlerDocNr}>
              get Doc nr test
            </SendButton>
          </>
        ) : (
          <>
            {' '}
            <SendButton onClick={submitHandler}>Search Test</SendButton>
            <SendButton variant='success' onClick={submitHandlerDoc}>
              get Doc test TEST TEST
            </SendButton>
            <SendButton variant='secondary' onClick={submitHandlerDocNr}>
              get Doc nr test
            </SendButton>
          </>
        )}
      </SideMenuSecondary>
    </>
  )
}
export default Home
