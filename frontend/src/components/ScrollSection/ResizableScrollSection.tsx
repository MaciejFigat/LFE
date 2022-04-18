import React, { ReactNode, useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { preferredWidthSaved } from '../../features/preferences/preferenceSlice'

import {
  SectionColumnResize,
  ScrollSectionRow,
  ScrollSec,
  DragDiv,
  SectionColumnScrollResize,
  DragButton,
} from './ScrollSection.styled'

interface ResizableScrollSectionProps {
  wideSection?: ReactNode
  narrowSection?: ReactNode
  widthSmall?: string
  widthBig?: string
  transparent?: boolean
}

const ResizableScrollSection: React.FC<ResizableScrollSectionProps> = ({
  wideSection,
  narrowSection,
  widthSmall,
  widthBig,
}) => {
  const dispatch: any = useAppDispatch()
  const width = useAppSelector((state) => state.preference.width)

  const [initialPos, setInitialPos] = useState<any>(null)
  const [initialSize, setInitialSize] = useState<any>(null)

  // let resizable = document.getElementById('SectionWide')
  //  Todo test which function needs it again so as to remain without bugs

  const initial = (e: any) => {
    let resizable = document.getElementById('SectionWide')

    setInitialPos(e.clientX)

    if (resizable !== null) {
      setInitialSize(resizable.offsetWidth)
    }
  }

  const resize = (e: any) => {
    let resizable = document.getElementById('SectionWide')

    if (resizable !== null) {
      resizable.style.width = `${
        parseInt(initialSize) + Math.floor(e.clientX - initialPos)
      }px`
    }
  }
  const saveWidthHandler = () => {
    let resizable = document.getElementById('SectionWide')
    if (resizable !== null) {
      dispatch(preferredWidthSaved(resizable.style.width))
    }
  }
  useEffect(() => {
    let resizable = document.getElementById('SectionWide')
    if (width !== '' && resizable !== null) {
      resizable.style.width = width
    }
  }, [dispatch, width])

  return (
    <ScrollSec>
      <ScrollSectionRow imgStart>
        <SectionColumnResize width={widthSmall}>
          {narrowSection}
        </SectionColumnResize>

        <DragDiv
          id='Draggable'
          draggable='true'
          onDragStart={initial}
          onDrag={resize}
        >
          {' '}
          <DragButton draggable='true' onDragEnd={saveWidthHandler} />
        </DragDiv>
        <SectionColumnScrollResize width={widthBig} id='SectionWide'>
          {wideSection}{' '}
        </SectionColumnScrollResize>
      </ScrollSectionRow>
    </ScrollSec>
  )
}
export default ResizableScrollSection
