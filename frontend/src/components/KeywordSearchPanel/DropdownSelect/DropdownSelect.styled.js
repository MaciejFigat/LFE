import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Main = styled.div``
export const DropDownContainer = styled.div`
  width: 12rem;
  min-width: min-content;
  margin: 0 auto;
`

export const DropDownHeader = styled(motion.div)`
  margin-bottom: 0.8em;
  cursor: pointer;
  padding: 0.4rem 1rem 0.4rem 1rem;
  /* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15); */
  font-weight: 500;
  font-size: 1.1rem;
  color: var(--background-secondary4);
  border-bottom: 1px solid var(--background-secondary4);
  /* background: var(--background1-main); */
  transition: all 0.3s ease-out;
  text-align: center;
  &:hover {
    color: var(--background-secondary2);
  }
`
export const DropDownListContainer = styled.div`
  position: absolute;
`
export const DropDownList = styled.div`
  //todo
  position: relative;
  left: 10px;
  padding: 0;
  margin: 0;
  padding-left: 1rem;
  padding-right: 0.5rem;
  /* background: var(--background2-main); */
  background: var(--background-blur11);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  border-top: 1px solid var(--background-secondary4);
  border-bottom: 1px solid var(--background-secondary4);
  box-sizing: border-box;
  color: var(--background-secondary2);
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
    color: var(--background-secondary4);
  }
`
export const HorizontalButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  min-width: 250px;
  min-height: min-content;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 0;
`
export const TitleInputMainKeyword = styled(motion.input)`
  color: var(--background-tertiary3);
  text-align: center;
  width: 100%;
  height: 36px;
  min-width: 250px;
  padding: 0;
  margin: 0;
  margin-bottom: 0.75rem;
  line-height: normal;
  background: transparent;
  outline: 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--background-secondary4);
  &:focus {
    border: none;
    outline: 0;
  }
  font-size: inherit;
  font-family: inherit;
`
