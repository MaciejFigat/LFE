import styled from 'styled-components'

export const ResizableDivWrapper = styled.div`
  z-index: 100;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  #Resizable {
    border: 1px solid black;
    height: 200px;
    width: 200px;
    min-width: 200px;
    width: 40%;
  }
  #ResizableSecondary {
    border: 1px solid black;
    height: 200px;
    min-width: 200px;

    flex-grow: 1;
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
