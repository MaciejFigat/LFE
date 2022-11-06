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
  border-radius: 20px;
  min-height: 30px;

  background: var(--background4-main);
  color: var(--background1-main);
  /* min-width: 250px; */
  /* font-weight: 400; */
  @media (max-width: 1020px) {
    min-width: 100px;
  }
  /* color: var(--background-secondary1); */
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
  /* width: 60%; */
  /* min-width: 250px; */
  padding: 0.25rem 0;
  margin: 0;
  height: 30px;
  line-height: normal;
  /* background: transparent; */
  background: var(--background-secondary2);

  border-radius: 20px;
  outline: 0;
  /* background-color: transparent; */
  /* background: brown; */
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
    /* -webkit-text-fill-color: var(--background4-main); */
    font-weight: 700;
    transition: background-color 5000s !important;
    -webkit-text-fill-color: var(--background1-main) !important;
  }
`

export const HorizontalButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  /* box-shadow: var(--boxShadowClay1); */
  /* border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  border-radius: 20px; */
  /* min-width: 100px; */
  /* max-width: 100px; */

  width: 100%;
  input {
    text-align: center;
    width: 180px;
    /* width: 100%; */
    /* background: brown; */
  }
  min-height: min-content;
  /* align-items: flex-start; */
  align-items: center;
  /* justify-content: flex-end; */
  justify-content: center;
  margin-bottom: 0;
  /* background: lime; */
`

export const LabelContainerButtons = styled.div`
  position: relative;
  top: 5px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`
export const LabelContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
  /* left: 1px; */
`
export const LabelContainer = styled(HorizontalButtonContainer)`
  /* display: flex;
  flex-direction: row; */
  width: 180px;
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  border-radius: 20px;
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
  box-shadow: var(--boxShadowClay1);
  /* border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1); */
`
export const AlignCenterContainer = styled.div`
  display: flex;
  padding: 1.25rem;
  padding-bottom: 0;
  /* box-shadow: var(--boxShadowClay2); */
  /* border-radius: 20px; */
`
