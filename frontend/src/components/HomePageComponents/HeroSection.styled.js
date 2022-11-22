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
  /* flex-direction: row; */
  /* background: brown; */
  justify-content: center;
  @media screen and (max-width: 410px) {
    /* max-width: 90%; */
    /* background: brown; */
  }
`
export const HeroTextContainer = styled.div`
  z-index: 11;
  margin-right: 2rem;
  margin-left: 2rem;
  display: flex;
  /* flex-direction: row; */
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  padding: 2rem;
  padding-top: 0;
  padding-bottom: 0;
  /* min-width: 70vw; */
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
    /* top: 10px; */
    top: 20%;
    height: 60%;
    width: 50%;
    border-left: 2px solid var(--background5-main);
  }
  svg {
    height: 150%;
  }
`
