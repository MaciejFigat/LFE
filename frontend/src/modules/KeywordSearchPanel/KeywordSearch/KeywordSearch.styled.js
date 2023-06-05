import { motion } from 'framer-motion'
import styled from 'styled-components'

export const KeywordSearchLabelH2 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  align-items: center;

  font-weight: 700;

  width: 100%;
  height: 70px;
  margin: 0;
`
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
export const KeywordColumnsSubtitleWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;

  margin: 0;
`
export const KeywordColumnsSubtitle = styled.div`
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 1.1rem;
  /* background: var(--background-gradient1); */
  border-radius: 20px;
  /* box-shadow: var(--boxShadowClay3); */
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  background: var(--background-gradient1);
  width: fit-content;
  padding: 1rem 2.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1.75rem;
  p {
    font-weight: 600;
    font-size: 1.1rem;
    margin: 0;
    margin-top: 0.5rem;
  }
`
export const KeywordColumnsSubtitleSmall = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
`
export const KeywordColumnContainer = styled.div`
  /* background: grey; */
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  /* padding-top: 4rem; */

  width: 100%;
`
// ? test styling

export const FragmentB = styled.b`
  color: var(--background4-main);
  font-size: 1rem;
  @media (max-width: 1020px) {
    font-size: 0.85rem;
  }
`
export const KeywordB = styled.b`
  display: grid;
  place-items: center;
  color: var(--background4-main);
  /* box-shadow: var(--boxShadowClay1); */
  /* border-bottom: 1px solid var(--background2-main); */
  /* border-left: 1px solid var(--background2-main); */

  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  border-radius: 15px;
  font-size: 0.95rem;
  padding: 0.5rem 0.75rem;
`
export const KeywordDivSimple = styled.b`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  flex-wrap: wrap;
`
export const FragmentParSmallExcerpt = styled.p`
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--background4-main);
  margin: 0;
  margin-bottom: 0.55rem;
  line-height: 1.1;
`
export const FragmentParSmall = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  color: var(--background4-main);
  margin: 0;
  /* margin-bottom: 0.55rem; */
  /* &:first-of-type {
    margin-top: 1.75rem;
  } */
`
export const FragmentTitleRowSmall = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 1.2rem;
`

export const FirstColProjectWrapper = styled(motion.div)`
  display: grid;
  place-items: center;
  /* background: brown; */
  grid-template-columns: ${({ width }) =>
    width > 880 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'};
  grid-template-columns: ${({ width }) => width > 1380 && 'repeat(3, 1fr)'};

  /* gap: 0.55rem; */
  gap: 1rem;
  /* margin-top: 0.5rem; */
`
export const FragmentDivSmallWrapper = styled(motion.div)`
  //todo

  gap: 1rem;
  display: grid;
  /* grid-template-columns: repeat(2, 1fr);
  grid-template-columns: ${({ width }) =>
    width < 500 ? 'repeat(2, 1fr) !important' : 'repeat(1, 1fr) !important'}; */
  /* flex-direction: column;
  justify-content: center;
  align-items: center; */

  @media (min-width: 1520px) {
    display: ${({ width }) => width < 600 || (!width && 'grid')};
    grid-template-columns: ${({ width }) =>
      width < 600 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'};
  }
`
export const FragmentDivSmall = styled(motion.div)`
  position: relative;
  display: flex;
  /* align-items: flex-start; */
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  /* justify-content: flex-start; */
  max-width: 100%;
  max-width: 330px;
  max-height: 340px !important;
  /* min-height: fit-content !important; */
  /* background: brown !important; */
  /* 
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1); */
  /* background: var(--background-gradient1); */
  box-shadow: var(--boxShadowClay3);
  border-radius: 20px;
  padding: ${({ width }) =>
    width < 1100 || !width
      ? '1.5rem 0.75rem 0rem 1.5rem'
      : '0.75rem 0.5rem 0rem 0.75rem'};

  /* box-shadow: ${({ width }) =>
    width < 1100 || !width ? 'var(--boxShadow1)' : 'var(--boxShadow1)'}; */
  /* width: 330px; */
  width: ${({ width }) => (width < 1100 || !width ? '330px' : '220px')};

  @media (min-width: 1520px) {
    padding: ${({ width }) =>
      width < 600 || width
        ? '0.75rem 0.8rem 0rem 0.75rem'
        : '1.5rem 0.75rem 0rem 1.5rem'};
    width: ${({ width }) => (width < 600 || width ? '280px' : '330px')};
  }
  @media (min-width: 1020px) {
    /* font-size: 0.85rem; */
    /* //todo  */
  }
  overflow-x: hidden;
  overflow-y: scroll;
  height: 220px;
  ::-webkit-scrollbar {
    width: 0.2em;
  }

  ::-webkit-scrollbar-corner {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      transparent 10%,
      var(--background-blur2),
      var(--background-secondary1),
      var(--background-blur2) 90%,
      transparent
    );
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 2px;
  }
`
