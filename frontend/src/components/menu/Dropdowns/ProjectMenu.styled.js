import styled from 'styled-components'
import { motion } from 'framer-motion'

// export const HeroSec = styled(motion.div)``
export const ProjectMenuWrapper = styled(motion.div)`
  ${({ wide }) => (wide ? 'width: min(650px, 70vw);' : 'width: 400px;')}
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0rem 1rem 0rem 1rem;
  border-radius: 5px;
  /* ${({ wide }) =>
    wide
      ? 'background: var(--background1-main);'
      : 'background: var(--background1-main);'} */
  background: var(--background1-main);
`
export const ProjectMenuContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background: var(--background-blur1); */
  background: var(--background1-main);
  /* ${({ wide }) => wide && 'background: var(--background1-main);'}; */
  gap: 1rem;
  cursor: grab;
  max-height: 70px;
  min-height: fit-content;
  white-space: nowrap;
  /* background: red; */
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
  min-width: 135px;
  color: var(--background1-main);
  background: var(--background4-main);
  /* ${({ wide }) => wide && 'background: var(--background4-main);'};
  ${({ wide }) => wide && 'color: var(--background1-main);'}; */
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
  //todo
  min-height: 70px;

  background: linear-gradient(
    90deg,
    var(--background-blur1) 0%,
    transparent 100%
  );
  ${({ position }) =>
    position === 'left' &&
    `background: linear-gradient(
    90deg,
    transparent 0%,
    var(--background-blur1) 100%
  );`};

  ${({ position }) => position === 'left' && 'left: 85%;'};
  ${({ position, wide }) => position === 'left' && wide && 'left: 90.5%;'};
  ${({ position }) => position === 'right' && 'right: 4%;'};
  ${({ position, wide }) => position === 'right' && wide && 'right: 2.5%;'};
  z-index: 11;
`
