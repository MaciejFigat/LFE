import styled from 'styled-components'

export const DatePickerButton = styled.input`
  display: flex;
  justify-items: center;
  align-items: center;
  color: var(--background4-main);
  /* background: var(--background-blur2); */
  border-radius: 4px;
  padding: 0.25rem;
  width: 90px;
  font-size: 1rem;
  margin-left: 0.25rem;
  /* border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background2-main);
  border-bottom: 1px solid var(--background2-main); */
  /* box-shadow: var(--boxShadow1); */
  /* border: 1px solid var(--background-tertiary1); */
  /* box-shadow: var(--boxShadowInset1); */
  &:focus {
    outline: none;
  }
  &:active {
    /* border: 1px solid var(--background-tertiary2); */
  }

  &:hover {
    /* color: var(--background-tertiary7); */
    /* background: var(--background-blur1); */
  }
  @media (max-width: 680px) {
    font-size: 0.75rem;
    width: 60px;
  }
  @media (max-width: 420px) {
    font-size: 0.7rem;
    width: 55px;
  }
`
