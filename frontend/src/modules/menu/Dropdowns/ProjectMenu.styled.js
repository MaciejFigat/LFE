import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ProjectMenuWrapper = styled(motion.div)`
  ${({ $wide }) => ($wide ? 'width: min(650px, 70vw);' : 'width: 400px;')}
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0rem 1rem 0rem 1rem;
  border-radius: 5px;

  background: var(--background1-main);
  @media (max-width: 520px) {
    width: 220px;
    min-width: 0;
  }
`
export const ProjectPaginationWrapper = styled(ProjectMenuWrapper)`
  width: ${({ $narrow }) => ($narrow ? '335px' : '380px')};
  min-height: 50px;
  border: 1px solid var(--background-blur2);
`
export const ProjectMenuContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--background1-main);
  gap: 1rem;
  cursor: grab;
  max-height: 70px;
  min-height: fit-content;
  white-space: nowrap;
  scrollbar-width: none !important;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const ProjectCard = styled(motion.div)`
  display: grid;
  user-select: none;
  place-items: center;
  height: 30px;
  padding: 0 0.5rem 0 0.5rem;
  border: 1px solid var(--background4-main);

  min-width: 135px;
  color: var(--background1-main);
  background: var(--background4-main);

  border-radius: 15px;
  cursor: pointer;
`

export const DragMenuButton = styled(motion.div)`
  display: grid;
  place-items: center center;
  position: relative;
  min-width: 40px;
  //todo
  min-height: 70px;
  svg {
    opacity: 0.7;
    font-size: 1.1rem;
  }
  background: linear-gradient(
    90deg,
    var(--background-blur1) 0%,
    transparent 100%
  );
  ${({ $position }) =>
    $position === 'left' &&
    `background: linear-gradient(
    90deg,
    transparent 0%,
    var(--background-blur1) 100%
  );`};

  ${({ $position }) => $position === 'left' && 'left: 89%;'};
  ${({ $position, $wide }) => $position === 'left' && $wide && 'left: 90.5%;'};
  ${({ $position }) => $position === 'right' && 'right: 5.5%;'};
  ${({ $position, $wide }) => $position === 'right' && $wide && 'right: 3.5%;'};
  z-index: 11;

  @media (max-width: 520px) {
    ${({ $position }) => $position === 'left' && 'left: 75%;'};
    ${({ $position }) => $position === 'right' && 'right: 8%;'};
  }
`
export const DragPaginationButton = styled(DragMenuButton)`
  left: ${({ $left }) => ($left ? $left : '0')};

  svg {
    font-size: 1rem;
  }
`
