import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAccentColor, getColor } from './functionsMisc'

export const NavIcon = styled(FontAwesomeIcon)`
  position: relative;
  top: ${({ top }) => (top ? top : '0')};
  left: ${({ left }) => (left ? left : '0')};
`

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

  top: ${({ top }) => (top ? top : '10px')};
  left: 10px;

  &:after {
    position: absolute;
    top: 0;
  }
`
export const WrapperMotionDiv = styled(motion.div)`
  position: absolute;

  height: 180px;

  width: 300px;
  max-width: 340px;
`
export const WrapperMotionDivRelative = styled(motion.div)`
  position: relative;
  height: 220px;
  max-width: 340px;
`
export const WrapperMotionDivRelativeSmall = styled(motion.div)`
  position: relative;
  height: 90px;
  max-width: 340px;
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
  }
  &:after {
    font-weight: 700;
    content: 'Zamknij';
    text-transform: uppercase;
    position: relative;
    top: 1px;
  }
`
export const HorizontalLineBottom = styled.div`
  width: 100%;
  height: 1px;
  padding-bottom: var(--gap-medium);
  border-bottom: 1px solid var(--background-blur1);
`
export const HorizontalLineBottomLight = styled(HorizontalLineBottom)`
  border-bottom: 1px solid var(--background-blur1);
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

  position: absolute;
  top: -10vh;
  left: -10vw;
  padding: 2rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 20px;
  background: var(--background1-main);

  border: 1px solid var(--background4-main);
/

  color: var(--background2-main);
  box-shadow: var(--boxShadow4);

`

export const OpenedDivBig = styled(OpenedLayoutDiv)`
  height: 80vh;
  width: 80vw;
  top: ${({ yPosition }) => (yPosition ? `${yPosition + 133}px` : '15vh')};

  left: 10vw;
  z-index: 2;
`
export const TwoColumnsWrapper = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`
export const ChangingColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  @media screen and (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const HeroColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: ${({ details }) => (details ? '3.5rem' : '2.5rem')};
  padding: 2rem;
  @media screen and (min-width: 1720px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1220px) {
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
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`
export const DropDownHeaderMisc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  user-select: none;

  height: 34px;

  border-radius: var(--border-radius2);
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
  /* width: 140px; */
  max-width: fit-content;
  box-shadow: var(--boxShadowNone);
  color: var(--background4-main);
  background: transparent;
  height: 32px;
  max-height: 34px;
  padding: 1rem 1.61rem;
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
  padding: 0.5rem;
  height: 35px;
  width: 35px;
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
export const SvgWrapperMiscSmall = styled(SvgWrapperMisc)``

export const ClayButtonWrapper = styled.div`
  display: grid;
  place-items: center;
  padding: ${({ paddingProps }) => (paddingProps ? paddingProps : '1rem')};
  height: ${({ heightProps }) => (heightProps ? heightProps : 'fit-content')};
  box-shadow: var(--boxShadowClay1);
  background: var(--background-gradient1);
  border-radius: 25px;
`
export const ClayButtonWrapperSecondary = styled(ClayButtonWrapper)`
  box-shadow: none;
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);
  max-width: fit-content;
  margin-bottom: ${({ marginProps }) => (marginProps ? marginProps : '1rem')};
`

export const HeroCanvas = styled.canvas`
  display: grid;
  place-items: center center;
`
export const NumberBackground = styled.b`
  color: ${({ colorProps }) => (colorProps ? colorProps : 'null')};
  background: ${({ backgroundProps }) =>
    backgroundProps ? backgroundProps : 'null'};
  padding: ${({ value }) => (value ? '0.2rem 0.35rem' : '0.15rem 0.55rem')};
  border-radius: 50%;
  margin-right: ${({ value }) => (value ? '0.5rem' : '0.6rem')};
`
export const HeroCanvasLabel = styled.p`
  font-weight: 600;
  color: ${({ colorProps }) => (colorProps ? colorProps : 'null')};
`
export const HorizontalWrapperSpace = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
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
  }
`

export const RelativeRightSvgWrapper = styled.div`
  position: relative;
  right: -10px;
`
export const RelativeSvgWrapper = styled.div`
  position: relative;
  top: ${({ top }) => (top ? top : '2px')};

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
  display: flex;
  align-items: center;
  color: ${({ color }) => getColor(color)};
  a {
    color: ${({ color }) => getColor(color)};
    transition: all 0.2s ease-in-out;
  }
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ color }) => getAccentColor(color)};

    a {
      color: ${({ color }) => getAccentColor(color)};
    }
  }
`
export const HeroTitleMisc = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--background4-main);
`
export const HeroTitleMiscMedium = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: var(--background4-main);
  margin-bottom: 1rem;
`
export const CenteredTitle = styled.h2`
  width: 100%;
  display: grid;
  font-size: 1.55rem;
  place-items: center center;
  color: var(--background4-main);
`
export const RegularDiv = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
`

export const RegularColumn = styled.div`
  display: grid;
  place-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
`
export const LoadingAbsolutePopup = styled(motion.div)`
  position: absolute;
  display: grid;
  color: ${({ isOn }) =>
    isOn ? 'var(--background2-main)' : 'var(--background5-main)'};
  place-content: flex-start center;
  background: var(--background-blur1);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
