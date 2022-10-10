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
import { AnimatePresence } from 'framer-motion'

interface ProjectsDisplayProps {}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 0.3, // this will set the time inbetween children animation
    },
  },
}
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
      <ProjectsEnumeration />
      <MainProjectWrapper>
        {projectName !== '' && (
          <SwitchResultWrapper>
            <h2>Przypisane fragmenty:</h2>
          </SwitchResultWrapper>
        )}
        <AnimatePresence>
          {fragmentsKeywordMain.length > 0 && (
            <MainProjectDetails
              variants={containerVariants}
              key={projectName}
              initial='hidden'
              animate='visible'
            >
              {fragmentsKeywordMain?.map((fragment) => (
                <ProjectDiv variants={dropUpVariants} key={Math.random()}>
                  {fragment.title}
                </ProjectDiv>
              ))}
            </MainProjectDetails>
          )}
        </AnimatePresence>
      </MainProjectWrapper>
    </SearchResultsSectionWrapper>
  )
}
export default ProjectsDisplay
