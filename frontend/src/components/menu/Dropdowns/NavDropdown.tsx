import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { logout } from '../../../features/users/userSlice'
import { NavLink } from 'react-router-dom'
import SvgIcon from '../../Miscellaneous/SvgIcon/SvgIcon'
import { UserInfo } from '../../../interfaces'
import {
  DropDownContainer,
  DropDownList,
  ListItem,
  Main,
  NavDropDownListContainer,
} from './NavDropdown.styled'
import {
  DropDownHeaderMini,
  DropDownHeaderMisc,
  RelativeSvgWrapper,
  SpaceAroundWrapper,
  SpaceAroundWrapperDropdown,
  SvgWrapperMisc,
  SvgWrapperMiscSmall,
} from '../../../styles/misc.styled'
import { MobileLinkText } from '../Nav/nav.styled'
import { resetUserFragments } from '../../../features/fragments/fragmentSlice'

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
    dispatch(resetUserFragments())
  }

  const [isOpen, setIsOpen] = useState(false)

  const toggling = () => {
    setIsOpen((isOpen) => !isOpen)
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
            <DropDownHeaderMini onClick={toggling}>
              <SpaceAroundWrapper>
                <SvgWrapperMiscSmall>
                  <SvgIcon variant='cog' noContent lowerPosition='2px' />
                </SvgWrapperMiscSmall>
              </SpaceAroundWrapper>
              {/* <SvgIcon variant='cog' contentAfter='ustawienia' toBottom /> */}
            </DropDownHeaderMini>
          ) : (
            <DropDownHeaderMisc>
              <NavLink
                to='/login'
                className={(navData) =>
                  'nav_link' + (navData.isActive ? ' activated' : '')
                }
              >
                <SpaceAroundWrapper>
                  <MobileLinkText> Logowanie</MobileLinkText>
                  <SvgWrapperMisc>
                    <SvgIcon variant='login' noContent lowerPosition='1px' />
                  </SvgWrapperMisc>
                </SpaceAroundWrapper>

                {/* <SpaceAroundWrapper>
                  Logowanie
                  <SvgWrapperColor>
                    <SvgIcon variant='login' noContent />
                  </SvgWrapperColor>
                </SpaceAroundWrapper> */}
                {/* <SvgIcon variant='login' contentAfter='login' toBottom /> */}
              </NavLink>
            </DropDownHeaderMisc>
          )}
          {isOpen && (
            <NavDropDownListContainer>
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
                      <SpaceAroundWrapperDropdown>
                        Admin
                        <RelativeSvgWrapper>
                          <SvgIcon
                            variant='admin'
                            noContent
                            lowerPosition='2px'
                          />
                        </RelativeSvgWrapper>
                      </SpaceAroundWrapperDropdown>
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
                      <SpaceAroundWrapperDropdown>
                        Profil
                        <RelativeSvgWrapper>
                          <SvgIcon
                            variant='user'
                            noContent
                            lowerPosition='2px'
                          />
                        </RelativeSvgWrapper>
                      </SpaceAroundWrapperDropdown>
                    </NavLink>
                  </ListItem>
                )}{' '}
                {Object.keys(userInfo).length > 0 && (
                  <ListItem onClick={toggling}>
                    <SpaceAroundWrapperDropdown onClick={logoutHandler}>
                      Wyloguj
                      <RelativeSvgWrapper left='2px'>
                        <SvgIcon
                          variant='logout'
                          noContent
                          lowerPosition='2px'
                        />
                      </RelativeSvgWrapper>
                    </SpaceAroundWrapperDropdown>
                  </ListItem>
                )}
                {/* <ListItem>
                  <ColorDropdown />
                </ListItem> */}
              </DropDownList>
            </NavDropDownListContainer>
          )}
        </DropDownContainer>
      </Main>{' '}
    </>
  )
}
export default NavDropdown
