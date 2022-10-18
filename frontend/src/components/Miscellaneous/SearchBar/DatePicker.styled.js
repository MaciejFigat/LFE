import styled from 'styled-components'

export const DatePickerButton = styled.input`
  display: flex;
  justify-items: center;
  align-items: center;
  color: var(--background4-main);
  /* background: var(--background-blur2); */
  border-radius: 4px;
  padding: 0.25rem;
  width: 70px;
  border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background2-main);
  border-bottom: 1px solid var(--background2-main);
  /* box-shadow: var(--boxShadow1); */
  /* border: 1px solid var(--background-tertiary1); */
  box-shadow: var(--boxShadowInset1);
  &:focus {
    outline: none;
  }
  &:active {
    border: 1px solid var(--background-tertiary2);
  }

  &:hover {
    color: var(--background-tertiary7);
    background: var(--background-blur1);
  }
`
