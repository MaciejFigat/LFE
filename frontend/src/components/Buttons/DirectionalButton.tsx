import React from 'react'
import { DirButton } from './Buttons.styled'

interface DirectionalButtonProps {
  children: React.ReactNode
}

const DirectionalButton: React.FC<DirectionalButtonProps> = ({ children }) => {
  return (
    <DirButton>
      <span></span>
      {children}
      <span></span>
    </DirButton>
  )
}
export default DirectionalButton
