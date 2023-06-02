import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SideButtonWrapper = styled.ul`
  position: sticky;
  display: grid;
  place-items: center;
  padding: 0.75rem 0;
  width: 70px;
  gap: 1.5rem;
  margin: 0;
  font-size: 1.8rem;
  border-radius: 30px;
  top: 120px;
  height: fit-content;

  border: 1px solid var(--background-blur2);
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
  width: 24px;
  height: 24px;
  border: 1px solid var(--background-blur2);
  border-radius: 50%;
  margin: 10px;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
`
