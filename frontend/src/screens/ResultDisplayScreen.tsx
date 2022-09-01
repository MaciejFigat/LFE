import React, { useState } from 'react'
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
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import PupupEditWindow from '../components/DragAndDropProject/PopupEditWindow/PupupEditWindow'

interface ResultDisplayScreenProps {}

const ResultDisplayScreen: React.FC<ResultDisplayScreenProps> = () => {
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

  // const [test, setTest] = useState<boolean>(false)
  const [canOpenApp, setCanOpenApp] = useState<boolean>(true)
  const [openedApp, setOpenedApp] = useState<null | string>(null)
  const [title, setTitle] = useState<string>('')
  const [idOpen, setIdOpen] = useState<string>('')

  const testHandler = () => {
    // setTest((test) => !test)
    // console.log(openedApp)
    console.log(idOpenFragment)
    console.log(idOpen)
  }
  return (
    <>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
          {idOpenFragment !== '' && (
            <PupupEditWindow
              title={title}
              idOpen={idOpenFragment}
              setOpenedApp={setOpenedApp}
              setCanOpenApp={setCanOpenApp}
              canOpenApp={canOpenApp}
              // openedApp={openedApp}
              openedApp={idOpenFragment}
            />
          )}
        </AnimatePresence>
        <button onClick={testHandler}>TEST </button>
        <ResizableScrollSection
          narrowOption
          narrowSection={
            Object.keys(userInfo).length > 0 ? (
              <>
                <SharedChoiceWrapper />
                {/* <AnimateSharedLayout type='crossfade'> */}
                {/* <AnimatePresence>
                  {idOpenFragment !== '' && (
                    <PupupEditWindow
                      title={title}
                      idOpen={idOpenFragment}
                      setOpenedApp={setOpenedApp}
                      setCanOpenApp={setCanOpenApp}
                      canOpenApp={canOpenApp}
                      // openedApp={openedApp}
                      openedApp={idOpenFragment}
                    />
                  )}
                </AnimatePresence> */}
                {showFragmentsState && sortingOption === 'date' && (
                  <UserFragmentsColumn
                    setOpenedApp={setOpenedApp}
                    setTitle={setTitle}
                    canOpenApp={canOpenApp}
                    setIdOpen={setIdOpen}
                    openedApp={openedApp}
                  />
                )}
                {showFragmentsState && sortingOption === 'all' && (
                  <UserFragmentsColumn
                    setOpenedApp={setOpenedApp}
                    setTitle={setTitle}
                    canOpenApp={canOpenApp}
                    setIdOpen={setIdOpen}
                    openedApp={openedApp}
                  />
                )}
                {showFragmentsState && sortingOption === 'keyword' && (
                  <UserFragmentsByKeyword />
                )}
                {/* </AnimateSharedLayout> */}
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
