import styled from 'styled-components'
import { motion } from 'framer-motion'

export const TitleAnimated = styled(motion.div)`
  display: flex;
  min-height: max-content;
  flex-direction: row;
  align-items: center;
  word-break: break-all;
  justify-content: center;
  width: 100%;
  width: 220px;
  padding: 0.21rem 0;
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  border-radius: 16px;
  min-height: 30px;

  background: var(--background4-main);
  color: var(--background1-main);
  @media (max-width: 1020px) {
    min-width: 100px;
  }

  transition: all 0.3s ease-out;
  &:hover {
    color: var(--background1-main);
    background: var(--background-secondary1);
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
export const TitleInput = styled(motion.input)`
  color: var(--background1-main);
  font-weight: 700;
  text-align: center;
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  padding: 0.25rem 0;
  margin: 0;
  height: 30px;
  line-height: normal;

  background: var(--background-secondary2);
  border-radius: 16px;
  outline: 0;

  border: none;
  &:focus {
    border: none;
    outline: 0;
  }
  font-size: inherit;
  font-family: inherit;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    background: var(--background1-main) !important;
    border: 1px solid transparent;
    box-shadow: none;
    font-weight: 700;
    transition: background-color 5000s !important;
    -webkit-text-fill-color: var(--background1-main) !important;
  }
`

export const HorizontalButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;

  width: 100%;
  input {
    text-align: center;
    width: 180px;
  }
  min-height: min-content;

  align-items: center;

  justify-content: center;
  margin-bottom: 0;
`

export const LabelContainerButtons = styled.div`
  position: relative;
  top: 8px;
  display: flex;
  height: 50px;
  gap: 0.5rem;
  justify-content: center;
  flex-direction: row;
`
export const LabelContainerWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`
export const LabelContainer = styled(HorizontalButtonContainer)`
  position: relative;
  width: 180px;
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  border-radius: 20px;

  &:after {
    position: absolute;
    content: '${(props) => props.$contentAfter}';
    font-size: 0.95rem;
    background: var(--background-blur1);
    top: ${({ $toTop }) => ($toTop ? $toTop : 0)};
    left: ${({ $toLeft }) => ($toLeft ? $toLeft : 0)};
    width: ${({ $width }) => ($width ? $width : '20px')};
    padding: 0.5rem 0.75rem;
    height: fit-content;
    min-height: 15px;
    border-radius: 5px;
    transition: all 0.2s ease-in;
    opacity: 0;
  }
  &:hover {
    &:after {
      opacity: 1;
    }
  }
`
export const VerticalButtonContainer = styled(HorizontalButtonContainer)`
  flex-direction: column;
`
export const ProjectOneSelectProjectWrapper = styled.div`
  padding-top: 2rem;
  margin-bottom: 0.75rem;
  display: grid;
  place-items: center;

  border-radius: 20px;
  background: var(--background-gradient1);
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
`
export const AlignCenterContainer = styled.div`
  display: flex;
  padding: 1.25rem;
  padding-bottom: 0;
`
