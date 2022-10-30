import React from 'react'
import {
  ListItem,
  ListItemMobile,
  AnimatedWrapperMobile,
  MobileSvgDiv,
  MobileNavList,
  MobileLinkText,
} from './nav.styled'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import SvgIcon from '../../Miscellaneous/SvgIcon/SvgIcon'
import ProjectDropdown from '../Dropdowns/ProjectDropdown'
import { DropDownHeaderMenu } from '../../../styles/misc.styled'
interface NavListMobileProps {
  open: boolean
  scrollDirection?: 'up' | 'down' | 'top' | undefined | null
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
  { name: 'Start', iconVariant: 'home', to: '/', id: '1' },
  {
    name: 'Dokument',
    iconVariant: 'textLeft',
    to: '/search/result',
    id: '2',
  },
]

const NavListMobile: React.FC<NavListMobileProps> = ({
  open,
  scrollDirection,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <AnimatedWrapperMobile
          initial={{
            opacity: 0,
            height: 0,
            borderColor: 'var(--background-blur1)',
          }}
          // initial={{ width: 0, height: 0 }}
          animate={{
            height: '62px',
            opacity: 1,
            borderColor: 'var(--background-blur2)',
            // width: '40vw',
          }}
          transition={{ type: 'default' }}
          exit={{
            height: '5px',
            transition: { delay: 0.7, duration: 0.3 },
          }}
        >
          <motion.div
            initial='closed'
            animate='open'
            exit='closed'
            variants={sideVariants}
          >
            <MobileNavList>
              {links.map(({ name, to, id, iconVariant }) => (
                <ListItem key={id}>
                  <motion.div variants={itemVariants}>
                    {' '}
                    <DropDownHeaderMenu>
                      {' '}
                      <NavLink
                        to={to}
                        className={(navData) =>
                          'nav_link' + (navData.isActive ? ' activated' : '')
                        }
                      >
                        <MobileLinkText>{name}</MobileLinkText>
                        {/* <ListItemMobile> */}{' '}
                        <MobileSvgDiv>
                          <SvgIcon
                            variant={iconVariant}
                            noMargin
                            noContent
                            lowerPosition='2px'
                          />
                        </MobileSvgDiv>
                        {/* </ListItemMobile>{' '} */}
                      </NavLink>
                    </DropDownHeaderMenu>
                  </motion.div>
                </ListItem>
              ))}

              <ListItemMobile>
                {' '}
                <motion.div variants={itemVariants}>
                  {' '}
                  <ProjectDropdown scrollDirection={scrollDirection} />
                </motion.div>
              </ListItemMobile>
            </MobileNavList>{' '}
          </motion.div>
        </AnimatedWrapperMobile>
      )}
    </AnimatePresence>
  )
}
export default NavListMobile
