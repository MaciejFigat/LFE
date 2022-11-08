import styled from 'styled-components'
import { motion } from 'framer-motion'
import { handleButtonColor } from './utilsBigButton'

export const ButtonBig = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 15px;
  font-size: 1.25rem;
  font-weight: 600;
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  /* border-left: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent; */
  background: ${(props) => handleButtonColor(props).buttonBackground};
  color: ${(props) => handleButtonColor(props).buttonColor};
  /* box-shadow: var(--boxShadowClay1); */
  transition: all 0.3s ease-out;
  /* border: none; */
  /* border: 1px solid ${(props) =>
    handleButtonColor(props).buttonBorderHover}; */
  a {
    transition: all 0.3s ease-out;
    color: ${(props) => handleButtonColor(props).buttonColor};
  }
  /* color for the link inside the button */
  /* ${(props) => handleButtonColor(props).buttonColorActive} a {
        ${(props) => handleButtonColor(props).buttonColor}
  } */

  /* &:active:hover {
      color: ${(props) => handleButtonColor(props).buttonColorActive};
    } */
  &:hover {
    background: ${(props) => handleButtonColor(props).buttonBackgroundHover};
    transition: all 0.2s ease-out;
    /* border-color: ${(props) =>
      handleButtonColor(props).buttonBorderHover}; */
    transition: all 0.3s ease-out;
    /* box-shadow: var(--boxShadow1); */

    color: ${(props) => handleButtonColor(props).buttonColorHover};
    a {
      color: ${(props) => handleButtonColor(props).buttonColorHover};
    }
    /* buttonColor as color for the link nested inside the Button */
    /* border: none; */
    /* border: 1px solid ${(props) =>
      handleButtonColor(props).buttonBorderHover}; */
  }
  &:active {
    /* border-color: ${(props) => handleButtonColor(props).buttonColorHover}; */
    border-color: ${(props) => handleButtonColor(props).buttonBorderHover};
    box-shadow: var(--boxShadowNone);
  }
`

export const ButtonMedium = styled(ButtonBig)`
  padding: 0.75rem 1rem 0.5rem;
  font-size: 1.1rem;
`
export const ButtonSmall = styled(ButtonBig)`
  padding: 0.575rem 0.75rem 0.375rem;
  font-size: 1rem;
`
export const ButtonVerySmall = styled(ButtonBig)`
  padding: 0.275rem 0.55rem;
  font-size: 0.85rem;
`
