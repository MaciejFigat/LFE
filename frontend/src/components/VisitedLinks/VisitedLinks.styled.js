import styled from 'styled-components'

export const VisitedLinkWrapper = styled.div`
  border-radius: 20px;
  /* min-height: 300px; */

  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur1);
  background: linear-gradient(
    120deg,
    var(--background-blur1),
    transparent 30%,
    transparent 60%,
    var(--background-blur1)
  );
  /* display: grid; */
  /* grid-template-columns: max-content max-content; */
  padding: ${({ large }) => (large ? '1.25rem' : '0.75rem')};
  margin-bottom: ${({ large }) => (large ? '2rem' : '0.5rem')};
`

export const VisitedLinkRow = styled.div`
  font-size: ${({ large }) => (large ? '1.2rem' : '0.75rem')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`
export const VisitedLinkPar = styled.p`
  margin: 0;
  padding: 0;
  margin-right: 1rem;
  color: var(--background-secondary1);
  transition: 0.2s;
  &:hover {
    color: var(--background-secondary2);
  }
`
