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
    /* color: var(--success1); */
    color: ${({ optionsOpen }) =>
      optionsOpen ? 'var(--background-secondary2)' : 'inherit'};
  }
`
export const DropDownHeader = styled(motion.div)`
  cursor: pointer;
  user-select: none;
  min-width: ${({ wide }) => (wide ? '220px' : '157px')};
  /* max-width: 157px; */
  max-width: ${({ wide }) => (wide ? '220px' : '157px')};
  height: 40px;
  /* min-height: 20.5px; */
  /* margin: 0; */
  padding: 0.48rem 0.5rem 0.48rem 1rem;

  /* border-right: 1px solid var(--background2-main);
  border-top: 1px solid var(--background2-main);
  box-shadow: var(--boxShadowInset1); */

  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  /* border-radius: ${({ wide }) => (wide ? '10px' : '15px 0px 0px 15px')}; */
  /* border-radius: 0; */
  font-weight: 500;
  font-size: 1rem;
  color: var(--background4-main);
  /* background: var(--background-blur1); */
  transition: all 0.1s ease-out;
  text-align: center;

  &:hover {
    box-shadow: var(--boxShadowInset1);
    transition: all 0.1s ease-out;
    color: var(--background-secondary1);

    border-right: 1px solid var(--background-blur1);
    border-top: 1px solid var(--background-blur1);
    border-left: 1px solid var(--background-blur1);
    border-bottom: 1px solid var(--background-blur1);
  }
  &:active {
    box-shadow: var(--boxShadowInset2);
  }
  .activeButton {
    /* scale: 0.99; */
    color: var(--background-secondary1);
    /* color: var(--background2-main); */
  }
  @media screen and (max-width: 620px) {
    font-size: 0.9rem;
    min-width: 100px;

    padding: 0.5rem 0;
  }
`

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 13;
`
export const DropDownList = styled.div`
  //todo
  position: relative;
  top: 10px;
  user-select: none;
  z-index: 13;
  left: -10px;
  padding: 0;
  margin: 0;
  border-radius: 10px;
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
  /* margin-bottom: 0.8rem; */
  padding: 0.4rem 0;
  cursor: pointer;
  &:hover {
    color: var(--background-secondary1);
    background: var(--background-blur1);
  }
`
export const ListItemHighlight = styled(ListItem)`
  /* background: var(--background-blur2); */
  /* padding: 0.5rem; */
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
  flex-direction: row;
  /* justify-content: space-around; */
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
  height: 40px;
  /* padding: 0.4rem 0.25rem 0.4rem 0.25rem; */
  padding: 0.8rem 0.5rem 0.8rem 0.5rem;
  margin: 0;
  line-height: normal;
  background: transparent;
  outline: 0;
  background-color: transparent;
  border: none;

  min-width: ${({ wide }) => (wide ? '220px' : '157px')};
  max-width: ${({ wide }) => (wide ? '220px' : '157px')};
  border: 1px solid var(--background-blur2);
  &:focus {
    border-color: var(--background-secondary1);
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
  height: 3rem;
  left: -10px;
  top: 10px;
  /* z-index: 10; */
  background: var(--background1-main);
  width: 250px;

  border-radius: 15px;

  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  /* box-shadow: var(--boxShadow3); */
`
