import React from 'react'
import Toast from '../components/Toast/Toast'
import DataSection from '../components/InfoSection/DataSection'
import { useAppSelector } from '../app/reduxHooks'
import HeroSection from '../components/HomePageComponents/HeroSection'
import Pagination from '../components/Pagination/Pagination'
import HeroOne from '../components/HomePageComponents/HeroOne'
import HeroTwo from '../components/HomePageComponents/HeroTwo'
import HeroThree from '../components/HomePageComponents/HeroThree'

// import SearchFilter from '../components/SearchFilter/SearchFilter'

const Home: React.FC = () => {
  // const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
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
    <div>
      <Toast option='registerUser' />
      {data && data?.length === 0 && (
        <>
          <HeroSection />
          <HeroOne />
          <HeroTwo />
          <HeroThree />
        </>
      )}
      {/* {data && data?.length > 0 && ( */}

      <Pagination />
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
    </div>
  )
}
export default Home
