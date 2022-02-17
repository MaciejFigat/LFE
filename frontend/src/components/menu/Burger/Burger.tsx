import React from 'react'
import { BurgerWrapper, BurgerContainer, BurgerLine } from './burger.styled'
interface BurgerProps {
  menuOpen: boolean
}

const Burger: React.FC<BurgerProps> = ({ menuOpen }) => {
  return (
    <BurgerWrapper className={`toggle ${menuOpen}`}>
      <BurgerContainer>
        <BurgerLine className={`lineOne ${menuOpen} burger`}></BurgerLine>
        <BurgerLine className={`lineTwo ${menuOpen} burger`}></BurgerLine>
        <BurgerLine className={`lineThree ${menuOpen} burger`}></BurgerLine>
      </BurgerContainer>
    </BurgerWrapper>
  )
}
export default Burger
