import React, { Component, createRef } from 'react'
import { HPopover, HPopoverItem } from './HighlightPopRemake.styled'

class HighlightPop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopover: false,
      x: 0,
      y: 0,
      selectedText: '',
    }

    this.highlight = createRef()
  }
  // I will need state for showPopover: boolean
  // x: number
  // y: number
  // selectedText: string

  componentDidMount() {
    window.addEventListener('mouseup', this.onMouseUp)
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp)
  }

  hidePopover = () => {
    this.setState({ showPopover: false })
  }

  onMouseUp = () => {
    const selection = window.getSelection()
    const selectedText = selection.toString().trim()

    if (!selectedText) {
      this.hidePopover()
      return
    }

    const selectionRange = selection.getRangeAt(0)

    const startNode = selectionRange.startContainer.parentNode
    const endNode = selectionRange.endContainer.parentNode

    const highlightable = this.highlight.current
    const highlightableRegion = highlightable.querySelector('.h-popable')

    if (highlightableRegion) {
      if (
        !highlightableRegion.contains(startNode) ||
        !highlightableRegion.contains(endNode)
      ) {
        this.hidePopover()
        return
      }
    } else if (
      !highlightable.contains(startNode) ||
      !highlightable.contains(endNode)
    ) {
      this.hidePopover()
      return
    }

    if (!startNode.isSameNode(endNode)) {
      this.hidePopover()
      return
    }

    const { x, y, width } = selectionRange.getBoundingClientRect()
    if (!width) {
      this.hidePopover()
      return
    }

    this.setState({
      x: x + width / 2,
      y: y + window.scrollY - 10,
      selectedText,
      showPopover: true,
    })

    const { onHighlightPop = () => {} } = this.props
    onHighlightPop(selectedText)
  }

  render() {
    const { showPopover, x, y } = this.state
    const { children } = this.props

    return (
      <div ref={this.highlight}>
        {showPopover && (
          <HPopover
            style={{ left: `${x}px`, top: `${y}px` }}
            role='presentation'
            onMouseDown={(e) => e.preventDefault()}
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
}

HighlightPop.defaultProps = {
  onHighlightComment: null,
  onExitHighlight: null,
  popoverItems: null,
  children: null,
}

export default HighlightPop
