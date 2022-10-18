import styled from 'styled-components'
import { motion } from 'framer-motion'

export const OpenDivButtonWrapper = styled.div`
  width: 100%;
  height: 1px;
  display: flex;
  /* align-items: flex-end; */
  justify-content: flex-end;
`
export const OpenDivButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  /* position: relative;
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
  } */
`
export const OpenBigDivButton = styled(OpenDivButton)`
  position: relative;
  top: -2px;
  &:after {
    position: absolute;
    top: 15px;
    left: -150px;
  }
`
export const WrapperMotionDiv = styled(motion.div)`
  position: relative;
  width: 100%;
`
export const ClosingDiv = styled(motion.div)`
  width: 35%;
  border-radius: 100px;
  z-index: 10;
  background: var(--background1-main);
  color: var(--background5-main);
  display: grid;
  place-items: center center;
  &:after {
    font-weight: 700;
    content: 'Zamknij';
    text-transform: uppercase;
    position: relative;
    top: 1px;
  }
`

export const ClosingDivBig = styled(ClosingDiv)`
  position: relative;
  color: var(--background4-main);
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
  background: var(--background1-main);
  border-left: 1px solid var(--background2-main);
  border-bottom: 1px solid var(--background2-main);

  color: var(--background2-main);
  box-shadow: var(--boxShadow5);
  /* border: 1px solid var(--background1-main); */
`
export const OpenedDivBig = styled(OpenedLayoutDiv)`
  height: 80vh;
  width: 80vw;
  top: 15vh;
  left: 10vw;
  z-index: 2;
`
export const TwoColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`

export const RelativeRightSvgWrapper = styled.div`
  position: relative;
  right: -10px;
`

export const DotButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-right: 1px solid var(--background-blur1);
  border-top: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background2-blur2);
  box-shadow: var(--boxShadow1);
  font-weight: 700;
  transition: 0.3s;
  &:before {
    position: relative;
    top: -2px;
    left: ${({ left }) => (left ? '4px' : '-1px')};
    /* left: 3px; */
    content: 'e';
  }
  &:hover {
    box-shadow: none;
    border-left: 1px solid var(--background-blur1);
    border-bottom: 1px solid var(--background-blur1);
    /* background: var(--background-blur1); */
  }
  &:active {
    background: var(--background2-main);
  }
`
