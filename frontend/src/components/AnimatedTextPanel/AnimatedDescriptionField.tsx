import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppDispatch } from '../../app/reduxHooks'
import { citationTitleEdit } from '../../features/fragments/fragmentSlice'
import {
  DescriptionAnimated,
  DescriptionInput,
  ListButtonContainerLeft,
} from './AnimatedList.styled'
import { SendButtonSmall } from '../Buttons/Buttons.styled'
interface AnimatedDescriptionFieldProps {
  descriptionEditing: boolean
  description: string
  id: string
}

const AnimatedDescriptionField: React.FC<AnimatedDescriptionFieldProps> = ({
  id,
  descriptionEditing,
  description,
}) => {
  const dispatch: any = useAppDispatch()
  const [descriptionValue, setDescriptionValue] = useState(description)
  const newDescription = {
    id: id,
    description: descriptionValue,
  }
  const saveDescriptionHandler = () => {
    dispatch(citationTitleEdit(newDescription))
  }
  return !descriptionEditing ? (
    <DescriptionAnimated
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
      animate={{ opacity: 1 }}
      as={motion.div}
      layout
    >
      {description}
    </DescriptionAnimated>
  ) : (
    <DescriptionAnimated
      as={motion.div}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
      animate={{ opacity: 1 }}
      layout
    >
      <DescriptionInput
        type='description'
        name='description'
        row='14'
        layout
        placeholder='new description'
        value={descriptionValue}
        onChange={(e: any) => setDescriptionValue(e.target.value)}
      />
      <ListButtonContainerLeft>
        <SendButtonSmall
          variant='primaryEmpty'
          onClick={saveDescriptionHandler}
        >
          save
        </SendButtonSmall>
      </ListButtonContainerLeft>
    </DescriptionAnimated>
  )
}
export default AnimatedDescriptionField
