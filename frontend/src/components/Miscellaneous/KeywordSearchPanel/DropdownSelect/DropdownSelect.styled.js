import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Main = styled.div``
export const DropDownContainer = styled.div`
  width: 12rem;
  min-width: min-content;
  margin: 0 auto;
`

export const DropDownHeader = styled(motion.div)`
  /* margin-bottom: 0.8em; */
  cursor: pointer;
  /* min-width: 80%; */
  max-width: 80%;
  /* margin: 0; */
  padding: 0.4rem 1rem 0.4rem 1rem;
  /* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15); */
  font-weight: 500;
  font-size: 1.1rem;
  color: var(--background5-main);
  border-bottom: 1px solid var(--background5-main);
  /* background: var(--background1-main); */
  transition: all 0.3s ease-out;
  text-align: center;
  &:hover {
    color: var(--background3-main);
  }
`
export const DropDownListContainer = styled.div`
  position: absolute;
`
export const DropDownList = styled.div`
  //todo
  position: relative;
  z-index: 2;
  /* left: 10px; */
  top: -1px;
  padding: 0;
  margin: 0;
  padding-left: 1rem;
  padding-right: 0.5rem;
  /* background: var(--background2-main); */
  background: var(--background-blur1);
  /* background: var(--background-blur1); */
  backdrop-filter: blur(8px) saturate(180%);
  -webkit-backdrop-filter: blur(8px) saturate(180%);
  /* background-color: rgba(240, 229, 207, 0.75); */

  /* border: 1px solid rgba(255, 255, 255, 0.125); */

  border-top: 1px solid var(--background5-main);
  border-bottom: 1px solid var(--background5-main);
  box-sizing: border-box;
  color: var(--background5-main);
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
  min-width: 280px;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`
export const TitleInputMainKeyword = styled(motion.input)`
  color: var(--background4-main);
  text-align: center;
  height: 22px;
  padding: 0.4rem 1rem 0.4rem 1rem;
  margin: 0;
  line-height: normal;
  background: transparent;
  outline: 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--background3-main);
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
  padding-right: 1rem;
  padding-left: 1rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 3.3rem;
  left: 10px;
  top: 15px;
  z-index: 10;
  background: var(--background2-main);
  width: 250px;
  border: 1px solid var(--background4-main);

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
`
