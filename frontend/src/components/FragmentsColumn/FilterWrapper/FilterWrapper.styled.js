import styled from 'styled-components'

export const FilterOptionsWrapper = styled.div`
  /* background: rgba(60, 59, 61, 0.35); */
  background: var(--background-blur1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  max-width: fit-content;
  min-width: 200px;
  padding-top: 0.25rem;
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
  flex-direction: column-reverse;
  align-items: center;
  text-align: center;
  /* justify-content: left; */
`
