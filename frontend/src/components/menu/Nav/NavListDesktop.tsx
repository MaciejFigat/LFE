import React from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import {
  NavList,
  ListItem,
  NavListDesktopWrapper,
  ListItemStorage,
} from './nav.styled'
import { NavLink } from 'react-router-dom'
import StaggerChildrenWrapper from '../../AnimationWrappers/StaggerChildrenWrapper'
import SvgIcon from '../../SvgIcon/SvgIcon'
import NavDropdown from './NavDropdown'

interface NavListMobileProps {
  scrollDirection?: 'up' | 'down' | 'top' | undefined | null
}

// const links = [
//   {
//     name: <SvgIcon variant='home' noMargin contentAfter='home' toRight />,
//     to: '/',
//     id: '1',
//   },
//   {
//     name: (
//       <SvgIcon variant='textLeft' noMargin contentAfter='display' toRight />
//     ),
//     to: '/search/result',
//     id: '2',
//   },

//   {
//     name: (
//       <SvgIcon variant='store' noMargin contentAfter={projectName} toRight />
//     ),
//     to: '/storage',
//     id: '3',
//   },
// ]
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
const NavListDesktop: React.FC<NavListMobileProps> = ({ scrollDirection }) => {
  const projectName = useAppSelector(
    (state) => state.preference.sortingKeywords.keywordMain
  )
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

    {
      name: (
        <ListItemStorage>
          {projectName}
          <SvgIcon
            // variant='store'
            variant='arrow'
            // showContent
            noContent
            noMargin
            // contentAfter={projectName}
            toRight
          />
        </ListItemStorage>
      ),
      to: '/storage',
      id: '3',
    },
  ]

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
            <NavDropdown scrollDirection={scrollDirection} />
          </ListItem>
        </NavList>
      </StaggerChildrenWrapper>
    </NavListDesktopWrapper>
  )
}
export default NavListDesktop
