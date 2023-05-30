import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ScrollSec = styled.div`
  margin-top: ${({ topMargin }) => (topMargin ? topMargin : '0')};
  color: var(--background4-main);
  min-height: fit-content;
  width: 100%;
  border-top: 1px solid var(--background-blur2);
  @media (max-width: 880px) {
    padding: 0;
  }
`
export const ScrollSectionRow = styled.div`
  display: flex;
  min-height: fit-content;
  justify-content: center;
  width: 100%;
  flex-direction: ${({ imgStart }) =>
    imgStart === true ? 'row-reverse' : 'row'};
  @media (max-width: 880px) {
    flex-direction: column;
  }
`

export const SectionColumn = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 0;
  margin-bottom: 15px;
  padding-left: 15px;
  max-height: 100vh;
  min-height: fit-content;

  flex-basis: ${({ width }) => (width ? `${width}` : '50%')};

  overflow: scroll;
  @media screen and (max-width: 1490px) {
    flex-basis: 50%;
  }
  @media (max-width: 880px) {
    position: relative;
    max-height: fit-content;
  }
  @media (max-width: 1220px) {
    flex-basis: 65%;
  }
  @media (max-width: 440px) {
    flex-basis: 80%;
    margin: 0;
    padding-left: 0px;
  }

  @media screen and (min-width: 770px) {
    max-width: 100%;
  }
`

export const SectionColumnScroll = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;

  margin-bottom: 15px;
  padding-left: 15px;

  flex-basis: ${({ width }) => (width ? `${width}` : '50%')};
  @media (max-width: 1020px) {
    flex-basis: 35%;
  }
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
// todo draggable parts

export const DragButton = styled.div`
  position: relative;
  top: 50vh;
  left: -1px;
  height: 30px;
  width: 13px;
  z-index: 4;

  // todo border
  transition: 0.2s;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  border: 1.5px solid var(--background3-main);
  &:hover {
    border-color: var(--background3-main);

    background: var(--background2-main);
  }
  border-left: none;
`
export const DragDiv = styled.div`
  position: sticky;
  top: 0;
  background: none;
  border-left: 1.5px solid;
  /* border-color: var(--background-blur2); */
  border-color: var(--background1-main);
  transition: 0.2s;
  &:active {
    border-color: var(--background2-main);
  }
  &:hover {
    border-color: var(--background3-main);
  }

  cursor: col-resize;
  height: 100vh;
  width: 5px;
  align-self: flex-start;
`
// ? this encloses {wideSection}
//! change into motion component

export const SectionColumnScrollResize = styled(motion.div)`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;

  align-items: center;

  padding-left: 15px;

  //* the following sets width depending on whether it's narrowOption (used in DocResult display) or regular
  ${(props) =>
    props.narrowOption && props.widthNarrow && `width: ${props.widthNarrow}`};
  ${(props) =>
    !props.narrowOption && props.widthNarrow && `width: ${props.width}`};
  min-width: 400px;
  max-width: 90vw;
`
// ? this encloses {narrowSection}
export const SectionColumnResize = styled.div`
  display: grid;
  place-items: flex-start center;

  background: var(--background1-main);
  position: sticky;
  top: 0px;

  margin-bottom: 0;
  padding-left: 15px;
  padding-bottom: 0;
  max-height: 100vh;
  min-height: fit-content;
  overflow: scroll;
  flex-grow: 1;

  max-width: 70vw;
  width: 10%;
  ::-webkit-scrollbar {
    width: 0px;
  }
`
