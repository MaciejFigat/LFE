import React, { useRef, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { sortingKeywordMainEdit } from '../../features/preferences/preferenceSlice'
import {
  ProjectCard,
  ProjectMenuContainer,
  ProjectMenuWrapper,
} from './ProjectMenu.styled'
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

  //* framer-motion animations Beginning
  const [selectedCard, setSelectedCard] = useState(null)

  const cardVariants = {
    selected: {
      rotateY: 180,
      scale: 1.1,
      transition: { duration: 0.35 },
      zIndex: 10,
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    },
    notSelected: (i: any) => ({
      rotateY: i * 15,
      scale: 1 - Math.abs(i * 0.15),
      x: i ? i * 50 : 0,
      opacity: 1 - Math.abs(i * 0.15),
      zIndex: 10 - Math.abs(i),
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
      transition: { duration: 0.35 },
    }),
  }

  const [{ startX, startScrollLeft, isDragging }, setDragStart] = useState({
    startX: 0,
    startScrollLeft: 0,
    isDragging: false,
  })
  const containerRef = useRef<HTMLDivElement>()
  const cardRefs = useRef(new Array())
  useEffect(() => {
    if (containerRef.current?.scrollLeft) {
      const { scrollWidth, clientWidth } = containerRef.current ?? {
        scrollWidth: 0,
        clientWidth: 0,
      }
      const halfScroll = (scrollWidth - clientWidth) / 2
      containerRef.current!.scrollLeft = halfScroll
    }
  }, [containerRef.current])

  const handleMouseDown = (e: any) => {
    if (startX! && containerRef) {
      setDragStart({
        startX: e.pageX - containerRef.current!.offsetLeft,
        startScrollLeft: containerRef.current!.scrollLeft,
        isDragging: true,
      })
    }
  }
  const handleMouseMove = (e: any) => {
    if (!isDragging || selectedCard) return
    const x = e.pageX - containerRef.current!.offsetLeft
    const walk = x - startX
    containerRef.current!.scrollLeft = startScrollLeft - walk
  }
  const selectCard = (card: any) => {
    setSelectedCard(selectedCard ? null : card)

    if (card && !selectedCard && cardRefs.current[card - 1]) {
      cardRefs.current[card - 1].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }
  const handleCardMouseUp = (e: any, card: any) => {
    if (isDragging && containerRef && startX) {
      const x = e.pageX - containerRef.current!.offsetLeft
      const walk = x - startX
      if (Math.abs(walk) < 5) selectCard(card)
    } else selectCard(card)
  }
  //* framer-motion animations END

  const chooseKeywordHelper = (value: string | null) => () => {
    dispatch(sortingKeywordMainEdit(value))
  }

  return (
    <ProjectMenuWrapper
      onMouseDown={handleMouseDown}
      onMouseUp={() => setDragStart((prev) => ({ ...prev, isDragging: false }))}
      onMouseMove={handleMouseMove}
    >
      <ProjectMenuContainer ref={containerRef}>
        {' '}
        {uniqueKeywords?.map((keyword) => (
          <ProjectCard
            variant='primaryEmpty'
            onClick={chooseKeywordHelper(keyword)}
            key={Math.random()}
            ref={(el: any) => cardRefs.current.push(el)}
            onMouseUp={(e: any) => handleCardMouseUp(e, keyword)}
            variants={cardVariants}
            animate={selectedCard === keyword ? 'selected' : 'notSelected'}
            // custom={selectedCard ? selectedCard - keyword : 0}
          >
            {keyword}
          </ProjectCard>
        ))}
      </ProjectMenuContainer>
    </ProjectMenuWrapper>
  )
}
export default ProjectMenu
