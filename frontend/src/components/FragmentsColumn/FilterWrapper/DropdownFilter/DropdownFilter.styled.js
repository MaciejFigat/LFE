import styled from 'styled-components'

export const Main = styled.div`
  /* height: 100vh; */
  /* position: absolute; */
`
export const DropDownContainer = styled.div`
  width: 8rem;
  /* min-width: max-content; */
  min-width: min-content;
  margin: 0 auto;
`

export const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 0.2rem 0.4rem 0.2rem 0.5rem;
  /* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15); */
  font-weight: 500;
  font-size: 0.9rem;
  /* color: var(--background4-main); */
  color: var(--background-secondary2);
  background: var(--background1-main);
  transition: all 0.3s ease-out;
  text-align: center;
  border: 1px solid var(--background1-main);
  &:hover {
    /* color: var(--background-secondary3); */
    border: 1px solid var(--background-secondary2);
    /* background: var(--background2-main); */
  }
  /* &:active {
    color: var(--background-secondary4);
  } */
`
export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 10;
`
export const DropDownList = styled.div`
  padding: 0;
  margin: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background: var(--background1-main);
  border: 1px solid var(--background-secondary2);
  box-sizing: border-box;
  color: var(--background-secondary2);
  font-size: 1rem;
  font-weight: 400;
  min-width: fit-content;
  &:first-child {
    padding-top: 0.8rem;
  }
`
export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.4rem;
`
