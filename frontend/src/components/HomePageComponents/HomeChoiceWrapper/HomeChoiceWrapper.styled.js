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
  /* min-width: 70%; */
  max-width: 80%;
  left: 20%;
  /* height: 3rem; */

  font-size: 1.1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* border-radius: 5px;
  border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);

  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2); */

  color: var(--background4-main);
  /* box-shadow: var(--boxShadow1); */
  /* box-shadow: var(--boxShadowInset4); */
  /* background: linear-gradient(
    90deg,
    transparent 0%,
    var(--background-blur1) 5%,
    var(--background-blur2) 45%,
    var(--background-blur1) 95%,
    transparent 100%
  ); */
  width: 900px;
  @media screen and (max-width: 1391px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 991px) {
    font-size: 0.95rem;
    left: 1rem;
    min-width: 85%;
    max-width: 95%;
    width: 500px;
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

  border-radius: 5px;
  border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);

  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);

  .selected {
    /* top: -2px; */
    transition: 0.3s;
    /* border-top: 2px solid var(--background-blur1); */
    /* border-right: 2px solid var(--background-blur1); */
    /* border-left: 2px solid var(--background2-main); */
    /* border-bottom: 1px solid var(--background2-main); */
    /* background: var(--background-blur1); */
    /* background: linear-gradient(225deg, #202021, #1b1b1c); */

    box-shadow: var(--boxShadow1);

    color: var(--background5-main);
    /* color: var(--background-secondary1); */
    /* box-shadow: var(--boxShadowInset1); */
    @media screen and (min-width: 1101px) {
      /* top: -2px; */
    }
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
  /* border: 2px solid red; */
  /* border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent; */
  /* border-bottom-left-radius: 0; */
  /* border-bottom-right-radius: 0; */
  min-width: fit-content;
  padding: 10px 15px;
  cursor: pointer;
  height: 44px;
  /* height: 3rem; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: brown; */
  /* flex: 1; */
  user-select: none;
  padding: 0;
  margin: 0;
  /* margin-top: -0.5rem; */
  transition: 0.3s;
  width: 100%;
  &:first-of-type {
    left: -1px;
  }
  &:last-of-type {
    left: 0.5px;
  }
  &:hover {
    /* border-top: 1px solid transparent;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent; */
    /* border-top: 1px solid var(--background-secondary1);
    border-right: 1px solid var(--background-secondary1);
    border-left: 1px solid var(--background-secondary1); */
    /* box-shadow: var(--boxShadowInset1); */
    /* box-shadow: inset -0px 0px 1px lime, inset -0px 0px 0px lime; */
    /* &:after {
      content: '';
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 0px;
      box-shadow: -1px 1px 3px lime;
      background: transparent;
    } */
  }
  &:active {
    /* border-top: 1px solid transparent;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent; */
    box-shadow: var(--boxShadowInset4);
    /* color: var(--background4-main); */
    opacity: 0.9;
    /* &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      width: 100%;
      height: 0px;
   
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--background-blur1) 5%,
        var(--background-secondary2) 45%,
        var(--background-blur1) 95%,
        transparent 100%
      );
    } */
  }
  /* &:after {
    content: '';
    position: absolute;
    transition: 0.3s;
    bottom: -4px;
    width: 100%;
    height: 0px;

    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--background-blur1) 5%,
      var(--background-secondary1) 45%,
      var(--background-blur1) 95%,
      transparent 100%
    );
  } */

  @media screen and (min-width: 1050px) {
    /* top: -1px; */
  }
`

export const ChoiceUnderline = styled(motion.div)`
  position: absolute;
  bottom: 0px;
  border-radius: 5px;
  /* border-top-left-radius: 0; */
  /* border-top-right-radius: 0; */
  left: -1px;
  right: 0;
  height: 44px;
  /* background: linear-gradient(
    var(--background-blur1) 20%,
    var(--background2-main) 80%,
    var(--background-blur1)
  ); */
  box-shadow: inset -1px 0px 0px var(--background-secondary1),
    inset 1px 0px 0px var(--background-secondary2),
    0px -0px 0px var(--background-secondary1),
    0px -0px 0px var(--background-secondary1);
  /* background: linear-gradient(
    90deg,
    transparent 0%,
    var(--background-blur1) 5%,
    var(--background-secondary1) 45%,
    var(--background-blur1) 95%,
    transparent 100%
  ); */
  background: transparent;
  @media screen and (min-width: 1220px) {
    /* height: 44px; */
    /* bottom: -2px; */
  }
  /* background: var(--background4-main); */
`
