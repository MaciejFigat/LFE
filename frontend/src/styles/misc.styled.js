import styled from 'styled-components'
import { motion } from 'framer-motion'

export const OpenDivButtonWrapper = styled.div`
  width: 100%;
  height: 1px;
  display: flex;
  /* align-items: flex-end; */
  justify-content: flex-end;
`
export const OpenDivButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  /* position: relative;
  top: 9px;
  background: var(--background4-main);
  transition: all 0.2s ease-in;
  &:after {
    opacity: 0;
    min-width: 200% !important;
    transition: all 0.2s ease-in;
    font-size: 0.75rem;
    content: 'otwórz';
    color: var(--background4-main);
  }
  &:hover {
    transition: all 0.2s ease-in;
    &:after {
      opacity: 1;
    }
  } */
`
export const OpenBigDivButton = styled(OpenDivButton)`
  position: relative;
  top: -2px;
  &:after {
    position: absolute;
    top: 15px;
    left: -150px;
  }
`
export const OpenDivButtonSecond = styled(OpenBigDivButton)`
  position: relative;
  /* top: 10px; */
  top: ${({ top }) => (top ? top : '10px')};
  left: 10px;
  /* left: ${({ left }) => (left ? left : '-100px')}; */
  &:after {
    position: absolute;
    top: 0;
    /* top: 10px; */
    /* left: -155px; */
  }
`
export const WrapperMotionDiv = styled(motion.div)`
  position: relative;
  width: 100%;
`
export const ClosingDiv = styled(motion.div)`
  width: 35%;
  border-radius: 100px;
  height: 2rem;
  z-index: 10;
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  background: var(--background1-main);
  color: var(--background5-main);
  display: grid;
  place-items: center center;
  transition: 0.2s;
  &:hover {
    box-shadow: var(--boxShadowInset1);
    /* box-shadow: var(--boxShadow1); */
  }
  &:after {
    font-weight: 700;
    content: 'Zamknij';
    text-transform: uppercase;
    position: relative;
    top: 1px;
  }
`

export const ClosingDivBig = styled(ClosingDiv)`
  position: relative;
  color: var(--background4-main);
  top: -0.5rem;
  left: 35%;
`
export const OpenedLayoutDiv = styled(motion.div)`
  height: 100%;
  width: calc(100% + 200px);
  /* //todo here  */
  position: absolute;
  top: -10vh;
  left: -10vw;
  padding: 2rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 20px;
  background: var(--background1-main);
  /* border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2); */

  color: var(--background2-main);
  /* box-shadow: var(--boxShadow4); */
  box-shadow: var(--boxShadowClay4);
  /* border: 1px solid var(--background1-main); */
`
export const OpenedDivBig = styled(OpenedLayoutDiv)`
  /* display: flex;
  background: red;
  justify-content: center;
  align-items: center; */
  height: 80vh;
  width: 80vw;
  top: ${({ yPosition }) => (yPosition ? `${yPosition + 133}px` : '15vh')};

  left: 10vw;
  z-index: 2;
`
export const TwoColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`
export const ChangingColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  /* padding: 1rem;
  margin-bottom: 3rem; */
  @media screen and (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const HorizontalWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const AbsoluteWrapper = styled.div`
  top: ${({ top }) => (top ? `${top}` : '0')};
  left: ${({ left }) => (left ? `${left}` : '0')};
  position: absolute;
`
export const RelativeWrapperStretch = styled.div`
  position: relative;
  display: grid;
  place-items: center;

  height: 100%;
  width: 100%;
`
export const RelativeWrapper = styled.div`
  top: ${({ top }) => (top ? `${top}` : '0')};
  left: ${({ left }) => (left ? `${left}` : '0')};
  position: relative;
`
export const HorizontalWrapperGap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
`
export const DropDownHeaderMisc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  user-select: none;
  height: 26px;
  /* text-transform: lowercase; */
  border-radius: 12px;
  width: 150px;
  border: 1px solid var(--background-blur1);
  padding: 0.2rem 0.4rem 0.2rem 0.5rem;
  font-weight: 700;
  font-size: 0.75rem;
  color: var(--background4-main);
  background: var(--background1-main);
  transition: all 0.3s ease-out;
  text-align: center;
  &:hover {
    color: var(--background4-main);
    box-shadow: var(--boxShadow1);
    background: transparent;
    /* svg {
      color: var(--background4-main) ;
    } */
  }
  &:active {
    color: var(--background4-main);
    box-shadow: var(--boxShadowNone);
    background: transparent;
  }
  @media screen and (max-width: 520px) {
    height: 20px;
    width: 20px;
    border-radius: 50%;

    padding: 0.25rem;
  }
`
export const DropDownHeaderMenu = styled(DropDownHeaderMisc)`
  width: 130px;
  max-width: fit-content;
  box-shadow: var(--boxShadowNone);
  color: var(--background4-main);
  background: transparent;
  height: 32px;
  max-height: 34px;
  /* padding-right: 0.5rem; */
  padding: 0 1.25rem;
  &:hover {
    color: var(--background4-main);
    box-shadow: var(--boxShadow1);
    background: transparent;
    svg {
      color: var(--background4-main);
    }
  }
  &:active {
    background: transparent;
    box-shadow: var(--boxShadowNone);
    color: var(--background-secondary1);
    svg {
      color: var(--background-secondary1);
    }
  }
  @media (max-width: 520px) {
    border-radius: 50%;
    max-height: 32px;
    min-width: 32px;
    padding: 0.5rem;
    margin: 0;
    padding: 0;
  }
`
export const DropDownHeaderMini = styled(DropDownHeaderMisc)`
  /* width: fit-content; */
  padding: 0.5rem;
  /* height: fit-content; */
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: transparent;
  box-shadow: var(--boxShadowNone);
  &:hover {
    box-shadow: var(--boxShadow1);
    background: transparent;
    svg {
      color: var(--background4-main);
    }
  }
  &:active {
    background: transparent;
    box-shadow: var(--boxShadow2);
    svg {
      color: var(--background4-main);
    }
  }
  @media (max-width: 520px) {
    padding: 0.25rem;
    /* height: fit-content; */
    height: 20px;
    width: 20px;
  }
`
export const SpaceAroundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--background4-main);
  transition: 0.2s;
  /* ${DropDownHeaderMisc}:hover & {
    color: var(--background-secondary1);
  } */

  width: 100%;
`
export const SpaceAroundWrapperDropdown = styled(SpaceAroundWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--background4-main);

  &:hover {
    color: var(--background-secondary1);
    svg {
      color: var(--background-secondary1);
    }
  }
  svg {
    color: var(--background4-main);
  }
  /* ${DropDownHeaderMisc}:hover & {
    color: var(--background-secondary1);
  } */
`
export const SvgWrapperMisc = styled.div`
  position: relative;
  top: 2px;
  font-size: 0.95rem;
  svg {
    transition: 0.2s;
    color: var(--background4-main);
  }
  ${DropDownHeaderMisc}:hover & {
    svg {
      /* color: var(--background1-main); */
      color: var(--background-secondary1);
    }
  }
  ${DropDownHeaderMisc}:active & {
    svg {
      color: var(--background-secondary2);
    }
  }
  @media (max-width: 520px) {
    font-size: 0.85rem;
  }
`
export const SvgWrapperMiscSmall = styled(SvgWrapperMisc)`
  /* svg {
    color: var(--background4-main);
   
  } */
`

export const ClayButtonWrapper = styled.div`
  display: grid;
  place-items: center;
  padding: ${({ paddingProps }) => (paddingProps ? paddingProps : '1rem')};
  height: ${({ heightProps }) => (heightProps ? heightProps : 'fit-content')};
  box-shadow: var(--boxShadowClay3);
  background: var(--background-gradient1);
  border-radius: 20px;
`

export const HorizontalWrapperSpace = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`
export const HorizontalWrapperTight = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`
export const HorizontalWrapperBaseLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  @media (max-width: 420px) {
    flex-direction: column;
    /* width: 180px; */
  }
`

export const RelativeRightSvgWrapper = styled.div`
  position: relative;
  right: -10px;
`
export const RelativeSvgWrapper = styled.div`
  position: relative;
  top: ${({ top }) => (top ? top : '2px')};
  /* right: ${({ right }) => (right ? right : '0px')}; */
  left: ${({ left }) => (left ? left : '0px')};
`

export const DotButton = styled.div`
  position: relative;
  top: -10px;
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  /* border-right: 1px solid var(--background-blur1);
  border-top: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2); */
  box-shadow: var(--boxShadowClay3);
  font-weight: 700;
  cursor: help;
  transition: 0.1s;

  &:before {
    position: relative;
    top: ${({ top }) => (top ? top : '0px')};
    /* left: ${({ left }) => (left ? '4px' : '-1px')}; */
    left: ${({ left }) => (left ? left : '-1px')};
    /* left: 3px; */
    content: 'e';
  }
  &:hover {
    box-shadow: var(--boxShadowInset4);
    color: var(--background-secondary1);
    /* border-right: 1px solid transparent;
    border-top: 1px solid transparent;
    border-left: 1px solid var(--background-blur1);
    border-bottom: 1px solid var(--background-blur1); */
  }
  &:active {
    /* background: var(--background2-main); */
  }
`
export const SwitchDivMisc = styled.div`
  width: 28px;
  height: 16px;
  background-color: ${({ isOn }) =>
    isOn ? 'var(--background2-main)' : 'var(--background4-main)'};
  display: flex;
  border-radius: 10px;
  padding: 1px;
  cursor: pointer;
  justify-content: ${({ isOn }) => (isOn ? 'flex-end' : 'flex-start')};
  align-items: center;
`
export const SwitchTextMisc = styled.b`
  font-size: 0.85rem;
  color: ${({ isOn }) =>
    isOn ? 'var(--background2-main)' : 'var(--background5-main)'};
`
export const SwitchHandleMisc = styled(motion.div)`
  width: 14px;
  height: 14px;

  border-radius: 12px;
  background-color: ${({ isOn }) =>
    isOn ? 'var(--background4-main)' : 'var(--background1-main)'};
`

export const HighlightText = styled.b`
  color: var(--background-secondary1);
  /* background: var(--background-blur1); */
`
export const HeroTitleMisc = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  /* color: red; */
  color: var(--background4-main);
`
export const HeroTitleMiscMedium = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: var(--background4-main);
  margin-bottom: 1rem;
`
export const RegularDiv = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
`

export const RegularColumn = styled.div`
  padding: 1rem;
  display: grid;
  place-items: center;
  width: 100%;
`
export const LoadingAbsolutePopup = styled(motion.div)`
  position: absolute;
  display: grid;
  place-content: flex-start center;
  background: var(--background-blur1);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
