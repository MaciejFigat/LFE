import { useEffect, useState } from 'react'
import Burger from '../Burger/Burger'
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

import NavDropdown from './NavDropdown'

import SearchDropdown from '../../SearchBar/SearchDropdown'
interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const [open, cycleOpen] = useCycle(false, true)
  const handleClickMenu = () => {
    cycleOpen()
  }
  const handleCloseMenu = () => {
    if (open === true) {
      cycleOpen()
    }
  }

  const [scrollDirection, setScrollDirection] = useState<
    'up' | 'down' | 'top' | undefined | null
  >()

  const scroll = useScrollListener()

  // on scroll I update scrollDirection
  useEffect(() => {
    if (scroll.y > 200 && scroll.y - scroll.lastY > 0) {
      setScrollDirection('down')
      if (open === true) {
        cycleOpen()
      }
    } else if (scroll.y <= 200) {
      setScrollDirection('top')
    } else if (scroll.y > 700 && scroll.y - scroll.lastY < 0) {
      setScrollDirection('up')
    }

    //todo if (scroll.y <= 300)
  }, [scroll.y, scroll.lastY, open, cycleOpen])

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

        <MobileNavContainer onClick={handleCloseMenu}>
          <NavListMobile open={open} />
        </MobileNavContainer>
        <NavListDesktop scrollDirection={scrollDirection} />
      </TransitionWrapper>
    </TransitionWrapperMain>
  )
}
export default Nav
