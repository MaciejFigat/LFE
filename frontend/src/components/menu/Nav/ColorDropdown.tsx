import React, { useState, useEffect } from 'react'
// import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { useAppDispatch } from '../../../app/reduxHooks'
import { preferedSchemeEdit } from '../../../features/preferences/preferenceSlice'
import { SendButtonSmall } from '../../Buttons/Buttons.styled'
import SvgIcon from '../../SvgIcon/SvgIcon'

import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  Main,
} from './NavDropdown.styled'

interface ColorDropdownProps {
  options?: any
  scrollDirection?: 'up' | 'down' | 'top' | undefined | null
}

const ColorDropdown: React.FC<ColorDropdownProps> = ({ scrollDirection }) => {
  const dispatch = useAppDispatch()
  //   const preferedScheme: string = useAppSelector(
  //     (state) => state.preference.preferedScheme
  //   )
  const [isOpen, setIsOpen] = useState(false)

  const toggling = () => {
    setIsOpen((isOpen) => !isOpen)
  }
  const firstSchemeHelper = () => {
    dispatch(preferedSchemeEdit('primary'))
  }
  const secondSchemeHelper = () => {
    dispatch(preferedSchemeEdit('secondary'))
  }
  const thirdSchemeHelper = () => {
    dispatch(preferedSchemeEdit('tertiary'))
  }
  const fourthSchemeHelper = () => {
    dispatch(preferedSchemeEdit('quaternary'))
  }
  const fifthSchemeHelper = () => {
    dispatch(preferedSchemeEdit('quinary'))
  }

  useEffect(() => {
    if (scrollDirection === 'down') {
      setIsOpen(false)
    }
  }, [scrollDirection])

  return (
    <>
      <Main>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>
            <SvgIcon variant='paint' toRight contentAfter='colors' />
          </DropDownHeader>

          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                <ListItem>
                  <SendButtonSmall
                    variant='primaryEmpty'
                    onClick={firstSchemeHelper}
                  >
                    Set scheme 1
                  </SendButtonSmall>
                </ListItem>
                <ListItem>
                  <SendButtonSmall
                    variant='primaryEmpty'
                    onClick={secondSchemeHelper}
                  >
                    Set scheme 2
                  </SendButtonSmall>
                </ListItem>
                <ListItem>
                  <SendButtonSmall
                    variant='primaryEmpty'
                    onClick={thirdSchemeHelper}
                  >
                    Set scheme 3
                  </SendButtonSmall>
                </ListItem>
                <ListItem>
                  <SendButtonSmall
                    variant='primaryEmpty'
                    onClick={fourthSchemeHelper}
                  >
                    Set scheme 4
                  </SendButtonSmall>
                </ListItem>
                <ListItem>
                  <SendButtonSmall
                    variant='primaryEmpty'
                    onClick={fifthSchemeHelper}
                  >
                    Set scheme 5
                  </SendButtonSmall>
                </ListItem>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Main>{' '}
    </>
  )
}
export default ColorDropdown
