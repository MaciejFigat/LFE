import styled from 'styled-components'

export const FilterOptionsWrapper = styled.div`
  /* background: rgba(60, 59, 61, 0.35); */
  /* background: var(--background-blur1); */
  background: var(--background1-main);
  border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background2-main);
  border-bottom: 1px solid var(--background2-main);
  /* box-shadow: var(--boxShadow1); */
  /* border: 1px solid var(--background2-main); */
  /* backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px); */
  border-radius: 5px;
  max-width: fit-content;
  min-width: 250px;
  min-height: 94px;
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
  /* flex-direction: column-reverse; */
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* justify-content: left; */
`
