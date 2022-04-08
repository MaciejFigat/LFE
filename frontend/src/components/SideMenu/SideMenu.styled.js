import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SideMenuDataColumn = styled(motion.div)`
  width: 100%;
  position: absolute;
  top: 0;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`

export const SideMenuWrapper = styled(motion.div)`
  position: sticky;
  top: 50px;
  /* right: 0; */
  left: 100%;
  z-index: 2;
  max-width: fit-content;
  min-width: 700px;

  /* margin-right: 1.5rem; */
`
export const BackgroundDiv = styled(motion.div)`
  /* position: absolute; */
  /* position: relative; */
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  max-height: fit-content;
  min-height: 100vh;
  width: 300px;
  /* min-width: fit-content; */
  min-width: 100%;
  /* padding: 0.5rem; */
  padding-right: 1rem;
  margin-right: 1.5rem;
  /* padding-top: 1.5rem; */
  background: var(--background1-main);
`
export const SideMenuButtonDiv = styled(motion.div)`
  position: relative;
  /* top: 50vh; */
  top: 22px;
  right: -87%;
  z-index: 10;
`
export const SideMenuDiv = styled(motion.div)`
  /* width: 100%; */
  /* position: sticky; */
  top: 50px;
  right: 0;
  z-index: 2;
  padding: 0.5rem;
  height: calc(100vh - 50px);
  flex-direction: column;
  justify-content: center;
  min-width: fit-content;
  /* padding-bottom: 3rem; */
  /* gap: 1.75rem; */
  background: var(--background1-main);
  max-height: 100vh;
  min-height: fit-content;
  /* flex-basis: ${({ width }) => (width ? `${width}` : '15%')}; */
  overflow: scroll;
`
