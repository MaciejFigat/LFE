import styled from 'styled-components'

export const VisitedLinkWrapper = styled.div`
  border-radius: 10px;

  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur1);
  background: var(--background-gradient2);
  width: 360px;
  padding: ${({ large }) => (large ? '1.25rem' : '0.55rem')};
  margin-bottom: ${({ large }) => (large ? '2rem' : '0.5rem')};
`

export const VisitedLinkRow = styled.div`
  font-size: ${({ large }) => (large ? '1.2rem' : '0.75rem')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const VisitedLinkPar = styled.p`
  margin: 0;
  padding: 0;
  margin-right: 1rem;
  font-weight: 600;
  color: var(--background4-main);
  transition: 0.2s;
  &:hover {
    color: var(--background-secondary1);
  }
`
