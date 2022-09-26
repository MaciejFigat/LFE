import React, { useState, useEffect } from 'react'
// import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { useAppDispatch } from '../../../app/reduxHooks'
import { preferedSchemeEdit } from '../../../features/preferences/preferenceSlice'
import { SendButtonSmall } from '../../Miscellaneous/Buttons/Buttons.styled'
import SvgIcon from '../../Miscellaneous/SvgIcon/SvgIcon'

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
            <SvgIcon variant='paint' contentAfter='colors' />
          </DropDownHeader>

          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                <ListItem>
                  <SendButtonSmall
                    variant='primaryEmpty'
                    onClick={firstSchemeHelper}
                  >
                    Dark
                  </SendButtonSmall>
                </ListItem>
                <ListItem>
                  <SendButtonSmall
                    variant='primaryEmpty'
                    onClick={secondSchemeHelper}
                  >
                    Light
                  </SendButtonSmall>
                </ListItem>
                <ListItem>
                  <SendButtonSmall
                    variant='primaryEmpty'
                    onClick={thirdSchemeHelper}
                  >
                    scheme 3
                  </SendButtonSmall>
                </ListItem>
                <ListItem>
                  <SendButtonSmall
                    variant='primaryEmpty'
                    onClick={fourthSchemeHelper}
                  >
                    scheme 4
                  </SendButtonSmall>
                </ListItem>
                <ListItem>
                  <SendButtonSmall
                    variant='primaryEmpty'
                    onClick={fifthSchemeHelper}
                  >
                    scheme 5
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
