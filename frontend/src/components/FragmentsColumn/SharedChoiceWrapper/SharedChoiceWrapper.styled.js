import styled from 'styled-components'
import { motion } from 'framer-motion'

export const WrapperWindow = styled.div`
  min-width: 180px;
  width: 100%;
  height: 260px;
  border-radius: 10px;
  background: var(--background-blur1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
export const ChoiceNav = styled.nav`
  /* padding: 5px 5px 0; */
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid var(--background-secondary2);
`

export const MainChoiceContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 58px; */
  /* flex-grow: 1; */
  /* user-select: none; */
`
export const MainChoiceBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  /* background: var(--background-blur2); */
`
export const ChoiceList = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  .selected {
    background: var(--background-blur2);
  }
`
export const ChoiceItem = styled.li`
  list-style: none;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  padding: 10px 15px;
  position: relative;
  cursor: pointer;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-width: 0;
  position: relative;
  user-select: none;
  padding: 0;
  margin: 0;
  .underOn {
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
    /* height: 1px; */
    /* background: var(--background-secondary2); */
  }
`

export const ChoiceUnderline = styled(motion.div)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--background-secondary3);
`
