import React, { Dispatch, SetStateAction } from 'react'
import { ButtonItem, ButtonOutline } from './SideButtons.styled'

interface ButtonComponentProps {
  color: string
  isSelected: boolean

  onMouseOver: Dispatch<SetStateAction<string>>
}
const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
  duration: 0.4,
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({
  color,
  isSelected,

  onMouseOver,
}) => {
  return (
    <ButtonItem
      className='item'
      onMouseOver={onMouseOver}
      style={{ backgroundColor: color }}
    >
      {isSelected && (
        <ButtonOutline
          layoutId='outline'
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}
        />
      )}
    </ButtonItem>
  )
}

export default ButtonComponent
