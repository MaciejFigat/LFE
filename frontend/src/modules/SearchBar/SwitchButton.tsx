import React, { Dispatch, SetStateAction } from 'react'
import { useAppDispatch } from '../../app/reduxHooks'
import { SwitchDiv, SwitchHandle } from './SearchBar.styled'
import {
  sortFragmentsBySourceEditOne,
  sortFragmentsBySourceEditThree,
  sortFragmentsBySourceEditTwo
} from '../../features/preferences/preferenceSlice'
interface SwitchButtonProps {
  isOn: boolean
  setIsOn: Dispatch<SetStateAction<boolean>>
  sortingOption?: 'one' | 'two' | 'three'
}
const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
}
const SwitchButton: React.FC<SwitchButtonProps> = ({
  isOn,
  setIsOn,
  sortingOption
}) => {
  const dispatch = useAppDispatch()
  const toggleSwitch = () => {
    setIsOn(!isOn)
    switch (sortingOption) {
      case 'one':
        dispatch(sortFragmentsBySourceEditOne())
        break
      case 'two':
        dispatch(sortFragmentsBySourceEditTwo())
        break
      case 'three':
        dispatch(sortFragmentsBySourceEditThree())
        break
      default:
        return
    }
  }
  return (
    <>
      {' '}
      <SwitchDiv className='switch' $isOn={isOn} onClick={toggleSwitch}>
        <SwitchHandle
          className='handle'
          $isOn={isOn}
          layout
          transition={spring}
        />
      </SwitchDiv>
    </>
  )
}
export default SwitchButton
