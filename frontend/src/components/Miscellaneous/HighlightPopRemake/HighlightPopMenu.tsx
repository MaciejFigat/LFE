import React, {
  ReactNode,
  useState,
  useRef,
  useEffect,
  useCallback,
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
  heroYPosition,
}) => {
  const heroYValue: number = useAppSelector(
    (state) => state.preference.yHeroPosition
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
    // @ts-ignore
    // const selectedText = window.getSelection().toString().trim()

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

    // if (startNode && !startNode.isSameNode(endNode)) {
    //   hidePopover()
    //   return
    // }

    const { x, y, width } = selectionRange!.getBoundingClientRect()
    if (!width) {
      hidePopover()
      return
    }

    setXPosition(x + width / 2)
    // setYPosition(y + window.scrollY - 70)

    if (heroYPosition) setYPosition(y + heroYValue - 180)
    else setYPosition(y + window.scrollY - 70)
    setSelectedText(selectedText)
    setShowPopover(true)
  }, [heroYPosition, heroYValue])

  // useEffect(() => {
  //   const testPosition = () => {
  //     console.log(scrollTopPosition ?? 'don`t look at me, i`m a test')
  //     if (yScrollPosition) setYScrollPosition(scrollTopPosition)
  //     console.log(yScrollPosition)
  //   }
  //   window.addEventListener('mouseup', testPosition)
  //   return () => {
  //     window.removeEventListener('mouseup', testPosition)
  //   }
  // }, [scrollTopPosition, yScrollPosition])

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
          <HPopoverItem role='button'>
            <AddFragment highlightedText={selectedText} />
          </HPopoverItem>

          {/* <HPopoverItem role='button'>Storage</HPopoverItem> */}
        </HPopover>
      )}
      {children}
    </div>
  )
}
export default HighlightPopMenu
