import React, {
  ReactNode,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react'
import { HPopover, HPopoverItem } from './HighlightPopRemake.styled'

interface HighlightPopProps {
  children: ReactNode
}

const HighlightPopMenu: React.FC<HighlightPopProps> = ({ children }) => {
  const [xPosition, setXPosition] = useState<number | null>(null)
  const [yPosition, setYPosition] = useState<number | null>(null)
  const [selectedText, setSelectedText] = useState<string>('')
  const [showPopover, setShowPopover] = useState<boolean>(false)

  const highlight = useRef(null)

  const hidePopover = () => {
    setShowPopover(false)
  }
  // HERE
  const onMouseUp = useCallback(() => {
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

    const highlightable = highlight !== null ? highlight.current : null
    // const highlightable: null | Selection = highlight !== null ? highlight.current : null
    // Nullish Coalescing
    //  let x = foo ?? bar() return foo if it's not null or undefined otherwise calculate bar
    // “Non-null assertion operator“, basically it means that when you add the exclamation mark after a property/value, you are telling TypeScript that you are certain that value is not null or undefined.

    // @ts-ignore
    const highlightableRegion = highlightable!.querySelector('.h-popable')

    // const highlightableRegion =
    //   highlightable !== null ? highlightable.querySelector('.h-popable') : null

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
      // @ts-ignore
      (!highlightable.contains(startNode) ||
        // @ts-ignore
        !highlightable.contains(endNode))
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

    // HERE
    setXPosition(x + width / 2)
    setYPosition(y + window.scrollY - 10)
    setSelectedText(selectedText)
    setShowPopover(true)
    console.log(selectedText)
    // const { onHighlightPop = () => {} } = this.props
    // onHighlightPop(selectedText)
  }, [])

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [selectedText, onMouseUp])

  // useEffect(() => {
  // remove event listener onMouseUp
  //   if (selectedText === '' && selectedText) {
  //     window.removeEventListener('mouseup', onMouseUp)
  //   }
  // }, [onMouseUp, selectedText])

  return (
    <div ref={highlight}>
      {showPopover && (
        <HPopover
          style={{ left: `${xPosition}px`, top: `${yPosition}px` }}
          role='presentation'
          onMouseDown={(e: any) => e.preventDefault()}
        >
          <HPopoverItem role='button'>Hello</HPopoverItem>
          <HPopoverItem role='button'>Героям слава!</HPopoverItem>
          <HPopoverItem role='button'>Hello is waiting</HPopoverItem>
        </HPopover>
      )}
      {children}
    </div>
  )
}
export default HighlightPopMenu
