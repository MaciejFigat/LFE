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
  /* display: grid;
  place-items: center; */
  /* background: brown; */
  /* width: 100%; */
  /* max-width: fit-content; */
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
  /* width: 400px; */
  width: ${({ amount }) => (amount ? `calc(${amount}*190px)` : '400px')};
  /* min-width: fit-content; */
  /* min-width: 700px; */
  /* max-width: 700px; */
  /* width: fit-content(400px); */
  /* width: fit-content; */
  /* height: 3rem; */

  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* border-radius: 5px; */
  /* border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);

  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2); */
  /* box-shadow: var(--boxShadow1); */
  box-shadow: var(--boxShadowClay3);

  /* background: var(--background-gradient1); */

  color: var(--background4-main);

  padding: 1rem;
  border-radius: 20px;

  /* @media screen and (max-width: 1391px) {
    font-size: 0.95rem;
  } */
  @media screen and (max-width: 991px) {
    font-size: 0.95rem;
    left: 1rem;
    /* min-width: 85%; */
    max-width: 95%;
    /* width: 500px; */
  }
  @media screen and (max-width: 601px) {
    min-height: fit-content;
    height: 5.75rem;
    /* border: 1px solid var(--background2-main); */
  }
  @media screen and (max-width: 780px) {
    /* padding: 0; */
    /* box-shadow: none; */
  }
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    width: 90vw;
    height: fit-content;
    padding: 2.5rem 0.5rem;
  }
`

export const MainChoiceContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  min-height: fit-content;
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
  /* background: var(--background-gradient1); */
  min-width: fit-content;
  padding: 10px 15px;
  cursor: pointer;
  height: 44px;
  /* height: 3rem; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
    box-shadow: var(--boxShadowInset1);
    opacity: 0.9;
  }
  &:active {
    box-shadow: var(--boxShadowInset2);

    opacity: 0.85;
  }

  @media screen and (max-width: 600px) {
    width: 60vw;
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
    /* top: -2px; */
    transition: 0.3s;
    border-top: 1px solid var(--background-blur2);
    border-right: 1px solid var(--background-blur2);
    border-left: 1px solid var(--background-blur1);
    border-bottom: 1px solid var(--background-blur1);

    /* box-shadow: var(--boxShadow2); */

    color: var(--background5-main);
    &:active {
      /* box-shadow: var(--boxShadowInset2); */
    }
    &:hover {
      transition: 0.3s;
      /* box-shadow: var(--boxShadowInset1); */
    }
  }

  @media screen and (max-width: 780px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
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
  @media screen and (max-width: 600px) {
    border-top: none;
    border-bottom: none;
    border-left: 1px solid;
    border-right: 1px solid;
    bottom: -3px;

    border-image-source: linear-gradient(
      to top,
      transparent 20%,
      var(--background-secondary1) 70%,
      transparent 100%
    );
  }
`
