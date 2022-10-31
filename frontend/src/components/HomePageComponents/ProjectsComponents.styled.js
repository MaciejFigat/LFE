import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ProjectCardHome = styled(motion.div)`
  position: relative;
  display: grid;
  user-select: none;
  place-items: center;
  height: 50px;
  padding: 0 0.5rem 0 0.5rem;
  width: 185px;
  opacity: 0;
  font-size: 1.1rem;
  font-weight: 500;
  min-width: fit-content;

  /* border: 1px solid var(--background2-main); */
  /* background: var(--background-blur1); */
  border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);
  border-radius: 5px;
  /* border-top: ${({ selected }) =>
    selected
      ? '1px solid var(--background-blur1)'
      : '1px solid var(--background-blur2)'};

  border-right: ${({ selected }) =>
    selected
      ? '1px solid var(--background-blur1)'
      : '1px solid var(--background-blur2)'};

  border-left: ${({ selected }) =>
    selected
      ? '1px solid var(--background-blur2)'
      : '1px solid var(--background-blur1)'};
  border-bottom: ${({ selected }) =>
    selected
      ? '1px solid var(--background-blur2)'
      : '1px solid var(--background-blur1)'}; */

  /* box-shadow: ${({ selected }) =>
    selected ? 'var(--boxShadow1)' : 'var(--boxShadow2)'}; */
  color: ${({ selected }) =>
    selected ? 'var(--background-secondary1)' : 'var(--background4-main)'};

  /* transition: 0.3s; */
  cursor: pointer;
  /* ${({ selected }) =>
    selected
      ? 'background: var(--background-blur1);'
      : 'background: var(--background1-main);'} */
  /* ${({ selected }) => (selected ? ' scale: 1.4;' : 'scale: 1;')} */
  box-shadow: var(--boxShadowNone);
  transition: 0.2s;

  /* box-shadow: ${({ selected }) =>
    selected ? 'var(--boxShadowInset1)' : 'var(--boxShadowNone)'}; */
  &:hover {
    opacity: 0.9;
    box-shadow: ${({ selected }) => (selected ? 'var(--boxShadowNone)' : ' ')};
    /* box-shadow: var(--boxShadowInset1); */
    color: var(--background-secondary1);
    border-top: 1px solid var(--background-blur2);
    border-right: 1px solid var(--background-blur2);
    border-left: 1px solid var(--background-blur1);
    border-bottom: 1px solid var(--background-blur1);
    /* color: var(--background-secondary1); */
  }
  &:active {
    opacity: 0.8;
    box-shadow: var(--boxShadowInset2);
  }
`

// export const ProjectBorderHighlight = styled(motion.div)`
//   position: relative;
//   bottom: -5px;
//   border-radius: 5px;
//   left: 0;
//   right: 0;
//   height: 5px;
//   background: var(--background4-main);
// `
export const ProjectH2 = styled(motion.h2)`
  /* border-bottom: 1px solid var(--background2-main); */
  display: grid;
  place-items: center;
  padding-bottom: 0.5rem;
  color: var(--background4-main);
  user-select: none;
  &:hover {
    transition: 0.3s;
    color: var(--background3-main);
  }
`
export const ProjectH2NoHover = styled(ProjectH2)`
  &:hover {
    color: var(--background4-main);
  }
`
export const ProjectMenuContainerHome = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* background: var(--background1-main); */
  gap: 1.25rem;
  cursor: grab;
  white-space: nowrap;
  /* margin-top: 1rem; */
  margin-bottom: 1rem;

  @media screen and (max-width: 940px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
