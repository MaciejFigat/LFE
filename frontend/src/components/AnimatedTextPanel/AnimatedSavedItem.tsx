import React, {
  ReactNode,
  useState,
  useMemo,
  // useEffect,
  Dispatch,
  SetStateAction,
} from 'react'
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
  TextAreaContainer,
} from './AnimatedList.styled'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'

import {
  deleteSavedFragment,
  editSavedFragment,
  getUserFragments,
} from '../../features/fragments/fragmentSlice'

import { SendButtonVerySmall } from '../Buttons/Buttons.styled'
import KeywordEditing from './KeywordEditing'
import SvgIcon from '../SvgIcon/SvgIcon'
import { FragmentDivSmall } from '../KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'

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
  const successUpdate: boolean = useAppSelector(
    (state) => state.fragment.successUpdate
  )
  const loadingUpdate: boolean = useAppSelector(
    (state) => state.fragment.successUpdate
  )

  const [titleEditing, setTitleEditing] = useState(false)

  const [descriptionEditing, setDescriptionEditing] = useState(false)

  const [excerptEditing, setExcerptEditing] = useState(false)

  const [titleValue, setTitleValue] = useState(title)

  const [descriptionValue, setDescriptionValue] = useState(description)

  const [excerptValue, setExcerptValue] = useState(excerpt)

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

  const setSimpleViewHandler = () => {
    setSimpleView !== undefined && setSimpleView(!simpleView)
  }
  // todo it trigers on every render, need to change it in this regard
  useMemo(() => {
    if (successUpdate === true) {
      dispatch(getUserFragments(1))
    }
  }, [dispatch, successUpdate])
  // useEffect(() => {
  //   if (successUpdate === true) {
  //     dispatch(getUserFragments(1))
  //   }
  // }, [dispatch, successUpdate, loadingUpdate])

  return (
    <ListItem
      as={motion.li}
      layout
      initial={{ borderRadius: 3, opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <FragmentDivSmall as={motion.div} layout>
        <ListTitleContainer as={motion.div} layout='size'>
          {!titleEditing ? (
            <ListTitle as={motion.h2} layout onClick={toggleEditing}>
              <TitleAnimated as={motion.div} layout>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Title: &nbsp; {title}
                </motion.div>
              </TitleAnimated>
            </ListTitle>
          ) : (
            <ListTitle>
              <TitleAnimated as={motion.div}>
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
                />{' '}
                {titleEditing && titleValue !== title && (
                  <SendButtonVerySmall
                    variant='successEmpty'
                    onClick={saveTitleHandler}
                  >
                    <SvgIcon variant='save' toLeft contentAfter='save title' />
                  </SendButtonVerySmall>
                )}
                {titleEditing && titleValue === title && (
                  <SendButtonVerySmall
                    variant='secondaryEmpty'
                    onClick={toggleEditing}
                  >
                    <SvgIcon variant='back' toLeft contentAfter='reset title' />
                  </SendButtonVerySmall>
                )}
              </TitleAnimated>
            </ListTitle>
          )}{' '}
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
                {' '}
                <SendButtonVerySmall
                  variant='successEmpty'
                  onClick={setSimpleViewHandler}
                >
                  <SvgIcon variant='arrowLeft' toLeft contentAfter='back' />
                </SendButtonVerySmall>
                <SendButtonVerySmall
                  variant='secondaryEmpty'
                  onClick={() => removeFragmentHandler(id)}
                >
                  <SvgIcon variant='remove' toLeft contentAfter='delete' />
                </SendButtonVerySmall>
              </motion.div>{' '}
            </AnimatePresence>
          </ListButtonContainer>
        </ListTitleContainer>{' '}
        <DatePar>
          updated: {updatedAt.substring(0, 10)} at {updatedAt.substring(12, 16)}
        </DatePar>
        <DatePar>source: {source}</DatePar>
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
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
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
                        <DatePar>Excerpt:</DatePar>
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
                        cols='39'
                        rows='7'
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
                      <SendButtonVerySmall
                        variant='primaryEmpty'
                        onClick={toggleExcerptReset}
                      >
                        <SvgIcon variant='back' toLeft contentAfter='reset' />
                      </SendButtonVerySmall>
                      <SendButtonVerySmall
                        variant='successEmpty'
                        onClick={saveExcerptHandler}
                      >
                        <SvgIcon variant='save' toLeft contentAfter='save' />
                      </SendButtonVerySmall>
                    </>
                  )}
                  {excerptEditing && excerptValue === excerpt && (
                    <SendButtonVerySmall
                      variant='primaryEmpty'
                      onClick={toggleExcerptEditing}
                    >
                      <SvgIcon variant='back' toLeft contentAfter='back' />
                    </SendButtonVerySmall>
                  )}
                </ListButtonContainer>
              </ListTitleContainer>
            </ListRow>
            {/* //todo description editing/display below */}
            <ListRow as={motion.div} layout>
              <TextAreaContainer>
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
                        <DatePar>Description:</DatePar> {description}
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
                        cols='35'
                        rows='5'
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
                      <SendButtonVerySmall
                        variant='primaryEmpty'
                        onClick={toggleDescriptionReset}
                      >
                        <SvgIcon variant='back' toLeft contentAfter='back' />
                      </SendButtonVerySmall>
                      <SendButtonVerySmall
                        variant='successEmpty'
                        onClick={saveDescriptionHandler}
                      >
                        <SvgIcon variant='save' toLeft contentAfter='save' />
                      </SendButtonVerySmall>
                    </>
                  )}
                  {descriptionEditing && descriptionValue === description && (
                    <SendButtonVerySmall
                      variant='primaryEmpty'
                      onClick={toggleDescriptionEditing}
                    >
                      <SvgIcon variant='back' toLeft contentAfter='back' />
                    </SendButtonVerySmall>
                  )}
                </ListButtonContainer>
              </TextAreaContainer>
            </ListRow>
            {/* //todo from here source display/editing */}
          </motion.div>
        </AnimatePresence>
      </FragmentDivSmall>
    </ListItem>
  )
}
export default AnimatedSavedItem
