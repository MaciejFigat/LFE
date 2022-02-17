import { useEffect, useState } from 'react'
import Burger from '../Burger/Burger'
import {
  TransitionWrapperMain,
  TransitionWrapper,
  NavContainer,
  MobileViewContainer,
  HeaderTitleMobile,
  HeaderTitleDesktop,
  ListLoginWrapper,
  HeaderLoginWrapper,
} from './nav.styled'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import NavListDesktop from './NavListDesktop'
import NavListMobile from './NavListMobile'
import useScrollListener from '../../../hooks/useScrollListener'
import SvgIcon from '../../SvgIcon/SvgIcon'
import { logout } from '../../../features/users/userSlice'
import { UserInfo } from '../../../interfaces'
import { useCycle } from 'framer-motion'
import FadeInAnimationWrapper from '../../AnimationWrappers/FadeInAnimationWrapper'
import { IconsWrapper } from '../../SvgIcon/iconsSvg.styled'
interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const dispatch = useAppDispatch()

  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const { name, isAdmin } = userInfo

  const [open, cycleOpen] = useCycle(false, true)
  const handleClickMenu = () => {
    cycleOpen()
  }
  const handleCloseMenu = () => {
    if (open === true) {
      cycleOpen()
    }
  }

  const logoutHandler = (e: any) => {
    e.preventDefault()
    dispatch(logout())
  }

  const [scrollDirection, setScrollDirection] = useState<
    'up' | 'down' | 'top' | undefined | null
  >()
  const [scrollTop, setScrollTop] = useState<boolean>(true)
  const scroll = useScrollListener()

  // on scroll I update scrollDirection
  useEffect(() => {
    if (scroll.y > 200 && scroll.y - scroll.lastY > 0) {
      setScrollDirection('down')
    } else if (scroll.y <= 200) {
      setScrollDirection('top')
    } else if (scroll.y > 700 && scroll.y - scroll.lastY < 0) {
      setScrollDirection('up')
    }
    if (scroll.y <= 300) setScrollTop(true)
    else {
      setScrollTop(false)
    }
  }, [scroll.y, scroll.lastY])

  return (
    <TransitionWrapperMain>
      <TransitionWrapper
        className={`${
          scrollDirection === 'up' || null || undefined ? 'active' : ''
        } ${scrollDirection === 'down' ? 'hidden' : ''} ${
          scrollDirection === 'top' ? 'top' : ''
        } ${open === true ? 'open' : ''}`}
      >
        <MobileViewContainer>
          <div onClick={handleClickMenu}>
            <Burger menuOpen={open} />
          </div>{' '}
          <HeaderTitleMobile>{name && `${name}`}</HeaderTitleMobile>
          {Object.keys(userInfo).length > 0 ? (
            <HeaderLoginWrapper>
              {isAdmin && (
                <NavLink
                  to='/admin'
                  className={(navData) =>
                    'nav_link' + (navData.isActive ? ' activated' : '')
                  }
                >
                  {' '}
                  <SvgIcon variant='admin' />
                </NavLink>
              )}
              {isAdmin === false && (
                <NavLink
                  to='/profile'
                  className={(navData) =>
                    'nav_link' + (navData.isActive ? ' activated' : '')
                  }
                >
                  {' '}
                  <SvgIcon variant='user' />
                </NavLink>
              )}{' '}
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
            </HeaderLoginWrapper>
          ) : (
            <HeaderLoginWrapper>
              <NavLink
                to='/login'
                className={(navData) =>
                  'nav_link' + (navData.isActive ? ' activated' : '')
                }
              >
                {' '}
                <SvgIcon variant='login' />
              </NavLink>
            </HeaderLoginWrapper>
          )}
        </MobileViewContainer>

        <NavContainer className={open} onClick={handleCloseMenu}>
          <NavListDesktop />
          <NavListMobile open={open} />
          <HeaderTitleDesktop className={scrollTop === true ? 'hide' : 'show'}>
            {name && `${name}`}
          </HeaderTitleDesktop>

          <FadeInAnimationWrapper>
            <IconsWrapper>
              {Object.keys(userInfo).length > 0 && isAdmin && (
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
              )}
              {Object.keys(userInfo).length > 0 && isAdmin === false && (
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
              )}{' '}
              {Object.keys(userInfo).length > 0 ? (
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
              ) : (
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
              )}
            </IconsWrapper>
          </FadeInAnimationWrapper>
        </NavContainer>
      </TransitionWrapper>
    </TransitionWrapperMain>
  )
}
export default Nav
