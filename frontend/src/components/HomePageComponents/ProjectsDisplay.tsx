import React, { useMemo } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { SwitchResultWrapper } from '../Miscellaneous/SearchBar/SearchBar.styled'
import { updateUserFragmentsKeywordMain } from '../../features/fragments/fragmentSlice'
// import { NavLink } from 'react-router-dom'

import {
  MainProjectDetails,
  MainProjectWrapper,
  ProjectDiv,
  ProjectsDisplayWrapper,
  SearchResultsSectionWrapper,
} from './SearchResultsDisplay.styled'
import ProjectMenuTwo from '../menu/Dropdowns/ProjectMenuTwo'

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
      <SwitchResultWrapper>
        <h2>Dostępne projekty</h2>
      </SwitchResultWrapper>
      <ProjectMenuTwo wide />
      <ProjectsDisplayWrapper>
        {' '}
        {/* {uniqueKeywords?.map((keyword) => (
          <ProjectDiv key={Math.random()}>{keyword}</ProjectDiv>
        ))} */}
      </ProjectsDisplayWrapper>
      <MainProjectWrapper>
        {' '}
        {projectName !== '' && (
          <>
            {' '}
            <SwitchResultWrapper>
              <h2>Fragmenty przypisane do projektu</h2>
            </SwitchResultWrapper>
            <ProjectDiv>{projectName}</ProjectDiv>
          </>
        )}
        {fragmentsKeywordMain.length > 0 && (
          <MainProjectDetails>
            {fragmentsKeywordMain?.map((fragment) => (
              <ProjectDiv key={Math.random()}>{fragment.title}</ProjectDiv>
            ))}
          </MainProjectDetails>
        )}
      </MainProjectWrapper>
    </SearchResultsSectionWrapper>
  )
}
export default ProjectsDisplay
