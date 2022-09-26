import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { IconsItem, IconsWrapper } from './iconsSvg.styled'
import { motion } from 'framer-motion'
import {
  faInstagram,
  faTelegramPlane,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import StaggerChildrenWrapper from '../AnimationWrappers/StaggerChildrenWrapper'
interface ContactIconsProps {}

const icons = [
  {
    href: 'https://www.instagram.com/ninaolgakirylowicz/',
    icon: faTelegramPlane,
    id: '1',
    ariaLabel: 'telegram',
  },
  {
    href: 'https://www.instagram.com/ninaolgakirylowicz/',
    icon: faTwitter,
    id: '2',
    ariaLabel: 'twitter',
  },
  {
    href: 'https://www.instagram.com/ninaolgakirylowicz/',
    icon: faInstagram,
    id: '3',
    ariaLabel: 'instagram',
  },
  {
    href: 'https://www.instagram.com/ninaolgakirylowicz/',
    icon: faFacebook,
    id: '4',
    ariaLabel: 'facebook',
  },
]
const itemVariants = {
  closed: {
    y: 50,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
  },
}

const ContactIcons: React.FC<ContactIconsProps> = () => {
  return (
    <StaggerChildrenWrapper>
      <IconsWrapper>
        {icons.map(({ href, ariaLabel, id, icon }) => (
          <motion.div
            whileHover={{ scale: 1.075 }}
            variants={itemVariants}
            key={id}
          >
            <IconsItem>
              <a href={href} aria-label={ariaLabel}>
                <FontAwesomeIcon icon={icon} />
              </a>
            </IconsItem>
          </motion.div>
        ))}
        <motion.div whileHover={{ scale: 1.075 }} variants={itemVariants}>
          <IconsItem>
            <NavLink to='/contact'>
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </NavLink>
          </IconsItem>
        </motion.div>
      </IconsWrapper>
    </StaggerChildrenWrapper>
  )
}
export default ContactIcons
