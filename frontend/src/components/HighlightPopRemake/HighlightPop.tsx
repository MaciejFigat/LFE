import React, { ReactNode, useState, useRef, useEffect } from 'react'
import { HPopover, HPopoverItem } from './HighlightPopRemake.styled'

interface HighlightPopProps {
  children: ReactNode
}

const HighlightPop: React.FC<HighlightPopProps> = ({ children }) => {
  const [xPosition, setXPosition] = useState<number | null>(null)
  const [yPosition, setYPosition] = useState<number | null>(null)
  const [selectedText, setSelectedText] = useState<string>('')
  const [showPopover, setShowPopover] = useState<boolean>(false)

  const highlight = useRef(null)

  return (
    <div ref={highlight}>
      {showPopover && (
        <HPopover
          style={{ left: `${xPosition}px`, top: `${yPosition}px` }}
          role='presentation'
          onMouseDown={(e: any) => e.preventDefault()}
        >
          <HPopoverItem role='button'>Слава Україні!</HPopoverItem>
          <HPopoverItem role='button'>Героям слава!</HPopoverItem>
          <HPopoverItem role='button'>Hague is waiting</HPopoverItem>
        </HPopover>
      )}
      {children}
    </div>
  )
}
export default HighlightPop
