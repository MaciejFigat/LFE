import styled from 'styled-components'

export const Main = styled.div`
  /* height: 100vh; */
  /* position: absolute; */
`
export const DropDownContainer = styled.div`
  width: 10.5em;
  margin: 0 auto;
`

export const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: var(--background1-main);
  background: var(--background4-main);
`
export const DropDownListContainer = styled.div`
  position: absolute;
`
export const DropDownList = styled.div`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: var(--background2-main);
  border: 2px solid var(--background5-main);
  box-sizing: border-box;
  color: var(--background4-main);
  font-size: 1.3rem;
  font-weight: 500;
  min-width: fit-content;
  &:first-child {
    padding-top: 0.8em;
  }
`
export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`
