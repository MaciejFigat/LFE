import React from 'react'
import {
  NavList,
  ListItem,
  ListItemMobile,
  AnimatedWrapperMobile,
  MobileSvgDiv,
} from './nav.styled'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import SvgIcon from '../../SvgIcon/SvgIcon'
interface NavListMobileProps {
  open: boolean
}

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
}
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      staggerDirection: 1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
      delayChildren: 0.2,
    },
  },
}

type LinkData = {
  name: string
  iconVariant:
    | 'home'
    | 'question'
    | 'store'
    | 'search'
    | 'login'
    | 'logout'
    | 'admin'
    | 'user'
    | 'searchPlus'
    | 'homeTwo'
    | 'cog'
    | 'save'
    | 'textLeft'
  to: string
  id: string
}

const links: LinkData[] = [
  { name: 'Home', iconVariant: 'home', to: '/', id: '1' },
  {
    name: 'Display',
    iconVariant: 'textLeft',
    to: '/search/result',
    id: '2',
  },
  { name: 'Storage', iconVariant: 'store', to: '/storage', id: '3' },
]

const NavListMobile: React.FC<NavListMobileProps> = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <AnimatedWrapperMobile
          initial={{ width: 0 }}
          animate={{
            width: '100vw',
          }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
        >
          <motion.div
            initial='closed'
            animate='open'
            exit='closed'
            variants={sideVariants}
          >
            {' '}
            {/* <motion.div variants={itemVariants}></motion.div> */}
            <NavList>
              {links.map(({ name, to, id, iconVariant }) => (
                <ListItem key={id}>
                  {' '}
                  <motion.div
                    whileHover={{ scale: 1.075 }}
                    variants={itemVariants}
                  >
                    <NavLink
                      to={to}
                      className={(navData) =>
                        'nav_link' + (navData.isActive ? ' activated' : '')
                      }
                    >
                      {' '}
                      <ListItemMobile>
                        {' '}
                        <MobileSvgDiv>
                          <SvgIcon variant={iconVariant} noMargin />
                        </MobileSvgDiv>
                      </ListItemMobile>
                      {name}
                    </NavLink>
                  </motion.div>
                </ListItem>
              ))}
            </NavList>{' '}
          </motion.div>
        </AnimatedWrapperMobile>
      )}
    </AnimatePresence>
  )
}
export default NavListMobile
