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
  margin-bottom: 0.25rem;
`
export const FragmentTitleRowSmall = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 1.2rem;
`
export const FragmentDivSmall = styled(motion.div)`
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column; */
  /* position: absolute; */
  align-self: center;
  /* background: var(--background1-main) !important; */
  /* ${({ moreColumns }) =>
    moreColumns ? 'background: none;' : 'background: var(--background1-main);'};
  ${({ moreColumns }) =>
    moreColumns
      ? 'border: 1px solid var(--background4-main);'
      : 'border: 1px solid var(--background4-main);'}; */

  /* border: 1px solid var(--background4-main); */
  box-shadow: var(--boxShadow2);
  background: linear-gradient(
    var(--background-blur2) 10%,
    var(--background1-main) 85%,
    var(--background-blur2)
  );
  border-radius: 5px;
  /* width: 98%; */
  /* min-width: 98%; */
  /* width: 95%; */
  padding: 0.95rem;
  padding-right: 0.75rem;
  padding-bottom: 0rem;
  /* overflow: hidden; */
  overflow: scroll;
  /* height: fit-content; */
  /* min-height: 300px; */
  height: 240px;
  /* background: lime; */
  ::-webkit-scrollbar {
    width: 0.2em;
  }

  ::-webkit-scrollbar-corner {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      transparent,
      var(--background3-main),
      var(--background-blur1)
    );
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 2px;
  }
`
