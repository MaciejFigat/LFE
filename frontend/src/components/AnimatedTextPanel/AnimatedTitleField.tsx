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
    <TitleAnimated
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
      animate={{ opacity: 1 }}
      as={motion.div}
      isOpen={isOpen}
      layout
    >
      {title}
    </TitleAnimated>
  ) : (
    <TitleAnimated
      as={motion.div}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
      animate={{ opacity: 1 }}
      isOpen={isOpen}
      layout
    >
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
