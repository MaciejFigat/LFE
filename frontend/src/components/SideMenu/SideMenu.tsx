import React, { ReactNode } from 'react'
import { useCycle } from 'framer-motion'

interface SideMenuProps {
  children: ReactNode
}

const SideMenu: React.FC<SideMenuProps> = ({ children }) => {
  const [open, cycleOpen] = useCycle(false, true)
  const handleClickMenu = () => {
    cycleOpen()
  }
  return (
    <>
      <button onClick={handleClickMenu}>click to enlarge</button> {children}
    </>
  )
}
export default SideMenu
