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
  DescriptionAnimated,
  DescriptionInput,
} from './AnimatedList.styled'
import { useAppDispatch } from '../../app/reduxHooks'
import {
  citationRemoved,
  citationTitleEdit,
  citationDescriptionEdit,
} from '../../features/fragments/fragmentSlice'
import { SendButtonSmall } from '../Buttons/Buttons.styled'

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

  const [descriptionValue, setDescriptionValue] = useState(description)

  const toggleOpen = () => setIsOpen(!isOpen)

  const toggleEditing = () => setTitleEditing(!titleEditing)

  const toggleEditingDescription = () =>
    setDescriptionEditing(!descriptionEditing)

  const removeCitationHandler = (id: string) => {
    dispatch(citationRemoved(id))
  }
  const newTitle = {
    id: id,
    title: titleValue,
  }
  const saveTitleHandler = () => {
    dispatch(citationTitleEdit(newTitle))
    setTitleEditing(!titleEditing)
  }
  const newDescription = {
    id: id,
    description: descriptionValue,
  }
  const saveDescriptionHandler = () => {
    dispatch(citationDescriptionEdit(newDescription))
    setDescriptionEditing(!descriptionEditing)
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
              <SendButtonSmall variant='primaryEmpty' onClick={toggleEditing}>
                edit title
              </SendButtonSmall>
            ) : (
              <SendButtonSmall
                variant='successEmpty'
                onClick={saveTitleHandler}
              >
                save
              </SendButtonSmall>
            )}
            <SendButtonSmall
              variant='secondaryEmpty'
              onClick={() => removeCitationHandler(id)}
            >
              remove
            </SendButtonSmall>
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
                  {!descriptionEditing ? (
                    <DescriptionAnimated
                      initial={{ opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
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
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
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
                        onChange={(e: any) =>
                          setDescriptionValue(e.target.value)
                        }
                      />
                    </DescriptionAnimated>
                  )}
                  <ListButtonContainer>
                    {!descriptionEditing ? (
                      <SendButtonSmall
                        variant='primaryEmpty'
                        onClick={toggleEditingDescription}
                      >
                        edit description
                      </SendButtonSmall>
                    ) : (
                      <SendButtonSmall
                        variant='successEmpty'
                        onClick={saveDescriptionHandler}
                      >
                        save
                      </SendButtonSmall>
                    )}
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
