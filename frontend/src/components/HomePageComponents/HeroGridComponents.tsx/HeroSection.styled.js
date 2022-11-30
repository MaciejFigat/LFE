import styled from 'styled-components'

import { Marker } from 'react-mark.js'

export const InfoSec = styled.div`
  max-width: 90%;
  color: var(--background4-main);
  padding: 3rem;
  padding-top: 4rem;
  border-radius: 20px;
  border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);

  /* margin-bottom: 1rem; */
  @media (min-width: 1180px) {
    max-width: 1086px;
  }
  @media (max-width: 1180px) {
    padding: 2rem;
    padding-top: 3rem;
  }
  @media (max-width: 880px) {
    padding: 1rem;
  }
  @media (max-width: 380px) {
    padding: 10px 0;
  }
`
export const Subtitle = styled.p`
  margin: 0;
  margin-top: 10px;
  margin-bottom: 1rem;
  text-align: left;
  cursor: pointer;
  font-size: 1.1rem;
  line-height: 1.5rem;
  letter-spacing: 0em;
  font-weight: 500;
  transition: 0.2s;

  &:hover {
    color: var(--background-secondary1);
  }
  /* @media screen and (max-width: 991px) {
    text-align: left;
  } */
`
export const SubtitleSimple = styled(Subtitle)`
  margin: 0;
  text-align: left;
  font-size: 0.95rem;
  line-height: 1.25rem;
  letter-spacing: 0.025em;

  font-weight: 500;
  margin-bottom: 0.5rem;
  &:last-of-type {
    margin-bottom: 0rem;
  }
  @media screen and (min-width: 1220px) {
    font-size: 1rem;
    line-height: 1.4rem;
  }
`

export const InfoSecSimple = styled(InfoSec)`
  border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);
  border-radius: 20px;
  background: var(--background1-main);

  box-shadow: var(--boxShadowNone);
  padding: 0.25rem;
  padding-top: 0.5rem;
  border-width: 1px;
  padding-bottom: 1.5rem;
  margin: 0;
  min-height: min-content;
  min-width: 100%;
  max-width: 400px;
  transition: 0.2s;
  &:hover {
    border-color: var(--background-secondary1);
    ${SubtitleSimple} {
   
      color: var(--background-secondary1);
  
  }
 
`
export const InfoRow = styled.div`
  display: flex;
  /* margin: 0 -15px -15px -15px; */
  gap: 1rem;
  /* min-width: 1086px; */
  /* min-width: 100%; */
  flex-direction: ${({ imgStart }) =>
    imgStart === true ? 'row-reverse' : 'row'};
  @media screen and (max-width: 991px) {
    margin: 0;
  }
  @media (max-width: 1220px) {
    gap: 1rem;
    min-width: fit-content;
    flex-direction: ${({ imgStart }) =>
      imgStart === true ? 'column' : 'column-reverse'};
  }
`

export const InfoColumn = styled.div`
  /* padding-left: 0.5rem; */
  flex-basis: 60%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  max-width: 35rem;
  @media screen and (max-width: 1220px) {
    /* padding-top: 2rem; */
  }
`
export const InfoColumnSimple = styled(InfoColumn)`
  padding-top: 0.5rem;
  padding: 0rem;
`
export const InfoColumnShort = styled(InfoColumn)`
  /* display: flex; */
  padding: 0;
  /* padding-left: 1rem; */
  /* padding-right: 1rem; */
  flex-basis: 40%;
  min-height: 120%;
  text-align: left;

  ${({ imgStart }) =>
    imgStart
      ? 'border-left: 1px solid var(--background-blur1)'
      : 'border-right: 1px solid var(--background-blur1)'};
  @media screen and (max-width: 1220px) {
    /* padding-bottom: 1rem; */
    border-bottom: 1px solid var(--background-blur1);
    border-left: none;
    border-right: none;
  }
`
export const InfoColumnShortSimple = styled(InfoColumnShort)`
  padding-left: 0rem;
  padding-right: 0.5rem;
  border: none;
`
export const TextWrapper = styled.div`
  width: 100%;
  hyphens: auto;
  padding: 1rem 1rem 0rem;
  /* padding-right: 1rem; */
  /* padding-left: 1rem; */
  @media screen and (max-width: 991px) {
    border-left: none;
    border-right: none;
    width: 90%;
    padding: 0;
  }
`
export const TextWrapperShort = styled(TextWrapper)`
  @media screen and (max-width: 880px) {
    display: flex;
    /* text-align: center; */
    flex-direction: column;
    /* width: 70%; */
    /* margin-bottom: 2rem; */
  }
  @media screen and (max-width: 440px) {
    width: 90%;
  }
`
export const TextWrapperSimple = styled(TextWrapper)`
  /* padding: 0.5rem; */
  /* padding-right: 0.25rem; */
  margin: 0;
`
export const TextWrapperSimpleShort = styled(TextWrapperSimple)`
  text-align: left;
`
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  /* padding-right: 20px; */
  /* padding-left: 20px; */
  @media screen and (max-width: 991px) {
    /* padding-right: 10px; */
    /* padding-left: 10px; */
  }
`

export const Button = styled.button`
  border-radius: 5px;
  white-space: nowrap;
  min-width: fit-content;
  padding: ${({ large }) => (large ? '12px 34px' : '10px 18px')};
  font-size: ${({ fontLarge }) => (fontLarge ? '22px' : '16px')};

  background: none;
  /* border: none; */

  /* box-shadow: var(--boxShadowClay1); */
  background: var(--background-gradient1);
  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);

  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);

  border-left: 1px solid transparent;
  border-bottom: 1px solid transparent;

  outline: none;
  cursor: pointer;

  transition: all 0.2s ease-in;
  //!
  margin-right: 1rem;

  a {
    color: var(--background4-main);
  }
  &:hover {
    box-shadow: var(--boxShadowInset1);
    transition: all 0.2s ease-in;
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
    border-left: 1px solid var(--background-blur1);
    border-bottom: 1px solid var(--background-blur1);

    a {
      transition: all 0.2s ease-out;
      color: var(--background-secondary1);
    }
  }
  &:active {
    a {
      box-shadow: var(--boxShadowInset2);
      color: var(--background-secondary1) !important;
      background: red;
    }
  }

  @media screen and (max-width: 760px) {
    padding: ${({ large }) => (large ? '10px 14px' : '8px 12px')};
    font-size: ${({ fontLarge }) => (fontLarge ? '18px' : '16px')};
  }
`
export const ButtonLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;

  ${Button}:hover & {
    /* for some reason the props are not read in this instance REMIND ME to check for issues in styled-components */
  }
`
export const TopLine = styled.div`
  color: var(--background4-main);
  font-size: 1.3rem;
  line-height: 16px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1.2px;
  margin-bottom: 1rem;
`
export const TopLineShort = styled(TopLine)`
  font-size: 1.1rem;
  margin-bottom: 0rem;
  margin-top: 1.5rem;
  letter-spacing: 1.2px;
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
  line-height: 1.05rem;

  @media screen and (max-width: 760px) {
    font-size: 36px;
  }
`

export const SubtitleShort = styled(Subtitle)`
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 0rem;
  font-weight: 400;
  &:hover {
    color: var(--background4-main);
  }
`
export const SubtitleShortLonger = styled(Subtitle)`
  font-size: 1.1rem;
  line-height: 1.5rem;
  letter-spacing: 0em;
`

export const HomeContentWrapper = styled.div`
  /* margin-top: -30vh; */
  display: grid;
  z-index: 12;

  place-items: center;
`
export const CenterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
/* export const CenterWrapperSimple = styled(CenterWrapper)`
  margin-bottom: 0.5rem;
  height: fit-content;
 

  width: 95%;
` */
export const DataContainerSimple = styled.div`
  display: grid;
  place-items: ${({ moreColumns }) => (moreColumns ? 'flex-start' : 'center')};

  /* //todo resizable narrow column grid columns */
  grid-template-columns: ${({ width }) =>
    width < 600 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'};

  @media (min-width: 1640px) {
    grid-template-columns: ${({ width }) =>
      width < 766 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'};
    grid-template-columns: ${({ width }) => width < 400 && 'repeat(3, 1fr)'};
  }
  @media (min-width: 1820px) {
    grid-template-columns: ${({ width }) =>
      width < 966 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'};
    grid-template-columns: ${({ width }) => width < 500 && 'repeat(3, 1fr)'};
  }
  @media (max-width: 1340px) {
    grid-template-columns: 'repeat(1, 1fr)';
  }
  /* //todo resizable narrow column grid columns END */
  /* background: ${({ width }) => (width < 700 ? 'red' : 'blue')}; */
  /* grid-template-columns: repeat(2, 1fr); */
  gap: 1rem;
`

// export const HighlightMarker = styled.div`
export const HighlightMarker = styled(Marker)`
  mark {
    /* background-color: red !important; */
    /* background-color: white !important; */
    /* color: red !important; */
  }
`

export const SearchBarPaginationSvgWrapper = styled.div`
  position: absolute;
  top: 73%;
  left: -3%;
`
