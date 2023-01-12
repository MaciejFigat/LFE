import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { preferedSchemeEdit } from '../../../features/preferences/preferenceSlice'
import {
  SpaceAroundWrapperDropdown,
  SwitchDivMisc,
  SwitchHandleMisc,
  SwitchTextMisc,
} from '../../../styles/misc.styled'
import { NavIcon } from '../../../styles/misc.styled'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'
interface ColorChangeProps {}

const ColorChange: React.FC<ColorChangeProps> = () => {
  const dispatch = useAppDispatch()

  const preferedScheme: string = useAppSelector(
    (state) => state.preference.preferedScheme
  )
  const [isDark, setIsDark] = useState(false)

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  }
  const toggleSwitch = () => {
    // setIsOn(!isOn)
    setIsDark((isDark) => !isDark)
    switch (preferedScheme) {
      case 'primary':
        dispatch(preferedSchemeEdit('secondary'))
        break
      case 'secondary':
        dispatch(preferedSchemeEdit('primary'))
        break

      default:
        return
    }
  }

  return (
    <SpaceAroundWrapperDropdown>
      {' '}
      <SwitchDivMisc className='switch' isOn={isDark} onClick={toggleSwitch}>
        <SwitchHandleMisc
          className='handle'
          isOn={isDark}
          layout
          transition={spring}
        />
      </SwitchDivMisc>
      <SwitchTextMisc isOn={isDark}>
        {preferedScheme === 'primary' ? (
          <NavIcon left='2px' icon={faSun} />
        ) : (
          <NavIcon left='2px' icon={faCloudMoon} />
        )}
      </SwitchTextMisc>
    </SpaceAroundWrapperDropdown>
  )
}
export default ColorChange
