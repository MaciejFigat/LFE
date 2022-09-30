import styled from 'styled-components'
// import { motion } from 'framer-motion'

export const SearchResultsSectionWrapper = styled.div`
  display: grid;

  place-items: center;
  /* border: 1px solid var(--background4-main); */
  border-radius: 10px;
  min-width: min(950px, 90vw);
  margin-top: 2rem;
  margin-bottom: 2rem;
  min-height: 40vh;
  @media screen and (min-width: 990px) {
  }
`

export const ProjectsDisplayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`
export const ProjectDiv = styled.div`
  display: grid;
  place-items: center;
  height: 40px;
  font-size: 1rem;
  padding: 0 0.5rem 0 0.5rem;
  /* width: 80px; */
  min-width: fit-content;
  background: var(--background2-main);
  border-radius: 15px;
`
export const MainProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* gap: 0.5rem; */
`
export const MainProjectDetails = styled.div``
