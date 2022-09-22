import { useAnimation } from 'framer-motion'
import React, { useRef, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { sortingKeywordMainEdit } from '../../features/preferences/preferenceSlice'
import {
  DragMenuButton,
  ProjectCard,
  ProjectMenuContainer,
  ProjectMenuWrapper,
} from './ProjectMenu.styled'

const cards = [1, 2, 3, 4, 5]

interface ProjectMenuTwoProps {}

const ProjectMenuTwo: React.FC<ProjectMenuTwoProps> = () => {
  const translateXForElement = (element: any) => {
    const transform = element.style.transform

    if (!transform || transform.indexOf('translateX(') < 0) {
      return 0
    }

    const extractTranslateX = transform.match(/translateX\((-?\d+)/)

    return extractTranslateX && extractTranslateX.length === 2
      ? parseInt(extractTranslateX[1], 10)
      : 0
  }

  const dragRef = useRef(null)
  const xPos = useRef(0)
  const animation = useAnimation()
  // function onLeftClick() {
  //   const xPos = translateXForElement(dragRef.current)
  //   const newXPosition = xPos + 600

  //   animation.start({
  //     x: newXPosition > 0 ? 0 : newXPosition,
  //   })
  // }

  // function onRightClick() {
  //   const xPos = translateXForElement(dragRef.current)
  //   const newXPosition = xPos - 600

  //   animation.start({
  //     x: newXPosition < -2000 ? -2000 : newXPosition,
  //   })
  const onLeftClick = () => {
    const newXPosition = xPos.current + 600

    animation.start({
      x: newXPosition > 0 ? 0 : newXPosition,
    })
  }
  const onRightClick = () => {
    const newXPosition = xPos.current - 600

    animation.start({
      x: newXPosition < -2000 ? -2000 : newXPosition,
    })
  }

  const onUpdate = (latest: any) => {
    xPos.current = latest.x
  }

  return (
    <ProjectMenuWrapper>
      {' '}
      <DragMenuButton position='right' onClick={onLeftClick}>
        Left
      </DragMenuButton>
      <ProjectMenuContainer
        drag='x'
        dragConstraints={{ left: -1000, right: 0 }}
        initial={false}
        onUpdate={onUpdate}
        animate={animation}
        style={{ width: 1000, x: 0, opacity: 1 }}
        ref={dragRef}
      >
        {cards?.map((keyword, index) => (
          <ProjectCard key={Math.random()}>{index + 1}</ProjectCard>
        ))}
      </ProjectMenuContainer>
      <DragMenuButton position='right' onClick={onRightClick}>
        Right
      </DragMenuButton>
    </ProjectMenuWrapper>
  )
}
export default ProjectMenuTwo
