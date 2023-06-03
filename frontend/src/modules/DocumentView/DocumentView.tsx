import React, { useEffect } from 'react'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { UserInfo } from '../../interfaces'
import FragmentsColumn from '../modules/../Fragments/FragmentsColumn'
import ResizableScrollSection from '../../components/Miscellaneous/ScrollSection/ResizableScrollSection'
import UserFragmentsColumn from '../../modules/Fragments/UserFragmentsColumn'
import ResultDisplay from './DocumentDisplay/DocumentDisplay'
import DataSectionSimple from '../../modules/InfoSection/DataSectionSimple'
import UserFragmentsByKeyword from '../../modules/Fragments/UserFragmentsByKeyword'
import SharedChoiceWrapper from '../../modules/Fragments/SharedChoiceWrapper/SharedChoiceWrapper'
import PupupEditWindow from '../../modules/DragAndDropProject/PopupEditWindow/PupupEditWindow'
import { DataContainerSimple } from '../../modules/InfoSection/InfoSection.styled'
import { editIdOpenFragment } from '../../features/preferences/preferenceSlice'
import { HeroDesktop } from '../../layout/layout.styled'

interface DocumentViewProps {}

const DocumentView: React.FC<DocumentViewProps> = () => {
  const dispatch: any = useAppDispatch()
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
  const idOpenFragment = useAppSelector(
    state => state.preference.idOpenFragment
  )

  const { data, query } = searchResults
  const queryTrimmed = encodeURIComponent(query?.trim())

  useEffect(() => {
    dispatch(editIdOpenFragment(''))
  }, [dispatch])

  return (
    <HeroDesktop>
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

                {showFragmentsState &&
                  (sortingOption === 'data' ||
                    sortingOption === 'wszystkie') && <UserFragmentsColumn />}
                {showFragmentsState && sortingOption === 'projekt' && (
                  <UserFragmentsByKeyword />
                )}

                <DataContainerSimple width={widthNarrow}>
                  {!showFragmentsState &&
                    data.length > 0 &&
                    data
                      .slice(start, end + 1)
                      .map((fragmentArray: any) => (
                        <DataSectionSimple
                          variant='primary'
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

                {showFragmentsState && <FragmentsColumn />}

                <DataContainerSimple width={widthNarrow}>
                  {!showFragmentsState &&
                    data.length > 0 &&
                    data
                      .slice(start, end + 1)
                      .map((fragmentArray: any) => (
                        <DataSectionSimple
                          variant='primary'
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
    </HeroDesktop>
  )
}
export default DocumentView
