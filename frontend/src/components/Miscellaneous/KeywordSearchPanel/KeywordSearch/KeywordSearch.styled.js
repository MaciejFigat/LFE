import { motion } from 'framer-motion'
import styled from 'styled-components'

export const KeywordSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-basis: 50%;
  margin-right: 0.5rem;
`
//? both columns in this one
export const KeywordColumnContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 4rem;
  width: 100%;
`
// ? test styling

export const FragmentB = styled.b`
  color: var(--background-secondary2);
`
export const KeywordB = styled.b`
  color: var(--background4-main);
`
export const KeywordDivSimple = styled.b`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const FragmentParSmall = styled.p`
  font-weight: 400;
  color: var(--background5-main);
  margin: 0;
`
export const FragmentTitleRowSmall = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 1.2rem;
`
export const FragmentDivSmall = styled(motion.div)`
  /* position: absolute; */
  align-self: center;
  /* background: var(--background1-main) !important; */
  /* ${({ moreColumns }) =>
    moreColumns ? 'background: none;' : 'background: var(--background1-main);'};
  ${({ moreColumns }) =>
    moreColumns
      ? 'border: 1px solid var(--background4-main);'
      : 'border: 1px solid var(--background4-main);'}; */
  border: 1px solid var(--background4-main);
  /* background: var(--background-blur1) !important; */
  border-radius: 15px;
  /* background: red !important; */
  /* width: 98%; */
  /* min-width: 98%; */
  /* width: 95%; */
  padding: 0.95rem;
  padding-right: 0.75rem;
  overflow: hidden;
`
