import styled from 'styled-components'

export const FilterOptionsWrapper = styled.div`
  /* border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2); */
  display: flex;
  flex-direction: row;
  /* box-shadow: var(--boxShadowClay2); */
  box-shadow: ${({ wide }) => (wide ? 'var(--boxShadowClay1)' : 'none')};
  border: ${({ wide }) => wide && 'none'};
  /* background: var(--background-gradient1); */
  /* background: brown; */

  min-width: ${({ wide }) => (wide ? 'min(450px, 80vw)' : '280px')};
  height: ${({ wide }) => (wide ? '140px' : '100px')};
  padding: ${({ wide }) => (wide ? '2rem' : '0.75rem')};
  margin: ${({ wide }) => (wide ? '2rem' : '0.25rem')};
  border-radius: 20px;
  max-width: fit-content;

  min-height: 94px;
  @media screen and (max-width: 620px) {
    max-width: ${({ wide }) => (wide ? '95vw' : '150px')};
    min-width: ${({ wide }) => (wide ? '90vw' : '100px')};

    /* width: 100px; */
    /* max-width: 100px; */
    padding: 1.5rem 0;
    margin: 0;
  }
`
export const OptionsWrapper = styled.div`
  display: flex;
  z-index: 10;
  margin-top: 3.75rem;
  justify-content: space-evenly;
  /* backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px; */
  max-width: 100%;
  margin-bottom: 0.75rem;
`
export const ChoiceWrapperRow = styled.div`
  display: flex;
  /* flex-direction: column-reverse; */
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* justify-content: left; */
`
