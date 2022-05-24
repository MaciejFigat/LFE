import styled from 'styled-components'

export const SearchBarWrapper = styled.div`
  display: flex;
  align-self: center;
  color: var(--background1-main);
  z-index: 10;
  /* background: var(--background-secondary2); */
  background: var(--background1-main);
  height: 30px;
  min-width: fit-content;
  min-height: fit-content;
  /* color: var(--background1-main); */
  font-size: 1.25rem;
  font-weight: 400;
  .show {
    opacity: 1;
    background: var(--background-secondary4);
  }
  .hide {
    opacity: 0;
    background: var(--background-secondary4);
  }
`

export const SearchBarButton = styled.button`
  color: var(--background1-main);
  background: var(--background-secondary2);
`
export const SearchBarContainer = styled.div`
  display: flex;
  /* min-width: fit-content;
  align-self: center;
  max-height: max-content;
  align-items: center; */
`
export const SearchInput = styled.input`
  max-width: 100%;
  height: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: var(--background4-main);
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 1rem;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`
/* export const SearchBarWrapper = styled.div` */
