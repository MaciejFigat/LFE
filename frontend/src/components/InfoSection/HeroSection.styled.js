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
  flex-direction: row;
  /* background: var(--background-blur1); */
  /* margin-top: 1rem; */
  padding: 3rem;
  min-width: 70vw;
  /* max-width: 60vw; 
  */
`
export const HeroTitle = styled.div`
  width: 30%;
  font-weight: 700;
  font-size: 4.4375rem;

  color: var(--background5-main);
`
export const HeroStory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* display: grid;
  place-items: center; */
  border-radius: 10px;
  width: 70%;
  height: 300px;
  font-weight: 500;
  font-size: 26px;
  color: var(--background5-main);
  /* background: var(--background-blur1); */
`
export const HeroP = styled.p`
  display: grid;
  padding: 1rem;
  place-items: center;
  /* height: 3rem; */
  border-radius: 5%;
  background: var(--background-blur1);
`
