import styled from 'styled-components'

export const PaginateWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding: 0.75rem;
`
export const PaginateActive = styled.div`
  /* color: var(--background-neon8); */
  color: ${({ pageActive }) =>
    pageActive ? 'var(--background-neon9)' : 'var(--background-neon8)'};
`
