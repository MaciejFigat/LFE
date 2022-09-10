import styled from 'styled-components'
import { motion } from 'framer-motion'
export const HeroSec = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  margin-bottom: 25vh;
  overflow: hidden;
  /* min-width: 100vw; */
  max-width: 80%;
  /* background: red; */
  min-height: 400px;
  /* position: absolute; */
  /* position: relative; */
  margin-bottom: -65vh;
  svg {
    position: relative;

    top: -65vh;
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
  }
`

export const HeroSecNoSvg = styled(HeroSec)`
  margin-bottom: 0;
`
export const HeroTextContainer = styled.div`
  z-index: 11;
  display: flex;
  /* flex-direction: row; */
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  padding: 3rem;
  padding-top: 2rem;
  min-width: 70vw;
  svg {
    position: static;
  }
`
export const HeroTwoContainer = styled.div`
  display: grid;
  place-items: center;
`
export const HeroTitle = styled.div`
  font-weight: 700;
  font-size: 4.4375rem;

  color: var(--background5-main);
  svg > defs:nth-child(2) {
    stroke: var(--background3-main);
  }
`
export const HeroTitleCenter = styled(HeroTitle)`
  display: flex;
  justify-content: center;
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
