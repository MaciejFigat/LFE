import styled from 'styled-components'

export const PaginateWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  ${({ narrow }) => (narrow ? 'gap: 0.25rem' : 'gap: 0.75rem')};
  ${({ miniVersion }) => miniVersion && 'gap: 0.05rem'};
  ${({ miniVersion }) => miniVersion && 'padding: 0;'};

  &:last-child {
    border: none;
  }
`
export const PaginateBorderWrapper = styled.div`
  & + & {
    border-left: 1px solid var(--background3-main);
    ${({ narrow }) =>
      narrow ? 'padding-left: 0.25rem' : 'padding-left: 0.75rem'};
    ${({ miniVersion }) => miniVersion && 'padding-left: 0.05rem'};
    ${({ miniVersion }) => miniVersion && 'height: 1.5rem'};
  }
`
export const PaginateActive = styled.div`
  color: ${({ pageActive }) =>
    pageActive ? 'var(--background-secondary1)' : 'var(--background4-main)'};
  font-size: 0.75rem;
  ${({ miniVersion }) => miniVersion && 'font-size: 0.65rem;'};
`
