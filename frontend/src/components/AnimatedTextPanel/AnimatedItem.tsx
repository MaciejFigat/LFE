import React, { ReactNode, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ListItem,
  ListTitle,
  ListTitleContainer,
  ListRow,
  ListButtonContainer,
  TitleAnimated,
  TitleInput,
} from './AnimatedList.styled'
import { useAppDispatch } from '../../app/reduxHooks'
import {
  citationRemoved,
  citationTitleEdit,
} from '../../features/fragments/fragmentSlice'
import { SendButton } from '../Buttons/Buttons.styled'
import AnimatedTitleField from './AnimatedTitleField'
import AnimatedDescriptionField from './AnimatedDescriptionField'
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

  const [descriptionEditing, setDescriptionEditing] = useState(false)

  const [titleValue, setTitleValue] = useState(title)

  const toggleOpen = () => setIsOpen(!isOpen)

  const toggleEditing = () => setTitleEditing(!titleEditing)

  const toggleEditingDescription = () =>
    setDescriptionEditing(!descriptionEditing)

  const removeCitationHandler = (id: string) => {
    dispatch(citationRemoved(id))
  }

  const saveTitleHandler = () => {
    dispatch(citationTitleEdit(newTitle))
    setTitleEditing(!titleEditing)
  }
  const newTitle = {
    id: id,
    title: titleValue,
  }

  return (
    <>
      <ListItem
        as={motion.li}
        layout
        initial={{ borderRadius: 3, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
      >
        <ListTitleContainer as={motion.div} layout>
          {!titleEditing ? (
            <ListTitle as={motion.h2} layout onClick={toggleOpen}>
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
            </ListTitle>
          ) : (
            <ListTitle>
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
            </ListTitle>
          )}

          <ListButtonContainer>
            {!titleEditing ? (
              <SendButton variant='primaryEmpty' onClick={toggleEditing}>
                edit title
              </SendButton>
            ) : (
              <SendButton variant='primaryEmpty' onClick={saveTitleHandler}>
                save
              </SendButton>
            )}
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
              {children && (
                <ListRow as={motion.div} layout>
                  {children}
                </ListRow>
              )}
              <ListRow as={motion.div} layout>
                <ListTitleContainer>
                  <AnimatedDescriptionField
                    id={id}
                    description={description}
                    descriptionEditing={descriptionEditing}
                  />
                  <ListButtonContainer>
                    <SendButton
                      variant='primaryEmpty'
                      onClick={toggleEditingDescription}
                    >
                      edit description
                    </SendButton>
                  </ListButtonContainer>
                </ListTitleContainer>
              </ListRow>
            </motion.div>
          )}
        </AnimatePresence>
      </ListItem>
    </>
  )
}
export default AnimatedItem
