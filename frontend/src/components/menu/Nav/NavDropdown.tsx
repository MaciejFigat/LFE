import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { logout } from '../../../features/users/userSlice'
import { NavLink } from 'react-router-dom'
import { IconsWrapper } from '../../SvgIcon/iconsSvg.styled'
import SvgIcon from '../../SvgIcon/SvgIcon'
import { ListLoginWrapper } from './nav.styled'
import { UserInfo } from '../../../interfaces'
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  Main,
} from './NavDropdown.styled'

interface NavDropdownProps {
  options?: any
}

const NavDropdown: React.FC<NavDropdownProps> = ({ options }) => {
  const dispatch = useAppDispatch()

  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const { isAdmin } = userInfo

  const logoutHandler = (e: any) => {
    e.preventDefault()
    dispatch(logout())
  }

  const [isOpen, setIsOpen] = useState(false)

  const toggling = () => setIsOpen(!isOpen)

  //   const onOptionClicked = () => {
  //     setIsOpen(false)
  //   }

  return (
    <>
      <Main>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>
            {' '}
            <SvgIcon variant='cog' />
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {' '}
                <IconsWrapper>
                  {Object.keys(userInfo).length > 0 && isAdmin && (
                    <ListItem onClick={toggling}>
                      <ListLoginWrapper>
                        <NavLink
                          to='/admin'
                          className={(navData) =>
                            'nav_link' + (navData.isActive ? ' activated' : '')
                          }
                        >
                          {' '}
                          <SvgIcon variant='admin' />
                        </NavLink>
                      </ListLoginWrapper>
                    </ListItem>
                  )}
                  {Object.keys(userInfo).length > 0 && isAdmin === false && (
                    <ListItem onClick={toggling}>
                      {' '}
                      <ListLoginWrapper>
                        <NavLink
                          to='/profile'
                          className={(navData) =>
                            'nav_link' + (navData.isActive ? ' activated' : '')
                          }
                        >
                          {' '}
                          <SvgIcon variant='user' />
                        </NavLink>
                      </ListLoginWrapper>
                    </ListItem>
                  )}{' '}
                  {Object.keys(userInfo).length > 0 ? (
                    <ListItem onClick={toggling}>
                      <ListLoginWrapper>
                        <NavLink
                          to='/'
                          onClick={logoutHandler}
                          className={(navData) =>
                            'nav_link' + (navData.isActive ? ' activated' : '')
                          }
                        >
                          {' '}
                          <SvgIcon variant='logout' />
                        </NavLink>
                      </ListLoginWrapper>
                    </ListItem>
                  ) : (
                    <ListItem onClick={toggling}>
                      {' '}
                      <ListLoginWrapper>
                        <NavLink
                          to='/login'
                          className={(navData) =>
                            'nav_link' + (navData.isActive ? ' activated' : '')
                          }
                        >
                          {' '}
                          <SvgIcon variant='login' />
                        </NavLink>
                      </ListLoginWrapper>
                    </ListItem>
                  )}
                </IconsWrapper>
                {/* {options?.map((option: any) => (
                  <ListItem onClick={toggling} key={Math.random()}>
                    {option}
                  </ListItem>
                ))} */}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Main>{' '}
    </>
  )
}
export default NavDropdown
