import styled from 'styled-components'

export const Main = styled.div``
export const DropDownContainer = styled.div`
  /* width: 8rem; */
  max-width: max-content;
  /* min-width: min-content; */

  margin: 0 auto;

  /* background: brown; */
`

export const DropDownHeader = styled.div`
  margin-bottom: 0.25em;
  user-select: none;
  padding: 0.2rem 0.4rem 0.2rem 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  /* color: var(--background-secondary4); */
  color: var(--background2-main);
  transition: all 0.3s ease-out;
  text-align: center;
  margin-bottom: ${({ wide }) => (wide ? '1rem' : '0.25rem')};
  font-size: ${({ wide }) => (wide ? '1.5rem' : '0.75')};

  cursor: pointer;

  &:hover {
    /* border-bottom: 1px solid var(--background4-main); */
    color: var(--background2-main);
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
  /* right: -110px; */
  right: ${({ wide }) => (wide ? '-250px' : '-110px')};
  font-size: ${({ wide }) => (wide ? '1.5rem' : '1rem')};
  z-index: 11;
  padding: 0;
  margin: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background: var(--background1-main);

  border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background2-main);
  border-bottom: 1px solid var(--background2-main);

  box-shadow: var(--boxShadow2);

  box-sizing: border-box;
  color: var(--background4-main);
  /* font-size: 1rem; */
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
