import { useAnimation } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { sortingKeywordMainEdit } from '../../../features/preferences/preferenceSlice'
import { RelativeWrapper } from '../../../styles/misc.styled'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import {
  DragMenuButton,
  ProjectMenuContainer,
  ProjectMenuWrapper
} from './ProjectMenu.styled'
import { AppDispatch } from '../../../app/store'
import ProjectCardComponent from './ProjectCardComponent'

interface ProjectMenuTwoProps {
  wide?: boolean
}

const ProjectMenuTwo: React.FC<ProjectMenuTwoProps> = ({ wide }) => {
  const dispatch: AppDispatch = useAppDispatch()

  const fragments: any[] = useAppSelector(state => state.fragment.userFragments)
  const sortingKeyword: string = useAppSelector(
    state => state.preference.sortingKeywords.keywordMain
  )
  const [selectedCard, setSelectedCard] = useState<string | null>(
    sortingKeyword
  )

  const keywordsAll = fragments
    ?.map(fragment => fragment.keywords?.map((keyword: string) => keyword))
    .flat()
    .filter(keywordsFlattened => keywordsFlattened !== '')
  //todo .flat() flattens the arr ie. [a, b, [c, d]].flat()=>[a, b, c, d]
  let uniqueKeywords = [...Array.from(new Set(keywordsAll))]

  const dragRef = useRef(null)
  const xPos = useRef(0)
  const animation = useAnimation()

  const onLeftClick = () => {
    const newXPosition = xPos.current + 400

    animation.start({
      x: newXPosition > 0 ? 0 : newXPosition
    })
  }

  const onRightClick = () => {
    const newXPosition = xPos.current - 400

    animation.start({
      x: newXPosition < -uniqueKeywords.length * 140 - 300 ? 0 : newXPosition
    })
  }

  const onUpdate = (latest: any) => {
    xPos.current = latest.x
  }
  // todo card animation part

  const selectCard = (card: string) => {
    setSelectedCard(selectedCard === card ? null : card)
  }
  const handleCardMouseUp = (card: string) => {
    selectCard(card)
    dispatch(sortingKeywordMainEdit(card))
  }

  return (
    <ProjectMenuWrapper $wide={wide}>
      {' '}
      <DragMenuButton $position='right' $wide={wide} onClick={onLeftClick}>
        <RelativeWrapper $top='3px' $left='0px'>
          <SvgIcon noContent variant='arrowLeft' />
        </RelativeWrapper>
      </DragMenuButton>{' '}
      <DragMenuButton $position='left' $wide={wide} onClick={onRightClick}>
        <RelativeWrapper $top='3px' $left='0px'>
          <SvgIcon noContent variant='arrowRight' />
        </RelativeWrapper>
      </DragMenuButton>
      <ProjectMenuContainer
        $wide={wide}
        drag='x'
        dragConstraints={{ left: -uniqueKeywords.length * 155, right: 0 }}
        dragTransition={{ bounceStiffness: 1100, bounceDamping: 110 }}
        transition={{ type: 'linear', stiffness: 100 }}
        dragElastic={0.5}
        initial={false}
        onUpdate={onUpdate}
        animate={animation}
        style={{ x: 0, opacity: 1 }}
        ref={dragRef}
      >
        {' '}
        <>Wybierz projekt:</>
        {uniqueKeywords?.map(keyword => (
          <ProjectCardComponent
            key={keyword}
            selected={selectedCard === keyword}
            keyword={keyword}
            handleCardMouseUp={handleCardMouseUp}
          />
        ))}
      </ProjectMenuContainer>
    </ProjectMenuWrapper>
  )
}
export default ProjectMenuTwo
