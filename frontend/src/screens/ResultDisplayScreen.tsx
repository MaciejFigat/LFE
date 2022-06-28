import React from 'react'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
import ResizableScrollSection from '../components/ScrollSection/ResizableScrollSection'
import { useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
import ResultDisplay from '../components/ResultDisplay/ResultDisplay'
import ChoiceWrapper from '../components/FragmentsColumn/FilterWrapper/ChoiceWrapper'
import DataSectionSimple from '../components/InfoSection/DataSectionSimple'
import UserFragmentsByKeyword from '../components/FragmentsColumn/UserFragmentsByKeyword'

interface ResultDisplayScreenProps {}

const ResultDisplayScreen: React.FC<ResultDisplayScreenProps> = () => {
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )
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
      {' '}
      <ResizableScrollSection
        narrowOption
        narrowSection={
          Object.keys(userInfo).length > 0 ? (
            <>
              <ChoiceWrapper />
              {showFragmentsState && sortingOption === 'date' && (
                <UserFragmentsColumn />
              )}

              {showFragmentsState && sortingOption === 'keyword' && (
                <UserFragmentsByKeyword />
              )}
              {!showFragmentsState &&
                data.length > 0 &&
                data.map((fragmentArray: any) => (
                  <DataSectionSimple
                    variant='blue'
                    imgStart
                    key={fragmentArray['uuid']}
                    paddingTop='small'
                    fragmentsFound={fragmentArray.fragment}
                    metryka={fragmentArray.metryka}
                    query={queryTrimmed}
                  />
                ))}
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
export default ResultDisplayScreen
