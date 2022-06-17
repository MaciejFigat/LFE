import React from 'react'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
import ResizableScrollSection from '../components/ScrollSection/ResizableScrollSection'
import { useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
import ResultDisplay from '../components/ResultDisplay/ResultDisplay'
import ChoiceWrapper from '../components/FragmentsColumn/FilterWrapper/ChoiceWrapper'
import DataSectionSimple from '../components/InfoSection/DataSectionSimple'

interface ResultDisplayScreenProps {}

const ResultDisplayScreen: React.FC<ResultDisplayScreenProps> = () => {
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )
  const showFragmentsState: boolean = useAppSelector(
    (state) => state.preference.showFragments
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
              {showFragmentsState && <UserFragmentsColumn />}
              {!showFragmentsState &&
                data.length > 0 &&
                data.map((fragmentArray: any) => (
                  <DataSectionSimple
                    variant='blue'
                    key={fragmentArray['uuid']}
                    paddingTop='small'
                    fragmentsFound={fragmentArray.fragment}
                    metryka={fragmentArray.metryka}
                    query={queryTrimmed}
                  />
                ))}

              {/* //todo simplified dataSection*/}
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
