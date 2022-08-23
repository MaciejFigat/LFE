import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SideButtonWrapper = styled.ul`
  position: sticky;
  display: grid;
  place-items: center;
  padding: 0;
  /* padding-right: -0.55rem; */
  width: 100px;
  gap: 2rem;
  margin: 0;
  font-size: 1.8rem !important;
  border-radius: 10px;
  top: 120px;
  height: fit-content;
  /* background: var(--background-blur1); */
  /* background: var(--background2-main); */
  z-index: 10;
`

export const ButtonOutline = styled(motion.div)`
  position: absolute;
  top: -10px;
  right: -20px;
  bottom: -10px;

  &:after {
    content: '§';
  }
`
export const ButtonItem = styled.li`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 10px;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
`
// export const ButtonList = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   width: 280px;
//   height: 280px;
// `
