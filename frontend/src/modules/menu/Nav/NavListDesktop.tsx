import React from 'react'
import { NavList, ListItem, NavListDesktopWrapper } from './nav.styled'
import { NavLink } from 'react-router-dom'
import StaggerChildrenWrapper from '../../../components/AnimationWrappers/StaggerChildrenWrapper'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import NavDropdown from '../Dropdowns/NavDropdown'
import ProjectDropdown from '../Dropdowns/ProjectDropdown'
import { DropDownHeaderMenu } from '../../../styles/misc.styled'
import { useAppSelector } from '../../../app/reduxHooks'

interface NavListMobileProps {
  scrollDirection?: 'up' | 'down' | 'top' | undefined | null
}

const itemVariants = {
  closed: {
    y: 10,
    opacity: 0
  },
  open: {
    y: 0,
    opacity: 1
  }
}

const NavListDesktop: React.FC<NavListMobileProps> = ({ scrollDirection }) => {
  const docResult = useAppSelector(state => state.searchResult.docResult)

  return (
    <NavListDesktopWrapper>
      <StaggerChildrenWrapper delay='rightFast'>
        <NavList>
          <ListItem variants={itemVariants}>
            <DropDownHeaderMenu>
              <NavLink
                to='/'
                className={navData =>
                  'nav_link_desktop' + (navData.isActive ? ' activated' : '')
                }
              >
                <>
                  Start
                  <SvgIcon
                    variant='home'
                    noMargin
                    noContent
                    lowerPosition='3px'
                  />
                </>
              </NavLink>
            </DropDownHeaderMenu>
          </ListItem>

          {Object.keys(docResult).length > 0 ? (
            <ListItem variants={itemVariants}>
              <DropDownHeaderMenu>
                {' '}
                <NavLink
                  to='/search/result'
                  className={navData =>
                    'nav_link_desktop' + (navData.isActive ? ' activated' : '')
                  }
                >
                  <>
                    Dokument{' '}
                    <SvgIcon
                      variant='textLeft'
                      noMargin
                      noContent
                      lowerPosition='4px'
                    />
                  </>
                </NavLink>
              </DropDownHeaderMenu>
            </ListItem>
          ) : null}
          <ListItem variants={itemVariants}>
            <ProjectDropdown scrollDirection={scrollDirection} />
          </ListItem>
          <ListItem variants={itemVariants}>
            <NavDropdown scrollDirection={scrollDirection} />
          </ListItem>
        </NavList>
      </StaggerChildrenWrapper>
    </NavListDesktopWrapper>
  )
}
export default NavListDesktop
