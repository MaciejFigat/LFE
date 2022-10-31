import React, { useMemo } from 'react'
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

interface ProjectsDisplayProps {}

const dropUpVariants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      mass: 0.3,
    },
  },
}

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
  //todo
  // const widthNarrow = useAppSelector((state) => state.preference.widthNarrow)

  useMemo(() => {
    if (projectName !== '') {
      const fragmentsMatching = fragments?.filter(
        (fragmentsSorted) => fragmentsSorted.keywords?.indexOf(projectName) >= 0
      )
      dispatch(updateUserFragmentsKeywordMain(fragmentsMatching))
    }
  }, [dispatch, fragments, projectName])

  return (
    <SearchResultsSectionWrapper>
      {' '}
      <ScrollSection
        // widthBig='200px'
        // widthSmall='100px'
        wideSection={<ProjectsEnumeration />}
        narrowSection={
          <MainProjectWrapper>
            {projectName !== '' && (
              <SwitchResultWrapper>
                <ProjectH2NoHover>Przypisane fragmenty</ProjectH2NoHover>
              </SwitchResultWrapper>
            )}
            {fragmentsKeywordMain.length > 0 && (
              <StaggerChildrenWrapperSecondary key={projectName}>
                {' '}
                <MainProjectDetails>
                  {fragmentsKeywordMain?.map((fragment) => (
                    <ProjectDiv variants={dropUpVariants} key={Math.random()}>
                      {fragment.title}
                    </ProjectDiv>
                  ))}
                </MainProjectDetails>
              </StaggerChildrenWrapperSecondary>
            )}
          </MainProjectWrapper>
        }
      />
    </SearchResultsSectionWrapper>
  )
}
export default ProjectsDisplay
