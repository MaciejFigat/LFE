import React from 'react'
import { motion } from 'framer-motion'
import { TitleAnimated } from './AnimatedList.styled'
interface AnimatedTitleFieldProps {
  title: string
  isOpen: boolean
  titleEditing: boolean
}

const AnimatedTitleField: React.FC<AnimatedTitleFieldProps> = ({
  title,
  isOpen,
  titleEditing,
}) => {
  return titleEditing === false ? (
    <TitleAnimated as={motion.div} isOpen={isOpen} layout>
      {title}
    </TitleAnimated>
  ) : (
    <TitleAnimated as={motion.div} isOpen={isOpen} layout>
      best Title
    </TitleAnimated>
  )
}
export default AnimatedTitleField
