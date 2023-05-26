import styled from 'styled-components'
import { motion } from 'framer-motion'

export const WrapperWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  color: var(--background5-main);
  width: 100%;
`
export const ChoiceTitleContainer = styled.div`
  display: grid;
  place-items: center;
  @media screen and (max-width: 601px) {
    width: 90%;
    margin-bottom: 1rem;
  }
`
export const ChoiceNav = styled.nav`
  width: ${({ amount }) => (amount ? `calc(${amount}*190px)` : '400px')};
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: var(--boxShadowClay3);
  padding: 1rem;
  border-radius: 20px;
  @media screen and (max-width: 1020px) {
    max-width: 95%;
  }
  @media screen and (max-width: 520px) {
    font-size: 0.85rem;
  }
`

export const MainChoiceContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  width: 100%;
`
export const MainChoiceBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
`
export const ChoiceItem = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  border-radius: 10px;
  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  min-width: fit-content;
  padding: 10px 15px;
  cursor: pointer;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
  padding: 0;
  margin: 0;
  transition: 0.3s;
  width: 100%;

  &:first-of-type {
    left: -1px;
  }
  &:last-of-type {
    left: 0.5px;
  }
  &:hover {
    box-shadow: var(--boxShadowInset1);
    opacity: 0.9;
  }
  &:active {
    box-shadow: var(--boxShadowInset2);

    opacity: 0.85;
  }
  @media screen and (max-width: 1020px) {
    height: 34px;
  }
`

export const ChoiceList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  gap: 0.5rem;
  border-radius: 5px;
  transition: 0.2s;

  .selected {
    transition: 0.3s;
    border-top: 1px solid var(--background-blur2);
    border-right: 1px solid var(--background-blur2);
    border-left: 1px solid var(--background-blur1);
    border-bottom: 1px solid var(--background-blur1);
    color: var(--background5-main);
    &:hover {
      transition: 0.3s;
    }
  }
`

export const ChoiceUnderline = styled(motion.div)`
  position: absolute;
  bottom: -1px;
  border-radius: 5px;
  left: 0px;
  right: 0;
  height: 44px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-image-slice: 1;
  border-width: 1px;
  border-image-source: linear-gradient(
    to left,
    transparent 0%,
    transparent 20%,
    var(--background-secondary1) 60%,
    transparent 90%,
    transparent 100%
  );

  background: transparent;
  @media screen and (max-width: 1020px) {
    height: 34px;
  }
`
