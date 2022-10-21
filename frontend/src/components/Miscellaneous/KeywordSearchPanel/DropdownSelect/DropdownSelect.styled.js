import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Main = styled.div``
export const DropDownContainer = styled.div`
  width: 12rem;

  min-width: min-content;
  margin: 0 auto;
`

export const DropDownHeaderInside = styled(motion.div)`
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-out;
`
export const DropDownHeader = styled(motion.div)`
  cursor: pointer;
  user-select: none;
  min-width: 129px;
  min-height: 20.5px;
  /* margin: 0; */
  padding: 0.48rem 1rem 0.48rem 1rem;
  /* border-right: 1px solid var(--background2-main);
  border-top: 1px solid var(--background2-main);
  box-shadow: var(--boxShadowInset1); */

  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  box-shadow: var(--boxShadow1);
  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
  color: var(--background5-main);
  /* background: var(--background-blur1); */
  transition: all 0.1s ease-out;
  text-align: center;
  &:hover {
    transition: all 0.1s ease-out;
    color: var(--background3-main);

    border-right: 1px solid var(--background-blur1);
    border-top: 1px solid var(--background-blur1);
    border-left: 1px solid var(--background-blur1);
    border-bottom: 1px solid var(--background-blur1);
    box-shadow: var(--boxShadowInset1);
  }
  .activeButton {
    scale: 0.99;
    color: var(--background-secondary1);
    /* color: var(--background2-main); */
  }
`

export const DropDownListContainer = styled.div`
  position: absolute;
`
export const DropDownList = styled.div`
  //todo
  position: relative;
  top: -1px;
  user-select: none;
  z-index: 2;
  /* left: 10px; */
  padding: 0;
  margin: 0;
  padding-left: 1rem;
  padding-right: 0.5rem;
  background: var(--background1-main);
  /* background: var(--background-blur1); */
  /* background: var(--background-blur1); */
  /* backdrop-filter: blur(8px) saturate(180%); */
  /* -webkit-backdrop-filter: blur(8px) saturate(180%); */

  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  box-shadow: var(--boxShadow2);

  box-sizing: border-box;

  color: var(--background4-main);
  font-size: 1.1rem;
  font-weight: 500;
  min-width: fit-content;
  &:first-child {
    padding-top: 0.8rem;
  }
`
export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8rem;
  cursor: pointer;
  &:hover {
    color: var(--background3-main);
  }
`
export const HorizontalButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  min-width: 250px;
  min-height: min-content;
  align-items: flex-start;
  /* justify-content: flex-start; */
  justify-content: center;
  margin-bottom: 0;
`
export const HeaderAndCogContainer = styled(HorizontalButtonContainer)`
  min-width: 232px;
  /* background: red; */
  justify-content: space-around;
  justify-content: center;
  align-items: center;
  .active {
    /* color: var(--background3-main); */
    transition: all 0.1s ease-out;
    border-right: 1px solid var(--background-blur1);
    border-top: 1px solid var(--background-blur1);
    border-left: 1px solid var(--background-blur1);
    border-bottom: 1px solid var(--background-blur1);
    box-shadow: var(--boxShadowInset2);
  }
`
export const TitleInputMainKeyword = styled(motion.input)`
  color: var(--background4-main);
  text-align: center;
  height: 22px;
  padding: 0.4rem 0.25rem 0.4rem 0.25rem;
  margin: 0;
  line-height: normal;
  background: transparent;
  outline: 0;
  background-color: transparent;
  border: none;
  max-width: 153px;
  border-bottom: 1px solid var(--background4-main);
  &:focus {
    border: none;
    outline: 0;
  }
  font-size: inherit;
  font-family: inherit;
`
export const OptionsDropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  user-select: none;
  padding-right: 1rem;
  padding-left: 1rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 3.7rem;
  left: 10px;
  top: 15px;
  z-index: 10;
  background: var(--background1-main);
  width: 250px;

  border-radius: 5px;

  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  /* box-shadow: var(--boxShadow3); */
`
