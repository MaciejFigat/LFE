import styled from 'styled-components'
import { motion } from 'framer-motion'

export const PictureListWrapper = styled(motion.ul)`
  height: 100vh;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 1140px) {
    height: fit-content;
    align-items: center;
    flex-direction: column;
    padding: 0;
    margin-top: 0.5rem;
  }
`

export const ListWrapper = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  background: linear-gradient(145deg, #3f77f0, #3564ca);
  box-shadow: 5px 5px 4px #1d366e, -5px -5px 4px #59a8ff;
  padding: 20px;
  color: var(--text-main);
  width: 400px;
  max-width: 35vw;
  border-radius: 25px;
  height: fit-content;
  @media (max-width: 1140px) {
    padding: 10px;
    margin-top: 10px;
    max-width: 90vw;
  }
`
export const PictureWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  color: var(--text-main);
  width: 600px;
  margin-right: 20px;
  @media (max-width: 1140px) {
    place-items: center;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
    padding: 0px;
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
  border-radius: 25px;
`

export const ListPicture = styled.img`
  width: ${(props) => (props.width ? props.width : '300px')};
  height: ${(props) => (props.height ? props.height : '20vh')};
  object-fit: cover;
  box-shadow: 5px 5px 4px #1d366e, -5px -5px 4px #59a8ff;
  border-radius: 25px;
  @media (max-width: 1040px) {
    width: 80vw;
    max-height: 35vh;
    border-radius: 25px;
  }
  @media (max-width: 600px) {
    width: 90vw;
    max-height: 35vh;
  }
`

export const ItemWrapper = styled(motion.div)`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
  @media (max-width: 740px) {
    margin-bottom: 5px;
  }
`
export const ListItem = styled(motion.li)`
  padding: 15px;
  border-radius: 10px;
  overflow: hidden;
  color: var(--text-main);
  background: var(--background-tertiary1);
  box-shadow: inset 5px 5px 10px #0c1523, inset -5px -5px 10px #2e558b;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0px;
  }
  @media (max-width: 740px) {
    padding: 10px;
  }
`
export const ListImage = styled.img`
  width: ${(props) => (props.width ? props.width : '50%')};
  height: ${(props) => (props.height ? props.height : '50%')};
  object-fit: cover;
  fill: var(--color1-secondary) !important;
  margin-right: 1rem;
  @media (max-width: 740px) {
    margin-right: 0.5rem;
  }
`

export const ListRow = styled(motion.div)`
  text-align: left;
  width: 93%;
  padding: 1rem;
  line-height: 1.1;
  font-size: 1.3rem;
  font-weight: 600;
  min-height: fit-content;
  color: var(--background-tertiary1);
  background: var(--background-tertiary5);
  box-shadow: inset 6px 6px 12px #6a1a20, inset -6px -6px 12px #ff586c;
  border-radius: 10px;
  margin-top: 12px;
  @media (max-width: 740px) {
    padding: 0.75rem;
    font-size: 0.75rem;
  }
`

export const ListTitleContainer = styled(motion.div)`
  display: grid;
  grid-template: auto 1fr / auto 2fr;

  @media (max-width: 740px) {
    max-height: 2.5rem;
  }
`
export const ListTitle = styled(motion.h2)`
  display: grid;
  place-items: center;
  margin: 0;
  margin-left: 0.5rem;
  font-size: 1.5rem;
  @media (max-width: 740px) {
    font-size: 1.1rem;
    margin-left: 0rem;
  }
`
export const Container = styled.div`
  height: ${(props) => (props.height ? `${props.height}rem` : '100%')};
  width: ${(props) => (props.width ? `${props.width}rem` : '100%')};
`

export const SvgContainer = styled.div`
  height: 'auto';
  width: 'auto';
  display: grid;
  place-items: center;
  max-height: 5.5rem;
  max-width: 5.5rem;
  @media (max-width: 740px) {
    max-height: 3rem;
    max-width: 3rem;
  }
  & svg {
    fill: ${(props) => (props.fillColor ? `${props.fillColor}` : 'yellow')};
    height: ${(props) => (props.height ? `${props.height}rem` : '100%')};
    width: ${(props) => (props.width ? `${props.width}rem` : '100%')};

    @media (max-width: 740px) {
      max-height: 3.5rem;
      max-width: 3.5rem;
    }
  }
`
