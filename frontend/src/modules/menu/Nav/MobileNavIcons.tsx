import React from 'react'
import {
  ListItem,
  MobileSvgDiv,
  MobileNavList,
  MobileLinkText,
  MobileIconsWrapper
} from './nav.styled'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import ProjectDropdown from '../Dropdowns/ProjectDropdown'
import {
  DropDownHeaderMenu,
  RelativeWrapper
} from '../../../styles/misc.styled'
import NavDropdown from '../Dropdowns/NavDropdown'

interface MobileNavIconsProps {
  scrollDirection?: 'up' | 'down' | 'top' | undefined | null
}

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
}

type LinkData = {
  name: string
  iconVariant: 'home' | 'textLeft'
  to: string
  id: string
}

const links: LinkData[] = [
  { name: 'Start', iconVariant: 'home', to: '/', id: '1' },
  {
    name: 'Dokument',
    iconVariant: 'textLeft',
    to: '/search/result',
    id: '2'
  }
]

const MobileNavIcons: React.FC<MobileNavIconsProps> = ({ scrollDirection }) => {
  return (
    <MobileNavList>
      <MobileIconsWrapper variants={itemVariants}>
        {links.map(({ name, to, id, iconVariant }) => (
          <ListItem key={id}>
            <motion.div variants={itemVariants}>
              {' '}
              <DropDownHeaderMenu>
                {' '}
                <NavLink
                  to={to}
                  className={navData =>
                    'nav_link' + (navData.isActive ? ' activated' : '')
                  }
                >
                  <MobileLinkText>{name}</MobileLinkText>

                  <MobileSvgDiv>
                    <SvgIcon
                      variant={iconVariant}
                      noMargin
                      noContent
                      lowerPosition='4px'
                    />
                  </MobileSvgDiv>
                </NavLink>
              </DropDownHeaderMenu>
            </motion.div>
          </ListItem>
        ))}
        <motion.div variants={itemVariants}>
          {' '}
          <ListItem>
            {' '}
            <ProjectDropdown scrollDirection={scrollDirection} />
          </ListItem>
        </motion.div>
        <motion.div variants={itemVariants}>
          <RelativeWrapper $top='0px' $left='5px'>
            <NavDropdown scrollDirection={scrollDirection} />
          </RelativeWrapper>
        </motion.div>
      </MobileIconsWrapper>
    </MobileNavList>
  )
}
export default MobileNavIcons
