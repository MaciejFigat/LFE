import styled from 'styled-components'

export const SearchBarWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-self: center;
  color: var(--background1-main);
  z-index: 10;
  gap: 0.75rem;
  /* background: var(--background-secondary2); */
  /* background: var(--background1-main); */
  background: transparent;
  height: 30px;
  min-width: fit-content;
  min-height: fit-content;
  /* color: var(--background1-main); */
  font-size: 1.55rem;
  font-weight: 400;
  .show {
    transition: 0.3s;
    /* opacity: 1; */
    //! here searchButton color is defined when panel is open
    color: var(--background-neon9);
  }
  .hide {
    transition: 0.2s;
    /* opacity: 0; */
    color: var(--background-neon11);
  }
  @media (max-width: 420px) {
    gap: 0.25rem;
    height: 25px;
  }
`

export const SearchHideButton = styled.button`
  /* background: var(--background-secondary2); */
  display: grid;
  place-items: center;
  width: 30px;
  background: none;
  color: var(--background5-main);
  padding: 0.25rem;
  /* margin-right: 0.45rem; */
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;
  align-items: center;
  @media (max-width: 420px) {
    padding: 0.15rem;
  }
`
export const SearchBarButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;
  align-items: center;
  /* color: var(--background-secondary2); */
  color: var(--background-neon5);
  border: 1px solid transparent;
  border-radius: 10px;
  margin-left: 0.5rem;
  &:hover {
    /* transition: all 0.7s ease-out; */
    border: 1px solid var(--background-secondary2);
  }
  &:active {
    border: 1px solid var(--background-secondary4);
  }
  @media (max-width: 420px) {
    font-size: 0.7rem;
    padding: none;
  }
`
export const SearchBarForm = styled.form`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  /* justify-items: center; */
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
/* export const SearchBarWrapper = styled.div` */
export const SearchAdvancedWrapper = styled.div`
  width: 150px;
  height: 150px;
  background: ;
`
/*//! SearchDropdown */

export const Main = styled.div`
  /* height: 100vh; */

  /* display: flex;
  align-self: center; */
  /* display: flex; */
  /* align-self: center; */
  /* display: block; */
  @media (max-width: 1020px) {
    /* display: block; */
    /* display: flex; */
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
  /* position: absolute;

  top: 360px;

  position: relative; */
  position: relative;
  /* position: absolute; */
  left: 30px;
  /* top: 620px; */
  top: 15px;
  z-index: 10;
  background: var(--background-blur2);
  width: 250px;
  min-width: 20vw;
  box-shadow: 0 8px 32px 0 rgba(60, 59, 61, 0.35);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  @media (max-width: 1020px) {
    position: relative;
    left: 30px;
    top: 20px;
  }
`
export const DropDownList = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0.5rem; */

  /* background: var(--background1-main); */

  box-sizing: border-box;
  color: var(--background-secondary2);
  font-size: 1rem;
  font-weight: 400;
  min-width: fit-content;
  &:first-child {
    padding-top: 1.2rem;
  }

  /* &:nth-child(2) {
    padding-right: 1.2rem;
  } */
`
export const ListItem = styled.li`
  display: grid;
  place-items: center;
  list-style: none;
  max-width: fit-content;
  padding-left: 0.75rem;
  padding-bottom: 0.75rem;
  /* margin-bottom: 1rem; */
  &:last-child {
    /* margin-bottom: 0.5rem; */
  }
`
