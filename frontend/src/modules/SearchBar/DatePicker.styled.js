import styled from 'styled-components'

export const DatePickerButton = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--background4-main);

  border-radius: var(--border-radius0);
  padding: 0.5rem;
  width: 100px;
  font-size: 1rem;
  margin-left: 0.5rem;
  border: 1px solid var(--background-blur1);

  &:focus {
    outline: none;
    color: var(--background-secondary1);
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
