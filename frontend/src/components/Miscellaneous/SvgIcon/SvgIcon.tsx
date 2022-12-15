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
  faDotCircle,
  faEye,
  faCaretRight,
  faCaretDown,
  faChevronRight,
  faChevronLeft,
  faMinusCircle,
  faPlusSquare,
  faMinusSquare,
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
    | 'arrow'
    | 'paint'
    | 'export'
    | 'moreOptions'
    | 'plus'
    | 'plusSquare'
    | 'minus'
    | 'minusSquare'
    | 'dotCircle'
    | 'eye'
    | 'rightPoint'
    | 'downPoint'
    | 'chevronRight'
    | 'chevronLeft'

  noMargin?: boolean
  contentAfter?: string
  toRight?: string | boolean
  toLeft?: string | boolean
  toTop?: string | boolean
  noContent?: boolean
  showContent?: boolean
  toBottom?: string | boolean
  lowerPosition?: string
  width?: string
}

const SvgIcon: React.FC<SvgIconProps> = ({
  variant,
  noMargin,
  contentAfter,
  toRight,
  toLeft,
  toTop,
  toBottom,
  showContent,
  noContent,
  lowerPosition,
  width,
}) => {
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
      case 'plusSquare':
        return faPlusSquare
      case 'arrow':
        return faArrowRight
      case 'paint':
        return faPaintBrush
      case 'export':
        return faFileExport
      case 'moreOptions':
        return faPlus
      case 'minus':
        return faMinusCircle
      case 'minusSquare':
        return faMinusSquare
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
      case 'chevronLeft':
        return faChevronLeft

      default:
        return faUser
    }
  }

  return (
    <IconsItem
      contentAfter={contentAfter}
      noMargin={noMargin}
      toRight={toRight}
      toLeft={toLeft}
      toBottom={toBottom}
      toTop={toTop}
      noContent={noContent}
      showContent={showContent}
      lowerPosition={lowerPosition}
      width={width}
    >
      <FontAwesomeIcon icon={iconVersion(variant)} />
    </IconsItem>
  )
}
export default SvgIcon
