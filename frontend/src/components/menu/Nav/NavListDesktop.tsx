import React from 'react'
import { NavList, ListItem, NavListDesktopWrapper } from './nav.styled'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import StaggerChildrenWrapper from '../../AnimationWrappers/StaggerChildrenWrapper'
interface NavListMobileProps {}

const links = [
  { name: 'Home', to: '/', id: '1' },
  { name: 'Kontakt', to: '/contact', id: '2' },
]
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
const NavListDesktop: React.FC<NavListMobileProps> = () => {
  return (
    <NavListDesktopWrapper>
      <StaggerChildrenWrapper delay='rightFast'>
        <NavList>
          {links.map(({ name, to, id }) => (
            <motion.div variants={itemVariants} key={id}>
              <ListItem>
                {' '}
                <NavLink
                  to={to}
                  className={(navData) =>
                    'nav_link' + (navData.isActive ? ' activated' : '')
                  }
                >
                  {' '}
                  {name}
                </NavLink>
              </ListItem>
            </motion.div>
          ))}
        </NavList>
      </StaggerChildrenWrapper>
    </NavListDesktopWrapper>
  )
}
export default NavListDesktop
