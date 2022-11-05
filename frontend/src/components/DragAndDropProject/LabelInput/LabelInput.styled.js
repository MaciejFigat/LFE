import styled from 'styled-components'
import { motion } from 'framer-motion'

export const TitleAnimated = styled(motion.div)`
  display: flex;
  min-height: max-content;
  flex-direction: row;
  align-items: center;
  word-break: break-all;
  justify-content: center;
  width: 100%;
  min-height: 30px;
  min-width: 250px;
  /* font-weight: 400; */
  @media (max-width: 1020px) {
    min-width: 100px;
  }
  /* color: var(--background-secondary2); */
  transition: all 0.3s ease-out;
  &:hover {
    color: var(--background-secondary2);
  }
  &:active {
    color: var(--background-secondary4);
  }
`
export const ListTitle = styled(motion.h2)`
  display: grid;
  place-items: center;
  margin: 0;

  word-break: break-all;
  margin-left: 0.5rem;
  font-size: 1.1rem;
  @media (max-width: 740px) {
    font-size: 1rem;
    margin-left: 0rem;
  }
`
export const TitleInput = styled(motion.input)`
  color: var(--background-secondary2);
  text-align: center;
  width: 60%;
  /* min-width: 250px; */
  padding: 0;
  margin: 0;
  line-height: normal;
  background: transparent;
  outline: 0;
  background-color: transparent;
  border: none;
  &:focus {
    border: none;
    outline: 0;
  }
  font-size: inherit;
  font-family: inherit;
`
export const HorizontalButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 250px;
  min-height: min-content;
  /* align-items: flex-start; */
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 0;
`
export const AlignCenterContainer = styled.div`
  display: flex;
  padding: 1.25rem;
  /* box-shadow: var(--boxShadowClay2); */
  /* border-radius: 20px; */
`
