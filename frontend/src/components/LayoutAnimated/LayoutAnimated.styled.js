import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AnimationContainer = styled.div`
  height: 100%;
  /* //todo here  */
  width: 50%;
  display: grid;
  place-items: end center;
  /* overflow: hidden; */
  position: relative;
  /* z-index: 0; */
  /* background: var(--background4-main); */
`
export const LayoutDivWrapper = styled.div`
  display: grid;
  grid-template-columns: 330px;
  place-items: center center;
  margin-bottom: 2rem;
  padding: 1rem;
  gap: 1.5rem;
  background: var(--background-blur1);
  border-radius: 15px;
`
export const ClosedLayoutDiv = styled(motion.div)`
  height: 5rem;
  /* width: 5rem; */
  width: 100%;
  border-radius: 8px;
  display: grid;
  place-items: center center;
  text-align: center;
  cursor: pointer;
  background: var(--background2-main);
  overflow: hidden;
`
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
export const WrapperMotionDiv = styled(motion.div)``
export const OpenedLayoutDiv = styled(motion.div)`
  height: 100%;
  width: calc(100% + 200px);
  /* //todo here  */
  position: absolute;
  top: -10vh;
  left: -10vw;
  padding: 3rem;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 8px;
  background: var(--background2-main);
  border: 1px solid var(--background4-main);
`
export const OpenedDivBig = styled(OpenedLayoutDiv)`
  height: 80vh;
  width: 80vw;
  /* top: 20vh; */
  top: 15vh;
  /* left: 20vw; */
  left: 10vw;
`

export const ClosingDiv = styled(motion.div)`
  width: 35%;
  height: 3px;
  border-radius: 100px;
  position: absolute;
  /* top: 97.5%; */
  top: -22.5%;
  z-index: 10;
  background: var(--background5-main);

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
  top: 10vh;
  /* left: 20vw; */
  left: 35vw;
`
