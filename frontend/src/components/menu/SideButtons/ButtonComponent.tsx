import React, { Dispatch, SetStateAction } from 'react'
import { ButtonItem, ButtonOutline } from './SideButtons.styled'

interface ButtonComponentProps {
  color: string
  isSelected: boolean
  onClick: Dispatch<SetStateAction<string>>
  //   onMouseDown: Dispatch<SetStateAction<string>>
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  color,
  isSelected,
  onClick,
  //   onMouseDown,
}) => {
  return (
    <ButtonItem
      className='item'
      onClick={onClick}
      //   onMouseDown={onMouseDown}
      style={{ backgroundColor: color }}
    >
      {isSelected && (
        <ButtonOutline
          layoutId='outline'
          className='outline'
          initial={false}
          animate={{ borderColor: color }}
          transition={{ type: 'spring' }}
        />
      )}
    </ButtonItem>
  )
}

export default ButtonComponent
