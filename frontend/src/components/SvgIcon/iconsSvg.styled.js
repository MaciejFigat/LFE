import styled from 'styled-components'

export const IconsWrapper = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  /* justify-content: center; */
  /* flex-direction: row; */
  /* 
  a {
    color: var(--bluegreen5);
    &:hover {
      color: var(--bluegreen10);
    }
  } */
`
// export const IconsItem = styled.li`
export const IconsItem = styled.div`
  padding: 0;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: ${({ noMargin }) => (noMargin ? '0rem; ' : '1rem;')};
  /* & + & {
    margin-right: 1rem;
  } */

  /* @media (max-width: 1020px) { */
  /* margin-right: 0.75rem; */
  /* &:last-child { */
  /* margin-right: 0rem; */
  /* } */
  /* } */
  /* &:hover {
    color: var(--bluegreen4);
  } */
`
