import React, { useEffect } from 'react'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
import ResizableScrollSection from '../components/Miscellaneous/ScrollSection/ResizableScrollSection'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
import ResultDisplay from '../components/Miscellaneous/ResultDisplay/ResultDisplay'
import DataSectionSimple from '../components/Miscellaneous/InfoSection/DataSectionSimple'
import UserFragmentsByKeyword from '../components/FragmentsColumn/UserFragmentsByKeyword'
import { DataContainerSimple } from '../components/Miscellaneous/InfoSection/InfoSection.styled'
import SharedChoiceWrapper from '../components/FragmentsColumn/SharedChoiceWrapper/SharedChoiceWrapper'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import PupupEditWindow from '../components/DragAndDropProject/PopupEditWindow/PupupEditWindow'
import { editIdOpenFragment } from '../features/preferences/preferenceSlice'

interface ResultDisplayScreenProps {}

const ResultDisplayScreen: React.FC<ResultDisplayScreenProps> = () => {
  const dispatch: any = useAppDispatch()

  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  const widthNarrow = useAppSelector((state) => state.preference.widthNarrow)
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
    dispatch(editIdOpenFragment(''))
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
            Object.keys(userInfo).length > 0 && userInfo.status === 'Active' ? (
              <>
                <SharedChoiceWrapper />

                {showFragmentsState && sortingOption === 'data' && (
                  <UserFragmentsColumn />
                )}
                {showFragmentsState && sortingOption === 'wszystkie' && (
                  <UserFragmentsColumn />
                )}
                {showFragmentsState && sortingOption === 'projekt' && (
                  <UserFragmentsByKeyword />
                )}

                <DataContainerSimple width={widthNarrow}>
                  {!showFragmentsState &&
                    data.length > 0 &&
                    data.slice(start, end + 1).map((fragmentArray: any) => (
                      <DataSectionSimple
                        variant='primary'
                        // imgStart
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
              <>
                <SharedChoiceWrapper />

                {showFragmentsState && (
                  <FragmentsColumn showFragmentsState={showFragmentsState} />
                )}
                {/* {showFragmentsState && sortingOption === 'wszystkie' && (
                  <FragmentsColumn showFragmentsState={showFragmentsState} />
                )}
                {showFragmentsState && sortingOption === 'projekt' && (
                  <FragmentsColumn showFragmentsState={showFragmentsState} />
                )} */}

                <DataContainerSimple width={widthNarrow}>
                  {!showFragmentsState &&
                    data.length > 0 &&
                    data.slice(start, end + 1).map((fragmentArray: any) => (
                      <DataSectionSimple
                        variant='primary'
                        // imgStart
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
            )
          }
          wideSection={<ResultDisplay />}
        />
      </AnimateSharedLayout>
    </>
  )
}
export default ResultDisplayScreen
