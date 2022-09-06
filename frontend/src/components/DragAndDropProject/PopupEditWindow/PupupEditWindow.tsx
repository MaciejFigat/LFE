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
import KeywordEditing from './KeywordEditing'
import { SendButtonVerySmall } from '../../Buttons/Buttons.styled'
import {
  // BackgroundLayerBlur,
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
import { editIdOpenFragment } from '../../../features/preferences/preferenceSlice'

interface PupupEditWindowProps {
  openedApp?: string | null
  setOpenedApp?: Dispatch<SetStateAction<null | string>>
  setCanOpenApp?: Dispatch<SetStateAction<boolean>>
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

  const [titleValue, setTitleValue] = useState(openedFragment?.title)

  const [descriptionValue, setDescriptionValue] = useState(
    openedFragment?.description
  )

  const [excerptValue, setExcerptValue] = useState(openedFragment?.excerpt)

  const toggleEditing = () => setTitleEditing(!titleEditing)

  const toggleDescriptionEditing = () =>
    setDescriptionEditing((descriptionEditing) => !descriptionEditing)

  const toggleDescriptionReset = () => {
    setDescriptionEditing((descriptionEditing) => !descriptionEditing)
    setDescriptionValue(openedFragment.description)
  }

  const toggleExcerptEditing = () =>
    setExcerptEditing((excerptEditing) => !excerptEditing)
  const toggleExcerptReset = () => {
    setExcerptEditing((excerptEditing) => !excerptEditing)
    setExcerptValue(openedFragment.excerpt)
  }
  const removeFragmentHandler = (id: string) => {
    dispatch(deleteSavedFragment(idOpen))
  }
  // Todo title editing

  const saveTitleHandler = () => {
    setTitleEditing(!titleEditing)
  }
  // Todo description editing

  const saveDescriptionHandler = () => {
    setDescriptionEditing((descriptionEditing) => !descriptionEditing)
  }
  // Todo excerpt editing

  const saveExcerptHandler = () => {
    setExcerptEditing((excerptEditing) => !excerptEditing)
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
    setTitleValue(fragment?.title)
    setExcerptValue(fragment?.excerpt)
    setDescriptionValue(fragment?.description)
  }, [fragments, idOpen])

  const onClickCloseHelper = () => {
    if (setOpenedApp) {
      setOpenedApp(null)
    }
    if (setCanOpenApp) {
      setCanOpenApp(false)
      setTimeout(() => {
        setCanOpenApp(true)
      }, 500)
    }

    dispatch(editIdOpenFragment(''))
    if (
      titleValue !== openedFragment.title &&
      excerptValue === openedFragment.excerpt &&
      descriptionValue === openedFragment.description
    ) {
      const newTitle = {
        _id: idOpen,
        title: titleValue,
      }
      dispatch(editSavedFragment(newTitle))
    }
    if (
      excerptValue !== openedFragment.excerpt &&
      titleValue === openedFragment.title &&
      descriptionValue === openedFragment.description
    ) {
      const newExcerpt = {
        _id: idOpen,
        excerpt: excerptValue,
      }
      dispatch(editSavedFragment(newExcerpt))
    }
    if (
      descriptionValue !== openedFragment.description &&
      titleValue === openedFragment.title &&
      excerptValue === openedFragment.excerpt
    ) {
      const newDescription = {
        _id: idOpen,
        description: descriptionValue,
      }
      dispatch(editSavedFragment(newDescription))
    }
    if (
      descriptionValue !== openedFragment.description &&
      titleValue !== openedFragment.title &&
      excerptValue === openedFragment.excerpt
    ) {
      const newTitleDescription = {
        _id: idOpen,
        description: descriptionValue,
        title: titleValue,
      }
      dispatch(editSavedFragment(newTitleDescription))
    }
    if (
      descriptionValue === openedFragment.description &&
      titleValue !== openedFragment.title &&
      excerptValue !== openedFragment.excerpt
    ) {
      const newTitleExcerpt = {
        _id: idOpen,
        excerpt: excerptValue,
        title: titleValue,
      }
      dispatch(editSavedFragment(newTitleExcerpt))
    }
    if (
      descriptionValue !== openedFragment.description &&
      titleValue === openedFragment.title &&
      excerptValue !== openedFragment.excerpt
    ) {
      const newDescriptionExcerpt = {
        _id: idOpen,
        excerpt: excerptValue,
        description: descriptionValue,
      }
      dispatch(editSavedFragment(newDescriptionExcerpt))
    }
    if (
      descriptionValue !== openedFragment.description &&
      titleValue !== openedFragment.title &&
      excerptValue !== openedFragment.excerpt
    ) {
      const newEverything = {
        _id: idOpen,
        title: titleValue,
        excerpt: excerptValue,
        description: descriptionValue,
      }
      dispatch(editSavedFragment(newEverything))
    }
  }

  return (
    <>
      {/* <BackgroundLayerBlur
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 8, opacity: 0 }}
        transition={{ ease: 'linear' }}
      ></BackgroundLayerBlur> */}

      <OpenedDivBig layoutId={openedApp!.toString()}>
        <ClosingDivBig
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 8, opacity: 0 }}
          transition={{ ease: 'linear' }}
          onClick={() => onClickCloseHelper()}
        />
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
            {openedFragment?.updatedAt.substring(0, 10)} at{' '}
            {openedFragment?.updatedAt.substring(12, 16)}
          </PopupDatePar>
          <PopupDatePar>
            <PopupB>source:&nbsp;</PopupB>
            {openedFragment?.source}
          </PopupDatePar>
          <KeywordEditing
            // keywords={openedFragment.keywords}
            // keywordValue={openedFragment.keywordValue}
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
                    <PopupB>Excerpt: </PopupB>
                    {excerptValue}
                  </DescriptionDiv>
                </PopupDescriptionAnimated>
              ) : (
                <PopupDescriptionAnimated
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <PopupB>Excerpt: </PopupB>{' '}
                  <PopupDescriptionInput
                    type='excerpt'
                    name='excerpt'
                    cols='35'
                    rows='5'
                    placeholder='new excerpt'
                    value={excerptValue}
                    onChange={(e: any) => setExcerptValue(e.target.value)}
                  />
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
                      <PopupB>Description: </PopupB> {descriptionValue}
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
                    <PopupB>Description:</PopupB>{' '}
                    <PopupDescriptionInput
                      type='description'
                      name='description'
                      // cols='35'
                      rows='5'
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
