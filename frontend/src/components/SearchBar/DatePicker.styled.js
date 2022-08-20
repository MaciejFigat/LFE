import styled from 'styled-components'

export const DatePickerButton = styled.input`
  display: flex;
  justify-items: center;
  align-items: center;
  color: var(--background-tertiary4);
  background: var(--background-blur2);
  border-radius: 4px;
  padding: 0.25rem;
  width: 70px;

  border: 1px solid var(--background-tertiary1);
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
