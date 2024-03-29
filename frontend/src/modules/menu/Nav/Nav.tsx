import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import Burger from '../../../components/Burger/Burger'
import {
  TransitionWrapperMain,
  TransitionWrapper,
  MobileViewContainer,
  WrapperDesktopOnly
} from './nav.styled'
import NavListDesktop from './NavListDesktop'
import NavListMobile from './NavListMobile'
import useScrollListener from '../../../hooks/useScrollListener'
import { useCycle } from 'framer-motion'
import SearchDropdown from '../../SearchBar/SearchDropdown'
import { getUserFragments } from '../../../features/fragments/fragmentSlice'
import { UserInfo } from '../../../interfaces'
import MobileNavIcons from './MobileNavIcons'
import { setUserInfoFromLocalStorage } from '../../../features/users/userSlice'
interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const dispatch = useAppDispatch()
  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)
  const [open, cycleOpen] = useCycle(false, true)
  const handleClickMenu = () => {
    cycleOpen()
  }

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
    } else if (
      scroll.y > 700 &&
      scroll.y - scroll.lastY < 0 &&
      scrollDirection !== 'up'
    ) {
      setScrollDirection('up')
    }

    //todo if (scroll.y <= 300)
  }, [scroll.y, scroll.lastY, open, cycleOpen, scrollDirection])

  useEffect(() => {
    if (Object.keys(userInfo).length > 0) {
      dispatch(getUserFragments(1))
    }
  }, [dispatch, userInfo])

  useEffect(() => {
    const loggedInUser = localStorage.getItem('userInfo')
    if (loggedInUser && Object.keys(userInfo).length === 0) {
      const foundUser = JSON.parse(loggedInUser)
      const userDataFromStorage = {
        _id: foundUser._id,
        name: foundUser.name,
        email: foundUser.email,
        status: foundUser.status,
        isAdmin: foundUser.isAdmin,
        token: foundUser.token
      }
      dispatch(setUserInfoFromLocalStorage(userDataFromStorage))
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
          <MobileNavIcons scrollDirection={scrollDirection} />
        </MobileViewContainer>

        <NavListMobile open={open} scrollDirection={scrollDirection} />

        <NavListDesktop scrollDirection={scrollDirection} />
      </TransitionWrapper>
    </TransitionWrapperMain>
  )
}
export default Nav
