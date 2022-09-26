import styled from 'styled-components'
import { motion } from 'framer-motion'
export const SearchBarWrapper = styled.div`
  display: flex;
  align-self: center;
  color: var(--background5-main);
  z-index: 10;
  gap: 0.75rem;
  background: transparent;
  height: 30px;
  min-width: fit-content;
  min-height: fit-content;
  font-size: 1.55rem;
  font-weight: 400;
  .show {
    transition: 0.3s;
    /* opacity: 1; */
    //! here searchButton color is defined when panel is open
    color: var(--background3-main);
    /* color: red; */
  }
  .hide {
    transition: 0.2s;
    /* opacity: 0; */
    color: var(--background5-main);
  }
  @media (max-width: 420px) {
    gap: 0.25rem;
    height: 25px;
  }
`

export const SearchBarButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  /* color: var(--background3-main); */
  background: var(--background2-main);
  border: 1px solid transparent;
  border-radius: 10px;
  margin-left: 0.5rem;
  &:hover {
    /* transition: all 0.7s ease-out; */
    border: 1px solid var(--background2-main);
  }
  &:active {
    border: 1px solid var(--background3-main);
  }
  @media (max-width: 420px) {
    font-size: 0.7rem;
    padding: none;
  }
`
export const SearchBarForm = styled.form`
  display: flex;
  flex-direction: row;
`
export const SearchBarContainer = styled.div`
  display: flex;
`
export const SearchInput = styled.input`
  max-width: 100%;
  height: 100%;
  padding: 11px 13px;
  color: var(--background4-main);
  border-radius: 12px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 1rem;
  transition: all 0.3s ease-out;

  @media (max-width: 420px) {
    font-size: 0.8rem;
    padding: 5px 7px;
  }
`

export const SpinnerWrapperSearch = styled.div`
  display: grid;
  place-items: center;
  width: 50px;
`
/*//! SearchDropdown */

export const Main = styled.div`
  @media (max-width: 1020px) {
    font-size: 1.25rem;
  }
`
export const DropDownContainer = styled.div`
  min-width: min-content;
  margin: 0 auto;
`

export const DropdownIconWrapper = styled.div`
  display: grid;
  place-items: center;
`
export const DropDownHeader = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--background5-main);
  transition: all 0.3s ease-out;
  text-align: center;
  border: 1px solid var(--background1-main);
  &:hover {
    color: var(--background-secondary2);
  }
`
export const DropDownListContainer = styled.div`
  position: relative;
  left: 10px;
  top: 15px;
  z-index: 10;
  /* background: var(--background-blur1); */
  background: var(--background1-main);
  border: 1px solid var(--background5-main);
  width: 250px;
  padding: 0.5rem;
  /* backdrop-filter: blur(8px); */
  /* -webkit-backdrop-filter: blur(8px); */
  border-radius: 10px;
  @media (min-width: 1400px) {
  }
`
export const DropDownDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  gap: 0.25rem;
`
export const DropDownList = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  box-sizing: border-box;

  color: var(--background5-main);
  font-size: 1rem;
  font-weight: 400;
  min-width: fit-content;
  &:first-child {
    padding-top: 1.2rem;
  }
`
export const ListItem = styled.li`
  display: grid;
  place-items: center;
  width: 100%;
  list-style: none;
  max-width: fit-content;
  padding-bottom: 0.75rem;
  b {
    font-size: 0.75rem;
  }
`

/*//! switch */
export const SwitchSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  /* padding-left: 1.5rem; */
  margin-left: 2rem;
`
export const SwitchDivContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
`
export const SwitchDivContainerNarrow = styled(SwitchDivContainer)`
  gap: 0.15rem;
`
export const SwitchDiv = styled.div`
  /* width: 24px; */
  width: 28px;
  /* height: 15px; */
  height: 16px;
  background-color: ${({ isOn }) =>
    isOn ? 'var(--background2-main)' : 'var(--background3-main)'};
  display: flex;
  border-radius: 10px;
  padding: 1px;
  cursor: pointer;
  justify-content: ${({ isOn }) => (isOn ? 'flex-end' : 'flex-start')};
  align-items: center;
`
export const SwitchText = styled.b`
  color: ${({ isOn }) =>
    isOn ? 'var(--background5-main)' : 'var(--background3-main)'};
`
export const SwitchHandle = styled(motion.div)`
  width: 14px;
  height: 14px;
  background-color: white;
  border-radius: 12px;
  background-color: ${({ isOn }) =>
    isOn ? 'var(--background1-main)' : 'var(--background4-main)'};
`
export const SetTakeButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;
  align-items: center;
  color: var(--background-tertiary1);
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 0.7rem;
  background-color: ${({ buttonActive }) =>
    buttonActive ? 'var(--background4-main)' : 'transparent'};
  /* margin-left: 0.5rem; */
  margin: 0 auto;
  &:hover {
    /* transition: all 0.7s ease-out; */
    /* border: 1px solid var(--background-secondary2); */
    border: 1px solid;
    border-color: ${({ buttonActive }) =>
      buttonActive ? 'var(--background1-main)' : 'var(--background4-main)'};
  }
  &:active {
    border: 1px solid var(--background-secondary4);
  }
  @media (max-width: 420px) {
    font-size: 0.7rem;
    padding: none;
  }
`
