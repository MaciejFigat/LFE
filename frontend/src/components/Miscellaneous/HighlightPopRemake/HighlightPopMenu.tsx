import React, {
  ReactNode,
  useState,
  useRef,
  useEffect,
  useCallback
} from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import CopyText from './CopyText/CopyText'
import { HPopover, HPopoverItem } from './HighlightPopRemake.styled'
import AddFragment from './CopyText/AddFragment'
interface HighlightPopProps {
  children: ReactNode

  heroYPosition?: boolean
}

const HighlightPopMenu: React.FC<HighlightPopProps> = ({
  children,
  heroYPosition
}) => {
  const heroYValue: number = useAppSelector(
    state => state.preference.yHeroPosition
  )
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

    const { x, y, width } = selectionRange!.getBoundingClientRect()
    if (!width) {
      hidePopover()
      return
    }

    setXPosition(x + width / 2)

    if (heroYPosition) setYPosition(y + heroYValue - 180)
    else setYPosition(y + window.scrollY - 70)
    setSelectedText(selectedText)
    setShowPopover(true)
  }, [heroYPosition, heroYValue])

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
          onMouseDown={(e: React.MouseEvent<HTMLDivElement>) =>
            e.preventDefault()
          }
        >
          <HPopoverItem role='button'>
            <CopyText highlightedText={selectedText} />
          </HPopoverItem>
          <HPopoverItem role='button'>
            <AddFragment highlightedText={selectedText} />
          </HPopoverItem>
        </HPopover>
      )}
      {children}
    </div>
  )
}
export default HighlightPopMenu
