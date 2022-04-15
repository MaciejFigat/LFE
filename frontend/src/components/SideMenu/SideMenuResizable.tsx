import React, { ReactNode, useState } from 'react'

import { useCycle } from 'framer-motion'
import {
  BackgroundDiv,
  SideMenuButtonDiv,
  SideMenuWrapper,
  SideMenuDataColumn,
  DragDivSideMenu,
  ChildrenWrapper,
} from './SideMenu.styled'
import { SendButton } from '../Buttons/Buttons.styled'

interface SideMenuResizableProps {
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
    clipPath: 'circle(50px at 88% 60px)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const SideMenuResizable: React.FC<SideMenuResizableProps> = ({
  children,
  mainData,
}) => {
  const [open, cycleOpen] = useCycle(false, true)
  const handleClickMenu = () => {
    cycleOpen()
  }

  const [initialPos, setInitialPos] = useState<any>(null)
  const [initialSize, setInitialSize] = useState<any>(null)

  const initial = (e: any) => {
    let resizable = document.getElementById('SideMenuResizable')
    console.log(e.clientX)
    setInitialPos(e.clientX)

    if (resizable !== null) {
      setInitialSize(resizable.offsetWidth)
    }
  }

  const resize = (e: any) => {
    let resizable = document.getElementById('SideMenuResizable')
    console.log(e.clientX)
    if (resizable !== null) {
      resizable.style.width = `${
        parseInt(initialSize) + Math.floor(e.clientX - initialPos)
      }px`
    }
  }

  return (
    <>
      <SideMenuDataColumn open={open}>{mainData}</SideMenuDataColumn>
      <SideMenuWrapper
        id='SideMenuResizable'
        initial={false}
        animate={open ? 'open' : 'closed'}
      >
        <DragDivSideMenu
          open={open}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          animate={open ? { opacity: 1 } : { opacity: 0 }}
          exit={{ opacity: 0 }}
          onDragStart={initial}
          onDrag={resize}
        />
        <BackgroundDiv variants={sidebar}>
          {' '}
          <SideMenuButtonDiv open={open}>
            <SendButton variant='primary' onClick={handleClickMenu}>
              {open ? 'Close' : 'Open'}
            </SendButton>
          </SideMenuButtonDiv>{' '}
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </BackgroundDiv>{' '}
      </SideMenuWrapper>
    </>
  )
}
export default SideMenuResizable
