import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TitleAnimated, TitleInput } from './AnimatedList.styled'
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
  const [titleValue, setTitleValue] = useState(title)

  return !titleEditing ? (
    <TitleAnimated as={motion.div} isOpen={isOpen} layout>
      {title}
    </TitleAnimated>
  ) : (
    <TitleAnimated as={motion.div} isOpen={isOpen} layout>
      <TitleInput
        type='title'
        name='title'
        layout
        placeholder='new title'
        value={titleValue}
        onChange={(e: any) => setTitleValue(e.target.value)}
      />
    </TitleAnimated>
  )
}
export default AnimatedTitleField
