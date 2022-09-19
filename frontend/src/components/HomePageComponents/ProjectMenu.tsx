import React, { useRef, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { sortingKeywordMainEdit } from '../../features/preferences/preferenceSlice'
import {
  ProjectCard,
  ProjectMenuContainer,
  ProjectMenuWrapper,
} from './ProjectMenu.styled'

const cards = [1, 2, 3, 4, 5]

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
      // rotateY: 180,
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

  // startX: undefined,
  // startScrollLeft: undefined,
  const [{ startX, startScrollLeft, isDragging }, setDragStart] = useState({
    startX: 0,
    startScrollLeft: 0,
    isDragging: false,
  })
  const containerRef = useRef<HTMLDivElement>()
  const cardRefs = useRef(new Array())
  // useEffect(() => {
  //   if (containerRef.current?.scrollLeft) {
  //     const { scrollWidth, clientWidth } = containerRef.current ?? {
  //       scrollWidth: 0,
  //       clientWidth: 0,
  //     }
  //     const halfScroll = (scrollWidth - clientWidth) / 2
  //     containerRef.current!.scrollLeft = halfScroll
  //   }
  // }, [selectedCard])
  // }, [containerRef.current])
  // }, [])

  const handleMouseDown = (e: any) => {
    // if (startX && containerRef && startScrollLeft) {
    setDragStart({
      // startScrollLeft: containerRef.current!.scrollLeft,
      startX: e.pageX - containerRef.current!.offsetLeft!,
      startScrollLeft: containerRef.current!.scrollLeft,
      isDragging: true,
    })
    // }
  }
  const handleMouseUpContainer = (e: any) => {
    setDragStart({
      // startScrollLeft: containerRef.current!.scrollLeft,
      startX: e.pageX - containerRef.current!.offsetLeft!,
      startScrollLeft: containerRef.current!.scrollLeft,
      isDragging: false,
    })
  }
  const handleMouseMove = (e: any) => {
    if (!isDragging || selectedCard) return
    const x = e.pageX - containerRef.current!.offsetLeft
    if (startX && startScrollLeft) {
      const walk = x - startX

      containerRef.current!.scrollLeft = startScrollLeft - walk
    }
  }
  const selectCard = (card: any) => {
    setSelectedCard(selectedCard ? null : card)

    // if (card && !selectedCard && cardRefs.current[card - 1]) {
    if (card && !selectedCard && cardRefs.current[card]) {
      // cardRefs.current[card - 1].scrollIntoView({
      cardRefs.current[card].scrollIntoView({
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
      // onMouseUp={() => setDragStart((prev) => ({ ...prev, isDragging: false }))}
      onMouseUp={handleMouseUpContainer}
      onMouseMove={handleMouseMove}
    >
      <ProjectMenuContainer ref={containerRef}>
        {cards?.map((keyword, index) => (
          // {uniqueKeywords?.map((keyword, index) => (
          <ProjectCard
            // onClick={chooseKeywordHelper(keyword)}
            // onMouseUp={(e: any) => handleCardMouseUp(e, keyword)}
            // animate={selectedCard === keyword ? 'selected' : 'notSelected'}
            // custom={selectedCard! ? selectedCard! - keyword : 0}
            key={Math.random()}
            // ref={(el: any) => cardRefs.current.push(el)}
            // onMouseUp={(e: any) => handleCardMouseUp(e, index)}
            // variants={cardVariants}
            // animate={selectedCard === index ? 'selected' : 'notSelected'}
            // custom={selectedCard! ? selectedCard! - index : 0}
            onMouseUp={(e: any) => handleCardMouseUp(e, keyword)}
            variants={cardVariants}
            animate={selectedCard === keyword ? 'selected' : 'notSelected'}
            custom={selectedCard! ? selectedCard! - keyword : 0}
          >
            Test {keyword}
          </ProjectCard>
        ))}
      </ProjectMenuContainer>
    </ProjectMenuWrapper>
  )
}
export default ProjectMenu
