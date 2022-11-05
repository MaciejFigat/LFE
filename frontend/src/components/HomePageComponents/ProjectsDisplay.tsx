import React, { useMemo, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { SwitchResultWrapper } from '../Miscellaneous/SearchBar/SearchBar.styled'
import { updateUserFragmentsKeywordMain } from '../../features/fragments/fragmentSlice'
import {
  MainProjectDetails,
  MainProjectWrapper,
  ProjectDiv,
  SearchResultsSectionWrapper,
} from './SearchResultsDisplay.styled'
import ProjectsEnumeration from './ProjectsEnumeration'
import { ProjectH2NoHover } from './ProjectsComponents.styled'
import StaggerChildrenWrapperSecondary from '../Miscellaneous/AnimationWrappers/StaggerChildrenWrapperSecondary'
// import ResizableScrollSection from '../Miscellaneous/ScrollSection/ResizableScrollSection'
import ScrollSection from '../Miscellaneous/ScrollSection/ScrollSection'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import PupupEditWindow from '../DragAndDropProject/PopupEditWindow/PupupEditWindow'
import { editIdOpenFragment } from '../../features/preferences/preferenceSlice'
import { SendButtonVerySmall } from '../Miscellaneous/Buttons/Buttons.styled'
import {
  DotButton,
  RelativeRightSvgWrapper,
  WrapperMotionDiv,
} from '../../styles/misc.styled'
import {
  FragmentB,
  FragmentParSmall,
  FragmentTitleRowSmall,
} from '../Miscellaneous/KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'
interface ProjectsDisplayProps {}

const ProjectsDisplay: React.FC<ProjectsDisplayProps> = () => {
  const dispatch: any = useAppDispatch()
  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const fragmentsKeywordMain: any[] = useAppSelector(
    (state) => state.fragment.fragmentsKeywordMain
  )

  const projectName = useAppSelector(
    (state) => state.preference.sortingKeywords.keywordMain
  )

  const [canOpenApp, setCanOpenApp] = useState<boolean>(true)
  const [openedApp, setOpenedApp] = useState<null | string>(null)
  const [idOpen, setIdOpen] = useState<string>('')
  //todo
  // const widthNarrow = useAppSelector((state) => state.preference.widthNarrow)

  const openWindowHandler = (id: string) => {
    if (canOpenApp && setOpenedApp && setIdOpen && openedApp === null) {
      setOpenedApp(id)
      setIdOpen(id)
      //? values below are set to y: 0 and opacity: 1 so it won't animate after closing the editing window
      setYValue(0)
      setOpacity(1)
    }
  }

  //? used to force animation only on initial load

  const [opacity, setOpacity] = useState(0)
  // const [yValue, setYValue] = useState(-10)
  const [yValue, setYValue] = useState(0)

  const dropUpVariants = {
    hidden: {
      y: yValue,
      opacity: opacity,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        // duration: 0.1,
        type: 'spring',
        stiffness: 100,
        mass: 0.3,
      },
    },
  }
  //? this useMemo hook is used for setting animation values for entering fragment divs when projectName changes
  useMemo(() => {
    if (projectName) {
      // setYValue(-10)

      setOpacity(0)
    }
  }, [projectName])

  useMemo(() => {
    if (projectName !== '') {
      const fragmentsMatching = fragments?.filter(
        (fragmentsSorted) => fragmentsSorted.keywords?.indexOf(projectName) >= 0
      )
      dispatch(updateUserFragmentsKeywordMain(fragmentsMatching))
    }
  }, [dispatch, fragments, projectName])

  useEffect(() => {
    dispatch(editIdOpenFragment(''))
  }, [dispatch])
  return (
    <SearchResultsSectionWrapper>
      <AnimateSharedLayout type='crossfade'>
        <ScrollSection
          widthBig='65%'
          widthSmall='35%'
          wideSection={
            <MainProjectWrapper>
              <SwitchResultWrapper>
                <ProjectH2NoHover>Przypisane fragmenty</ProjectH2NoHover>
              </SwitchResultWrapper>

              <StaggerChildrenWrapperSecondary key={projectName}>
                {' '}
                <MainProjectDetails>
                  {fragmentsKeywordMain?.map((fragment) => (
                    <div key={Math.random()}>
                      {' '}
                      <WrapperMotionDiv
                        layoutId={fragment._id}
                      ></WrapperMotionDiv>
                      <ProjectDiv variants={dropUpVariants} key={Math.random()}>
                        <FragmentTitleRowSmall>
                          <FragmentParSmall>
                            {fragment.title !==
                            fragment.excerpt.substring(0, 22) ? (
                              <>{fragment.title}</>
                            ) : (
                              <>{fragment.source}</>
                            )}
                          </FragmentParSmall>
                          <RelativeRightSvgWrapper>
                            <SendButtonVerySmall
                              variant='primaryEmpty'
                              onClick={() => openWindowHandler(fragment._id)}
                            >
                              <DotButton left='0px' />
                            </SendButtonVerySmall>
                          </RelativeRightSvgWrapper>
                        </FragmentTitleRowSmall>
                        <FragmentParSmall>
                          <FragmentB>
                            {' '}
                            {fragment.excerpt.substring(0, 72)}
                          </FragmentB>
                        </FragmentParSmall>
                      </ProjectDiv>
                    </div>
                  ))}
                </MainProjectDetails>
              </StaggerChildrenWrapperSecondary>
            </MainProjectWrapper>
          }
          narrowSection={<ProjectsEnumeration />}
        />{' '}
        <AnimatePresence>
          {openedApp && (
            <PupupEditWindow
              idOpen={idOpen}
              setOpenedApp={setOpenedApp}
              setCanOpenApp={setCanOpenApp}
              canOpenApp={canOpenApp}
              openedApp={openedApp}
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </SearchResultsSectionWrapper>
  )
}
export default ProjectsDisplay
