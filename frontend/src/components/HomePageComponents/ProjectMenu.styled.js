import styled from 'styled-components'
// import { motion } from 'framer-motion'

// export const HeroSec = styled(motion.div)``
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  /* max-width: 100%; */

  width: 600px;
  white-space: nowrap;
  /* overflow: hidden; */
  overflow-x: scroll;
  /* perspective: 150px; */
  -ms-overflow-style: none;
  scrollbar-width: none !important;
  ::-webkit-scrollbar {
    width: 3.3em;
  }
  /* ::-webkit-scrollbar {
        display: none;
    } */
`
export const ProjectCard = styled.div`
  position: relative;
  /* display: inline-block; */
  display: grid;
  place-items: center;
  height: 40px;
  width: 80px;
  min-width: fit-content;
  background: white;
  margin: 2rem 1rem;
  border-radius: 15px;
  cursor: pointer;
  &:first-of-type {
    margin-left: 15rem;
  }
  &:last-of-type {
    margin-right: 15rem;
  }
`
