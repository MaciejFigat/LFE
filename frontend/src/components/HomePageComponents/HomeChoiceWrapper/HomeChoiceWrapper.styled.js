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
  border-radius: 10px;
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
  /* ${({ navTop }) => (navTop ? 'position: absolute;' : 'position: relative;')}
  ${({ navTop }) => (navTop ? 'top: 200px;' : 'top: -1rem;')}
  ${({ navTop }) => (navTop ? 'min-width: 60%;' : 'min-width: 40%;')}
  ${({ navTop }) => (navTop ? 'max-width: 80%;' : 'max-width: 40%;')}
  ${({ navTop }) => (navTop ? 'left:20%;' : 'left: 6rem;')} */
  /* position: absolute; */
  /* top: 200px; */
  min-width: 60%;
  max-width: 80%;
  /* z-index: 8; */
  left: 20%;
  border-radius: 10px;
  height: 3rem;
  font-size: 1.1rem;
  /* border-bottom-left-radius: 0; */
  /* border-bottom-right-radius: 0; */
  /* border-bottom-right-radius: 0; */
  /* ${({ navTop }) =>
    navTop ? 'background: none;' : 'background: var(--background-blur1);'} */
  /* background: var(--background-blur1); */
  /* background: red; */
  border: 1px solid var(--background2-main);
  color: var(--background2-main);
  /* ${({ navTop }) =>
    navTop ? 'border: 1px solid var(--background4-main);' : 'border: none;'} */
  /* border-bottom: none; */
  @media screen and (max-width: 1391px) {
    font-size: 1rem;

    /* ${({ navTop }) => (navTop ? 'max-width: 90%;' : 'max-width: 60%;')}; */
  }
  @media screen and (max-width: 991px) {
    /* ${({ navTop }) =>
      navTop ? 'position: absolute;' : 'position: relative;'}; */
    /* ${({ navTop }) => (navTop ? 'top: 150px;' : 'top: 0rem;')}; */
    font-size: 0.95rem;
    left: 1rem;
    min-width: 85%;
    max-width: 95%;
    /* min-width: 95%; */
  }
  @media screen and (max-width: 601px) {
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr); */
    min-height: fit-content;
    height: 5.75rem;
    border: 1px solid var(--background3-main);
  }
`

export const MainChoiceContainer = styled.main`
  /* position: relative; */
  display: flex;
  justify-content: center;
  /* ${({ navTop }) =>
    navTop ? 'align-items: flex-start;' : 'align-items: center;'};
  ${({ navTop }) => (navTop ? 'top: 100px;' : 'top: 0;')}; */
  flex-grow: 1;
  /* height: 200vh; */
  min-height: fit-content;
  /* height: fit-content; */
  /* background: red; */
  /* max-height: 60vh; */
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
    background: var(--background-blur1);
    color: var(--background5-main);
  }
  @media screen and (max-width: 601px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`
// export const ChoiceItem = styled.li`
export const ChoiceItem = styled.div`
  /* list-style: none; */
  position: relative;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  min-width: fit-content;
  padding: 10px 15px;

  cursor: pointer;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  /* min-width: 0; */
  user-select: none;
  padding: 0;
  margin: 0;
  transition: 0.3s;
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
