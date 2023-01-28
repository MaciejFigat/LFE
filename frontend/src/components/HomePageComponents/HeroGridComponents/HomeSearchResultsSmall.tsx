import React from 'react'
// import { DataContainerSimple } from '../HomeSection.styled'
import { useAppSelector } from '../../../app/reduxHooks'
import { RegularColumn } from '../../../styles/misc.styled'
import HeroDataSectionSimple from './HeroDataSectionSimple'
import HomeSearchSample from './HomeSearchSample'
interface HomeSearchResultsSmallProps {}

const HomeSearchResultsSmall: React.FC<HomeSearchResultsSmallProps> = () => {
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )
  const searchResultsPage: any = useAppSelector(
    (state) => state.preference.searchResultsPage
  )
  const { start, end } = searchResultsPage

  const { data } = searchResults

  const fragmentsSource: any = useAppSelector(
    (state) => state.preference.sortFragmentsBySource
  )
  const { KrajowaInformacjaSkarbowa, IzbaSkarbowa, MinisterFinansów } =
    fragmentsSource
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
    <RegularColumn>
      {data && data?.length === 0 ? (
        <HomeSearchSample />
      ) : (
        data
          ?.slice(start, end + 1)
          .filter(
            (dataSliced: any) =>
              helperFragmentSourceFilter().indexOf(dataSliced.typSadu) > -1
          )
          .map((fragmentArray: any, index: number) => (
            <HeroDataSectionSimple
              variant='primary'
              index={index}
              istota_interpretacji={fragmentArray.istota_interpretacji}
              key={fragmentArray['uuid']}
              paddingTop='small'
              fragmentsFound={fragmentArray.fragment}
              metryka={fragmentArray.metryka}
            />
          ))
      )}
    </RegularColumn>
  )
}
export default HomeSearchResultsSmall
