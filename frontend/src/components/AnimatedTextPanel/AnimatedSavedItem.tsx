import React, { ReactNode, useState, Dispatch, SetStateAction } from 'react'
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
  DatePar,
} from './AnimatedList.styled'
import { useAppDispatch } from '../../app/reduxHooks'

import {
  deleteSavedFragment,
  editSavedFragment,
} from '../../features/fragments/fragmentSlice'
import { SendButtonSmall, SendButtonVerySmall } from '../Buttons/Buttons.styled'
import KeywordEditing from './KeywordEditing'

interface AnimatedSavedItemProps {
  title: string
  description: string
  children?: ReactNode
  id: string
  source: string
  excerpt: string
  coordinates: string
  updatedAt: string
  keywords: string[]
  simpleView?: boolean
  setSimpleView?: Dispatch<SetStateAction<boolean>>
}

const AnimatedSavedItem: React.FC<AnimatedSavedItemProps> = ({
  title,
  description,
  children,
  id,
  source,
  excerpt,
  coordinates,
  updatedAt,
  keywords,
  setSimpleView,
  simpleView,
}) => {
  const dispatch: any = useAppDispatch()

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

  const toggleDescriptionReset = () => {
    setDescriptionEditing(!descriptionEditing)
    setDescriptionValue(description)
  }

  const toggleExcerptEditing = () => setExcerptEditing(!excerptEditing)
  const toggleExcerptReset = () => {
    setExcerptEditing(!excerptEditing)
    setExcerptValue(excerpt)
  }

  const toggleSourceEditing = () => setSourceEditing(!sourceEditing)
  const toggleSourceReset = () => {
    setSourceEditing(!sourceEditing)
    setSourceValue(source)
  }
  const removeFragmentHandler = (id: string) => {
    dispatch(deleteSavedFragment(id))
  }
  // Todo title editing
  const newTitle = {
    _id: id,
    source: source,
    excerpt: excerpt,
    coordinates: coordinates,
    title: titleValue,
    description: description,
    keywords: keywords,
  }
  const saveTitleHandler = () => {
    dispatch(editSavedFragment(newTitle))
    setTitleEditing(!titleEditing)
  }
  // Todo description editing
  const newDescription = {
    _id: id,
    source: source,
    excerpt: excerpt,
    coordinates: coordinates,
    title: title,
    description: descriptionValue,
    keywords: keywords,
  }
  const saveDescriptionHandler = () => {
    dispatch(editSavedFragment(newDescription))
    setDescriptionEditing(!descriptionEditing)
  }
  // Todo excerpt editing
  const newExcerpt = {
    _id: id,
    source: source,
    excerpt: excerptValue,
    coordinates: coordinates,
    title: title,
    description: description,
    keywords: keywords,
  }
  const saveExcerptHandler = () => {
    dispatch(editSavedFragment(newExcerpt))
    setExcerptEditing(!excerptEditing)
  }
  // TODO source editing
  const newSource = {
    _id: id,
    source: sourceValue,
    excerpt: excerpt,
    coordinates: coordinates,
    title: title,
    description: description,
    keywords: keywords,
  }
  const saveSourceHandler = () => {
    dispatch(editSavedFragment(newSource))
    setSourceEditing(!sourceEditing)
  }
  const setSimpleViewHandler = () => {
    setSimpleView !== undefined && setSimpleView(!simpleView)
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
        <SendButtonVerySmall
          // onClick={setSimpleView !== undefined && setSimpleView(!simpleView)}
          onClick={setSimpleViewHandler}
        >
          Test
        </SendButtonVerySmall>
        <ListTitleContainer as={motion.div} layout='size'>
          {!titleEditing ? (
            <ListTitle as={motion.h2} layout onClick={toggleOpen}>
              <TitleAnimated as={motion.div} isOpen={isOpen} layout>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {title} <DatePar>{excerpt.substring(0, 10)}</DatePar>
                  <DatePar>
                    updated: {updatedAt.substring(0, 10)} at{' '}
                    {updatedAt.substring(12, 16)}
                  </DatePar>
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
              </motion.div>{' '}
            </AnimatePresence>
          </ListButtonContainer>
        </ListTitleContainer>{' '}
        {/* //? testing another keyword presentation */}
        <KeywordEditing
          keywords={keywords}
          id={id}
          title={title}
          description={description}
          source={source}
          excerpt={excerpt}
          coordinates={coordinates}
        />
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
                      <DescriptionDiv onClick={toggleExcerptEditing}>
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
                    {excerptEditing && excerptValue !== excerpt && (
                      <>
                        <SendButtonSmall
                          variant='primaryEmpty'
                          onClick={toggleExcerptReset}
                        >
                          reset
                        </SendButtonSmall>
                        <SendButtonSmall
                          variant='successEmpty'
                          onClick={saveExcerptHandler}
                        >
                          save
                        </SendButtonSmall>
                      </>
                    )}
                    {excerptEditing && excerptValue === excerpt && (
                      <SendButtonSmall
                        variant='primaryEmpty'
                        onClick={toggleExcerptEditing}
                      >
                        back
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
                      <DescriptionDiv onClick={toggleDescriptionEditing}>
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
                    {descriptionEditing && descriptionValue !== description && (
                      <>
                        <SendButtonSmall
                          variant='primaryEmpty'
                          onClick={toggleDescriptionReset}
                        >
                          reset
                        </SendButtonSmall>
                        <SendButtonSmall
                          variant='successEmpty'
                          onClick={saveDescriptionHandler}
                        >
                          save
                        </SendButtonSmall>
                      </>
                    )}
                    {descriptionEditing && descriptionValue === description && (
                      <SendButtonSmall
                        variant='primaryEmpty'
                        onClick={toggleDescriptionEditing}
                      >
                        back
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
                      <DescriptionDiv onClick={toggleSourceEditing}>
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
                    {sourceEditing && sourceValue !== source && (
                      <>
                        <SendButtonSmall
                          variant='primaryEmpty'
                          onClick={toggleSourceReset}
                        >
                          reset
                        </SendButtonSmall>
                        <SendButtonSmall
                          variant='successEmpty'
                          onClick={saveSourceHandler}
                        >
                          save
                        </SendButtonSmall>
                      </>
                    )}
                    {sourceEditing && sourceValue === source && (
                      <SendButtonSmall
                        variant='primaryEmpty'
                        onClick={toggleSourceEditing}
                      >
                        back
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
