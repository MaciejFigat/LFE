import React from 'react'
import { DataContainerSimple } from '../HomeSection.styled'
import { useAppSelector } from '../../../app/reduxHooks'
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

  const { data, query } = searchResults
  const queryTrimmed = encodeURIComponent(query?.trim())

  return (
    <div>
      {' '}
      <>
        {data.length > 0 &&
          data
            .slice(start, end + 1)
            .map((fragmentArray: any, index: number) => (
              <HeroDataSectionSimple
                variant='primary'
                // imgStart
                index={index}
                istota_interpretacji={fragmentArray.istota_interpretacji}
                key={fragmentArray['uuid']}
                paddingTop='small'
                fragmentsFound={fragmentArray.fragment}
                metryka={fragmentArray.metryka}
                query={queryTrimmed}
              />
            ))}
      </>
    </div>
  )
}
export default HomeSearchResultsSmall
