import React, {
  ReactNode,
  useState,
  useMemo,
  // useEffect,
  Dispatch,
  SetStateAction,
} from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
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
  HorizontalButtonContainer,
  ListRowShort,
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
import {
  FragmentB,
  FragmentDivSmall,
} from '../KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'

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
    (state) => state.fragment.loadingUpdate
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
      if (loadingUpdate === false) {
        dispatch(getUserFragments(1))
      }
    }
  }, [dispatch, successUpdate, loadingUpdate])

  return (
    <AnimateSharedLayout>
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
              <ListTitle onClick={toggleEditing}>
                <TitleAnimated>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <FragmentB>Title: &nbsp;</FragmentB> {title}
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
                    <HorizontalButtonContainer>
                      {' '}
                      <SendButtonVerySmall
                        variant='secondaryEmpty'
                        onClick={toggleEditing}
                      >
                        <SvgIcon
                          variant='back'
                          toBottom
                          contentAfter='reset title'
                        />
                      </SendButtonVerySmall>{' '}
                      <SendButtonVerySmall
                        variant='successEmpty'
                        onClick={saveTitleHandler}
                      >
                        <SvgIcon
                          variant='save'
                          toBottom
                          contentAfter='save title'
                        />
                      </SendButtonVerySmall>
                    </HorizontalButtonContainer>
                  )}
                  {titleEditing && titleValue === title && (
                    <SendButtonVerySmall
                      variant='secondaryEmpty'
                      onClick={toggleEditing}
                    >
                      <SvgIcon
                        variant='back'
                        toBottom
                        contentAfter='reset title'
                      />
                    </SendButtonVerySmall>
                  )}
                </TitleAnimated>
              </ListTitle>
            )}{' '}
            <AnimatePresence>
              {' '}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.04, 0.22, 0.49, 0.98] }}
                exit={{ opacity: 0 }}
              >
                <HorizontalButtonContainer
                  as={motion.div}
                  layout='position'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <SendButtonVerySmall
                    variant='secondaryEmpty'
                    onClick={() => removeFragmentHandler(id)}
                  >
                    <SvgIcon variant='remove' toBottom contentAfter='delete' />
                  </SendButtonVerySmall>{' '}
                  <SendButtonVerySmall
                    variant='primaryEmpty'
                    onClick={setSimpleViewHandler}
                  >
                    <SvgIcon
                      variant='arrowLeft'
                      toBottom
                      showContent
                      contentAfter='back'
                    />
                  </SendButtonVerySmall>
                </HorizontalButtonContainer>
              </motion.div>{' '}
            </AnimatePresence>
          </ListTitleContainer>{' '}
          <DatePar layout='size'>
            <FragmentB>updated:&nbsp;</FragmentB>
            {updatedAt.substring(0, 10)} at {updatedAt.substring(12, 16)}
          </DatePar>
          <DatePar layout='size'>
            <FragmentB>source:&nbsp;</FragmentB>
            {source}
          </DatePar>
          <KeywordEditing
            keywords={keywords}
            id={id}
            title={title}
            description={description}
            source={source}
            excerpt={excerpt}
            coordinates={coordinates}
          />
          {/* //todo excerpt editing/display below */}
          <ListRow as={motion.div} layout>
            <ListTitleContainer as={motion.div} layout>
              {!excerptEditing ? (
                <DescriptionAnimated
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  as={motion.div}
                  layout='position'
                >
                  <DescriptionDiv
                    onClick={toggleExcerptEditing}
                    layout='position'
                  >
                    {' '}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <FragmentB>Excerpt: </FragmentB>
                      {excerpt}
                    </motion.div>
                  </DescriptionDiv>
                </DescriptionAnimated>
              ) : (
                <DescriptionAnimated
                  as={motion.div}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
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
                      cols='35'
                      rows='3'
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
                      <SvgIcon
                        variant='back'
                        toBottom
                        contentAfter='reset changes'
                      />
                    </SendButtonVerySmall>
                    <SendButtonVerySmall
                      variant='successEmpty'
                      onClick={saveExcerptHandler}
                    >
                      <SvgIcon variant='save' toBottom contentAfter='save' />
                    </SendButtonVerySmall>
                  </>
                )}
                {excerptEditing && excerptValue === excerpt && (
                  <SendButtonVerySmall
                    variant='primaryEmpty'
                    onClick={toggleExcerptEditing}
                  >
                    <SvgIcon variant='back' toBottom contentAfter='back' />
                  </SendButtonVerySmall>
                )}
              </ListButtonContainer>
            </ListTitleContainer>
          </ListRow>
          {/* //todo description editing/display below */}
          <ListRowShort as={motion.div} layout>
            <TextAreaContainer layout>
              {!descriptionEditing ? (
                <DescriptionAnimated
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
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
                      <FragmentB>Description:</FragmentB> {description}
                    </motion.div>
                  </DescriptionDiv>
                </DescriptionAnimated>
              ) : (
                <DescriptionAnimated
                  as={motion.div}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
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
                      rows='3'
                      placeholder='new description'
                      value={descriptionValue}
                      onChange={(e: any) => setDescriptionValue(e.target.value)}
                    />
                  </motion.div>
                </DescriptionAnimated>
              )}
              <ListButtonContainer>
                {descriptionEditing && descriptionValue !== description && (
                  <HorizontalButtonContainer>
                    <SendButtonVerySmall
                      variant='primaryEmpty'
                      onClick={toggleDescriptionReset}
                    >
                      <SvgIcon variant='back' toBottom contentAfter='back' />
                    </SendButtonVerySmall>
                    <SendButtonVerySmall
                      variant='successEmpty'
                      onClick={saveDescriptionHandler}
                    >
                      <SvgIcon variant='save' toBottom contentAfter='save' />
                    </SendButtonVerySmall>
                  </HorizontalButtonContainer>
                )}
                {descriptionEditing && descriptionValue === description && (
                  <SendButtonVerySmall
                    variant='primaryEmpty'
                    onClick={toggleDescriptionEditing}
                  >
                    <SvgIcon variant='back' toBottom contentAfter='back' />
                  </SendButtonVerySmall>
                )}
              </ListButtonContainer>
            </TextAreaContainer>
          </ListRowShort>
        </FragmentDivSmall>
      </ListItem>
    </AnimateSharedLayout>
  )
}
export default AnimatedSavedItem
