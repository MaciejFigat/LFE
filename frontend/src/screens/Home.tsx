import React from 'react'
import Toast from '../components/Toast/Toast'
import DataSection from '../components/InfoSection/DataSection'
import { UserInfo } from '../interfaces'
import { useAppSelector } from '../app/reduxHooks'

import SideMenuSecondary from '../components/SideMenu/SideMenuSecondary'

// import HomeWelcome from '../components/InfoSection/HomeWelcome'
import Pagination from '../components/Pagination/Pagination'
import HeroSection from '../components/InfoSection/HeroSection'

// import SearchFilter from '../components/SearchFilter/SearchFilter'

const Home: React.FC = () => {
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
      {data && data?.length === 0 && (
        <>
          {' '}
          <HeroSection />
          {/* <HomeWelcome variant='primary' /> */}
        </>
      )}
      {data && data?.length > 0 && (
        <SideMenuSecondary
          mainData={
            <>
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
            </>
          }
        >
          {Object.keys(userInfo).length > 0 ? <></> : <> </>}
        </SideMenuSecondary>
      )}
    </>
  )
}
export default Home
