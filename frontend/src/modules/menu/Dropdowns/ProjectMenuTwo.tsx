import { useAnimation } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { sortingKeywordMainEdit } from '../../../features/preferences/preferenceSlice'
import { RelativeWrapper } from '../../../styles/misc.styled'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import {
  DragMenuButton,
  ProjectCard,
  ProjectMenuContainer,
  ProjectMenuWrapper
} from './ProjectMenu.styled'

interface ProjectMenuTwoProps {
  wide?: boolean
}

const ProjectMenuTwo: React.FC<ProjectMenuTwoProps> = ({ wide }) => {
  const dispatch: any = useAppDispatch()

  const fragments: any[] = useAppSelector(state => state.fragment.userFragments)
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
  const [selectedCard, setSelectedCard] = useState(null)

  const cardVariants = {
    selected: {
      scale: 1.15,
      transition: {
        duration: 0.35,
        type: 'spring',
        default: { ease: 'linear' }
      },
      zIndex: 10,
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
    },
    notSelected: (i: any) => ({
      scale: 1 - Math.abs(i * 0.12),
      opacity: 1 - Math.abs(i * 0.15),
      zIndex: 10 - Math.abs(i),
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
      transition: { duration: 0.85, type: 'spring' }
    })
  }
  const selectCard = (card: any) => {
    setSelectedCard(selectedCard === card ? null : card)
  }
  const handleCardMouseUp = (card: any) => {
    selectCard(card)
    dispatch(sortingKeywordMainEdit(card))
  }

  return (
    <ProjectMenuWrapper wide={wide}>
      {' '}
      <DragMenuButton position='right' wide={wide} onClick={onLeftClick}>
        <RelativeWrapper top='3px' left='0px'>
          <SvgIcon noContent variant='arrowLeft' />
        </RelativeWrapper>
      </DragMenuButton>{' '}
      <DragMenuButton position='left' wide={wide} onClick={onRightClick}>
        <RelativeWrapper top='3px' left='0px'>
          <SvgIcon noContent variant='arrowRight' />
        </RelativeWrapper>
      </DragMenuButton>
      <ProjectMenuContainer
        wide={wide}
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
          <ProjectCard
            key={Math.random()}
            onMouseUp={() => handleCardMouseUp(keyword)}
            variants={cardVariants}
            wide={wide}
            nimate={selectedCard === keyword ? 'selected' : 'notSelected'}
            custom={selectedCard! ? selectedCard! - keyword : 0}
          >
            {keyword.substring(0, 15)}
          </ProjectCard>
        ))}
      </ProjectMenuContainer>
    </ProjectMenuWrapper>
  )
}
export default ProjectMenuTwo
