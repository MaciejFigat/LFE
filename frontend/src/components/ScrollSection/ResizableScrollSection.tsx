import React, { ReactNode, useState } from 'react'

import {
  SectionColumnResize,
  ScrollSectionRow,
  ScrollSec,
  DragDiv,
  SectionColumnScrollResize,
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
  const [initialPos, setInitialPos] = useState<any>(null)
  const [initialSize, setInitialSize] = useState<any>(null)

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
        />
        <SectionColumnScrollResize width={widthBig} id='SectionWide'>
          {wideSection}{' '}
        </SectionColumnScrollResize>
      </ScrollSectionRow>
    </ScrollSec>
  )
}
export default ResizableScrollSection
