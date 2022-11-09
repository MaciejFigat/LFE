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
  faArrowCircleRight,
  faArrowCircleLeft,
  faAlignLeft,
  faArrowsAltV,
  faEdit,
  faClone,
  faTrashAlt,
  faBackward,
  faExpand,
  faStepBackward,
  faPlusCircle,
  faArrowRight,
  faPaintBrush,
  faFileExport,
  faPlus,
  faMinus,
  faDotCircle,
  faEye,
  faCaretRight,
  faCaretDown,
  faChevronRight,
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
    | 'arrowRight'
    | 'arrowLeft'
    | 'textLeft'
    | 'upAndDown'
    | 'edit'
    | 'add'
    | 'remove'
    | 'back'
    | 'exit'
    | 'expand'
    | 'plus'
    | 'arrow'
    | 'paint'
    | 'export'
    | 'moreOptions'
    | 'minus'
    | 'dotCircle'
    | 'eye'
    | 'rightPoint'
    | 'downPoint'
    | 'chevronRight'

  noMargin?: boolean
  contentAfter?: string
  toRight?: boolean
  toLeft?: boolean
  noContent?: boolean
  showContent?: boolean
  toBottom?: boolean
  lowerPosition?: string
}

const SvgIcon: React.FC<SvgIconProps> = ({
  variant,
  noMargin,
  contentAfter,
  toRight,
  toLeft,
  toBottom,
  showContent,
  noContent,
  lowerPosition,
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
      case 'textLeft':
        return faAlignLeft
      case 'arrowRight':
        return faArrowCircleRight
      case 'upAndDown':
        return faArrowsAltV
      case 'arrowLeft':
        return faArrowCircleLeft
      case 'edit':
        return faEdit
      case 'add':
        return faClone
      case 'remove':
        return faTrashAlt
      case 'back':
        return faBackward
      case 'exit':
        return faStepBackward
      case 'expand':
        return faExpand
      case 'plus':
        return faPlusCircle
      case 'arrow':
        return faArrowRight
      case 'paint':
        return faPaintBrush
      case 'export':
        return faFileExport
      case 'moreOptions':
        return faPlus
      case 'minus':
        return faMinus
      case 'dotCircle':
        return faDotCircle
      case 'eye':
        return faEye
      case 'rightPoint':
        return faCaretRight
      case 'downPoint':
        return faCaretDown
      case 'chevronRight':
        return faChevronRight

      default:
        return faUser
    }
  }
  useEffect(() => {
    if (showContent) {
      setCopySuccess(contentAfter)
    }
    const timer = setTimeout(() => {
      if (!showContent) {
        setCopySuccess('')
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [copySuccess, showContent, contentAfter])

  return (
    <IconsItem
      contentAfter={copySuccess}
      noMargin={noMargin}
      onMouseEnter={() => hoverHelper()}
      onMouseLeave={() => leaveHelper()}
      toRight={toRight}
      toLeft={toLeft}
      toBottom={toBottom}
      noContent={noContent}
      showContent={showContent}
      lowerPosition={lowerPosition}
    >
      <FontAwesomeIcon icon={iconVersion(variant)} />
    </IconsItem>
  )
}
export default SvgIcon
