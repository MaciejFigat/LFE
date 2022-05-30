import styled, { keyframes, css } from 'styled-components'
import { motion } from 'framer-motion'
// import SideMenu from './SideMenu'

const changeZindex = keyframes`
from { z-index: 0; transform: scale(1); }
  to { z-index: 4; transform: scale(1.1); }
`
// from { z-index: 0;}
// to { z-index: 2;}
// const animation = () =>
//   css`
//     ${changeZindex} 0.3s linear;
//   `
export const SideMenuDataColumn = styled(motion.div)`
  width: 90%;
  position: absolute;
  /* position: relative; */
  top: 0;
  animation: ${changeZindex} 8.3s linear;
  animation-iteration-count: 1;
  /* //?The animation-fill-mode CSS property specifies how a CSS animation should apply styles to its target before and after it is executing. */
  animation-fill-mode: forwards;
  animation: ${({ open }) => open && 'none'};
  /* //todo this messes up the animation */
  /* z-index: ${({ open }) => (open ? 0 : 2)}; */
  /* z-index: 0; */
  /* z-index: 2; */
`

/* animation: ${animation}; */
/* animation: ${({ open }) =>
    open ? `${changeZindex} 0.3s linear;` : 'none'}; */

export const SideMenuButtonDiv = styled(motion.div)`
  position: relative;
  /* position: absolute; */
  /* position: sticky; */
  margin-bottom: 3.5rem;
  top: 35px;
  /* top: 20px; */
  width: 220px !important;
  height: 300px;
  background: red !important;
  right: -83%;
  /* right: -20px; */
  z-index: 2;
`
export const SideMenuResizeWrapperUltimateWeapon = styled.div`
  /* position: sticky !important; */
  position: sticky;
  top: 0;
  left: 100%;
  min-width: 200px;
  width: 40%;
`

export const SideMenuWrapper = styled(motion.div)`
  position: sticky;
  top: 0;
  left: 80%;
  min-width: 200px;
  display: flex;
  flex-direction: row;
`
export const BackgroundDiv = styled(motion.div)`
  overflow: hidden;

  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  max-height: fit-content;
  min-height: 100vh;
  min-width: 100%;
  padding-right: 1rem;
  margin-right: 1.5rem;
  /* background: var(--background1-main); */
  background: lime;
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
// export const SideMenuDivResize = styled(SideMenu)``
// todo draggable components

export const DragDivSideMenu = styled.div`
  position: sticky;
  top: 0;
  background: none;
  border-right: 12.5px solid;
  border-color: transparent;
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
