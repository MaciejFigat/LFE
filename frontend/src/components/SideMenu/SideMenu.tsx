import React, { ReactNode } from 'react'
// import { AnimatePresence, motion } from 'framer-motion'
import { useCycle } from 'framer-motion'
import {
  // SideMenuDiv,
  BackgroundDiv,
  SideMenuButtonDiv,
  SideMenuWrapper,
  SideMenuDataColumn,
} from './SideMenu.styled'
import { SendButton } from '../Buttons/Buttons.styled'
interface SideMenuProps {
  children: ReactNode
  mainData?: ReactNode
}
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 92% 50px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(50px at 92% 50px)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const SideMenu: React.FC<SideMenuProps> = ({ children, mainData }) => {
  const [open, cycleOpen] = useCycle(false, true)
  const handleClickMenu = () => {
    cycleOpen()
  }
  return (
    <>
      <SideMenuDataColumn>{mainData}</SideMenuDataColumn>
      <SideMenuWrapper initial={false} animate={open ? 'open' : 'closed'}>
        <BackgroundDiv variants={sidebar}>
          <SideMenuButtonDiv open={open}>
            <SendButton variant='primary' onClick={handleClickMenu}>
              {open ? 'Close' : 'Open'}
            </SendButton>
          </SideMenuButtonDiv>{' '}
          {children}
        </BackgroundDiv>
      </SideMenuWrapper>

      {/* <SideMenuDataColumn>{mainData}</SideMenuDataColumn> */}
    </>
  )
}
export default SideMenu
