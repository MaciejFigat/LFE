import styled from 'styled-components'
import { handleButtonColor } from './utilsButtons'

export const ButtonBig = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1.1rem 1.5rem;
  border-radius: var(--border-radius0);
  font-size: var(--font-size-big);
  font-weight: 600;
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);

  border-color: ${(props) =>
    handleButtonColor(props.variant).buttonBorder
      ? handleButtonColor(props.variant).buttonBorder
      : null};

  background: ${(props) => handleButtonColor(props.variant).buttonBackground};
  color: ${(props) => handleButtonColor(props.variant).buttonColor};
  transition: all 0.3s ease-out;

  a {
    text-decoration: none;

    color: ${(props) => handleButtonColor(props.variant).buttonColor};
  }

  &:hover {
    background: ${(props) =>
      handleButtonColor(props.variant).buttonBackgroundHover};

    border-color: ${(props) =>
      handleButtonColor(props.variant).buttonBorderHover};
    color: ${(props) => handleButtonColor(props.variant).buttonColorHover};
    a {
      color: ${(props) => handleButtonColor(props.variant).buttonColorHover};
    }
  }
  &:active {
    border-color: ${(props) =>
      handleButtonColor(props.variant).buttonBorderActive};
    background: ${(props) =>
      handleButtonColor(props.variant).buttonBackgroundActive};
    color: ${(props) => handleButtonColor(props.variant).buttonColorActive};
    a {
      color: ${(props) => handleButtonColor(props.variant).buttonColorActive};
    }
  }
`

export const ButtonMedium = styled(ButtonBig)`
  padding: 0.65rem 1.25rem 0.6rem;
  font-size: var(--font-size-medium-plus);
`
export const ButtonSmall = styled(ButtonBig)`
  padding: 0.275rem 0.55rem;
  font-size: var(--font-size-medium);
`
export const ButtonVerySmall = styled(ButtonBig)`
  padding: 0.275rem 0.55rem;
  font-size: var(--font-size-medium);
  margin: 0;
  max-height: 20px;
  margin-right: 0.25rem;
  background: none;
  border: none;
  &:hover {
    border: none;
  }
`
export const ButtonSmallCircle = styled(ButtonBig)`
  display: grid;
  place-items: center;
  padding: 0.275rem 0.55rem;
  font-size: var(--font-size-medium);
  margin: 0;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border-color: var(--background-blur1);
  background: var(--background-gradient1);
`

export const ButtonSmallGradient = styled.button`
  display: flex;
  align-items: center;
  font-size: var(--font-size-medium);
  justify-content: center;
  cursor: pointer;
  padding: 0.65rem 1.25rem 0.6rem;
  color: ${(props) => handleButtonColor(props.variant).buttonColor};
  border: 1px solid var(--background-blur1);
  border-radius: var(--border-radius0);
  --p: 10%;
  background: linear-gradient(
      ${(props) => handleButtonColor(props.variant).buttonBackgroundHover} 0 0
    )
    left / var(--p, 0%) no-repeat;

  background-image: conic-gradient(
      from -135deg at 100% 50%,
      ${(props) => handleButtonColor(props.variant).buttonBackgroundHover} 90deg,
      ${(props) => handleButtonColor(props.variant).buttonBackgroundActive} 0
    ),
    conic-gradient(
      from -135deg at 1.2em 50%,
      ${(props) => handleButtonColor(props.variant).buttonBackgroundHover} 90deg,
      ${(props) => handleButtonColor(props.variant).buttonBackgroundActive} 0
    );

  background-position: ${({ $active }) =>
    $active ? '0% 50%, 100% 50%' : '0 100%, 100% 100%'};
  background-size: ${({ $active }) =>
    $active ? 'calc(50% + 1.1em) 100%' : '62% 10%'};

  background-repeat: no-repeat;

  transition: background-size 0.4s, background-position 0.4s;

  &:hover {
    background-position: 0% 50%, 100% 50%;
    a {
      color: ${(props) => handleButtonColor(props.variant).buttonColorHover};
    }
  }
  &:active {
    background-size: calc(50% + 1.1em) 100%;
    --p: 100%;
  }
  a {
    text-decoration: none;

    color: ${(props) => handleButtonColor(props.variant).buttonColor};
  }
  @media (max-width: 610px) {
    padding: var(--gap-small);
  }
`

export const DirButton = styled.button`
  position: relative;
  border: 1px solid var(--background3-main);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.75rem 3rem;
  border-radius: var(--border-radius2);
  background: var(--background1-main);
  font-size: var(--font-size-big);
  font-weight: 600;
  transition: background-color 500ms;
  overflow: hidden;
  /* new stacking context  */
  isolation: isolate;
  a {
    transition: color 250ms;
    color: var(--background4-main);
  }
  &:hover {
    a {
      color: var(--background-secondary1);
    }
  }
  &:active {
    a {
      color: var(--background1-main);
    }
  }
  &:hover,
  :focus-visible {
    background: var(--background-blur2);
  }

  span {
    position: absolute;
    width: 33.333%;
    height: 100%;
    z-index: -1;
  }

  span:first-of-type {
    left: 0;
    top: 0;
  }
  span:last-of-type {
    right: 0;
    top: 0;
  }

  &:before {
    position: absolute;
    content: '';

    background: var(--background-secondary1);
    width: 10%;
    aspect-ratio: 1;
    border-radius: 50%;
    inset: 0;
    margin: auto;
    z-index: -1;
    transition: transform 1000ms 200ms, opacity 200ms;
    opacity: 0;
  }

  &:active:before {
    transform: scale(20);
    opacity: 0.7;
    transition: transform 1000ms, opacity 500ms;
  }

  &:has(span:first-of-type:hover) {
    &:before {
      margin-left: 0;
    }
  }
  &:has(span:last-of-type:hover) {
    &:before {
      margin-right: 0;
    }
  }

  &:has(span:first-of-type:hover):before,
  &:has(span:last-of-type:hover):before {
    transition: transform 500ms, opacity 250ms;
  }
`
