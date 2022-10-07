import styled from 'styled-components'
// import { motion } from 'framer-motion'

export const FragmentsTopWrapper = styled.div`
  /* position: absolute; */
  display: grid;
  place-items: center;
  /* top: 150px; */
  /* background: lime; */
`
export const SearchResultsWrapper = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* top: 250px; */
  /* background: lime; */
`
export const SearchResultsSectionWrapper = styled.div`
  /* position: relative;
  top: 200px; */
  background: lime;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* border: 1px solid var(--background4-main); */
  border-radius: 10px;
  min-width: max(950px, 90vw);
  margin-top: 2rem;
  margin-bottom: 2rem;
  min-height: 40vh;
  @media screen and (max-width: 990px) {
    /* justify-content: center; */
    min-width: min(950px, 90vw);
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
  border: 1px solid var(--background4-main);
  /* background: var(--background1-main); */
  border-radius: 15px;
`
export const ProjectDivSecondary = styled(ProjectDiv)`
  background: var(--background4-main);
  color: var(--background2-main);
  border: none;
  font-weight: 700;
  border-radius: 10px;
`
export const MainProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 0.5rem; */
`
export const MainProjectDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, 60px);
  grid-row-gap: 0.25em;
  grid-column-gap: 1em;
  max-width: 80vw;
  @media screen and (max-width: 1090px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 100vw;
    min-width: 95vw;
  }
`
