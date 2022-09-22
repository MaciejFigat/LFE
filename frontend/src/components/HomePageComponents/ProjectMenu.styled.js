import styled from 'styled-components'
import { motion } from 'framer-motion'

// export const HeroSec = styled(motion.div)``
export const ProjectMenuWrapper = styled(motion.div)`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
  height: 100%;
  /* width: 100%; */
  width: 400px;
  overflow: hidden;
  padding: 1rem;
  display: grid;
  place-items: center center;
  background: var(--background3-main);
`
export const ProjectMenuContainer = styled(motion.div)`
  display: flex;
  background: lightblue;
  flex-direction: row;
  gap: 1rem;
  /* max-width: 100%; */

  width: 600px;
  height: 200px;
  white-space: nowrap;
  /* overflow: hidden; */
  overflow-x: scroll;
  /* perspective: 150px; */
  /* -ms-overflow-style: none; */
  scrollbar-width: none !important;
  /* ::-webkit-scrollbar {
    width: 3.3em;
  } */
  ::-webkit-scrollbar {
    display: none;
  }
`
export const ProjectCard = styled(motion.div)`
  position: relative;
  /* display: inline-block; */
  display: grid;
  /* user-select: none; */
  place-items: center;
  height: 40px;
  width: 80px;
  /* min-width: fit-content; */
  min-width: 100px;
  background: white;
  margin: 2rem 1rem;
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
  /* position: relative; */
  background: var(--background4-main);
  ${({ position }) => position === 'left' && 'left: 100px;'};
  ${({ position }) => position === 'right' && 'right: 100px;'};
  /* padding: ${({ large }) =>
    large ? '12px 25px 33px' : '10px 20px 25px'}; */
  position: sticky;
  top: 0;
  /* right: 100px; */
`
