import React, { useState } from 'react'
import { ResizableDivWrapper } from './ResizableDiv.styled'

interface ResizableDivProps {}

const ResizableDiv: React.FC<ResizableDivProps> = () => {
  const [initialPos, setInitialPos] = useState<any>(null)
  const [initialSize, setInitialSize] = useState<any>(null)

  const initial = (e: any) => {
    let resizable = document.getElementById('Resizable')

    setInitialPos(e.clientX)

    if (resizable !== null) {
      setInitialSize(resizable.offsetWidth)
    }
  }

  const resize = (e: any) => {
    let resizable = document.getElementById('Resizable')

    if (resizable !== null) {
      resizable.style.width = `${
        // parseInt(initialSize) + Math.floor(e.clientX - initialPos)
        parseInt(initialSize) + Math.floor(e.clientX - initialPos)
      }px`
    }
  }

  return (
    <ResizableDivWrapper>
      <div className='Block' id='ResizableWrapper'>
        <div id='Resizable' />{' '}
        <div
          id='Draggable'
          draggable='true'
          onDragStart={initial}
          onDrag={resize}
        />
        <div id='ResizableSecondary' />
      </div>
    </ResizableDivWrapper>
  )
}
export default ResizableDiv
