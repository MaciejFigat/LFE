import styled from 'styled-components'

export const DatePickerButton = styled.input`
  display: flex;
  justify-items: center;
  align-items: center;
  color: var(--background-neon4);
  background: var(--background-blur22);
  border-radius: 4px;
  padding: 0.25rem;
  width: 70px;

  border: 1px solid var(--background-neon5);
  &:focus {
    outline: none;
  }
  &:active {
    border: 1px solid var(--background-neon6);
  }

  &:hover {
    color: var(--background-neon11);
    background: var(--background-blur11);
  }
`
