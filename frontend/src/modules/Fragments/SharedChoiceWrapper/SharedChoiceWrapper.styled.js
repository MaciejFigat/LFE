import styled from 'styled-components'
import { motion } from 'framer-motion'

export const WrapperWindow = styled.div`
  margin: 2.5rem 1rem 1.5rem 1rem;
  height: 260px;
  border-radius: 10px;
  width: 380px;
  border: 1px solid var(--background-blur2);
  display: flex;
  flex-direction: column;
  color: var(--background5-main);
`
export const ChoiceNav = styled.nav`
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid var(--background-blur2);
`

export const MainChoiceContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
export const MainChoiceBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
`
export const ChoiceList = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  min-width: 312px;
  padding: 0;
  margin: 0;
  .selected {
    /* background: var(--background-blur1); */
  }
`
export const ChoiceItem = styled.li`
  list-style: none;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  padding: 5px 3px;
  position: relative;
  cursor: pointer;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-width: 0;
  position: relative;
  user-select: none;
  /* padding: 0; */
  margin: 0;
  /* .underOn {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--background-secondary3);
  }
  .underOff {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
  } */
`

export const ChoiceUnderline = styled(motion.div)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--background-secondary1),
    transparent
  );
`
