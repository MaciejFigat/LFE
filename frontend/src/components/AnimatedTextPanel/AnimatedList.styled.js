import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ListWrapper = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  background: var(--background2-main);
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

export const ListItem = styled(motion.li)`
  padding: 15px;
  // ! border radius passed as proprerty of ListItem in order to animate properly
  /* border-radius: 20px; */
  overflow: hidden;
  color: var(--text-main);
  background: var(--background1-main);
  cursor: pointer;
  &:last-child {
    margin-bottom: 0px;
  }
  @media (max-width: 740px) {
    padding: 10px;
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

export const ListRow = styled(motion.div)`
  text-align: left;
  width: 93%;
  padding: 1rem;
  line-height: 1.1;
  font-size: 1rem;
  font-weight: 400;
  min-height: fit-content;
  color: var(--background4-main);
  background: var(--background2-main);
  border-radius: 10px;
  margin-top: 12px;
  @media (max-width: 740px) {
    padding: 0.75rem;
    font-size: 0.75rem;
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
