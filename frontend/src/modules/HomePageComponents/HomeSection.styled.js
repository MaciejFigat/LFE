import styled from 'styled-components'
import { handleSectionColor } from './utilsSection'
import { Marker } from 'react-mark.js'

export const InfoSec = styled.div`
  max-width: 80%;
  @media (min-width: 1180px) {
    max-width: 1084px;
  }
  align-self: flex-end;
  ${(props) => handleSectionColor(props).color}
  ${({ paddingTop }) =>
    paddingTop === 'small' ? 'padding: 30px 0;' : 'padding: 35px 0;'};

  ${(props) => handleSectionColor(props).sectionBackground}
  /* ${(props) => handleSectionColor(props).sectionBackgroundGradient} */
  /* background: red !important; */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  /* border-radius: 8px; */
  border: solid 1px;
  border-color: ${(props) => handleSectionColor(props).color};

  @media (max-width: 880px) {
    ${({ paddingTop }) =>
      paddingTop === 'small' ? 'padding: 20px 0;' : 'padding: 25px 0;'};
  }
  @media (max-width: 380px) {
    padding: 10px 0;
  }

  margin-bottom: 1rem;
  margin-left: 1rem;
`
export const InfoSecSimple = styled(InfoSec)`
  padding: 0.25rem;
  padding-top: 0.5rem;

  padding-bottom: 1.5rem;
  margin: 0;
  min-height: min-content;
  max-width: 650px;
`
export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  /* align-items: flex-start; */
  flex-direction: ${({ imgStart }) =>
    imgStart === true ? 'row-reverse' : 'row'};
  /* border: ${({ border }) =>
    border === true ? '1px solid var(--background2-main)' : 'none'}; */
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  color: var(--background4-main);
  /* box-shadow: var(--boxShadowInset1); */
  padding: ${({ border }) => border === true && '1.5rem'};
  border-radius: 20px;
  @media (max-width: 880px) {
    flex-direction: ${({ imgStart }) =>
      imgStart === true ? 'column-reverse' : 'column'};
    margin: 0;
    padding: 1rem 0.75rem;
    /* padding-top: 1rem; */
    /* padding-bottom: 1rem; */
  }
`
export const InfoColumn = styled.div`
  padding-left: 0.5rem;
  flex-basis: 70%;
  display: flex;
  justify-content: center;
  max-width: 100%;
  @media screen and (min-width: 770px) {
    padding: 0;
  }
`
export const InfoColumnShort = styled(InfoColumn)`
  padding: 0;
  flex-basis: 30%;
  min-height: 120%;
  text-align: left;
  /* border-color: ${(props) => handleSectionColor(props).color}; */
  box-shadow: var(--boxShadowInset1);
  border-radius: 20px;
  color: var(--background4-main);
  /* box-shadow: var(--boxShadow1); */
  /* ${({ imgStart }) =>
    imgStart
      ? 'border: 1px solid var(--background-blur1)'
      : 'border: 1px solid var(--background-blur1)'}; */
  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur1);
  border-top: 1px solid var(--background-blur1);
  @media screen and (max-width: 901px) {
    border: none;
    box-shadow: none;
  }
`
export const InfoColumnShortSimple = styled(InfoColumnShort)`
  padding-left: 0rem;
  padding-right: 0.5rem;
`
export const HeroWrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 60%;
  padding-left: 2rem;
  overflow: scroll;
  margin-bottom: 2rem;
  /* max-height: 80vh; */
`
export const HeroWrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-top: 4rem;
`
export const HeroResultScroller = styled.div`
  margin-top: 3rem;
  /* height: 600px; */
  overflow: scroll;
`
export const HeroTextWrapper = styled.div`
  width: 80%;
  /* border: 1px solid var(--background4-main); */
  /* border-left: 1px solid var(--background1-main);
  border-bottom: 1px solid var(--background1-main); */
  color: var(--background4-main);
  /* box-shadow: var(--boxShadowInset1); */
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 991px) {
    padding: 1rem;
  }
`
export const TextWrapperParSimple = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.6rem;
  font-weight: 500;
  color: var(--background4-main);
`
export const TextWrapper = styled.div`
  /* background: brown; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: 1rem;
  svg > path {
    fill: var(--background4-main) !important;
  }
`
export const TextWrapperSimple = styled(TextWrapper)`
  padding: 0.5rem;
  padding-right: 0;
`
export const TextWrapperSimpleShort = styled(TextWrapperSimple)`
  text-align: left;
`
export const Container = styled.div`
  z-index: 1;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  padding-right: 20px;
  padding-left: 20px;
  @media screen and (max-width: 991px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`

export const Button = styled.button`
  border-radius: 4px;
  white-space: nowrap;
  min-width: fit-content;
  padding: ${({ large }) => (large ? '12px 34px' : '10px 12px')};
  font-size: ${({ fontLarge }) => (fontLarge ? '22px' : '16px')};
  /* buttonBackground */
  border: solid 1px;
  background: none;
  ${(props) => handleSectionColor(props).buttonBackground}
  outline: none;
  cursor: pointer;

  transition: all 0.3s ease-in;
  //!
  margin-right: 1rem;

  /* buttonColor */
  ${(props) => handleSectionColor(props).buttonColor}
  /* color for the link inside the button */
  a {
    ${(props) => handleSectionColor(props).buttonColor}
  }
  &:hover {
    transition: all 0.3s ease-in;
    /* buttonBackgroundHover */
    ${(props) => handleSectionColor(props).buttonBackgroundHover}
    /* buttonColorHover */
    ${(props) => handleSectionColor(props).buttonColorHover}
    /* buttonColor as color for the link nested inside the Button */
  a {
      transition: all 0.3s ease-out;
      ${(props) => handleSectionColor(props).buttonColorHover}
    }
  }

  @media screen and (max-width: 760px) {
    padding: ${({ large }) => (large ? '8px 14px' : '6px 12px')};
    font-size: ${({ fontLarge }) => (fontLarge ? '18px' : '16px')};
  }
`
export const ButtonLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  /* buttonColor */
  /* ${(props) => handleSectionColor(props).buttonColor} */
  /* buttonColorHover */
  ${Button}:hover & {
    /* for some reason the props are not read in this instance REMIND ME to check for issues in styled-components */
    /* ${(props) => handleSectionColor(props).buttonColorHover} */
  }
`

export const TopLine = styled.div`
  /* toplineColor */
  ${(props) => handleSectionColor(props).toplineColor}
  font-size: 1.1rem;
  line-height: 1.2rem;
  font-weight: 500;
  letter-spacing: 1.4px;
  margin-bottom: 10px;
  /* svg {
    fill: red;
  } */
  a {
    color: var(--background2-main);
  }
`
export const TopLineSimple = styled(TopLine)`
  font-size: 0.85rem;
  line-height: 14px;
  font-weight: 500;
  letter-spacing: 1px;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.05;
  /* headingColor */
  ${(props) => handleSectionColor(props).headingColor};
  @media screen and (max-width: 760px) {
    font-size: 36px;
  }
`
export const Subtitle = styled.p`
  margin: 0;
  margin-top: 10px;
  margin-bottom: 15px;
  text-align: justify;
  /* text-align: left; */
  font-size: 1.1rem;
  line-height: 1.2rem;
  letter-spacing: 0.025em;
  font-weight: 500;
  transition: 0.3s;
  /* subtitleColor */
  ${(props) => handleSectionColor(props).subtitleColor}
  &:hover {
    ${(props) => handleSectionColor(props).buttonColorHover}
  }
`
export const SubtitleShort = styled(Subtitle)`
  text-align: left;
  &:hover {
    ${(props) => handleSectionColor(props).subtitleColor}
  }
`
export const SubtitleSimple = styled(Subtitle)`
  margin: 0;
  /* display: flex; */
  /* flex-direction: row; */
  text-align: left;
  font-size: 0.95rem;
  line-height: 1.15rem;
  letter-spacing: 0em;
  font-weight: 500;
`

export const HomeContentWrapper = styled.div`
  display: grid;
  z-index: 12;
  place-items: center;
`
export const CenterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const CenterWrapperSimple = styled(CenterWrapper)`
  margin-bottom: 0.5rem;
  height: fit-content;
  width: 95%;
`
export const DataContainerSimple = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`

// export const HighlightMarker = styled.div`
export const HighlightMarker = styled(Marker)`
  mark {
    /* background-color: red !important; */
    /* background-color: white !important; */
    /* color: red !important; */
  }
`
