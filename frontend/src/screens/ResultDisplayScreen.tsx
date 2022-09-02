import React, { useEffect } from 'react'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
import ResizableScrollSection from '../components/ScrollSection/ResizableScrollSection'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
import ResultDisplay from '../components/ResultDisplay/ResultDisplay'
import DataSectionSimple from '../components/InfoSection/DataSectionSimple'
import UserFragmentsByKeyword from '../components/FragmentsColumn/UserFragmentsByKeyword'
import { DataContainerSimple } from '../components/InfoSection/InfoSection.styled'
import SharedChoiceWrapper from '../components/FragmentsColumn/SharedChoiceWrapper/SharedChoiceWrapper'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import PupupEditWindow from '../components/DragAndDropProject/PopupEditWindow/PupupEditWindow'
import { editIdOpenFragment } from '../features/preferences/preferenceSlice'

interface ResultDisplayScreenProps {}

const ResultDisplayScreen: React.FC<ResultDisplayScreenProps> = () => {
  const dispatch: any = useAppDispatch()

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
  const idOpenFragment = useAppSelector(
    (state) => state.preference.idOpenFragment
  )

  const { data, query } = searchResults
  const queryTrimmed = encodeURIComponent(query?.trim())

  useEffect(() => {
    // if (idOpenFragment !== '') {
    dispatch(editIdOpenFragment(''))
    // }
  }, [dispatch])

  return (
    <>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
          {idOpenFragment !== '' && (
            <PupupEditWindow
              idOpen={idOpenFragment}
              openedApp={idOpenFragment}
            />
          )}
        </AnimatePresence>

        <ResizableScrollSection
          narrowOption
          narrowSection={
            Object.keys(userInfo).length > 0 ? (
              <>
                <SharedChoiceWrapper />

                {showFragmentsState && sortingOption === 'date' && (
                  <UserFragmentsColumn />
                )}
                {showFragmentsState && sortingOption === 'all' && (
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
                        variant='primary'
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
      </AnimateSharedLayout>
    </>
  )
}
export default ResultDisplayScreen
