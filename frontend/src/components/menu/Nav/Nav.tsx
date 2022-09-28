import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import Burger from '../../Miscellaneous/Burger/Burger'
import {
  TransitionWrapperMain,
  TransitionWrapper,
  MobileViewContainer,
  HeaderTitleMobile,
  WrapperDesktopOnly,
  MobileNavContainer,
} from './nav.styled'
import NavListDesktop from './NavListDesktop'
import NavListMobile from './NavListMobile'
import useScrollListener from '../../../hooks/useScrollListener'
import { useCycle } from 'framer-motion'
import NavDropdown from '../Dropdowns/NavDropdown'
import SearchDropdown from '../../Miscellaneous/SearchBar/SearchDropdown'
import { preferedSchemeEdit } from '../../../features/preferences/preferenceSlice'
import { getUserFragments } from '../../../features/fragments/fragmentSlice'
import { UserInfo } from '../../../interfaces'
interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const dispatch = useAppDispatch()
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const [open, cycleOpen] = useCycle(false, true)
  const handleClickMenu = () => {
    cycleOpen()
  }
  // const handleCloseMenu = () => {
  //   if (open === true) {
  //     cycleOpen()
  //   }
  // }

  const [scrollDirection, setScrollDirection] = useState<
    'up' | 'down' | 'top' | undefined | null
  >()

  const scroll = useScrollListener()

  useEffect(() => {
    if (
      scroll.y > 200 &&
      scroll.y - scroll.lastY > 0 &&
      scrollDirection !== 'down'
    ) {
      setScrollDirection('down')
      if (open === true) {
        cycleOpen()
      }
    } else if (scroll.y <= 200 && scrollDirection !== 'top') {
      setScrollDirection('top')
      // console.log('top ')
    } else if (
      scroll.y > 700 &&
      scroll.y - scroll.lastY < 0 &&
      scrollDirection !== 'up'
    ) {
      setScrollDirection('up')
      // console.log('up scrolling')
    }

    //todo if (scroll.y <= 300)
  }, [scroll.y, scroll.lastY, open, cycleOpen, scrollDirection])

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)')
    const useDarkMode = isDark.matches
    if (useDarkMode === true) {
      dispatch(preferedSchemeEdit('primary'))
    }
    if (useDarkMode === false) {
      dispatch(preferedSchemeEdit('secondary'))
    }
  }, [dispatch])

  useEffect(() => {
    if (Object.keys(userInfo).length > 0) {
      dispatch(getUserFragments(1))
    }
  }, [dispatch, userInfo])

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
          <SearchDropdown scrollDirection={scrollDirection} />
        </WrapperDesktopOnly>

        <MobileViewContainer>
          <div onClick={handleClickMenu}>
            <Burger menuOpen={open} />
          </div>
          <HeaderTitleMobile>
            <SearchDropdown scrollDirection={scrollDirection} />
          </HeaderTitleMobile>
          <HeaderTitleMobile>
            <NavDropdown scrollDirection={scrollDirection} />
          </HeaderTitleMobile>
        </MobileViewContainer>

        {/* <MobileNavContainer onClick={handleCloseMenu}> */}
        <MobileNavContainer>
          <NavListMobile open={open} scrollDirection={scrollDirection} />
        </MobileNavContainer>
        <NavListDesktop scrollDirection={scrollDirection} />
      </TransitionWrapper>
    </TransitionWrapperMain>
  )
}
export default Nav
