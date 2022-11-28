import React from 'react'
// import { DataContainerSimple } from '../HomeSection.styled'
import { useAppSelector } from '../../../app/reduxHooks'
import { RegularColumn } from '../../../styles/misc.styled'
import HeroDataSectionSimple from './HeroDataSectionSimple'
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

  return (
    <RegularColumn>
      {data.length > 0 &&
        data
          .slice(start, end + 1)
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
          ))}
    </RegularColumn>
  )
}
export default HomeSearchResultsSmall
