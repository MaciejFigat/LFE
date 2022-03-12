import React, { ReactNode, useState, useRef, useEffect } from 'react'
import { HPopover, HPopoverItem } from './HighlightPopRemake.styled'


interface HighlightPopProps {

    children: ReactNode,
}


const HighlightPop: React.FC<HighlightPopProps> = ({ }) => {


    const [xPosition, setXPosition] = useState<number | null>(null)
    const [yPosition, setYPosition] = useState<number | null>(null)
    const [selectedText, setSelectedText] = useState<string>('')

    return (<><div ref= { this.highlight } >
        { showPopover && (
            <HPopover
            style={ { left: `${x}px`, top: `${y}px` } }
    role = 'presentation'
    onMouseDown = {(e) => e.preventDefault()}
          >
    <HPopoverItem role='button' > Слава Україні! < /HPopoverItem>
        < HPopoverItem role = 'button' > Героям слава! < /HPopoverItem>
            < HPopoverItem role = 'button' > Hague is waiting < /HPopoverItem>
                < /HPopover>
        )}
{ children }
</div></ >)
}
export default HighlightPop