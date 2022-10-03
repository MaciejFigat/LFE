import styled from 'styled-components'
import { motion } from 'framer-motion'
export const HeroSec = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: fit-content;

  /* svg {
    position: relative;
  }

  svg > path:nth-child(1) {
    fill: var(--background1-main);
  }
  svg > path:nth-child(2) {
    fill: var(--background3-main);
  }
  svg > path:nth-child(3) {
    fill: var(--background2-main);
  }
  svg > path:nth-child(4) {
    fill: var(--background4-main);
  }
  svg > path:nth-child(5) {
    fill: var(--background5-main);
  }
  svg > path:nth-child(6) {
    fill: var(--background1-main);
  }
  svg > path:nth-child(7) {
    fill: var(--background2-main);
  }
  svg > path:nth-child(8) {
    fill: var(--background2-main);
  }
  svg > path:nth-child(8) {
    fill: var(--background2-main);
  }
  svg > path:last-child {
    fill: var(--background1-main);
  } */
`

export const HeroSecNoSvg = styled(HeroSec)`
  margin-top: 2rem;
  margin-bottom: 0;
`
export const HeroTextContainer = styled.div`
  z-index: 11;
  margin-right: 2rem;
  margin-left: 5rem;
  display: flex;
  /* flex-direction: row; */
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  padding: 2rem;
  padding-top: 0;
  padding-bottom: 0;
  min-width: 70vw;
  @media screen and (max-width: 771px) {
    margin-right: 0.25rem;
    margin-left: 0.25rem;
  }
  svg {
    position: static;
  }
`
export const HeroTwoContainer = styled.div`
  display: grid;
  place-items: center;
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
    svg {
      position: relative;
      top: 20px;
      left: 70px;
    }
  }
`
export const HeroTitleLeft = styled.div`
  display: flex;
  font-size: 2rem;
  font-family: 'raleway';
  font-weight: 700;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.5rem;
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
  color: var(--background5-main);
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
