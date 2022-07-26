import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SideButtonWrapper = styled.ul`
  position: sticky;
  /* position: absolute; */
  display: grid;
  place-items: center;
  gap: 2rem;
  margin: 0;
  font-size: 1.8rem !important;
  /* margin-right: 50vw; */
  border-radius: 10px;
  top: 120px;
  width: 150px;
  height: fit-content;
  background: var(--background-blur11);
  z-index: 10;
`

export const ButtonOutline = styled(motion.div)`
  /* .outline { */
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border: 10px solid white;
  border-radius: 50%;
`
export const ButtonItem = styled.li`
  display: block;
  width: 50px;
  height: 50px;
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
