import React, { useState, useEffect } from 'react'
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
  faCog,
} from '@fortawesome/free-solid-svg-icons'
interface SvgIconProps {
  variant:
    | 'login'
    | 'logout'
    | 'admin'
    | 'user'
    | 'userCog'
    | 'search'
    | 'searchPlus'
    | 'home'
    | 'homeTwo'
    | 'cog'
    | 'store'
    | 'save'
    | 'question'

  noMargin?: boolean
  contentAfter?: string
  toRight?: boolean
}

const SvgIcon: React.FC<SvgIconProps> = ({
  variant,
  noMargin,
  contentAfter,
  toRight,
}) => {
  const [copySuccess, setCopySuccess] = useState<string | undefined>('')
  const hoverHelper = () => {
    setCopySuccess(contentAfter)
  }
  const leaveHelper = () => {
    setCopySuccess('')
  }
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
      case 'userCog':
        return faUserCog
      case 'cog':
        return faCog
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
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccess('')
    }, 3000)
    return () => clearTimeout(timer)
  }, [copySuccess])
  return (
    <IconsItem
      contentAfter={copySuccess}
      noMargin={noMargin}
      onMouseEnter={() => hoverHelper()}
      onMouseLeave={() => leaveHelper()}
      toRight={toRight}
    >
      <FontAwesomeIcon icon={iconVersion(variant)} />
    </IconsItem>
  )
}
export default SvgIcon
