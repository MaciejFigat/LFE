import styled from 'styled-components'

export const HeroSec = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
  /* top: 0; */
  /* border-radius: 5%; */
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
    fill: var(--background2-main);
  }
  svg > path:nth-child(2) {
    fill: var(--background3-main);
  }
  svg > path:nth-child(3) {
    fill: var(--background4-main);
  }
  svg > path:nth-child(4) {
    fill: var(--background1-main);
  }
`

export const HeroTextContainer = styled.div`
  z-index: 11;
  display: flex;
  flex-direction: row;
  /* margin-top: 1rem; */
  padding: 3rem;
`
export const HeroTitle = styled.div`
  width: 30%;
  font-weight: 700;
  font-size: 64px;
  color: var(--background5-main);
`
export const HeroStory = styled.div`
  display: grid;
  place-items: center;
  border-radius: 10px;
  width: 70%;
  font-weight: 500;
  font-size: 26px;
  color: var(--background5-main);
  background: var(--background-blur1);
`
