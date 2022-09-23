import { useAnimation } from 'framer-motion'
import React, { useRef, useState } from 'react'
// import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { useAppSelector } from '../../app/reduxHooks'
// import { sortingKeywordMainEdit } from '../../features/preferences/preferenceSlice'
import SvgIcon from '../SvgIcon/SvgIcon'
import {
  DragMenuButton,
  ProjectCard,
  ProjectMenuContainer,
  ProjectMenuWrapper,
} from './ProjectMenu.styled'

// const cards = [1, 2, 3, 4, 5]

interface ProjectMenuTwoProps {}

const ProjectMenuTwo: React.FC<ProjectMenuTwoProps> = () => {
  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const keywordsAll = fragments
    ?.map((fragment) => fragment.keywords?.map((keyword: string) => keyword))
    .flat()
    .filter((keywordsFlattened) => keywordsFlattened !== '')
  //todo .flat() flattens the arr ie. [a, b, [c, d]].flat()=>[a, b, c, d]
  let uniqueKeywords = [...Array.from(new Set(keywordsAll))]
  const dragRef = useRef(null)
  const xPos = useRef(0)
  const animation = useAnimation()

  const onLeftClick = () => {
    const newXPosition = xPos.current + 400

    animation.start({
      x: newXPosition > 0 ? 0 : newXPosition,
      // x: newXPosition,
    })
    console.log(xPos.current)
  }
  // x: 0,
  const onRightClick = () => {
    const newXPosition = xPos.current - 400

    animation.start({
      // x: newXPosition < -1500 ? '-100%' : newXPosition,
      x: newXPosition < -uniqueKeywords.length * 120 - 300 ? 0 : newXPosition,
      // x: newXPosition,
    })
    console.log(xPos.current)
  }

  // x: '-80%',
  const onUpdate = (latest: any) => {
    xPos.current = latest.x
  }
  // todo card animation part
  const [selectedCard, setSelectedCard] = useState(null)
  // const cardRefs = useRef(new Array())
  const cardVariants = {
    selected: {
      // rotateY: 360,
      scale: 1.2,
      transition: {
        duration: 0.35,
        type: 'spring',
        default: { ease: 'linear' },
      },
      zIndex: 10,
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    },
    notSelected: (i: any) => ({
      // rotateY: i * 15,
      scale: 1 - Math.abs(i * 0.12),
      // scale: 1,
      // x: i ? i * 40 : 0,
      opacity: 1 - Math.abs(i * 0.15),
      zIndex: 10 - Math.abs(i),
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
      transition: { duration: 0.85, type: 'spring' },
    }),
  }
  const selectCard = (card: any) => {
    setSelectedCard(selectedCard === card ? null : card)
  }
  const handleCardMouseUp = (e: any, card: any) => {
    selectCard(card)
  }
  return (
    <ProjectMenuWrapper>
      {' '}
      <DragMenuButton position='right' onClick={onLeftClick}>
        <SvgIcon noContent variant='arrowLeft' />
      </DragMenuButton>{' '}
      <DragMenuButton position='right' onClick={onRightClick}>
        <SvgIcon noContent variant='arrowRight' />
      </DragMenuButton>
      <ProjectMenuContainer
        drag='x'
        dragConstraints={{ left: -uniqueKeywords.length * 120, right: 0 }}
        dragTransition={{ bounceStiffness: 1100, bounceDamping: 10 }}
        transition={{ type: 'linear', stiffness: 100 }}
        dragElastic={0.5}
        initial={false}
        onUpdate={onUpdate}
        animate={animation}
        style={{ x: 0, opacity: 1 }}
        ref={dragRef}
      >
        {' '}
        {/* {cards?.map((keyword, index) => ( */}
        {uniqueKeywords?.map((keyword) => (
          <ProjectCard
            key={Math.random()}
            onMouseUp={(e: any) => handleCardMouseUp(e, keyword)}
            variants={cardVariants}
            // initial='notSelected'
            // initial='notSelected'
            animate={selectedCard === keyword ? 'selected' : 'notSelected'}
            // animate={selectedCard === keyword && 'selected'}
            custom={selectedCard! ? selectedCard! - keyword : 0}
          >
            {keyword}
          </ProjectCard>
        ))}
      </ProjectMenuContainer>
      {/* <DragMenuButton position='left' onClick={onRightClick}>
        <SvgIcon noContent variant='arrowRight' />
      </DragMenuButton> */}
    </ProjectMenuWrapper>
  )
}
export default ProjectMenuTwo
