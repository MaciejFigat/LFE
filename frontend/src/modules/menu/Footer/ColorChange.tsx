import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import { preferedSchemeEdit } from '../../../features/preferences/preferenceSlice'
import {
  RelativeWrapper,
  SpaceAroundWrapperDropdown,
  SwitchTextMisc
} from '../../../styles/misc.styled'
import { NavIcon } from '../../../styles/misc.styled'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'

interface ColorChangeProps {}

const ColorChange: React.FC<ColorChangeProps> = () => {
  const dispatch = useAppDispatch()

  const preferedScheme: string = useAppSelector(
    state => state.preference.preferedScheme
  )
  const [isSystem, setIsSystem] = useState(true)

  const isDarkPrefered = window.matchMedia('(prefers-color-scheme: dark)')
  const useDarkMode = isDarkPrefered.matches

  const toggleDark = () => {
    dispatch(preferedSchemeEdit('primary'))
    setIsSystem(false)
  }
  const toggleSystem = () => {
    dispatch(preferedSchemeEdit(useDarkMode ? 'primary' : 'secondary'))
    if (!isSystem) {
      setIsSystem(true)
    }
  }
  const toggleLight = () => {
    dispatch(preferedSchemeEdit('secondary'))
    setIsSystem(false)
  }

  useEffect(() => {
    if (useDarkMode === true) {
      dispatch(preferedSchemeEdit('primary'))
    }
    if (useDarkMode === false) {
      dispatch(preferedSchemeEdit('secondary'))
    }
  }, [dispatch, useDarkMode])
  return (
    <>
      <SpaceAroundWrapperDropdown>
        <SwitchTextMisc
          $isOn={preferedScheme === 'secondary' && !isSystem}
          onClick={toggleLight}
        >
          <RelativeWrapper $top='1px' $left='3px'>
            <NavIcon icon={faSun} />
          </RelativeWrapper>
        </SwitchTextMisc>
        <SwitchTextMisc onClick={toggleSystem} $isOn={isSystem}>
          <RelativeWrapper $top='1px' $left='2px'>
            <NavIcon icon={faDesktop} />
          </RelativeWrapper>
        </SwitchTextMisc>
        <SwitchTextMisc
          $isOn={preferedScheme === 'primary' && !isSystem}
          onClick={toggleDark}
        >
          <RelativeWrapper $top='1px' $left='3px'>
            {' '}
            <NavIcon icon={faMoon} />
          </RelativeWrapper>
        </SwitchTextMisc>
      </SpaceAroundWrapperDropdown>
    </>
  )
}
export default ColorChange
