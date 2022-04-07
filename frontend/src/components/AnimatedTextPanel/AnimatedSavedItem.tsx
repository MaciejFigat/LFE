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
  DescriptionDiv,
} from './AnimatedList.styled'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import {
  citationTitleEdit,
  citationDescriptionEdit,
} from '../../features/fragments/fragmentSlice'
import { deleteSavedFragment } from '../../features/fragments/fragmentSlice'
import { SendButtonSmall } from '../Buttons/Buttons.styled'
import { UserInfo } from '../../interfaces'

interface AnimatedSavedItemProps {
  title: string
  description: string
  children?: ReactNode
  id: string
  source: string
  excerpt: string
  coordinates: string
}

const AnimatedSavedItem: React.FC<AnimatedSavedItemProps> = ({
  title,
  description,
  children,
  id,
  source,
  excerpt,
  coordinates,
}) => {
  const dispatch: any = useAppDispatch()
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  const [isOpen, setIsOpen] = useState(false)

  const [titleEditing, setTitleEditing] = useState(false)

  const [descriptionEditing, setDescriptionEditing] = useState(false)

  const [excerptEditing, setExcerptEditing] = useState(false)

  const [sourceEditing, setSourceEditing] = useState(false)

  const [titleValue, setTitleValue] = useState(title)

  const [descriptionValue, setDescriptionValue] = useState(description)

  const [excerptValue, setExcerptValue] = useState(excerpt)

  const [sourceValue, setSourceValue] = useState(source)

  const toggleOpen = () => setIsOpen(!isOpen)

  const toggleEditing = () => setTitleEditing(!titleEditing)

  const toggleDescriptionEditing = () =>
    setDescriptionEditing(!descriptionEditing)

  const toggleExcerptEditing = () => setExcerptEditing(!excerptEditing)

  const toggleSourceEditing = () => setSourceEditing(!sourceEditing)

  const removeFragmentHandler = (id: string) => {
    dispatch(deleteSavedFragment(id))
  }
  // Todo title editing
  const newTitle = {
    id: id,
    title: titleValue,
  }
  const saveTitleHandler = () => {
    dispatch(citationTitleEdit(newTitle))
    setTitleEditing(!titleEditing)
  }
  // Todo description editing
  const newDescription = {
    id: id,
    description: descriptionValue,
  }
  const saveDescriptionHandler = () => {
    dispatch(citationDescriptionEdit(newDescription))
    setDescriptionEditing(!descriptionEditing)
  }
  // Todo excerpt editing
  const newExcerpt = {
    id: id,
    description: excerptValue,
  }
  const saveExcerptHandler = () => {
    // dispatch(citationDescriptionEdit(newExcerpt))
    setExcerptEditing(!excerptEditing)
  }
  // TODO source editing
  const newSource = {
    id: id,
    description: descriptionValue,
  }
  const saveSourceHandler = () => {
    // dispatch(citationDescriptionEdit(newDescription))
    setSourceEditing(!sourceEditing)
  }
  const newFragment = {
    source: source,
    excerpt: excerpt,
    coordinates: coordinates,
    title: title,
    description: description,
  }

  const saveFragmentHandler = () => {
    // dispatch(createFragment(newFragment))
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
        {' '}
        <ListTitleContainer as={motion.div} layout='size'>
          {!titleEditing ? (
            <ListTitle as={motion.h2} layout onClick={toggleOpen}>
              <TitleAnimated as={motion.div} isOpen={isOpen} layout>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {title}
                </motion.div>
              </TitleAnimated>
            </ListTitle>
          ) : (
            <ListTitle>
              <TitleAnimated as={motion.div} isOpen={isOpen}>
                <TitleInput
                  type='title'
                  name='title'
                  layout
                  placeholder='new title'
                  value={titleValue}
                  onChange={(e: any) => setTitleValue(e.target.value)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </TitleAnimated>
            </ListTitle>
          )}

          <ListButtonContainer
            as={motion.div}
            layout='position'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.04, 0.22, 0.49, 0.98] }}
                exit={{ opacity: 0 }}
              >
                {!titleEditing ? (
                  <SendButtonSmall
                    variant='primaryEmpty'
                    onClick={toggleEditing}
                    as={motion.button}
                  >
                    edit title
                  </SendButtonSmall>
                ) : (
                  <SendButtonSmall
                    variant='successEmpty'
                    onClick={saveTitleHandler}
                  >
                    save title
                  </SendButtonSmall>
                )}
                <SendButtonSmall
                  variant='secondaryEmpty'
                  onClick={() => removeFragmentHandler(id)}
                >
                  delete permanently
                </SendButtonSmall>
                {Object.keys(userInfo).length > 0 && (
                  <SendButtonSmall
                    variant='successEmpty'
                    onClick={saveFragmentHandler}
                  >
                    save fragment
                  </SendButtonSmall>
                )}{' '}
              </motion.div>{' '}
            </AnimatePresence>
          </ListButtonContainer>
        </ListTitleContainer>{' '}
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
              {/* //todo excerpt editing/display below */}
              <ListRow as={motion.div} layout>
                <ListTitleContainer>
                  {!excerptEditing ? (
                    <DescriptionAnimated
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.52, 0.73, 0.98],
                      }}
                      as={motion.div}
                      layout='position'
                    >
                      <DescriptionDiv>
                        {' '}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {excerpt}
                        </motion.div>
                      </DescriptionDiv>
                    </DescriptionAnimated>
                  ) : (
                    <DescriptionAnimated
                      as={motion.div}
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      layout='position'
                    >
                      {' '}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <DescriptionInput
                          type='excerpt'
                          name='excerpt'
                          layout
                          placeholder='new excerpt'
                          value={excerptValue}
                          onChange={(e: any) => setExcerptValue(e.target.value)}
                        />
                      </motion.div>
                    </DescriptionAnimated>
                  )}
                  <ListButtonContainer>
                    {!excerptEditing ? (
                      <SendButtonSmall
                        variant='primaryEmpty'
                        onClick={toggleExcerptEditing}
                      >
                        edit excerpt
                      </SendButtonSmall>
                    ) : (
                      <SendButtonSmall
                        variant='successEmpty'
                        onClick={saveExcerptHandler}
                      >
                        save
                      </SendButtonSmall>
                    )}
                  </ListButtonContainer>
                </ListTitleContainer>
              </ListRow>
              {/* //todo description editing/display below */}
              <ListRow as={motion.div} layout>
                <ListTitleContainer>
                  {!descriptionEditing ? (
                    <DescriptionAnimated
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.52, 0.73, 0.98],
                      }}
                      as={motion.div}
                      layout='position'
                    >
                      <DescriptionDiv>
                        {' '}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {description}
                        </motion.div>
                      </DescriptionDiv>
                    </DescriptionAnimated>
                  ) : (
                    <DescriptionAnimated
                      as={motion.div}
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      layout='position'
                    >
                      {' '}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <DescriptionInput
                          type='description'
                          name='description'
                          layout
                          placeholder='new description'
                          value={descriptionValue}
                          onChange={(e: any) =>
                            setDescriptionValue(e.target.value)
                          }
                        />
                      </motion.div>
                    </DescriptionAnimated>
                  )}
                  <ListButtonContainer>
                    {!descriptionEditing ? (
                      <SendButtonSmall
                        variant='primaryEmpty'
                        onClick={toggleDescriptionEditing}
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
              {/* //todo from here source display/editing */}
              <ListRow as={motion.div} layout>
                <ListTitleContainer>
                  {!sourceEditing ? (
                    <DescriptionAnimated
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.52, 0.73, 0.98],
                      }}
                      as={motion.div}
                      layout='position'
                    >
                      <DescriptionDiv>
                        {' '}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {source}
                        </motion.div>
                      </DescriptionDiv>
                    </DescriptionAnimated>
                  ) : (
                    <DescriptionAnimated
                      as={motion.div}
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      layout='position'
                    >
                      {' '}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <DescriptionInput
                          type='source'
                          name='source'
                          layout
                          placeholder='new source'
                          value={sourceValue}
                          onChange={(e: any) => setSourceValue(e.target.value)}
                        />
                      </motion.div>
                    </DescriptionAnimated>
                  )}
                  <ListButtonContainer>
                    {!sourceEditing ? (
                      <SendButtonSmall
                        variant='primaryEmpty'
                        onClick={toggleSourceEditing}
                      >
                        edit source
                      </SendButtonSmall>
                    ) : (
                      <SendButtonSmall
                        variant='successEmpty'
                        onClick={saveSourceHandler}
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
export default AnimatedSavedItem
