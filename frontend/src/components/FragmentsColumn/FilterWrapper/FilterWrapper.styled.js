import styled from 'styled-components'

export const FilterOptionsWrapper = styled.div`
  background: rgba(60, 59, 61, 0.35);
  /* width: 120px; */
  /* box-shadow: 0 8px 32px 0 rgba(60, 59, 61, 0.35); */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  /* max-width: 100%; */
  max-width: fit-content;
  min-width: 200px;
  padding-top: 0.25rem;
`
export const OptionsWrapper = styled.div`
  display: flex;
  z-index: 10;
  margin-top: 2.5rem;
  /* align-items: flex-end; */
  justify-content: space-evenly;
  /* background: rgba(60, 59, 61, 0.35); */

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  max-width: 100%;
  margin-bottom: 0.75rem;
`
export const ChoiceWrapperRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* justify-content: left; */
`
