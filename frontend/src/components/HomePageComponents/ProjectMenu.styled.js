import styled from 'styled-components'
import { motion } from 'framer-motion'

// export const HeroSec = styled(motion.div)``
export const ProjectMenuWrapper = styled(motion.div)`
  width: 400px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 5px;
  background: var(--background2-main);
`
export const ProjectMenuContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--background2-main);
  gap: 1rem;
  cursor: grab;
  height: 70px;
  min-height: fit-content;
  white-space: nowrap;
  scrollbar-width: none !important;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const ProjectCard = styled(motion.div)`
  display: grid;
  /* user-select: none; */
  place-items: center;
  height: 30px;
  padding: 0 0.5rem 0 0.5rem;
  /* width: 80px; */
  min-width: fit-content;
  background: var(--background1-main);
  border-radius: 15px;
  cursor: pointer;
  &:first-of-type {
    /* margin-left: 15rem; */
  }
  &:last-of-type {
    /* margin-right: 15rem; */
  }
`
export const DragMenuButton = styled(motion.div)`
  display: grid;
  place-items: center center;
  position: relative;
  min-width: 40px;
  background: var(--background-blur1);
  ${({ position }) => position === 'left' && 'left: 85%;'};
  ${({ position }) => position === 'right' && 'right: 4%;'};
  z-index: 11;
`
