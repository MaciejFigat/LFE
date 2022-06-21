import styled from 'styled-components'

export const Main = styled.div``
export const DropDownContainer = styled.div`
  /* width: 8rem; */
  max-width: max-content;
  /* min-width: min-content; */

  margin: 0 auto;
`

export const DropDownHeader = styled.div`
  margin-bottom: 0.25em;
  padding: 0.2rem 0.4rem 0.2rem 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--background-secondary4);
  transition: all 0.3s ease-out;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid var(--background-secondary4);
  }
`
export const DropDownListContainer = styled.div`
  position: absolute;
  /* z-index: 2; */
`
export const DropDownList = styled.div`
  position: relative;
  cursor: pointer;
  top: -33px;
  right: -110px;
  z-index: 99;
  padding: 0;
  margin: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background: var(--background1-main);
  border-top: 1px solid var(--background-secondary4);
  border-bottom: 1px solid var(--background-secondary4);
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
  &:hover {
    color: var(--background-secondary4);
  }
`
