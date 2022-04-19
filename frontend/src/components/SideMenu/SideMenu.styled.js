import styled from 'styled-components'
import { motion } from 'framer-motion'
import SideMenu from './SideMenu'

export const SideMenuDataColumn = styled(motion.div)`
  width: 90%;
  position: absolute;
  top: 0;
  z-index: ${({ open }) => (open ? 0 : 2)};
`

export const SideMenuButtonDiv = styled(motion.div)`
  position: relative;
  /* position: sticky; */
  /* top: 50vh; */
  margin-bottom: 3.5rem;
  /* padding-right: 5rem; */
  top: 35px;
  right: -83%;
  z-index: 2;
`
export const SideMenuResizeWrapperUltimateWeapon = styled.div`
  position: sticky;
  top: 0;
  left: 100%;

  min-width: 200px;

  width: 40%;
  /* background: red; */
`

export const SideMenuWrapper = styled(motion.div)`
  position: sticky;
  top: 0;
  left: 80%;
  min-width: 200px;
  display: flex;
  flex-direction: row;

  /* transition: 0.3s; */

  /* ${SideMenuButtonDiv}:hover & {
    z-index: 10;
  } */
`
export const BackgroundDiv = styled(motion.div)`
  overflow: hidden;

  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  max-height: fit-content;
  min-height: 100vh;
  min-width: 100%;
  padding-right: 1rem;
  margin-right: 1.5rem;
  background: var(--background1-main);
`
export const SideMenuDiv = styled(motion.div)`
  top: 50px;
  right: 0;
  z-index: 2;
  padding: 0.5rem;
  height: calc(100vh - 50px);
  flex-direction: column;
  justify-content: center;
  min-width: fit-content;
  background: var(--background1-main);
  max-height: 100vh;
  min-height: fit-content;
  overflow: scroll;
`
export const SideMenuDivResize = styled(SideMenu)``
// todo draggable components

// export const DragDivSideMenu = styled(motion.div)`
export const DragDivSideMenu = styled.div`
  position: sticky;
  top: 0;
  /* display: ${({ open }) => (open ? `flex` : 'none')}; */
  /* ${({ open }) => (open ? `display: flex;` : 'display: none;')} */
  background: none;
  /* background: red; */
  /* border-left: 1.5px solid; */
  border-right: 12.5px solid;
  /* border-color: var(--background1-main); */
  border-color: transparent;
  /* border-color: var(--background5-main); */
  transition: 0.2s;
  &:active {
    border-color: var(--background2-main);
  }
  &:hover {
    border-color: var(--background-secondary1);
  }
  cursor: col-resize;
  height: 100vh;
  min-width: 5px;
  width: 5px;
`

export const ChildrenWrapper = styled(motion.div)`
  padding-right: 2rem;
`
