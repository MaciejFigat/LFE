import styled from 'styled-components'
import { motion } from 'framer-motion'
import { handleButtonColor } from './utilsBigButton'

export const ButtonBig = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.1rem 1.5rem;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '10px'};
  font-size: 1.25rem;
  font-weight: 600;
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);

  border-color: ${(props) =>
    handleButtonColor(props).buttonBorder
      ? handleButtonColor(props).buttonBorder
      : null};

  background: ${(props) => handleButtonColor(props).buttonBackground};
  color: ${(props) => handleButtonColor(props).buttonColor};

  transition: all 0.3s ease-out;

  a {
    transition: all 0.3s ease-out;
    color: ${(props) => handleButtonColor(props).buttonColor};
  }

  &:hover {
    background: ${(props) => handleButtonColor(props).buttonBackgroundHover};
    transition: all 0.2s ease-out;

    transition: all 0.3s ease-out;

    color: ${(props) => handleButtonColor(props).buttonColorHover};
    a {
      color: ${(props) => handleButtonColor(props).buttonColorHover};
    }
  }
  &:active {
    border-color: ${(props) => handleButtonColor(props).buttonBorderHover};
    box-shadow: var(--boxShadowNone);
  }
`

export const ButtonMedium = styled(ButtonBig)`
  padding: 0.75rem 1.85rem 0.75rem;
  font-size: 1.1rem;
`
export const ButtonSmall = styled(ButtonBig)`
  padding: 0.65rem 1.25rem 0.6rem;
  font-size: 1rem;
`
export const ButtonVerySmall = styled(ButtonBig)`
  padding: 0.275rem 0.55rem;
  font-size: 0.85rem;
`
