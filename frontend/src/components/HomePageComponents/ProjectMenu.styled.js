import styled from 'styled-components'
import { motion } from 'framer-motion'

// export const HeroSec = styled(motion.div)``
export const ProjectMenuWrapper = styled(motion.div)`
  /* height: 40px; */
  width: 400px;
  /* //todo */
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 1rem;

  background: var(--background2-main);
`
export const ProjectMenuContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  /* padding: 0 14rem 0 10rem; */
  background: var(--background2-main);
  gap: 1rem;
  cursor: grab;
  /* width: 600px; */
  /* width: 'fit-content'; */
  /* height: 200px; */
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
  height: 40px;
  padding: 0 1rem 0 1rem;
  /* width: 80px; */
  min-width: fit-content;
  /* min-width: 100px; */
  background: var(--background3-main);
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
  display: grid;
  place-items: center center;
  position: relative;
  width: 2rem;
  /* font-size: 3rem !important; */
  /* position: sticky; */
  /* background: var(--background4-main); */
  background: var(--background-blur1);
  ${({ position }) => position === 'left' && 'right: -92%;'};
  ${({ position }) => position === 'right' && 'right: 4%;'};

  z-index: 11;
`
