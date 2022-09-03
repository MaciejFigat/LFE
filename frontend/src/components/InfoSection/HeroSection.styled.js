import styled from 'styled-components'

export const HeroSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  overflow: hidden;
  /* min-width: 100vw; */
  max-width: 80%;
  /* background: red; */
  min-height: 400px;
  svg {
    position: absolute;
    top: 110px;
  }
  svg > path:nth-child(1) {
    fill: var(--background1-main);
  }
  svg > path:nth-child(2) {
    fill: var(--background2-main);
  }
  svg > path:nth-child(3) {
    fill: var(--background3-main);
  }
  svg > path:nth-child(4) {
    fill: var(--background4-main);
  }
  svg > path:nth-child(5) {
    fill: var(--background5-main);
  }
  svg > path:nth-child(6) {
    fill: var(--background2-main);
  }
  svg > path:nth-child(7) {
    fill: var(--background3-main);
  }
  svg > path:nth-child(4) {
    fill: var(--background3-main);
  }
  svg > path:nth-child(4) {
    fill: var(--background3-main);
  }
`

export const HeroTextContainer = styled.div`
  z-index: 11;
  display: flex;
  /* flex-direction: row; */
  flex-direction: column;
  justify-content: space-around;
  /* background: var(--background-blur1); */
  /* margin-top: 1rem; */
  padding: 3rem;
  padding-top: 2rem;
  min-width: 70vw;
  /* max-width: 60vw; 
  */
  svg {
    position: static;
  }
`
export const HeroTitle = styled.div`
  /* width: 30%; */
  font-weight: 700;
  font-size: 4.4375rem;
  /* padding-bottom: 3rem; */
  color: var(--background5-main);
  svg > defs:nth-child(2) {
    /* stroke: var(--background3-main); */
    stroke: red;
    stop-color: red;
  }
`
export const HeroStory = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-direction: row;
  /* align-items: flex-start; */
  align-items: flex-end;
  /* justify-content: flex-start; */
  justify-content: flex-end;
  /* border: 1px solid var(--background5-main); */
  /* display: grid;
  place-items: center; */
  /* border-radius: 10px; */
  /* border-radius: 0px 20px 20px 20px; */
  /* width: 50%; */
  padding: 1rem;
  /* height: 300px; */
  font-weight: 700;
  font-size: 2rem;
  color: var(--background5-main);
  /* background: var(--background-blur1); */
  /* background: var(--background1-main); */
`
export const HeroP = styled.p`
  display: grid;
  /* padding: 1rem; */
  place-items: center;
  /* border-radius: 0px 20px 20px 20px; */
  /* height: 3rem; */
  /* border-radius: 5%; */
  /* background: var(--background-blur1); */
  /* background: var(--background1-main); */
`
