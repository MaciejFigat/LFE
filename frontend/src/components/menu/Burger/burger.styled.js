import styled from 'styled-components'

export const BurgerWrapper = styled.div`
  display: flex;
  place-self: self-start auto;
  flex-direction: column;
  min-height: 50px;

  /* padding-top: 15px; */
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

export const BurgerLine = styled.div`
  border-radius: 6%;

  align-self: center;
  transition: all 0.3s ease;

  &.lineOne {
    width: 25px;
    height: 4px;
    border-radius: 25%;
    background-color: whitesmoke;

    transition: all 0.3s ease;

    &.true {
      transform: rotate(-45deg) translate(-7.95px, 2.75px);
    }
  }
  &.lineTwo {
    width: 25px;
    height: 4px;
    border-radius: 25%;
    background-color: whitesmoke;
    margin: 5px;
    transition: all 0.3s ease;
    &.true {
      opacity: 0;
    }
  }
  &.lineThree {
    width: 25px;
    height: 4px;
    border-radius: 25%;
    background-color: whitesmoke;

    transition: all 0.3s ease;

    &.true {
      transform: rotate(-135deg) translate(6.95px, 6.75px);
    }
  }
`
