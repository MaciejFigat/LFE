import React, { ReactNode, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ListItem,
  ListTitle,
  ListTitleContainer,
  ListRow,
  ListButtonContainer,
} from './AnimatedList.styled'
import { useAppDispatch } from '../../app/reduxHooks'
import { citationRemoved } from '../../features/fragments/fragmentSlice'
import { SendButton } from '../Buttons/Buttons.styled'
import AnimatedTitleField from './AnimatedTitleField'
interface AnimatedItemProps {
  title: string
  description: string
  children?: ReactNode
  id: string
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({
  title,
  description,
  children,
  id,
}) => {
  const dispatch: any = useAppDispatch()

  const [isOpen, setIsOpen] = useState(false)
  const [titleEditing, setTitleEditing] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)
  const toggleEditing = () => setTitleEditing(!titleEditing)

  const removeCitationHandler = (id: string) => {
    dispatch(citationRemoved(id))
  }

  return (
    <>
      <ListItem
        as={motion.li}
        layout
        initial={{ borderRadius: 3, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4 }}
        // transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.94] }}
        animate={{ opacity: 1, scale: 1 }}
        // exit={{ opacity: 0, scale: 0.8 }}
        exit={{ opacity: 0 }}
      >
        <ListTitleContainer as={motion.div} layout>
          <ListTitle as={motion.h2} layout onClick={toggleOpen}>
            <AnimatedTitleField
              id={id}
              title={title}
              isOpen={isOpen}
              titleEditing={titleEditing}
            />
          </ListTitle>
          <ListButtonContainer>
            <SendButton variant='primaryEmpty' onClick={toggleEditing}>
              Edit title
            </SendButton>
            <SendButton
              variant='secondaryEmpty'
              onClick={() => removeCitationHandler(id)}
            >
              remove
            </SendButton>
          </ListButtonContainer>
        </ListTitleContainer>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {children && <ListRow as={motion.div}>{children}</ListRow>}
              <ListRow as={motion.div}>{description}</ListRow>
            </motion.div>
          )}
        </AnimatePresence>
      </ListItem>
    </>
  )
}
export default AnimatedItem
