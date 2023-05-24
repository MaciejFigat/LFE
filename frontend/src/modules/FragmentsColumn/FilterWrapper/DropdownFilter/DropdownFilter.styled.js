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
  user-select: none;
  color: var(--background4-main);
  padding: ${({ wide }) =>
    wide ? '0.4rem 0.6rem 0.4rem 0.7rem' : '0.2rem 0.4rem 0.2rem 0.5rem'};
  font-weight: 500;
  border-radius: 10px;
  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur2);
  /* background: var(--background-gradient1); */
  /* box-shadow: var(--boxShadowClay1); */

  /* color: var(--background-secondary1); */
  transition: all 0.2s ease-out;
  text-align: center;
  margin-bottom: ${({ wide }) => (wide ? '1rem' : '0rem')};
  font-size: ${({ wide }) => (wide ? '1.2rem' : '0.75')};

  cursor: pointer;

  &:hover {
    box-shadow: var(--boxShadowInset1);
    color: var(--background-secondary1);
  }
  &:active {
    box-shadow: var(--boxShadowInset2);
    color: var(--background-secondary1);
  }
  @media screen and (max-width: 620px) {
    font-size: 0.9rem;
  }
`
export const DropDownListContainer = styled.div`
  position: absolute;
  /* z-index: 2; */
  /* top: 10px; */
  /* background: brown; */
`
export const DropDownList = styled.div`
  position: relative;
  cursor: pointer;
  top: -68px;

  right: ${({ wide }) => (wide ? '-220px' : '-150px')};
  font-size: ${({ wide }) => (wide ? '1.5rem' : '1rem')};
  z-index: 11;
  padding: 0;
  margin: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  user-select: none;
  background: ${({ wide }) =>
    wide ? 'var(--background-gradient1)' : 'var(--background1-main)'};

  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);

  box-shadow: var(--boxShadow1);
  border-radius: 15px;
  box-sizing: border-box;
  color: var(--background4-main);
  /* background: red; */
  /* font-size: 1rem; */
  font-weight: 400;
  min-width: fit-content;
  &:first-child {
    padding-top: 0.8rem;
  }
  @media screen and (max-width: 620px) {
    top: -62px;
    right: ${({ wide }) => (wide ? '-150px' : '-110px')};
    font-size: 0.9rem;
  }
`
export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.4rem;
  font-size: 1.1rem;
  &:hover {
    color: var(--background-secondary1);
  }
  @media screen and (max-width: 620px) {
    font-size: 0.9rem;
  }
`
