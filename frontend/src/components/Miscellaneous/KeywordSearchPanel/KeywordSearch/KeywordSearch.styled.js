import { motion } from 'framer-motion'
import styled from 'styled-components'

export const KeywordSearchLabelH2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  align-items: center;

  font-weight: 700;
  /* box-shadow: var(--boxShadowClay1); */
  /* border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  border-radius: 20px; */
  /* width: 250px; */
  width: 100%;
  height: 70px;
  margin: 0;
  /* background: brown; */
  /* min-width: fit-content; */
  padding: 0.75rem 0rem;
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
  box-shadow: var(--boxShadowClay1);
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
  border-radius: 10px;
  font-size: 0.8rem;
  padding: 0.5rem;
`
export const KeywordDivSimple = styled.b`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const FragmentParSmallExcerpt = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: var(--background4-main);
  margin: 0;
  margin-bottom: 0.55rem;
`
export const FragmentParSmall = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  color: var(--background4-main);
  margin: 0;
  margin-bottom: 0.55rem;
  &:first-of-type {
    margin-top: 1.75rem;
  }
`
export const FragmentTitleRowSmall = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 1.2rem;
`

export const FirstColProjectWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: ${({ width }) =>
    width > 880 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'};
  grid-template-columns: ${({ width }) => width > 1380 && 'repeat(3, 1fr)'};

  gap: 0.55rem;
  margin-top: 1.25rem;
`
export const FragmentDivSmall = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  width: 330px;

  /* width: fit-content; */
  /* align-self: center; */
  /* ${({ moreColumns }) =>
    moreColumns
      ? 'background: none;'
      : 'background: var(--background1-main);'}; */
  /* 
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1); */
  /* background: var(--background-gradient1); */
  box-shadow: var(--boxShadowClay2);
  border-radius: 20px;

  padding: 1.95rem;
  padding-right: 0.75rem;
  padding-bottom: 0rem;
  overflow: scroll;
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
