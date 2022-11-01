import React from 'react'
import {
  ListItem,
  MobileSvgDiv,
  MobileNavList,
  MobileLinkText,
  MobileIconsWrapper,
} from './nav.styled'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import SvgIcon from '../../Miscellaneous/SvgIcon/SvgIcon'
import ProjectDropdown from '../Dropdowns/ProjectDropdown'
import { DropDownHeaderMenu } from '../../../styles/misc.styled'

interface MobileNavIconsProps {
  scrollDirection?: 'up' | 'down' | 'top' | undefined | null
}

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
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
    id: '2',
  },
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
                  className={(navData) =>
                    'nav_link' + (navData.isActive ? ' activated' : '')
                  }
                >
                  <MobileLinkText>{name}</MobileLinkText>

                  <MobileSvgDiv>
                    <SvgIcon
                      variant={iconVariant}
                      noMargin
                      noContent
                      lowerPosition='2px'
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
      </MobileIconsWrapper>
    </MobileNavList>
  )
}
export default MobileNavIcons
