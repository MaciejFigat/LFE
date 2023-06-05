import React, { useEffect } from 'react'
import FragmentsColumn from '../modules/Fragments/FragmentsColumn'
import ResizableScrollSection from '../components/Miscellaneous/ScrollSection/ResizableScrollSection'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import { useParams } from 'react-router-dom'
import UserFragmentsColumn from '../modules/Fragments/UserFragmentsColumn'
import ResultDisplay from '../modules/DocumentView/DocumentDisplay/DocumentDisplay'
import DataSectionSimple from '../modules/InfoSection/DataSectionSimple'
import UserFragmentsByKeyword from '../modules/Fragments/UserFragmentsByKeyword'

import { DataContainerSimple } from '../modules/InfoSection/InfoSection.styled'
import SharedChoiceWrapper from '../modules/Fragments/SharedChoiceWrapper/SharedChoiceWrapper'
import { getDocByIdAndQuery } from '../features/searchResults/searchResultsSlice'

interface ResultDisplayIdQueryScreenProps {}

const ResultDisplayIdQueryScreen: React.FC<
  ResultDisplayIdQueryScreenProps
> = () => {
  const dispatch = useAppDispatch()

  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)

  const widthNarrow = useAppSelector(state => state.preference.widthNarrow)

  const searchResults: any = useAppSelector(
    state => state.searchResult.searchResults
  )
  const searchResultsPage: any = useAppSelector(
    state => state.preference.searchResultsPage
  )
  const { start, end } = searchResultsPage
  const showFragmentsState: boolean = useAppSelector(
    state => state.preference.showFragments
  )
  const sortingOption: string = useAppSelector(
    state => state.preference.sortingOption
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
      docNumber: urlId ? parseInt(urlId) : 0
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
              <DataContainerSimple $width={widthNarrow}>
                {!showFragmentsState &&
                  data.length > 0 &&
                  data
                    .slice(start, end + 1)
                    .map((fragmentArray: any) => (
                      <DataSectionSimple
                        variant='blue'
                        istota_interpretacji={
                          fragmentArray.istota_interpretacji
                        }
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
