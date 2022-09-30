import React from 'react'
import { useAppSelector } from '../../app/reduxHooks'
// import { NavLink } from 'react-router-dom'
import {
  MainProjectDetails,
  MainProjectWrapper,
  ProjectDiv,
  ProjectsDisplayWrapper,
  SearchResultsSectionWrapper,
} from './SearchResultsDisplay.styled'

interface ProjectsDisplayProps {}

const ProjectsDisplay: React.FC<ProjectsDisplayProps> = () => {
  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const fragmentsKeywordMain: any[] = useAppSelector(
    (state) => state.fragment.fragmentsKeywordMain
  )
  const keywordsAll = fragments
    ?.map((fragment) => fragment.keywords?.map((keyword: string) => keyword))
    .flat()
    .filter((keywordsFlattened) => keywordsFlattened !== '')

  let uniqueKeywords = [...Array.from(new Set(keywordsAll))]
  const projectName = useAppSelector(
    (state) => state.preference.sortingKeywords.keywordMain
  )
  return (
    <SearchResultsSectionWrapper>
      {' '}
      <ProjectsDisplayWrapper>
        {' '}
        {uniqueKeywords?.map((keyword) => (
          <ProjectDiv key={Math.random()}>{keyword}</ProjectDiv>
        ))}
      </ProjectsDisplayWrapper>
      <MainProjectWrapper>
        {' '}
        <ProjectDiv>{projectName}</ProjectDiv>
        <MainProjectDetails>
          {fragmentsKeywordMain?.map((fragment) => (
            <ProjectDiv key={Math.random()}>{fragment.title}</ProjectDiv>
          ))}
        </MainProjectDetails>
      </MainProjectWrapper>
    </SearchResultsSectionWrapper>
  )
}
export default ProjectsDisplay
