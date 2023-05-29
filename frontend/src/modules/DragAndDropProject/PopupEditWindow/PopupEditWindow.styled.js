import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FragmentDivPopup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: var(--background1-main);
  border-radius: 10px;
  padding: 0.75rem;
  padding-right: 0.25rem;
  overflow: hidden;
  height: 90%;
`
export const PopupTitleContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: min-content;
`

export const PopupTitle = styled(motion.h2)`
  display: grid;
  place-items: center;
  margin: 0;
  width: 100%;
  margin-left: 0.5rem;
  font-size: 1.2rem;
  color: var(--background4-main);
  @media (max-width: 740px) {
    font-size: 1rem;
    margin-left: 0rem;
  }
`
export const PopupTitleAnimated = styled(motion.div)`
  display: flex;
  min-height: max-content;
  flex-direction: row;
  align-items: center;
  word-break: break-all;
  justify-content: flex-start;
  width: 100%;

  transition: all 0.3s ease-out;
  &:hover {
    color: var(--background5-main);
  }
`
export const PopupB = styled.b`
  color: var(--background-secondary2);
  max-height: 24px;
`
export const PopupTitleInput = styled(motion.input)`
  color: var(--background-secondary2);
  width: 50%;
  min-width: 250px;
  padding: 0;
  margin: 0;
  text-align: center;
  line-height: normal;
  background: transparent;
  outline: 0;
  background-color: transparent;
  border: none;
  &:focus {
    border: none;
    outline: 0;
  }
  font-size: 1.55rem;
  font-family: inherit;
`
export const PopupHorizontalContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  min-height: min-content;
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: 0;
`
export const PopupDatePar = styled(motion.p)`
  text-align: center;
  font-size: 1.1rem;
  margin: 0;
  padding: 0rem 0.75rem 0rem 0.5rem;
  color: var(--background4-main);
`
export const PopupListRow = styled(motion.div)`
  padding: 0.75rem;
  padding-top: 0.25rem;
  margin-top: 0.5rem;
  margin-right: 0.75rem;
  font-size: 1.2rem;
  font-weight: 400;
  max-width: 100%;
  margin: 0;
  padding: 0;

  @media (max-width: 740px) {
    padding: 0.55rem;
    font-size: 1rem;
  }
`
export const PopupDescriptionAnimated = styled(motion.div)`
  min-width: 80%;
  min-height: 100px;
  color: var(--background4-main);
  transition: all 0.3s ease-out;
  padding: 1rem;
  font-weight: 600;
`
export const DescriptionDiv = styled(motion.div)`
  max-width: 80%;
  min-height: fit-content;
  height: 100%;
`
export const PopupDescriptionInput = styled(motion.textarea)`
  outline: none;
  border: none;
  width: 100%;
  min-height: fit-content;
  height: 100%;
  color: var(--background-secondary);
  transition: all 0.3s ease-out;
  background: transparent;
  cursor: text;
  overflow-y: auto;
  line-height: 1.1;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  &::placeholder {
    color: var(--background4-main);
    font-weight: 400;
  }
  @media (max-width: 798px) {
    font-size: 15px;
    font-weight: 500;
  }
`
export const ListRow = styled(motion.div)`
  padding: 0.75rem;
  padding-top: 0.25rem;
  margin-top: 0.5rem;
  margin-right: 0.75rem;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 10px;
  max-width: 100%;
  @media (max-width: 740px) {
    padding: 0.55rem;
    font-size: 1rem;
  }
`

export const PopupListButtonContainer = styled(motion.div)`
  display: flex;
  max-width: 200px;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-end;
`
export const PopupKeywordPar = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.9rem;
  color: var(--background4-main);
`
export const PopupKeywordDiv = styled(motion.div)`
  min-width: fit-content;
  transition: 0.2s;
  &:hover {
    color: color: var(--background3-main);
  }
`
