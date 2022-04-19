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
  // const [width, setWidth] = useState<any>(null)

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
      // console.log(`e.clientX: ${e.clientX}`)
      // console.log(`initial: ${initialPos}`)
      // console.log(`width: ${resizable.style.width}`)
      // setWidth(
      //   `${parseInt(initialSize) - Math.floor(e.clientX - initialPos)}px`
      // )
    }
  }

  return (
    <>
      <SideMenuDataColumn open={open}>{mainData}</SideMenuDataColumn>
      <SideMenuResizeWrapperUltimateWeapon id='SideMenuResizable'>
        {/* <SideMenuResizeWrapperUltimateWeapon id='SideMenuResizable' width={width}> */}
        <SideMenuWrapper
          initial={false}
          animate={open ? 'open' : 'closed'}
          draggable='true'
        >
          <DragDivSideMenu
            open={open}
            // initial={{ opacity: 0 }}
            // transition={{ duration: 0.1 }}
            // animate={open ? { opacity: 1 } : { opacity: 0 }}
            // exit={{ opacity: 0 }}
            onDragStart={initial}
            // onDrag={resize}
            onDragEnd={resize}
            draggable='true'
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
      </SideMenuResizeWrapperUltimateWeapon>
    </>
  )
}
export default SideMenuResizable
