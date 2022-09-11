import React from 'react'
import {
  BurgerWrapper,
  BurgerContainer,
  IconBurger,
  ButtonBurger,
} from './burger.styled'
interface BurgerProps {
  menuOpen: boolean
}

const Burger: React.FC<BurgerProps> = ({ menuOpen }) => {
  return (
    <BurgerWrapper className={`toggle ${menuOpen}`}>
      <BurgerContainer>
        <ButtonBurger>
          <IconBurger className={`${menuOpen}`} />
        </ButtonBurger>
      </BurgerContainer>
    </BurgerWrapper>
  )
}
export default Burger
