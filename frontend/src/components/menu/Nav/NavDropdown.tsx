import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { logout } from '../../../features/users/userSlice'
import { NavLink } from 'react-router-dom'
import SvgIcon from '../../SvgIcon/SvgIcon'
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
  scrollDirection?: 'up' | 'down' | 'top' | undefined | null
}

const NavDropdown: React.FC<NavDropdownProps> = ({ scrollDirection }) => {
  const dispatch = useAppDispatch()

  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const { isAdmin } = userInfo

  const logoutHandler = (e: any) => {
    e.preventDefault()
    dispatch(logout())
  }

  const [isOpen, setIsOpen] = useState(false)

  const toggling = () => {
    setIsOpen(!isOpen)
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
          {Object.keys(userInfo).length > 0 ? (
            <DropDownHeader onClick={toggling}>
              {' '}
              <SvgIcon variant='cog' />
            </DropDownHeader>
          ) : (
            <DropDownHeader>
              {' '}
              <NavLink
                to='/login'
                className={(navData) =>
                  'nav_link' + (navData.isActive ? ' activated' : '')
                }
              >
                {' '}
                <SvgIcon variant='login' />
              </NavLink>
            </DropDownHeader>
          )}
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {' '}
                {Object.keys(userInfo).length > 0 && isAdmin && (
                  <ListItem onClick={toggling}>
                    <NavLink
                      to='/admin'
                      className={(navData) =>
                        'nav_link' + (navData.isActive ? ' activated' : '')
                      }
                    >
                      {' '}
                      <SvgIcon variant='admin' />
                    </NavLink>
                  </ListItem>
                )}
                {Object.keys(userInfo).length > 0 && isAdmin === false && (
                  <ListItem onClick={toggling}>
                    {' '}
                    <NavLink
                      to='/profile'
                      className={(navData) =>
                        'nav_link' + (navData.isActive ? ' activated' : '')
                      }
                    >
                      {' '}
                      <SvgIcon variant='user' />
                    </NavLink>
                  </ListItem>
                )}{' '}
                {Object.keys(userInfo).length > 0 ? (
                  <ListItem onClick={toggling}>
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
                  </ListItem>
                ) : (
                  <ListItem onClick={toggling}>
                    {' '}
                    <NavLink
                      to='/login'
                      className={(navData) =>
                        'nav_link' + (navData.isActive ? ' activated' : '')
                      }
                    >
                      {' '}
                      <SvgIcon variant='login' />
                    </NavLink>
                  </ListItem>
                )}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Main>{' '}
    </>
  )
}
export default NavDropdown
