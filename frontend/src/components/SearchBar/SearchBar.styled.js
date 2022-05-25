import styled from 'styled-components'

export const SearchBarWrapper = styled.div`
  display: flex;
  align-self: center;
  color: var(--background1-main);
  z-index: 10;
  gap: 0.5rem;
  /* background: var(--background-secondary2); */
  background: var(--background1-main);
  height: 30px;
  min-width: fit-content;
  min-height: fit-content;
  /* color: var(--background1-main); */
  font-size: 1.25rem;
  font-weight: 400;
  .show {
    transition: 0.3s;
    opacity: 1;
    /* background: var(--background-secondary4); */
  }
  .hide {
    transition: 0.2s;
    opacity: 0;
    /* background: var(--background-secondary4); */
  }
`

export const SearchHideButton = styled.div`
  color: var(--background1-main) !important;
  padding: 0.25rem;
  /* background: var(--background-secondary2); */
  background: none;
  display: grid;
  place-items: center;
`
export const SearchBarButton = styled.button`
  color: var(--background1-main);
  background: var(--background-secondary2);
  align-items: center;
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
  border-radius: 12px;
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
