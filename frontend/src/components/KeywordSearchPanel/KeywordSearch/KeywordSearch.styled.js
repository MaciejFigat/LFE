import styled from 'styled-components'

export const KeywordSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; */
  align-items: center;
  gap: 1rem;
  flex-basis: 50%;
`
//? both columns in this one
export const KeywordColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 4rem;
`
// ? test styling

export const FragmentB = styled.b`
  color: var(--background-secondary2);
`
export const KeywordB = styled.b`
  color: var(--background-secondary3);
`
export const KeywordDivSimple = styled.b`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const FragmentParSmall = styled.p`
  margin: 0;
`
export const FragmentDivSmall = styled.div`
  align-self: center;
  border: 1px solid var(--background5-main);
  width: 80%;
  /* max-width: max-content; */
  padding: 0.5rem;
`
