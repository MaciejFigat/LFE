import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconsItem, IconsWrapper } from './iconsSvg.styled'
import {
  faSignInAlt,
  faSignOutAlt,
  faUser,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'
interface SvgIconProps {
  variant: 'login' | 'logout' | 'admin' | 'user'
}

const SvgIcon: React.FC<SvgIconProps> = ({ variant }) => {
  const iconVersion = (variant: string) => {
    switch (variant) {
      case 'login':
        return faSignInAlt
      case 'logout':
        return faSignOutAlt
      case 'admin':
        return faUserTie
      case 'user':
        return faUser
      default:
        return faUser
    }
  }

  return (
    <IconsWrapper>
      <IconsItem>
        <FontAwesomeIcon icon={iconVersion(variant)} />
      </IconsItem>
    </IconsWrapper>
  )
}
export default SvgIcon
