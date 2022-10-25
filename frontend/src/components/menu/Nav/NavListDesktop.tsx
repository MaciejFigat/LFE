import React from 'react'
import { NavList, ListItem, NavListDesktopWrapper } from './nav.styled'
import { NavLink } from 'react-router-dom'
import StaggerChildrenWrapper from '../../Miscellaneous/AnimationWrappers/StaggerChildrenWrapper'
import SvgIcon from '../../Miscellaneous/SvgIcon/SvgIcon'
import NavDropdown from '../Dropdowns/NavDropdown'
import ProjectDropdown from '../Dropdowns/ProjectDropdown'
import { DropDownHeaderMenu } from '../../../styles/misc.styled'

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
    // name: <SvgIcon variant='home' noMargin contentAfter='start' toRight />,
    name: (
      <>
        Start
        <SvgIcon variant='home' noMargin noContent />
      </>
    ),
    to: '/',
    id: '1',
  },
  {
    name: (
      <>
        Dokument <SvgIcon variant='textLeft' noMargin noContent />
      </>
      // <SvgIcon variant='textLeft' noMargin contentAfter='dokument' toRight />
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
                <DropDownHeaderMenu>{name}</DropDownHeaderMenu>
              </NavLink>
            </ListItem>
          ))}{' '}
          <ListItem>
            <ProjectDropdown scrollDirection={scrollDirection} />
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
