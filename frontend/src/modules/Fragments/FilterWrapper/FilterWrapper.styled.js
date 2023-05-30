import styled from 'styled-components'

export const FilterOptionsWrapper = styled.div`
  border: 1px solid var(--background-blur2);
  gap: 0.65rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: ${({ wide }) => wide && 'none'};

  min-width: ${({ wide }) => (wide ? 'min(450px, 80vw)' : '280px')};
  height: ${({ wide }) => (wide ? '140px' : '100px')};
  padding: ${({ wide }) => (wide ? '2rem' : '0.75rem')};
  margin: ${({ wide }) => (wide ? '2rem' : '0.25rem')};
  border-radius: 10px;
  max-width: fit-content;
  min-height: 180px;
  min-width: 360px;

  @media screen and (max-width: 620px) {
    max-width: ${({ wide }) => (wide ? '95vw' : '150px')};
    min-width: ${({ wide }) => (wide ? '90vw' : '100px')};
    padding: 1.5rem 0;
    margin: 0;
  }
`
export const OptionsWrapper = styled.div`
  display: flex;
  z-index: 10;
  margin-top: 3.75rem;
  justify-content: space-evenly;

  max-width: 100%;
  margin-bottom: 0.75rem;
`
export const ChoiceWrapperRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
