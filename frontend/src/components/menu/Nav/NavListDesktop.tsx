import React from 'react'
import { NavList, ListItem, NavListDesktopWrapper } from './nav.styled'
import { NavLink } from 'react-router-dom'
import StaggerChildrenWrapper from '../../AnimationWrappers/StaggerChildrenWrapper'
import SvgIcon from '../../SvgIcon/SvgIcon'
import NavDropdown from './NavDropdown'
import ProjectDropdown from './ProjectDropdown'

interface NavListMobileProps {
  scrollDirection?: 'up' | 'down' | 'top' | undefined | null
}

const itemVariants = {
  closed: {
    y: 10,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
  },
}
const links = [
  {
    name: <SvgIcon variant='home' noMargin contentAfter='home' toRight />,
    to: '/',
    id: '1',
  },
  {
    name: (
      <SvgIcon variant='textLeft' noMargin contentAfter='display' toRight />
    ),
    to: '/search/result',
    id: '2',
  },
]
const NavListDesktop: React.FC<NavListMobileProps> = ({ scrollDirection }) => {
  return (
    <NavListDesktopWrapper>
      <StaggerChildrenWrapper delay='rightFast'>
        <NavList>
          {links.map(({ name, to, id }) => (
            <ListItem variants={itemVariants} key={id}>
              {' '}
              <NavLink
                to={to}
                className={(navData) =>
                  'nav_link_desktop' + (navData.isActive ? ' activated' : '')
                }
              >
                {' '}
                {name}
              </NavLink>
            </ListItem>
          ))}{' '}
          <ListItem>
            <ProjectDropdown />
          </ListItem>
          <ListItem>
            <NavDropdown scrollDirection={scrollDirection} />
          </ListItem>
        </NavList>
      </StaggerChildrenWrapper>
    </NavListDesktopWrapper>
  )
}
export default NavListDesktop
