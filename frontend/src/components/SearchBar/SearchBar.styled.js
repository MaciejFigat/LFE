import styled from 'styled-components'

export const SearchBarWrapper = styled.div`
  display: flex;
  align-self: center;
  color: var(--background1-main);
  z-index: 10;
  gap: 0.75rem;
  /* background: var(--background-secondary2); */
  /* background: var(--background1-main); */
  background: transparent;
  height: 30px;
  min-width: fit-content;
  min-height: fit-content;
  /* color: var(--background1-main); */
  font-size: 1.55rem;
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
  @media (max-width: 420px) {
    gap: 0.25rem;
    height: 25px;
  }
`

export const SearchHideButton = styled.button`
  /* background: var(--background-secondary2); */
  display: grid;
  place-items: center;
  width: 30px;
  background: none;
  color: var(--background5-main);
  padding: 0.25rem;
  /* margin-right: 0.45rem; */
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;
  align-items: center;
  @media (max-width: 420px) {
    padding: 0.15rem;
  }
`
export const SearchBarButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;
  align-items: center;
  /* color: var(--background-secondary2); */
  color: var(--background-neon5);
  border: 1px solid transparent;
  border-radius: 10px;
  margin-left: 0.5rem;
  &:hover {
    /* transition: all 0.7s ease-out; */
    border: 1px solid var(--background-secondary2);
  }
  &:active {
    border: 1px solid var(--background-secondary4);
  }
  @media (max-width: 420px) {
    font-size: 0.7rem;
    padding: none;
  }
`
export const SearchBarForm = styled.form`
  display: flex;
  flex-direction: row;
`
export const SearchBarContainer = styled.div`
  display: flex;
`
export const SearchInput = styled.input`
  max-width: 100%;
  height: 100%;
  padding: 11px 13px;
  color: var(--background4-main);
  border-radius: 12px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 1rem;
  transition: all 0.3s ease-out;

  @media (max-width: 420px) {
    font-size: 0.8rem;
    padding: 5px 7px;
  }
`
/* export const SearchBarWrapper = styled.div` */
