import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ProjectCardHome = styled(motion.div)`
  display: grid;
  user-select: none;
  place-items: center;
  height: 50px;
  padding: 0 0.5rem 0 0.5rem;
  width: 185px;
  opacity: 0;
  font-size: 1.1rem;
  min-width: fit-content;
  color: var(--background4-main);
  border: 1px solid var(--background2-main);
  /* background: var(--background4-main); */
  box-shadow: var(--background2-main) 0px 3px 4px -1px,
    var(--background2-main) 0px 2px 4px -1px;
  border-radius: 15px;
  cursor: pointer;
`

export const ProjectMenuContainerHome = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: var(--background1-main);
  gap: 1.25rem;
  cursor: grab;
  white-space: nowrap;
  /* background: red; */

  margin-top: 1rem;
  margin-bottom: 2rem;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 940px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
