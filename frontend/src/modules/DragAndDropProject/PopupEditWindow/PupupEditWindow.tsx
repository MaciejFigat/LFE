import { motion } from 'framer-motion'
import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useMemo
} from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import {
  deleteSavedFragment,
  editSavedFragment,
  getUserFragments
} from '../../../features/fragments/fragmentSlice'

import {
  CenteredTitle,
  ClosingDivBig,
  HorizontalWrapperGap,
  OpenedDivBig
} from '../../../styles/misc.styled'

import {
  FragmentDivPopup,
  PopupB,
  PopupDatePar,
  PopupDescriptionAnimated,
  PopupDescriptionInput,
  PopupListRow,
  PopupTitleContainer,
  PopupTitleInput
} from './PopupEditWindow.styled'
import { editIdOpenFragment } from '../../../features/preferences/preferenceSlice'
import FragmentKeywordDisplay from './FragmentKeywordDisplay'
import { ButtonSmall } from '../../../components/ButtonsSend/BigButton.styled'
import { AppDispatch } from '../../../app/store'
import {
  FragmentStoredAllData,
  FragmentUpdated,
  FragmentStoredSimple
} from '../../../interfaces'

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
  idOpen
}) => {
  const dispatch: AppDispatch = useAppDispatch()
  const successUpdate: boolean = useAppSelector(
    state => state.fragment.successUpdate
  )
  const loadingUpdate: boolean = useAppSelector(
    state => state.fragment.loadingUpdate
  )

  const fragments: FragmentStoredAllData[] = useAppSelector(
    state => state.fragment.userFragments
  )

  const [openedFragment, setOpenedFragment] = useState<FragmentStoredSimple>({
    title: '',
    description: '',
    excerpt: '',
    source: '',
    updatedAt: '',
    coordinates: '',
    keywords: []
  })

  const [titleEditing, setTitleEditing] = useState(false)
  const [descriptionEditing, setDescriptionEditing] = useState(false)
  const [excerptEditing, setExcerptEditing] = useState(false)
  const [titleValue, setTitleValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')
  const [excerptValue, setExcerptValue] = useState('')

  const toggleEditing = () => {
    setTitleEditing(!titleEditing)
    if (openedFragment?.title) setTitleValue(openedFragment?.title)
  }

  const toggleDescriptionEditing = () =>
    setDescriptionEditing(descriptionEditing => !descriptionEditing)

  const toggleDescriptionReset = () => {
    setDescriptionEditing(descriptionEditing => !descriptionEditing)
    setDescriptionValue(openedFragment.description)
  }

  const toggleExcerptEditing = () =>
    setExcerptEditing(excerptEditing => !excerptEditing)

  const toggleExcerptReset = () => {
    setExcerptEditing(excerptEditing => !excerptEditing)
    setExcerptValue(openedFragment.excerpt)
  }
  const removeFragmentHandler = () => {
    dispatch(deleteSavedFragment(idOpen))
    if (setOpenedApp) {
      setOpenedApp(null)
    }
  }
  // Todo title editing

  const saveTitleHandler = () => {
    setTitleEditing(!titleEditing)
  }
  // Todo description editing

  const saveDescriptionHandler = () => {
    setDescriptionEditing(descriptionEditing => !descriptionEditing)
  }
  // Todo excerpt editing

  const saveExcerptHandler = () => {
    setExcerptEditing(excerptEditing => !excerptEditing)
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
      (fragmentSearched: FragmentStoredAllData) =>
        fragmentSearched._id === idOpen
    )
    if (fragment) {
      setOpenedFragment({
        excerpt: fragment.excerpt,
        title: fragment.title || '',
        source: fragment.source || '',
        description: fragment.description || '',
        coordinates: fragment.coordinates || '',
        updatedAt: fragment.updatedAt || '',
        keywords: fragment.keywords || []
      })
      if (fragment.title) setTitleValue(fragment?.title)
      setExcerptValue(fragment?.excerpt)
    }

    if (fragment?.description !== 'komentarz' && fragment?.description)
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

    const fragmentUpdates: FragmentUpdated = {}

    if (openedFragment.title !== titleValue) {
      fragmentUpdates.title = titleValue
    }

    if (openedFragment.excerpt !== excerptValue) {
      fragmentUpdates.excerpt = excerptValue
    }

    if (openedFragment.description !== descriptionValue) {
      fragmentUpdates.description = descriptionValue
    }

    dispatch(
      editSavedFragment({
        _id: idOpen,
        ...fragmentUpdates
      })
    )
  }

  return (
    <OpenedDivBig layoutId={openedApp!.toString()} yPosition={window.scrollY}>
      <ClosingDivBig
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 8, opacity: 0 }}
        transition={{ ease: 'linear', duration: 0.2 }}
        onClick={() => onClickCloseHelper()}
      />

      <FragmentDivPopup>
        <PopupTitleContainer>
          <HorizontalWrapperGap>
            {titleEditing ? (
              <ButtonSmall variant='primary' onClick={toggleEditing}>
                Anuluj zmiany
              </ButtonSmall>
            ) : (
              <ButtonSmall variant='secondary' onClick={toggleEditing}>
                Zmień tytuł
              </ButtonSmall>
            )}
            {titleEditing && titleValue !== openedFragment.title ? (
              <ButtonSmall variant='success' onClick={saveTitleHandler}>
                Zapisz tytuł
              </ButtonSmall>
            ) : null}
            {excerptEditing ? (
              <ButtonSmall variant='primary' onClick={toggleExcerptReset}>
                Anuluj zmiany
              </ButtonSmall>
            ) : (
              <ButtonSmall variant='secondary' onClick={toggleExcerptEditing}>
                Edytuj cytat
              </ButtonSmall>
            )}
            {excerptEditing && excerptValue !== openedFragment.excerpt ? (
              <ButtonSmall variant='success' onClick={saveExcerptHandler}>
                Zapisz zmiany cytatu
              </ButtonSmall>
            ) : null}
            {descriptionEditing ? (
              <ButtonSmall variant='primary' onClick={toggleDescriptionReset}>
                Anuluj zmiany
              </ButtonSmall>
            ) : (
              <ButtonSmall
                variant='secondary'
                onClick={toggleDescriptionEditing}
              >
                Dodaj komentarz
              </ButtonSmall>
            )}
            {descriptionEditing &&
            descriptionValue !== openedFragment.description ? (
              <ButtonSmall variant='success' onClick={saveDescriptionHandler}>
                Zapisz zmiany komentarza
              </ButtonSmall>
            ) : null}
          </HorizontalWrapperGap>
          <ButtonSmall variant='danger' onClick={() => removeFragmentHandler()}>
            Usuń fragment
          </ButtonSmall>
        </PopupTitleContainer>
        <CenteredTitle>
          {!titleEditing ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {titleValue}
            </motion.div>
          ) : (
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
          )}
        </CenteredTitle>
        <PopupDatePar>{openedFragment?.source}</PopupDatePar>
        <PopupDatePar>{openedFragment?.coordinates}</PopupDatePar>
        {/* <KeywordEditing id={idOpen} setOpenedApp={setOpenedApp} /> */}
        {/* //todo excerpt editing/display below */}
        <PopupListRow>
          <PopupTitleContainer>
            {!excerptEditing ? (
              <PopupDescriptionAnimated
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {excerptValue}
              </PopupDescriptionAnimated>
            ) : (
              <PopupDescriptionAnimated
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <PopupDescriptionInput
                  type='excerpt'
                  name='excerpt'
                  cols='25'
                  rows='2'
                  placeholder='nowy cytat'
                  value={excerptValue}
                  onChange={(e: any) => setExcerptValue(e.target.value)}
                />
              </PopupDescriptionAnimated>
            )}
          </PopupTitleContainer>
        </PopupListRow>
        {/* //todo description editing/display below */}
        {descriptionValue !== 'komentarz' || descriptionEditing ? (
          <PopupListRow>
            {!descriptionEditing ? (
              <PopupDescriptionAnimated
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {descriptionValue}
              </PopupDescriptionAnimated>
            ) : (
              <PopupDescriptionAnimated
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <PopupDescriptionInput
                  type='description'
                  name='description'
                  cols='25'
                  rows='2'
                  placeholder='nowy opis'
                  value={descriptionValue}
                  onChange={(e: any) => setDescriptionValue(e.target.value)}
                />
              </PopupDescriptionAnimated>
            )}
          </PopupListRow>
        ) : null}
        <PopupTitleContainer>
          {' '}
          <HorizontalWrapperGap>
            <PopupB> Projekty:</PopupB>
            <FragmentKeywordDisplay id={idOpen} />
          </HorizontalWrapperGap>
          <PopupDatePar>
            Aktualizowano {openedFragment?.updatedAt.substring(0, 10)} o{' '}
            {openedFragment?.updatedAt.substring(12, 16)}{' '}
          </PopupDatePar>{' '}
        </PopupTitleContainer>
      </FragmentDivPopup>
    </OpenedDivBig>
  )
}
export default PupupEditWindow
