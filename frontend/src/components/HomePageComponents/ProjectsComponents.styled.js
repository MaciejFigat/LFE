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

  /* background: var(--background-blur1); */
  /* border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  border-bottom: 1px solid transparent; */
  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  border-radius: 10px;
  border-color: ${({ selected }) =>
    selected ? 'var(--background-secondary1)' : 'var(--background2-main)'};
  /* box-shadow: var(--boxShadowNone); */
  /* box-shadow: var(--boxShadowClay3); */
  transition: 0.2s;

  color: ${({ selected }) =>
    selected ? 'var(--background-secondary1)' : 'var(--background4-main)'};
  box-shadow: ${({ selected }) =>
    selected ? 'var(--boxShadowClay3)' : 'var(--boxShadowClay2)'};
  /* box-shadow: ${({ selected }) =>
    selected ? 'var(--boxShadowClay3)' : 'var(--boxShadowClay1)'}; */
  &:hover {
    opacity: 0.9;
    /* box-shadow: ${({ selected }) =>
      selected ? 'var(--boxShadowClay2)' : 'var(--boxShadowClay1)'}; */
    /* box-shadow: var(--boxShadowInset1); */

    color: var(--background-secondary1);
  }
  &:active {
    opacity: 0.8;
    border-color: var(--background-secondary1);
    /* box-shadow: var(--boxShadowInset1); */
    box-shadow: var(--boxShadowClay3);
    color: var(--background-secondary1);
    /* box-shadow: var(--boxShadowClay2); */
  }
  @media screen and (max-width: 880px) {
    min-width: 137px;
    width: fit-content;
    opacity: 0;
    font-size: 0.85rem;
    padding: 0 0.25rem 0 0.25rem;
  }
  @media screen and (max-width: 350px) {
    min-width: 110px;
    width: 110px;
    opacity: 0;
    font-size: 0.75rem;
    padding: 0 0.15rem 0 0.15rem;
    overflow: hidden;
  }
`

export const ProjectH2 = styled(motion.h2)`
  display: grid;
  place-items: center;
  padding-bottom: 0.5rem;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: var(--boxShadowClay3);
  color: var(--background4-main);
  user-select: none;
  &:hover {
    transition: 0.3s;
    color: var(--background3-main);
  }
`
export const ProjectH2NoHover = styled(ProjectH2)`
  font-size: 1.2rem;
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

  @media screen and (max-width: 880px) {
    /* grid-template-columns: repeat(2, 1fr); */
    gap: 0.75rem;
  }
  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 470px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 470px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
