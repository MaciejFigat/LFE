import styled from 'styled-components'

export const ScrollSec = styled.div`
  background: var(--background1-main);
  color: var(--background4-main);
  min-height: fit-content;
  @media (max-width: 880px) {
    padding: 0;
  }
`
export const ScrollSectionRow = styled.div`
  display: flex;
  min-height: fit-content;
  flex-direction: ${({ imgStart }) =>
    imgStart === true ? 'row-reverse' : 'row'};
`

export const SectionColumn = styled.div`
  background: none;
  position: sticky;
  top: 0;
  margin-bottom: 15px;
  margin-right: 15px;
  padding-left: 15px;
  max-height: 100vh;
  min-height: fit-content;
  flex-basis: ${({ width }) => (width ? `${width}` : '15%')};
  /* max-width: 10vw; I'm thinking about it. Need another workaround.*/
  overflow: scroll;
  @media (max-width: 440px) {
    flex-basis: 0%;
    margin: 0;
    padding-left: 0px;
  }
  flex-direction: column;
  display: flex;

  @media screen and (min-width: 770px) {
    max-width: 100%;
  }
`
export const SectionColumnScroll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  padding-left: 15px;
  flex-basis: ${({ width }) => (width ? `${width}` : '80%')};
  @media (max-width: 440px) {
    flex-basis: 100%;
    padding-left: 0px;
  }
`

export const Container = styled.div`
  z-index: 1;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`
