import { motion } from 'framer-motion'
import styled from 'styled-components'

export const KeywordSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; */
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
export const FragmentTitleRowSmall = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 1.2rem;
`
export const FragmentDivSmall = styled(motion.div)`
  align-self: center;
  background: var(--background-blur1) !important;
  border-radius: 10px;
  width: 95%;
  padding: 0.75rem;
  padding-right: 0;
`
