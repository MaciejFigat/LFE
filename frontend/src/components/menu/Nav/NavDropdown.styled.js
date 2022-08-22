import styled from 'styled-components'

export const Main = styled.div`
  /* height: 100vh; */
  /* position: absolute; */
`
export const DropDownContainer = styled.div`
  min-width: min-content;
  margin: 0 auto;
`

export const DropDownHeader = styled.div`
  /* padding: 0.2rem 0.4rem 0.2rem 0.5rem; */
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--background5-main);
  /* color: var(--background-secondary2); */
  /* background: var(--background1-main); */
  transition: all 0.3s ease-out;
  text-align: center;
  border: 1px solid var(--background1-main);
  &:hover {
    color: var(--background-secondary2);
  }
  /* &:active {
    color: var(--background-secondary4);
  } */
  //? fixing width for svg icon inside
  /* max-width: 50px; */
`
export const DropDownListContainer = styled.div`
  position: absolute;

  /* position: relative; */
  z-index: 10;
  background: var(--background-blur1);
  width: 120px;
  min-width: fit-content;
  /* box-shadow: 0 8px 24px 0 var(--background1-main); */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  @media (max-width: 1020px) {
    width: 110px;
    right: 50px;
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
