import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled.div`
  margin: 1rem;
`
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
export const DropDownButtons = styled(motion.div)`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 1.5rem;
`
export const DropDownSvgRounded = styled.div`
  border: 1px solid var(--background-blur2);
  border-left: none;
  height: 40px;
  -webkit-border-radius: 10px 10px 5px 5px;
  -moz-border-radius: 10px 10px 5px 5px;
  border-radius: 0px 50% 50% 0px;
  transition: all 0.1s ease-out;
  box-shadow: ${({ optionsOpen }) =>
    optionsOpen ? 'var(--boxShadowInset1)' : 'none'};
  svg {
    color: ${({ optionsOpen }) =>
      optionsOpen ? 'var(--background-secondary1)' : 'inherit'};
  }
  &:hover {
    box-shadow: var(--boxShadowInset1);
  }
  &:active {
    box-shadow: var(--boxShadowInset1);
  }
`
export const DropDownSvgRoundedLeft = styled(DropDownSvgRounded)`
  border-radius: 50% 0px 0px 50%;
  border-left: 1px solid var(--background-blur2);
  border-right: none;
  svg {
    font-size: 1rem !important;
    color: ${({ optionsOpen }) =>
      optionsOpen ? 'var(--background-secondary2)' : 'inherit'};
  }
`
export const DropDownHeader = styled(motion.div)`
  display: grid;
  place-items: center center;
  cursor: pointer;
  user-select: none;

  min-width: ${({ wide }) => (wide ? '220px' : '157px')};
  max-width: ${({ wide }) => (wide ? '220px' : '157px')};
  height: 40px;
  padding-top: 0.5rem;
  border: 1px solid var(--background-blur2);
  font-weight: 500;
  font-size: 1rem;
  color: var(--background4-main);
  transition: all 0.1s ease-out;
  text-align: center;

  &:hover {
    box-shadow: var(--boxShadowInset1);
    transition: all 0.1s ease-out;
    color: var(--background-secondary1);
    border-right: 1px solid var(--background-blur2);
    border-top: 1px solid var(--background-blur2);
    border-left: 1px solid var(--background-blur1);
    border-bottom: 1px solid var(--background-blur1);
  }
  &:active {
    box-shadow: var(--boxShadowInset2);
  }
  .activeButton {
    color: var(--background-secondary1);
  }
`

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 13;
`
export const DropDownList = styled.div`
  position: relative;
  user-select: none;
  z-index: 13;
  padding: 0;
  margin: 0;
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 0.5rem;
  background: var(--background1-main);
  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  box-shadow: var(--boxShadow1);

  box-sizing: border-box;

  color: var(--background4-main);
  font-size: 1.1rem;
  font-weight: 500;
  min-width: fit-content;
  &:first-child {
    padding-top: 0.8rem;
  }
`
export const DropDownListGrid = styled(DropDownList)`
  top: 160px;
  left: -179px;
`
export const ListItem = styled.li`
  list-style: none;
  padding: 0.4rem 0;
  cursor: pointer;
  &:hover {
    color: var(--background-secondary1);
    background: var(--background-blur1);
  }
`
export const ListItemHighlight = styled(ListItem)`
  color: var(--background-secondary2);
  font-weight: 700;
  &:hover {
    color: var(--background-secondary1);
    background: var(--background-blur1);
  }
`
export const HorizontalButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  min-width: 250px;
  min-height: min-content;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 0;
`
export const HeaderAndCogContainer = styled(HorizontalButtonContainer)`
  min-width: 232px;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  &:hover {
    svg {
      color: var(--background-secondary1);
    }
  }
  svg {
    font-size: 1.25rem;
  }
  .active {
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
  height: 40px;
  margin: 0;
  line-height: normal;
  outline: 0;
  background-color: transparent;
  border: none;
  min-width: ${({ wide }) => (wide ? '220px' : '157px')};
  max-width: ${({ wide }) => (wide ? '220px' : '157px')};
  border: 1px solid var(--background-secondary1);
  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur2);

  &:focus {
    border-bottom: 1px solid var(--background-secondary2);
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
  height: 3rem;
  background: var(--background1-main);
  width: 250px;
  border-radius: 15px;
  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
`
