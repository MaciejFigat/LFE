import styled from 'styled-components'
import { motion } from 'framer-motion'
export const HeroSec = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: fit-content;
`

export const HeroSecNoSvg = styled(HeroSec)`
  margin-top: 4rem;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
`
export const HeroTextContainer = styled.div`
  z-index: 11;
  margin-right: 2rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
  padding-top: 0;
  padding-bottom: 0;
  width: 70vw;
  @media screen and (max-width: 1210px) {
    width: 75vw;
  }
  @media screen and (max-width: 1010px) {
    width: 80vw;
  }
  @media screen and (max-width: 771px) {
    margin-right: 0rem;
    margin-left: 0rem;
    padding: 0rem;
    width: 90vw;
  }
  svg {
    position: static;
  }
`
export const HeroTwoContainer = styled.div`
  display: grid;
  place-items: center;
`
export const HeroWrapperColumns = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--background4-main);
`
export const HeroSubtitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 2.1rem;
  font-weight: 600;
`
export const HeroWrapperRow = styled.div`
  display: flex;
  color: var(--background4-main);
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 1.5rem;
`
export const HeroTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 700;
  width: 100%;

  svg {
    stroke: var(--background5-main);

    fill: var(--background1-main);
  }
  @media screen and (max-width: 1051px) {
    width: 70%;
    margin-bottom: 1rem;
    svg {
      position: relative;
      top: 20px;
      left: 70px;
    }
  }
  @media screen and (max-width: 440px) {
    width: 50%;
  }
`

export const HeroTitleLeft = styled.div`
  display: flex;
  font-size: 1.8rem;
  font-weight: 700;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;
  color: var(--background4-main);
`
export const HeroStory = styled.div`
  display: flex;
  height: 200px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 1rem;
  font-weight: 700;
  font-size: 2rem;
  color: var(--background4-main);
`
export const HeroP = styled.p`
  display: grid;
  position: relative;
  place-items: center;
  background: var(--background1-main);
  font-family: 'Raleway';
  font-size: 1.4rem;
  font-weight: 800;
  width: 34vw;
  height: 4.5rem;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 20%;
    height: 60%;
    width: 50%;
    border-left: 2px solid var(--background5-main);
  }
  svg {
    height: 150%;
  }
`
// ? new Hero section - the grid

export const HeroGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 67px);
  min-height:100%

  margin: 0px;
  overflow: hidden;
`
export const HeroNavigation = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid var(--background-blur2);
`
export const HeroNavOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-left: none;
  flex-basis: calc(100% / 3);
  &:first-of-type {
    justify-content: flex-start;
  }
`
export const HeroNavTwo = styled(HeroNavOne)`
  flex-basis: 0;
  flex-grow: 1;
  border-left: 1px solid var(--background-blur2);
`
export const HeroNavOneBig = styled(HeroNavOne)`
  border-left: none;
  flex-basis: calc(100% * 2 / 3);
`

export const HeroMainContainer = styled.div`
  /* it grows into remaining vertical space */
  flex-grow: 1;
`
export const HeroMainArticle = styled.div`
  display: grid;

  height: 100%;
  min-height: 100%;
  grid-template-columns: 2fr 1fr;

  grid-template-rows: auto 70px;

  max-height: 70vh;
`
export const HeroMainArticleReversed = styled(HeroMainArticle)`
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
`
export const HeroArticleSection = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--background-blur2);
`
export const HeroArticleBigSection = styled(HeroArticleSection)`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.2em;
  }
`
export const HeroArticleSmallSection = styled(HeroArticleSection)`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.2em;
  }
  border-left: 1px solid var(--background-blur2);
`
export const HeroArticleSmallSectionFlexStart = styled(HeroArticleSmallSection)`
  place-items: flex-start;
`
export const HeroArticleBottomBigSection = styled(HeroArticleSection)`
  border-bottom: 1px solid var(--background-blur2);
`
export const HeroArticleBottomSmallSection = styled(HeroArticleSection)`
  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);
`
