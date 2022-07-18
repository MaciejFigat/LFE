import React, { Dispatch, SetStateAction } from 'react'
import { SwitchDiv, SwitchHandle } from './SearchBar.styled'
interface SwitchButtonProps {
  isOn: boolean
  setIsOn: Dispatch<SetStateAction<boolean>>
}
const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}
const SwitchButton: React.FC<SwitchButtonProps> = ({ isOn, setIsOn }) => {
  const toggleSwitch = () => setIsOn(!isOn)
  return (
    <>
      {' '}
      <SwitchDiv className='switch' isOn={isOn} onClick={toggleSwitch}>
        <SwitchHandle
          className='handle'
          isOn={isOn}
          layout
          transition={spring}
        />
      </SwitchDiv>
    </>
  )
}
export default SwitchButton
