import { useEffect, useState } from 'react'
import Burger from '../Burger/Burger'
import {
  TransitionWrapperMain,
  TransitionWrapper,
  NavContainer,
  MobileViewContainer,
  HeaderTitleMobile,
  ListLoginWrapper,
  HeaderLoginWrapper,
  WrapperDesktopOnly,
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
import SearchBar from '../../SearchBar/SearchBar'
interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const dispatch = useAppDispatch()

  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const { isAdmin } = userInfo

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
    //todo if (scroll.y <= 300)
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
        <WrapperDesktopOnly>
          <SearchBar />
        </WrapperDesktopOnly>
        <MobileViewContainer>
          <div onClick={handleClickMenu}>
            <Burger menuOpen={open} />
          </div>
          <HeaderTitleMobile>
            <SearchBar />
          </HeaderTitleMobile>
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

        <NavContainer onClick={handleCloseMenu}>
          <NavListMobile open={open} />
        </NavContainer>
        <NavListDesktop />
      </TransitionWrapper>
    </TransitionWrapperMain>
  )
}
export default Nav
