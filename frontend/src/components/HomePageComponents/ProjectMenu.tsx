import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { sortingKeywordMainEdit } from '../../features/preferences/preferenceSlice'
import { ProjectCard, ProjectContainer } from './ProjectMenu.styled'
interface ProjectMenuProps {}

const ProjectMenu: React.FC<ProjectMenuProps> = () => {
  const dispatch: any = useAppDispatch()
  //   const keywordMain = useAppSelector(
  //     (state) => state.preference.sortingKeywords.keywordMain
  //   )
  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const keywordsAll = fragments
    ?.map((fragment) => fragment.keywords?.map((keyword: string) => keyword))
    .flat()
    .filter((keywordsFlattened) => keywordsFlattened !== '')
  //todo .flat() flattens the arr ie. [a, b, [c, d]].flat()=>[a, b, c, d]
  let uniqueKeywords = [...Array.from(new Set(keywordsAll))]

  const chooseKeywordHelper = (value: string | null) => () => {
    dispatch(sortingKeywordMainEdit(value))
  }

  return (
    <ProjectContainer>
      {' '}
      {uniqueKeywords?.map((keyword) => (
        <ProjectCard
          variant='primaryEmpty'
          onClick={chooseKeywordHelper(keyword)}
          key={Math.random()}
        >
          {keyword}
        </ProjectCard>
      ))}
    </ProjectContainer>
  )
}
export default ProjectMenu
