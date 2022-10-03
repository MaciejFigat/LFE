import styled from 'styled-components'
import { motion } from 'framer-motion'

export const WrapperWindow = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  border-radius: 10px;
  color: var(--background5-main);
  width: 100%;
`
export const ChoiceTitleContainer = styled.div`
  position: relative;
  max-width: fit-content;
  /* top: -90%; */
  /* ${({ navTop }) => (navTop ? 'left:35%;' : 'left: 2rem;')} */
  left: 35%;
`
export const ChoiceNav = styled.nav`
  /* ${({ navTop }) => (navTop ? 'position: absolute;' : 'position: relative;')}
  ${({ navTop }) => (navTop ? 'top: 200px;' : 'top: -1rem;')}
  ${({ navTop }) => (navTop ? 'min-width: 60%;' : 'min-width: 40%;')}
  ${({ navTop }) => (navTop ? 'max-width: 80%;' : 'max-width: 40%;')}
  ${({ navTop }) => (navTop ? 'left:20%;' : 'left: 6rem;')} */
  position: absolute;
  top: 200px;
  min-width: 60%;
  max-width: 80%;
  z-index: 11;
  left: 20%;
  border-radius: 10px;
  height: 3rem;
  font-size: 1.2rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  /* border-bottom-right-radius: 0; */
  ${({ navTop }) =>
    navTop ? 'background: none;' : 'background: var(--background-blur1);'}
  ${({ navTop }) =>
    navTop ? 'border: 1px solid var(--background4-main);' : 'border: none;'}
  /* border-bottom: none; */
  @media screen and (max-width: 1391px) {
    font-size: 1.1rem;

    /* ${({ navTop }) => (navTop ? 'max-width: 90%;' : 'max-width: 60%;')}; */
  }
  @media screen and (max-width: 991px) {
    ${({ navTop }) => (navTop ? 'position: absolute;' : 'position: relative;')};
    ${({ navTop }) => (navTop ? 'top: 150px;' : 'top: 0rem;')};
    font-size: 1.05rem;
    left: 1rem;
    min-width: 95%;
  }
`

export const MainChoiceContainer = styled.main`
  display: flex;
  justify-content: center;
  ${({ navTop }) =>
    navTop ? 'align-items: flex-start;' : 'align-items: center;'};

  position: relative;
  ${({ navTop }) => (navTop ? 'top: 80px;' : 'top: 0;')};
  flex-grow: 1;
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
    background: var(--background-blur2);
  }
`
// export const ChoiceItem = styled.li`
export const ChoiceItem = styled.div`
  /* list-style: none; */
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  min-width: fit-content;
  padding: 10px 15px;
  position: relative;
  cursor: pointer;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  /* min-width: 0; */
  position: relative;
  user-select: none;
  padding: 0;
  margin: 0;
  .underOn {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--background-secondary3);
  }
  .underOff {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
  }
`

export const ChoiceUnderline = styled(motion.div)`
  position: absolute;
  bottom: -5px;
  border-radius: 5px;
  left: 0;
  right: 0;
  height: 5px;
  background: var(--background-secondary3);
`
