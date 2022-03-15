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

  const hidePopover = () => {
    setShowPopover(false)
  }
  // HERE
  const onMouseUp = () => {
    const selection: Selection | null = window.getSelection()

    const selectedText = selection !== null ? selection.toString().trim() : null

    if (!selectedText) {
      hidePopover()
      return
    }

    const selectionRange = selection !== null ? selection.getRangeAt(0) : null

    const startNode =
      selectionRange !== null ? selectionRange.startContainer.parentNode : null
    const endNode =
      selectionRange !== null ? selectionRange.endContainer.parentNode : null

    const highlightable = highlight.current
    const highlightableRegion =
      highlightable !== null ? highlightable.querySelector('.h-popable') : null

    if (highlightableRegion) {
      if (
        !highlightableRegion.contains(startNode) ||
        !highlightableRegion.contains(endNode)
      ) {
        hidePopover()
        return
      }
    } else if (
      !highlightable.contains(startNode) ||
      !highlightable.contains(endNode)
    ) {
      hidePopover()
      return
    }

    if (!startNode.isSameNode(endNode)) {
      hidePopover()
      return
    }

    const { x, y, width } = selectionRange.getBoundingClientRect()
    if (!width) {
      hidePopover()
      return
    }

    
    // HERE
    setXPosition(x + width / 2),
    setYPosition(y + window.scrollY - 10),
    setSelectedText(selectedText),
      showPopover: true
    })

    // const { onHighlightPop = () => {} } = this.props
    // onHighlightPop(selectedText)
  }
  // to HERE
  useEffect(() => {
    // onMouseUp on mount
    // remove event listener onMouseUp
  }, [])

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
