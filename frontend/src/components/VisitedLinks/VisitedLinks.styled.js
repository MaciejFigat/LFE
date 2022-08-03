import styled from 'styled-components'

export const VisitedLinkWrapper = styled.div`
  /* background: red; */
  /* display: grid; */
  /* grid-template-columns: max-content max-content; */
  padding: 0;
`
export const VisitedLinkRow = styled.div`
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const VisitedLinkPar = styled.p`
  margin: 0;
  padding: 0;
  color: var(--background-secondary2);
  &:hover {
    color: var(--background-secondary3);
  }
`
