import React, { useEffect } from 'react'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
import ResizableScrollSection from '../components/Miscellaneous/ScrollSection/ResizableScrollSection'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import { useParams } from 'react-router-dom'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
import ResultDisplay from '../components/Miscellaneous/ResultDisplay/ResultDisplay'
import DataSectionSimple from '../components/Miscellaneous/InfoSection/DataSectionSimple'
import UserFragmentsByKeyword from '../components/FragmentsColumn/UserFragmentsByKeyword'

import { DataContainerSimple } from '../components/Miscellaneous/InfoSection/InfoSection.styled'
import SharedChoiceWrapper from '../components/FragmentsColumn/SharedChoiceWrapper/SharedChoiceWrapper'
import { getDocByIdAndQuery } from '../features/searchResults/searchResultsSlice'

interface ResultDisplayIdQueryScreenProps {}

const ResultDisplayIdQueryScreen: React.FC<
  ResultDisplayIdQueryScreenProps
> = () => {
  const dispatch = useAppDispatch()

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

  const { id: urlId, query: urlQuery } = useParams<{
    id: string
    query: string
  }>()
  useEffect(() => {
    const searchquery = {
      query: urlQuery ? urlQuery : '',
      docNumber: urlId ? parseInt(urlId) : 0,
    }

    if (urlQuery && urlId) {
      dispatch(getDocByIdAndQuery(searchquery))
    }
  }, [dispatch, urlId, urlQuery])

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
