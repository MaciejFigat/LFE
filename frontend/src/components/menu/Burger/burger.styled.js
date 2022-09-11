import styled from 'styled-components'

export const BurgerWrapper = styled.div`
  display: flex;
  place-self: self-start auto;
  flex-direction: column;
  min-height: 50px;

  /* padding-top: 15px; */
`
export const ButtonBurger = styled.div`
  position: absolute;
  width: 80px;
  height: 200px;
  top: 0;
  left: 5px;
  transition-duration: 0.5s;
`
export const IconBurger = styled.div`
  transition-duration: 0.5s;
  position: absolute;
  height: 5px;
  width: 30px;
  top: 20px;
  cursor: pointer;
  background-color: var(--background4-main);
  &:before {
    transition-duration: 0.5s;
    position: absolute;
    width: 20px;
    height: 5px;
    background-color: var(--background2-main);
    content: '';
    top: -10px;
  }
  &:after {
    transition-duration: 0.5s;
    position: absolute;
    width: 20px;
    height: 5px;
    background-color: var(--background5-main);
    content: '';
    top: 10px;
  }
  &.true {
    transition-duration: 0.5s;
    transform: rotateZ(-180deg);
    width: 20px;
    height: 2px;
    background-color: var(--background5-main);
    &:before {
      height: 2px;
      transform: rotateZ(-45deg) scaleX(0.75) translate(-10px, 0px);
      background-color: var(--background5-main);
    }

    &:after {
      height: 2px;
      transform: rotateZ(45deg) scaleX(0.75) translate(-10px, 0px);
      background-color: var(--background5-main);
    }
  }
`

export const BurgerContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  @media (max-width: 1020px) {
    display: flex;
    place-self: self-start auto;
    flex-direction: column;
    min-height: 50px;
    align-content: center;
  }
`
