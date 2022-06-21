import styled from 'styled-components'

export const Main = styled.div``
export const DropDownContainer = styled.div`
  width: 12rem;
  min-width: min-content;
  margin: 0 auto;
`

export const DropDownHeader = styled.div`
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
  background: var(--background2-main);

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
