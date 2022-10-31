import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FragmentsTopWrapper = styled.div`
  /* position: absolute; */
  display: grid;
  place-items: center;
  margin-top: 1rem;
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
export const SearchResultsDashboardColumn = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  /* min-width: 30vw; */
  max-width: 330px;
  padding: 1rem;
  &:last-of-type {
    align-items: flex-start;
  }
  /* &:first-of-type {
    align-items: flex-start;
    background: red;
  } */
`
export const SearchResultsHorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (max-width: 690px) {
    align-items: center;
    flex-direction: column;
    /* justify-content: center; */
  }
`
export const SearchResultsDashboardDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
  padding: 2rem;
  background: linear-gradient(
    120deg,
    var(--background-blur1) 0%,
    transparent 30%,
    transparent 70%,
    var(--background-blur1)
  );
  border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);

  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);
  /* box-shadow: var(--boxShadowInset1); */
  /* min-width: fit-content; */
  /* width: 900px; */
  border-radius: 20px;
  max-width: 700px;
  /* width: 600px; */
  margin-bottom: 2rem;
  margin-top: 4rem;
  @media screen and (max-width: 890px) {
    /* justify-content: center; */
    max-width: 90vw;
  }
`
export const SearchResultsSectionWrapper = styled.div`
  /* border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);

  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2); */
  /* position: relative;
  top: 200px; */
  /* background: var(--background-gradient1); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90vw;
  /* border: 1px solid var(--background4-main); */
  border-radius: 20px;
  min-width: max(950px, 90vw);
  margin-top: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
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
export const ProjectDiv = styled(motion.div)`
  display: grid;
  place-items: center;
  height: 40px;
  font-size: 1rem;
  padding: 0.55rem 0.75rem 0.55rem 0.75rem;
  width: 150px;
  min-width: fit-content;
  color: var(--background4-main);
  /* border: 1px solid var(--background2-main); */
  border-radius: 5px;
  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background2-main);
  border-bottom: 1px solid var(--background2-main);
  /* box-shadow: ${({ selected }) =>
    selected ? 'var(--boxShadow2)' : 'var(--boxShadow1)'}; */

  /* background: var(--background1-main); */
  border-radius: 5px;
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
export const MainProjectDetails = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
