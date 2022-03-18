import React, {
  ReactNode,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react'
import CopyText from './CopyText/CopyText'
import { HPopover, HPopoverItem } from './HighlightPopRemake.styled'

interface HighlightPopProps {
  children: ReactNode
}

const HighlightPopMenu: React.FC<HighlightPopProps> = ({ children }) => {
  const [xPosition, setXPosition] = useState<number | null>(null)
  const [yPosition, setYPosition] = useState<number | null>(null)
  const [selectedText, setSelectedText] = useState<string>('')
  const [showPopover, setShowPopover] = useState<boolean>(false)

  const highlight = useRef(null as HTMLDivElement | null)

  const hidePopover = () => {
    setShowPopover(false)
  }

  const onMouseUp = useCallback(() => {
    const selection: Selection | null = window.getSelection()
    const selectedText = selection!.toString().trim()

    if (!selectedText) {
      hidePopover()
      return
    }
    // Non-null assertion operator selection! - I am telling TS that this property/value is not null or undefined
    const selectionRange = selection!.getRangeAt(0)
    const startNode = selectionRange!.startContainer.parentNode
    const endNode = selectionRange!.endContainer.parentNode
    const highlightable = highlight!.current

    const highlightableRegion = highlightable!.querySelector('.h-popable')

    if (highlightableRegion) {
      if (
        !highlightableRegion.contains(startNode) ||
        !highlightableRegion.contains(endNode)
      ) {
        hidePopover()
        return
      }
    } else if (
      highlightable &&
      (!highlightable.contains(startNode) || !highlightable.contains(endNode))
    ) {
      hidePopover()
      return
    }

    if (startNode && !startNode.isSameNode(endNode)) {
      hidePopover()
      return
    }

    const { x, y, width } = selectionRange!.getBoundingClientRect()
    if (!width) {
      hidePopover()
      return
    }

    setXPosition(x + width / 2)
    setYPosition(y + window.scrollY - 10)
    setSelectedText(selectedText)
    setShowPopover(true)
    console.log(selectedText)
  }, [])

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [selectedText, onMouseUp])

  return (
    <div ref={highlight}>
      {showPopover && (
        <HPopover
          style={{ left: `${xPosition}px`, top: `${yPosition}px` }}
          role='presentation'
          onMouseDown={(e: any) => e.preventDefault()}
        >
          <HPopoverItem role='button'>
            <CopyText highlightedText={selectedText} />
          </HPopoverItem>
          <HPopoverItem role='button'>Save</HPopoverItem>
          <HPopoverItem role='button'>Storage</HPopoverItem>
        </HPopover>
      )}
      {children}
    </div>
  )
}
export default HighlightPopMenu
