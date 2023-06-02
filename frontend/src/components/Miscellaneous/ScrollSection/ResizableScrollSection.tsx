import React, { ReactNode, useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import {
  preferredNarrowWidthSaved,
  preferredWidthSaved
} from '../../../features/preferences/preferenceSlice'

import {
  SectionColumnResize,
  ScrollSectionRow,
  ScrollSec,
  DragDiv,
  SectionColumnScrollResize,
  DragButton
} from './ScrollSection.styled'

interface ResizableScrollSectionProps {
  wideSection?: ReactNode
  narrowSection?: ReactNode
  transparent?: boolean
  narrowOption?: boolean
  topMargin?: string
}

const ResizableScrollSection: React.FC<ResizableScrollSectionProps> = ({
  wideSection,
  narrowSection,
  narrowOption,
  topMargin
}) => {
  const dispatch: any = useAppDispatch()
  const widthNumber = useAppSelector(state => state.preference.width)
  const widthNarrow = useAppSelector(state => state.preference.widthNarrow)

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
  const saveWidthHandler = (e: any) => {
    let resizable = document.getElementById('SectionWide')
    if (resizable !== null && narrowOption) {
      dispatch(
        preferredNarrowWidthSaved(
          parseInt(initialSize) + Math.floor(e.clientX - initialPos)
        )
      )
    } else if (resizable !== null && !narrowOption) {
      dispatch(
        preferredWidthSaved(
          parseInt(initialSize) + Math.floor(e.clientX - initialPos)
        )
      )
    }
  }
  useEffect(() => {
    let resizable = document.getElementById('SectionWide')
    if (widthNumber > 700 && resizable !== null && !narrowOption) {
      resizable.style.width = `${widthNumber}px`
    } else if (widthNarrow > 500 && resizable !== null && narrowOption) {
      resizable.style.width = `${widthNarrow}px`
    } else if (widthNarrow < 500 && resizable !== null) {
      resizable.style.width = `${500}px`
    }
  }, [dispatch, widthNumber, narrowOption, widthNarrow])

  return (
    <ScrollSec topMargin={topMargin}>
      <ScrollSectionRow imgStart>
        <SectionColumnResize>{narrowSection}</SectionColumnResize>

        <DragDiv draggable='true' onDragStart={initial} onDrag={resize}>
          {' '}
          <DragButton draggable='true' onDragEnd={saveWidthHandler} />
        </DragDiv>
        <SectionColumnScrollResize
          width={`${widthNumber}px`}
          animate={narrowOption ? `${widthNarrow}px` : `${widthNumber}px`}
          transition={{ type: 'inertia' }}
          widthNarrow={widthNarrow}
          narrowOption={narrowOption}
          id='SectionWide'
        >
          {wideSection}{' '}
        </SectionColumnScrollResize>
      </ScrollSectionRow>
    </ScrollSec>
  )
}
export default ResizableScrollSection
