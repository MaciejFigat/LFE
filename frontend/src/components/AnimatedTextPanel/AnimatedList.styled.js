import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ListWrapper = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  height: fit-content;
  padding: 0;
  @media (max-width: 1140px) {
    margin-top: 20px;
  }
`

export const ListItem = styled(motion.li)`
  padding-bottom: 12px;
  // ! border radius passed as proprerty of ListItem in order to animate propre
  /* border-radius: 20px; */
  overflow: hidden;
  background: var(--background1-main);
  cursor: pointer;
  &:last-child {
    margin-bottom: 0px;
  }
  @media (max-width: 740px) {
    padding: 12px;
  }
`
export const ListTitleContainer = styled(motion.div)`
  display: grid;
  /* min-height: fit-content; */
  /* min-width: fit-content; */
  /* width: fit-content; */
  /* height: fit-content; */
  /* padding-right: 0.75rem; */
  /* min-height: max-content; */
  min-height: min-content;
  grid-template: auto 1fr / auto 2fr;
  @media (max-width: 740px) {
    /* max-height: 5.5rem; */
    /* min-height: fit-content; */
    /* height: fit-content; */
  }
`
export const ListTitle = styled(motion.h2)`
  display: grid;
  place-items: center;
  margin: 0;
  word-break: break-all;
  margin-left: 0.5rem;
  font-size: 1.1rem;
  @media (max-width: 740px) {
    font-size: 1rem;
    margin-left: 0rem;
  }
`
export const ListButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const ListButtonContainerLeft = styled(ListButtonContainer)`
  justify-content: flex-start;
`

export const TitleAnimated = styled(motion.div)`
  display: flex;
  /* height: 1.65rem; */
  min-height: max-content;
  /* min-height: min-content; */
  flex-direction: row;
  align-items: center;
  word-break: break-all;
  justify-content: flex-start;
  width: 100%;
  min-width: 250px;
  @media (max-width: 1020px) {
    min-width: 100px;
  }
  color: ${({ isOpen }) =>
    isOpen ? 'var(--background-secondary2);' : 'var(--background4-main);'};
  transition: all 0.3s ease-out;
  &:hover {
    color: var(--background-secondary2);
  }
  &:active {
    color: var(--background-secondary4);
  }
`
// export const TitleContainer = styled(motion.div)``
export const TitleInput = styled(motion.input)`
  /* padding: 2px 3px; */
  color: var(--background-tertiary3);
  /* min-width: min-content; */
  /* min-width: max-content; */
  /* min-width:300px; */
/* min-height: 200px; */
  /* max-width: 100%; */
  /* min-height: min-content; */
  padding: 0;
  margin: 0;
  /* pointer-events: none; */
  line-height: normal;
  background: transparent;
  /* word-break: break-all; */
  outline: 0
  background-color: transparent;
  border: none; 
    &:focus{
      border: none; 
      outline: 0;
    }

  font-size: 1rem;
`
export const DescriptionAnimated = styled(motion.div)`
  display: flex;
  /* height: 1.65rem; */
  align-items: baseline;
  /* justify-content: flex-start; */
  /* width: 100%; */
  /* min-width: 340px; */
  color: 'var(--background4-main);';
  transition: all 0.3s ease-out;
`
export const DescriptionInput = styled(motion.textarea)`
  outline: none;
  border: none;
  color: var(--background-tertiary4);
  transition: all 0.3s ease-out;
  background: none;
  line-height: 1.1;
  padding: 0.8rem 1.2rem;
  min-width: 100%;
  /* max-width: 100%; */
  cursor: text;
  min-height: 100px;
  /* min-width: 300px; */
  /* resize: none; */
  overflow-y: auto;
  font-size: 0.9rem;
  line-height: 1.2;
  /* padding: 0.8rem 1.2rem; */
  /* margin-bottom: 20px; */
  transition: 1.9s;
  /* font-weight: 600; */
  &::placeholder {
    color: var(--background-tertiary3);
    font-weight: 400;
  }
  @media (max-width: 798px) {
    font-size: 15px;
    font-weight: 500;
  }
`
export const DescriptionDiv = styled(motion.div)`
  max-width: 90%;
  /* overflow-wrap: break-word; */
  word-break: break-all;
`

export const ListRow = styled(motion.div)`
  text-align: left;
  padding: 0.75rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--background4-main);
  background: var(--background2-main);
  border-radius: 3px;
  margin-top: 9px;
  min-height: 125px;
  min-width: 90%;
  max-width: 100%;
  @media (max-width: 740px) {
    padding: 0.55rem;
    font-size: 0.65rem;
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
