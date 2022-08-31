import { AnimatePresence, motion } from 'framer-motion'
import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useMemo,
} from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import {
  deleteSavedFragment,
  editSavedFragment,
  getUserFragments,
} from '../../../features/fragments/fragmentSlice'
import KeywordEditing from '../../AnimatedTextPanel/KeywordEditing'
import { SendButtonVerySmall } from '../../Buttons/Buttons.styled'
import {
  ClosingDivBig,
  OpenedDivBig,
} from '../../LayoutAnimated/LayoutAnimated.styled'
import SvgIcon from '../../SvgIcon/SvgIcon'
import {
  DescriptionDiv,
  FragmentDivPopup,
  PopupB,
  PopupDatePar,
  PopupDescriptionAnimated,
  PopupDescriptionInput,
  PopupHorizontalContainer,
  PopupListButtonContainer,
  PopupListRow,
  PopupListRowShort,
  PopupTextAreaContainer,
  PopupTitle,
  PopupTitleAnimated,
  PopupTitleContainer,
  PopupTitleInput,
} from './PopupEditWindow.styled'

interface PupupEditWindowProps {
  title: string
  openedApp: string | null
  setOpenedApp: Dispatch<SetStateAction<null | string>>
  setCanOpenApp: Dispatch<SetStateAction<boolean>>
  idOpen: string
  canOpenApp?: boolean
}

const PupupEditWindow: React.FC<PupupEditWindowProps> = ({
  openedApp,
  setOpenedApp,
  setCanOpenApp,
  idOpen,
}) => {
  const dispatch: any = useAppDispatch()
  const successUpdate: boolean = useAppSelector(
    (state) => state.fragment.successUpdate
  )
  const loadingUpdate: boolean = useAppSelector(
    (state) => state.fragment.loadingUpdate
  )
  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )

  const [openedFragment, setOpenedFragment] = useState({
    title: '',
    description: '',
    excerpt: '',
    source: '',
    updatedAt: '',
    keywords: [],
    keywordValue: [],
  })

  const [titleEditing, setTitleEditing] = useState(false)

  const [descriptionEditing, setDescriptionEditing] = useState(false)

  const [excerptEditing, setExcerptEditing] = useState(false)

  const [titleValue, setTitleValue] = useState(openedFragment.title)

  const [descriptionValue, setDescriptionValue] = useState(
    openedFragment.description
  )

  const [excerptValue, setExcerptValue] = useState(openedFragment.excerpt)

  const toggleEditing = () => setTitleEditing(!titleEditing)

  const toggleDescriptionEditing = () =>
    setDescriptionEditing(!descriptionEditing)

  const toggleDescriptionReset = () => {
    setDescriptionEditing(!descriptionEditing)
    setDescriptionValue(openedFragment.description)
  }

  const toggleExcerptEditing = () => setExcerptEditing(!excerptEditing)
  const toggleExcerptReset = () => {
    setExcerptEditing(!excerptEditing)
    setExcerptValue(openedFragment.excerpt)
  }
  const removeFragmentHandler = (id: string) => {
    dispatch(deleteSavedFragment(idOpen))
  }
  // Todo title editing
  const newTitle = {
    _id: idOpen,
    title: titleValue,
  }
  const saveTitleHandler = () => {
    dispatch(editSavedFragment(newTitle))
    setTitleEditing(!titleEditing)
  }
  // Todo description editing
  const newDescription = {
    _id: idOpen,
    description: descriptionValue,
  }
  const saveDescriptionHandler = () => {
    dispatch(editSavedFragment(newDescription))
    setDescriptionEditing(!descriptionEditing)
  }
  // Todo excerpt editing
  const newExcerpt = {
    _id: idOpen,
    excerpt: excerptValue,
  }
  const saveExcerptHandler = () => {
    dispatch(editSavedFragment(newExcerpt))
    setExcerptEditing(!excerptEditing)
  }
  useMemo(() => {
    if (successUpdate === true) {
      if (loadingUpdate === false) {
        dispatch(getUserFragments(1))
      }
    }
  }, [dispatch, successUpdate, loadingUpdate])
  useEffect(() => {
    const fragment = fragments.find(
      (fragmentSearched: any) => fragmentSearched._id === idOpen
    )
    setOpenedFragment(fragment)
    setTitleValue(fragment.title)
    setExcerptValue(fragment.excerpt)
    setDescriptionValue(fragment.description)
  }, [fragments, idOpen])

  const onClickCloseHelper = () => {
    setOpenedApp(null)
    setCanOpenApp(false)
    setTimeout(() => {
      setCanOpenApp(true)
    }, 500)
  }

  return (
    <>
      <ClosingDivBig
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 8, opacity: 0 }}
        transition={{ ease: 'linear' }}
        onClick={() => onClickCloseHelper()}
      />

      <OpenedDivBig layoutId={openedApp!.toString()}>
        <FragmentDivPopup>
          <PopupTitleContainer>
            {!titleEditing ? (
              <PopupTitle onClick={toggleEditing}>
                <PopupTitleAnimated>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <PopupB>Title: &nbsp;</PopupB> {titleValue}
                  </motion.div>
                </PopupTitleAnimated>
              </PopupTitle>
            ) : (
              <PopupTitle>
                <PopupTitleAnimated>
                  <PopupB>Title: &nbsp;</PopupB>{' '}
                  <PopupTitleInput
                    type='title'
                    name='title'
                    placeholder='new title'
                    value={titleValue}
                    onChange={(e: any) => setTitleValue(e.target.value)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                  {titleEditing && titleValue !== openedFragment.title && (
                    <PopupHorizontalContainer>
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
                    </PopupHorizontalContainer>
                  )}
                  {titleEditing && titleValue === openedFragment.title && (
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
                </PopupTitleAnimated>
              </PopupTitle>
            )}{' '}
            <AnimatePresence>
              {' '}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <PopupHorizontalContainer
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <SendButtonVerySmall
                    variant='secondaryEmpty'
                    onClick={() => removeFragmentHandler(idOpen)}
                  >
                    <SvgIcon variant='remove' toBottom contentAfter='delete' />
                  </SendButtonVerySmall>{' '}
                </PopupHorizontalContainer>
              </motion.div>{' '}
            </AnimatePresence>
          </PopupTitleContainer>{' '}
          <PopupDatePar>
            <PopupB>updated:&nbsp;</PopupB>
            {openedFragment.updatedAt.substring(0, 10)} at{' '}
            {openedFragment.updatedAt.substring(12, 16)}
          </PopupDatePar>
          <PopupDatePar>
            <PopupB>source:&nbsp;</PopupB>
            {openedFragment.source}
          </PopupDatePar>
          <KeywordEditing
            keywords={openedFragment.keywords}
            keywordValue={openedFragment.keywordValue}
            id={idOpen}
          />
          {/* //todo excerpt editing/display below */}
          <PopupListRow>
            <PopupTitleContainer>
              {!excerptEditing ? (
                <PopupDescriptionAnimated
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <DescriptionDiv onClick={toggleExcerptEditing}>
                    {' '}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <PopupB>Excerpt: </PopupB>
                      {excerptValue}
                    </motion.div>
                  </DescriptionDiv>
                </PopupDescriptionAnimated>
              ) : (
                <PopupDescriptionAnimated
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {' '}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <PopupDescriptionInput
                      type='excerpt'
                      name='excerpt'
                      // cols='35'
                      // rows='3'
                      placeholder='new excerpt'
                      value={excerptValue}
                      onChange={(e: any) => setExcerptValue(e.target.value)}
                    />
                  </motion.div>
                </PopupDescriptionAnimated>
              )}
              <PopupHorizontalContainer>
                {excerptEditing && excerptValue !== openedFragment.excerpt && (
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
                {excerptEditing && excerptValue === openedFragment.excerpt && (
                  <SendButtonVerySmall
                    variant='primaryEmpty'
                    onClick={toggleExcerptEditing}
                  >
                    <SvgIcon variant='back' toBottom contentAfter='back' />
                  </SendButtonVerySmall>
                )}
              </PopupHorizontalContainer>
            </PopupTitleContainer>
          </PopupListRow>
          {/* //todo description editing/display below */}
          <PopupListRowShort>
            <PopupTextAreaContainer>
              {!descriptionEditing ? (
                <AnimatePresence>
                  <PopupDescriptionAnimated
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DescriptionDiv onClick={toggleDescriptionEditing}>
                      {' '}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <PopupB>Description:</PopupB>{' '}
                        {openedFragment.description}
                      </motion.div>
                    </DescriptionDiv>
                  </PopupDescriptionAnimated>
                </AnimatePresence>
              ) : (
                <AnimatePresence>
                  <PopupDescriptionAnimated
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PopupDescriptionInput
                      type='description'
                      name='description'
                      // cols='35'
                      rows='3'
                      placeholder='new description'
                      value={descriptionValue}
                      onChange={(e: any) => setDescriptionValue(e.target.value)}
                    />
                  </PopupDescriptionAnimated>
                </AnimatePresence>
              )}
              <PopupListButtonContainer>
                {descriptionEditing &&
                  descriptionValue !== openedFragment.description && (
                    <PopupHorizontalContainer>
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
                    </PopupHorizontalContainer>
                  )}
                {descriptionEditing &&
                  descriptionValue === openedFragment.description && (
                    <SendButtonVerySmall
                      variant='primaryEmpty'
                      onClick={toggleDescriptionEditing}
                    >
                      <SvgIcon variant='back' toBottom contentAfter='back' />
                    </SendButtonVerySmall>
                  )}
              </PopupListButtonContainer>
            </PopupTextAreaContainer>
          </PopupListRowShort>
        </FragmentDivPopup>
      </OpenedDivBig>
    </>
  )
}
export default PupupEditWindow
