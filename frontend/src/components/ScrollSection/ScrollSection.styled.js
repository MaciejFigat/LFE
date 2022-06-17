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
  padding-left: 15px;
  max-height: 100vh;
  min-height: fit-content;
  flex-basis: ${({ width }) => (width ? `${width}` : '15%')};

  overflow: scroll;
  @media (max-width: 1020px) {
    flex-basis: 65%;
  }
  @media (max-width: 440px) {
    flex-basis: 80%;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  padding-left: 15px;
  flex-basis: ${({ width }) => (width ? `${width}` : '80%')};
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
  /* position: sticky; */
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
  border: 1.5px solid var(--background-secondary1);
  &:hover {
    border-color: var(--background-secondary2);
    /* background: var(--success2); */
    background: var(--background-tertiary3);
  }
  border-left: none;
  /* background: var(--background-secondary1); */
`
export const DragDiv = styled.div`
  position: sticky;
  top: 0;
  background: none;
  border-left: 1.5px solid;
  /* border-right: 1.5px solid; */
  border-color: var(--background1-main);
  transition: 0.2s;
  &:active {
    border-color: var(--background2-main);
  }
  &:hover {
    /* opacity: 0.8; */
    border-color: var(--background-secondary1);
  }

  cursor: col-resize;
  height: 100vh;
  width: 5px;
  align-self: flex-start;
`
// ? this encloses {wideSection}
export const SectionColumnScrollResize = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
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
  background: none;
  position: sticky;
  top: 0;
  margin-bottom: 15px;
  padding-left: 15px;
  max-height: 100vh;
  min-height: fit-content;
  /* overflow: scroll; */
  flex-grow: 1;
  /* min-width: 300px; */
  max-width: 70vw;
  width: 10%;
`
