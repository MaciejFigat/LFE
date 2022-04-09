import styled from 'styled-components'
// import { motion } from 'framer-motion'

export const ResizableDivWrapper = styled.div`
  z-index: 100;
  #Resizable {
    border: 1px solid black;
    height: 200px;
    width: 200px;
  }
  #Draggable {
    background: rgba(1, 1, 1, 0.2);
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    border-top: 1px solid black;
    cursor: col-resize;
    height: 20px;
    width: 10px;
  }
  .Block {
    display: flex;
    align-items: center;
  }
`
export const ResizableBlock = styled.div`
  display: flex;
  align-items: center;
`
