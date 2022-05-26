import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconsItem } from './iconsSvg.styled'
import {
  faSignInAlt,
  faSignOutAlt,
  faUser,
  faUserTie,
  faSearch,
  faSearchPlus,
  faHome,
  faLaptopHouse,
  faUserCog,
  faSave,
  faFolderOpen,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
interface SvgIconProps {
  variant:
    | 'login'
    | 'logout'
    | 'admin'
    | 'user'
    | 'search'
    | 'searchPlus'
    | 'home'
    | 'homeTwo'
    | 'cog'
    | 'store'
    | 'save'
    | 'question'

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
      case 'home':
        return faHome
      case 'cog':
        return faUserCog
      case 'store':
        return faFolderOpen
      case 'homeTwo':
        return faLaptopHouse
      case 'save':
        return faSave
      case 'question':
        return faQuestionCircle
      default:
        return faUser
    }
  }

  return (
    <IconsItem noMargin={noMargin}>
      <FontAwesomeIcon icon={iconVersion(variant)} />
    </IconsItem>
  )
}
export default SvgIcon
