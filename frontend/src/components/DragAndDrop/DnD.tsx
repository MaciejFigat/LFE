import React from 'react'
import {
  AppBar,
  AppBarTitle,
  LayoutHeader,
  LayoutWrapper,
} from './DragAndDrop.styled'
import DragDropContainer from './DragDropContainer'
interface DnDProps {}

const DnD: React.FC<DnDProps> = () => {
  return (
    <LayoutWrapper>
      <LayoutHeader>
        <AppBar>
          <AppBarTitle>All the fine things</AppBarTitle>
        </AppBar>
      </LayoutHeader>
      <DragDropContainer />
    </LayoutWrapper>
  )
}
export default DnD
