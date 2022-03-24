import styled from 'styled-components'

export const ScrollSec = styled.div`
  background-image: linear-gradient(
    to bottom,
    #a4dbe4,
    #69e6de,
    #45eeb9,
    #6af07b,
    #a8eb12
  );
  color: var(--bluegreen4);
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
  backdrop-filter: blur(24px) saturate(110%);
  backdrop-filter: ${({ transparent }) =>
    transparent ? 'blur(0) saturate(100%)' : 'blur(24px) saturate(110%)'};
  -webkit-backdrop-filter: ${({ transparent }) =>
    transparent ? 'blur(0px) saturate(100%)' : 'blur(24px) saturate(110%)'};
  background: ${({ transparent }) =>
    transparent ? 'none' : 'rgba(0, 0, 0, 0.015)'};
  border-right: ${({ transparent }) =>
    transparent ? 'none' : '1px solid rgba(255, 255, 255, 0.125)'};
  position: sticky;
  top: 0;
  margin-bottom: 15px;
  margin-right: 15px;
  padding-left: 15px;
  max-height: 100vh;
  min-height: fit-content;
  flex-basis: ${({ width }) => (width ? `${width}` : '15%')};
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
