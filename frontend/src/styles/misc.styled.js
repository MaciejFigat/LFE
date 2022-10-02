import styled from 'styled-components'
import { motion } from 'framer-motion'

export const OpenDivButtonWrapper = styled.div`
  width: 100%;
  height: 1px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`
export const OpenDivButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  top: 9px;
  background: var(--background4-main);
  transition: all 0.2s ease-in;
  &:after {
    opacity: 0;
    min-width: 200% !important;
    transition: all 0.2s ease-in;
    font-size: 0.75rem;
    content: 'otwórz';
    color: var(--background4-main);
  }
  &:hover {
    transition: all 0.2s ease-in;
    &:after {
      opacity: 1;
    }
  }
`
export const OpenBigDivButton = styled(OpenDivButton)`
  &:after {
    position: absolute;
    top: 3px;
    left: -50px;
  }
`
export const WrapperMotionDiv = styled(motion.div)`
  position: relative;
  width: 100%;
`
export const ClosingDiv = styled(motion.div)`
  width: 35%;
  height: 3px;
  border-radius: 100px;
  top: -22.5%;
  z-index: 10;
  background: var(--background1-main);
  color: var(--background5-main);
  display: grid;
  place-items: center center;
  &:after {
    content: 'Zamknij';
    text-transform: uppercase;
    position: relative;
    top: -20px;
  }
`

export const ClosingDivBig = styled(ClosingDiv)`
  position: relative;
  color: var(--background1-main);
  top: -0.5rem;
  left: 35%;
`
export const OpenedLayoutDiv = styled(motion.div)`
  height: 100%;
  width: calc(100% + 200px);
  /* //todo here  */
  position: absolute;
  top: -10vh;
  left: -10vw;
  padding: 2rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 8px;
  background: var(--background4-main);
  border: 1px solid var(--background4-main);
`
export const OpenedDivBig = styled(OpenedLayoutDiv)`
  height: 80vh;
  width: 80vw;
  top: 15vh;
  left: 10vw;
  z-index: 2;
`
