import styled from 'styled-components'

export const SearchBarWrapper = styled.div`
  display: flex;
  align-self: center;
  color: var(--background1-main);
  z-index: 10;
  gap: 0.75rem;

  background: transparent;
  height: 30px;
  min-width: fit-content;
  min-height: fit-content;

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
  background: var(--background2-main);
  align-items: center;
  /* color: var(--background-secondary2); */
  color: var(--background4-main);
  border: 1px solid var(--background4-main);
  border-radius: 10px;
  margin-left: 0.5rem;
  &:hover {
    /* transition: all 0.7s ease-out; */
    border: 1px solid var(--background3-main);
  }
  &:active {
    border: 1px solid var(--background5-main);
  }
  @media (max-width: 420px) {
    font-size: 0.7rem;
    padding: none;
  }
`
export const HighlightButton = styled(SearchBarButton)`
  padding: 0.25rem;
  font-size: 1.1rem;
  margin-right: 1rem;
`
export const SearchBarForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* width: 100%; */
  justify-content: flex-start;
`
export const SearchBarContainer = styled.div`
  display: flex;
`

export const SearchInput = styled.input`
  display: flex;
  justify-items: center;
  align-items: center;
  color: var(--background5-main);
  background: transparent;
  padding: 0.25rem;
  width: 120px;
  border: none;
  /* border-radius-top: 5px; */
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background: var(--background-blur1);
  border-bottom: 1px solid var(--background5-main);
  &:focus {
    outline: none;
  }
  &:active {
    background: var(--background3-main);

    border-bottom: 1px solid var(--background3-main);
  }

  &:hover {
    border-bottom: 1px solid var(--background5-main);
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  } */
  /* @media (max-width: 420px) {
    font-size: 0.8rem;
    padding: 5px 7px;
  } */
`
export const SearchInputResultDisplay = styled(SearchInput)`
  font-size: 1.1rem;
`
export const NumberInput = styled(SearchInput)`
  width: 25px;
`
