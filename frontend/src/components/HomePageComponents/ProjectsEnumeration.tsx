import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { sortingKeywordMainEdit } from '../../features/preferences/preferenceSlice'
import {
  ProjectCardHome,
  ProjectMenuContainerHome,
} from './ProjectsComponents.styled'

interface ProjectsEnumerationProps {}

const ProjectsEnumeration: React.FC<ProjectsEnumerationProps> = () => {
  const dispatch: any = useAppDispatch()

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const keywordsAll = fragments
    ?.map((fragment) => fragment.keywords?.map((keyword: string) => keyword))
    .flat()
    .filter((keywordsFlattened) => keywordsFlattened !== '')
  //todo .flat() flattens the arr ie. [a, b, [c, d]].flat()=>[a, b, c, d]
  let uniqueKeywords = [...Array.from(new Set(keywordsAll))]
  const [selectedCard, setSelectedCard] = useState(null)

  const cardVariants = {
    selected: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
      opacity: 1,
      //   transition: {
      //     duration: 2,
      //     type: 'spring',
      //     default: { ease: 'linear' },
      //   },

      zIndex: 10,
    },
    notSelected: () => ({
      scale: 1,
      //   transition: { duration: 0.2 },
      //   transition: {
      //     duration: 0.15,
      //     type: 'spring',
      //     default: { ease: 'linear' },
      //   },
      opacity: 0.8,
      //   zIndex: 10 - Math.abs(i),
    }),
  }
  const selectCard = (card: any) => {
    setSelectedCard(selectedCard === card ? null : card)
  }
  const handleCardMouseUp = (card: any) => {
    selectCard(card)
    dispatch(sortingKeywordMainEdit(card))
  }

  return (
    <>
      {' '}
      <h2>Wybierz projekt:</h2>
      <ProjectMenuContainerHome>
        {' '}
        {uniqueKeywords?.map((keyword) => (
          <ProjectCardHome
            initial={{ opacity: 0.8, scale: 1 }}
            key={Math.random()}
            onClick={() => handleCardMouseUp(keyword)}
            variants={cardVariants}
            animate={selectedCard === keyword ? 'selected' : 'notSelected'}
            // custom={selectedCard! ? selectedCard! - keyword : 0}
          >
            {keyword.substring(0, 20)}
          </ProjectCardHome>
        ))}
      </ProjectMenuContainerHome>
    </>
  )
}
export default ProjectsEnumeration
