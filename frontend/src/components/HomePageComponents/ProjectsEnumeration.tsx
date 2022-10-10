import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { sortingKeywordMainEdit } from '../../features/preferences/preferenceSlice'
import {
  ProjectCardHome,
  ProjectH2,
  ProjectMenuContainerHome,
} from './ProjectsComponents.styled'

interface ProjectsEnumerationProps {}

const ProjectsEnumeration: React.FC<ProjectsEnumerationProps> = () => {
  const dispatch: any = useAppDispatch()

  const keywordMain = useAppSelector(
    (state) => state.preference.sortingKeywords.keywordMain
  )

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const keywordsAll = fragments
    ?.map((fragment) => fragment.keywords?.map((keyword: string) => keyword))
    .flat()
    .filter((keywordsFlattened) => keywordsFlattened !== '')
  //todo .flat() flattens the arr ie. [a, b, [c, d]].flat()=>[a, b, c, d]
  let uniqueKeywords = [...Array.from(new Set(keywordsAll))]

  const handleCardMouseUp = (card: any) => {
    dispatch(sortingKeywordMainEdit(card))
  }

  return (
    <>
      {' '}
      <AnimatePresence>
        {keywordMain !== '' && (
          <NavLink to='/storage'>
            <ProjectH2
              key={keywordMain}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {keywordMain}
            </ProjectH2>
          </NavLink>
        )}
        {keywordMain === '' && (
          <ProjectH2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Wybierz projekt:
          </ProjectH2>
        )}
      </AnimatePresence>
      <ProjectMenuContainerHome>
        {uniqueKeywords
          // ?.filter((keyword) => keyword !== keywordMain)
          .map((keyword: string) => (
            <>
              <ProjectCardHome
                initial={{ opacity: 0.8, scale: 1 }}
                key={Math.random()}
                onMouseUp={() => handleCardMouseUp(keyword)}
                animate={{
                  opacity: keywordMain === keyword ? 1 : 0.8,
                  scale: keywordMain === keyword ? 1.1 : 1,
                  transition: {
                    duration: 0.3,
                  },
                }}
                selected={keywordMain === keyword ? true : false}
              >
                {keyword.substring(0, 20)}
              </ProjectCardHome>
            </>
          ))}
      </ProjectMenuContainerHome>
    </>
  )
}
export default ProjectsEnumeration
