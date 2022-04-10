import React, { useState } from 'react'
import { ResizableDivWrapper } from './ResizableDiv.styled'

interface ResizableDivProps {}

const ResizableDiv: React.FC<ResizableDivProps> = () => {
  const [initialPos, setInitialPos] = useState<any>(null)
  //   const [initialSize, setInitialSize] = useState<number | null | string>(null)
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
        // @ts-ignore
        // parseInt(initialSize) + parseInt(e.clientX - initialPos)
        parseInt(initialSize) + Math.floor(e.clientX - initialPos)
      }px`
    }
  }

  return (
    <ResizableDivWrapper>
      <div className='Block'>
        <div id='Resizable' />

        <div
          id='Draggable'
          draggable='true'
          onDragStart={initial}
          onDrag={resize}
        />
      </div>
    </ResizableDivWrapper>
  )
}
export default ResizableDiv
