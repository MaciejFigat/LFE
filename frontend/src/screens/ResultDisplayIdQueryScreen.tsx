import React from 'react'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
import ResizableScrollSection from '../components/ScrollSection/ResizableScrollSection'
import { useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
import ResultDisplay from '../components/ResultDisplay/ResultDisplay'
import DataSectionSimple from '../components/InfoSection/DataSectionSimple'
import UserFragmentsByKeyword from '../components/FragmentsColumn/UserFragmentsByKeyword'

import { DataContainerSimple } from '../components/InfoSection/InfoSection.styled'
import SharedChoiceWrapper from '../components/FragmentsColumn/SharedChoiceWrapper/SharedChoiceWrapper'

interface ResultDisplayIdQueryScreenProps {}

const ResultDisplayIdQueryScreen: React.FC<
  ResultDisplayIdQueryScreenProps
> = () => {
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )
  const searchResultsPage: any = useAppSelector(
    (state) => state.preference.searchResultsPage
  )
  const { start, end } = searchResultsPage
  const showFragmentsState: boolean = useAppSelector(
    (state) => state.preference.showFragments
  )
  const sortingOption: string = useAppSelector(
    (state) => state.preference.sortingOption
  )
  const { data, query } = searchResults
  const queryTrimmed = encodeURIComponent(query?.trim())
  return (
    <>
      <ResizableScrollSection
        narrowOption
        narrowSection={
          Object.keys(userInfo).length > 0 ? (
            <>
              <SharedChoiceWrapper />

              {showFragmentsState && (sortingOption === 'date' || 'all') && (
                <UserFragmentsColumn />
              )}

              {showFragmentsState && sortingOption === 'keyword' && (
                <UserFragmentsByKeyword />
              )}
              <DataContainerSimple>
                {!showFragmentsState &&
                  data.length > 0 &&
                  data.slice(start, end + 1).map((fragmentArray: any) => (
                    <DataSectionSimple
                      variant='blue'
                      // imgStart
                      key={fragmentArray['uuid']}
                      paddingTop='small'
                      fragmentsFound={fragmentArray.fragment}
                      metryka={fragmentArray.metryka}
                      query={queryTrimmed}
                    />
                  ))}
              </DataContainerSimple>
            </>
          ) : (
            <FragmentsColumn />
          )
        }
        wideSection={<ResultDisplay />}
      />
    </>
  )
}
export default ResultDisplayIdQueryScreen
