import styled from 'styled-components'

export const PaginateWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding: 0.75rem;
  ${({ narrow }) => (narrow ? 'gap: 0.25rem' : 'gap: 0.75rem')};
  /* gap: 0.75rem; */
  &:last-child {
    border: none;
  }
`
export const PaginateBorderWrapper = styled.div`
  & + & {
    border-left: 1px solid var(--background-neon11);
    ${({ narrow }) =>
      narrow ? 'padding-left: 0.25rem' : 'padding-left: 0.75rem'};
    /* padding-left: 0.75rem; */
  }
`
export const PaginateActive = styled.div`
  color: ${({ pageActive }) =>
    pageActive ? 'var(--background-neon9)' : 'var(--background-neon8)'};
`
