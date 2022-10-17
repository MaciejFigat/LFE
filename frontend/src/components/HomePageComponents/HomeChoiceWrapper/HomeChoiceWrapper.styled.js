import styled from 'styled-components'
import { motion } from 'framer-motion'

export const WrapperWindow = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* height: 100vh; */
  /* height: fit-content; */
  min-height: 100vh;
  /* max-height: fit-content; */
  /* border-radius: 5px; */
  color: var(--background5-main);
  width: 100%;
  /* background: lime; */
`
export const ChoiceTitleContainer = styled.div`
  /* position: relative; */
  max-width: fit-content;
  /* top: -90%; */
  /* ${({ navTop }) => (navTop ? 'left:35%;' : 'left: 2rem;')} */
  /* left: 35%; */
  @media screen and (max-width: 601px) {
    width: 90%;
    margin-bottom: 1rem;
  }
`
export const ChoiceNav = styled.nav`
  min-width: 70%;
  max-width: 80%;
  left: 20%;
  border-radius: 5px;
  height: 3rem;
  font-size: 1.1rem;

  border-left: 1px solid var(--background2-main);
  border-bottom: 1px solid var(--background2-main);
  /* border: 1px solid var(--background2-main); */
  color: var(--background2-main);
  box-shadow: var(--boxShadow1);
  @media screen and (max-width: 1391px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 991px) {
    font-size: 0.95rem;
    left: 1rem;
    min-width: 85%;
    max-width: 95%;
  }
  @media screen and (max-width: 601px) {
    min-height: fit-content;
    height: 5.75rem;
    /* border: 1px solid var(--background2-main); */
  }
`

export const MainChoiceContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  min-height: fit-content;
`
export const MainChoiceBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
`
export const ChoiceList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  .selected {
    transition: 0.3s;
    /* background: var(--background-blur1); */
    box-shadow: var(--boxShadowInset1);
    color: var(--background5-main);
  }

  @media screen and (max-width: 601px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`

export const ChoiceItem = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  min-width: fit-content;
  padding: 10px 15px;
  cursor: pointer;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
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
  @media screen and (min-width: 1050px) {
    /* top: -1px; */
  }
`

export const ChoiceUnderline = styled(motion.div)`
  position: absolute;
  bottom: -5px;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: var(--background4-main);
`
