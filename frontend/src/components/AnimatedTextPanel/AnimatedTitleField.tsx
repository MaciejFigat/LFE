import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppDispatch } from '../../app/reduxHooks'
import { citationTitleEdit } from '../../features/fragments/fragmentSlice'
import {
  ListButtonContainerLeft,
  TitleAnimated,
  TitleInput,
} from './AnimatedList.styled'
import { SendButton } from '../Buttons/Buttons.styled'
interface AnimatedTitleFieldProps {
  title: string
  isOpen: boolean
  titleEditing: boolean
  id: string
}

const AnimatedTitleField: React.FC<AnimatedTitleFieldProps> = ({
  title,
  isOpen,
  titleEditing,
  id,
}) => {
  const dispatch: any = useAppDispatch()

  const saveTitleHandler = () => {
    dispatch(citationTitleEdit(newTitle))
  }
  const [titleValue, setTitleValue] = useState(title)
  const newTitle = {
    id: id,
    title: titleValue,
  }
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
      <ListButtonContainerLeft>
        <SendButton variant='primaryEmpty' onClick={saveTitleHandler}>
          save
        </SendButton>
      </ListButtonContainerLeft>
    </TitleAnimated>
  )
}
export default AnimatedTitleField
