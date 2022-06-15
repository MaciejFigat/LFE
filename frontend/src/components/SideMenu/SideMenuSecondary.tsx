import React, { ReactNode, useState } from 'react'
import { useCycle } from 'framer-motion'
import {
  BackgroundDiv,
  SideMenuButtonDiv,
  SideMenuWrapper,
  SideMenuDataColumn,
  DragDivSideMenu,
  ChildrenWrapper,
  SideMenuResizeWrapperUltimateWeapon,
  MainWrapperResizableMenu,
} from './SideMenuSecondary.styled'

import SvgIcon from '../SvgIcon/SvgIcon'

interface SideMenuSecondaryProps {
  children: ReactNode
  mainData?: ReactNode
}
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 88% 60px)`,

    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 88% 31px)',
    transition: {
      // delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const SideMenuSecondary: React.FC<SideMenuSecondaryProps> = ({
  children,
  mainData,
}) => {
  const [open, cycleOpen] = useCycle(false, true)
  const handleClickMenu = () => {
    cycleOpen()
  }
  // ? helper for the delay useEffect

  const [initialPos, setInitialPos] = useState<any>(null)
  const [initialSize, setInitialSize] = useState<any>(null)

  const initial = (e: any) => {
    let resizable = document.getElementById('SideMenuResizable')

    setInitialPos(e.clientX)

    if (resizable !== null) {
      setInitialSize(resizable.offsetWidth)
    }
  }

  const resize = (e: any) => {
    let resizable = document.getElementById('SideMenuResizable')
    if (resizable !== null) {
      resizable.style.width = `${
        parseInt(initialSize) - Math.floor(e.clientX - initialPos)
      }px`
    }
  }

  return (
    <>
      {' '}
      <SideMenuButtonDiv open={open} onClick={handleClickMenu}>
        <SvgIcon variant='question' noContent />
      </SideMenuButtonDiv>
      <MainWrapperResizableMenu>
        <SideMenuResizeWrapperUltimateWeapon id='SideMenuResizable'>
          <SideMenuWrapper
            initial={false}
            animate={open ? 'open' : 'closed'}
            draggable='true'
          >
            <DragDivSideMenu
              open={open}
              onDragStart={initial}
              onDragEnd={resize}
              draggable='true'
            />
            <BackgroundDiv variants={sidebar}>
              <ChildrenWrapper>{children}</ChildrenWrapper>
            </BackgroundDiv>
          </SideMenuWrapper>
        </SideMenuResizeWrapperUltimateWeapon>
        <SideMenuDataColumn open={open}>{mainData}</SideMenuDataColumn>
      </MainWrapperResizableMenu>
    </>
  )
}
export default SideMenuSecondary
