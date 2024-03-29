import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

const changeZindex = keyframes`
from { z-index: -1; transform: scale(1); }
  to { z-index: 4; transform: scale(1); }
`

export const SideMenuDataColumn = styled(motion.div)`
  width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: -100vh;
  z-index: -1;
  animation: ${changeZindex} 1.09s linear;
  animation-iteration-count: 1;
  /* //?The animation-fill-mode CSS property specifies how a CSS animation should apply styles to its target before and after it is executing. */
  animation-fill-mode: forwards;
  animation: ${({ open }) => open && 'none'};
`

export const SideMenuButtonDiv = styled(motion.div)`
  position: sticky;
  display: grid;
  place-items: center;
  margin: 0;
  margin-left: 93vw;
  border-radius: 50%;
  top: 120px;
  width: 50px;
  height: 50px;
  background: var(--background3-main);
  z-index: 10;
`
export const MainWrapperResizableMenu = styled.div`
  display: grid;
  place-items: center;
  top: 0;
  width: 100%;
  /* background: lime; */
`
export const SideMenuResizeWrapperUltimateWeapon = styled.div`
  position: sticky;
  top: 0;
  left: 100%;
  min-width: 200px;
  width: 40%;
`

export const SideMenuWrapper = styled(motion.div)`
  top: 0;
  left: 80%;
  min-width: 200px;
  display: flex;
  flex-direction: row;
`
export const BackgroundDiv = styled(motion.div)`
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  max-height: fit-content;
  min-height: 100vh;
  min-width: 100%;
  background: var(--background-blur1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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
  /* overflow: scroll; */
`

export const DragDivSideMenu = styled.div`
  position: sticky;
  top: 0;
  background: none;
  border-right: 12.5px solid;
  border-color: transparent;

  transition: 0.2s;
  &:active {
    border-color: var(--background-blur2);
  }
  &:hover {
    border-color: var(--background-blur2);
  }
  cursor: col-resize;
  height: 100vh;
  min-width: 5px;
  width: 5px;
`

export const ChildrenWrapper = styled(motion.div)`
  padding-right: 2rem;
`
