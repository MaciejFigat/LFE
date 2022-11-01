import styled from 'styled-components'

export const BurgerWrapper = styled.div`
  display: flex;
  place-self: self-start auto;
  flex-direction: column;
  min-height: 50px;

  /* padding-top: 15px; */
`
export const ButtonBurger = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  width: 47px;
  /* box-shadow: var(--boxShadowInset1); */
  background: var(--background-gradient1);
  border-radius: 50%;
  /* border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur1); */
  height: 47px;
  top: 8px;
  left: 15px;
  transition-duration: 0.5s;
`
export const IconBurger = styled.div`
  transition-duration: 0.5s;
  position: absolute;
  height: 5px;
  width: 30px;
  top: 22px;
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
    top: 20px;
    transition-duration: 0.5s;
    transform: rotateZ(-90deg);
    width: 22px;
    height: 5px;
    background-color: var(--background-secondary1);
    &:before {
      height: 5px;
      width: 22px;
      transform: rotateZ(-45deg) scaleX(0.75) translate(-11px, 0px);
      background-color: var(--background-secondary1);
    }

    &:after {
      height: 5px;
      width: 22px;
      transform: rotateZ(45deg) scaleX(0.75) translate(-11px, 0px);
      background-color: var(--background-secondary1);
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
