import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconsItem, IconsWrapper } from './iconsSvg.styled'
import {
  faSignInAlt,
  faSignOutAlt,
  faUser,
  faUserTie,
  faSearch,
  faSearchPlus,
} from '@fortawesome/free-solid-svg-icons'
interface SvgIconProps {
  variant: 'login' | 'logout' | 'admin' | 'user' | 'search' | 'searchPlus'
  noMargin?: boolean
}

const SvgIcon: React.FC<SvgIconProps> = ({ variant, noMargin }) => {
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
      case 'search':
        return faSearch
      case 'searchPlus':
        return faSearchPlus
      default:
        return faUser
    }
  }

  return (
    // <IconsWrapper>
    <IconsItem noMargin={noMargin}>
      <FontAwesomeIcon icon={iconVersion(variant)} />
    </IconsItem>
    // </IconsWrapper>
  )
}
export default SvgIcon
