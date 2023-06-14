import { motion } from 'framer-motion'
import React, { useState, useEffect, useCallback } from 'react'
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
  HorizontalWrapperGapMobile,
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
import { AppDispatch } from '../../../app/store'
import {
  FragmentStoredAllData,
  FragmentUpdated,
  FragmentStoredSimple
} from '../../../interfaces'
import { ButtonSmall } from '../../../components/Buttons/Buttons.styled'
import { ButtonVariants } from '../../../consts'

interface PupupEditWindowProps {}

const PupupEditWindow: React.FC<PupupEditWindowProps> = () => {
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
  const idOpenFragment = useAppSelector(
    state => state.preference.idOpenFragment
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

  const [editingField, setEditingField] = useState<
    null | 'title' | 'description' | 'excerpt'
  >(null)

  const toggleEditing = useCallback(
    (field: 'title' | 'description' | 'excerpt') => {
      setEditingField(prevField => (prevField === field ? null : field))
    },
    []
  )

  const [fieldValues, setFieldValues] = useState<{
    title: string
    description: string
    excerpt: string
  }>({
    title: openedFragment.title,
    description: openedFragment.description,
    excerpt: openedFragment.excerpt
  })
  const updateFieldValue = useCallback(
    (field: 'title' | 'description' | 'excerpt', value: string) => {
      setFieldValues(prevValues => ({ ...prevValues, [field]: value }))
    },
    []
  )

  const toggleDescriptionReset = () => {
    toggleEditing('description')
    updateFieldValue('description', openedFragment.description)
  }

  const toggleExcerptReset = () => {
    toggleEditing('excerpt')
    updateFieldValue('excerpt', openedFragment.excerpt)
  }
  const removeFragmentHandler = () => {
    dispatch(deleteSavedFragment(idOpenFragment))
  }
  const saveTitleHandler = () => {
    toggleEditing('title')
  }

  const saveDescriptionHandler = () => {
    toggleEditing('description')
  }

  const saveExcerptHandler = () => {
    toggleEditing('excerpt')
  }
  useEffect(() => {
    if (successUpdate === true) {
      if (loadingUpdate === false) {
        dispatch(getUserFragments(1))
      }
    }
  }, [dispatch, successUpdate, loadingUpdate])

  useEffect(() => {
    const fragment = fragments.find(
      (fragmentSearched: FragmentStoredAllData) =>
        fragmentSearched._id === idOpenFragment
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
      if (fragment.title) updateFieldValue('title', fragment?.title)

      updateFieldValue('excerpt', fragment?.excerpt)
    }

    if (fragment?.description !== 'komentarz' && fragment?.description)
      updateFieldValue('description', fragment?.description)
  }, [fragments, idOpenFragment, updateFieldValue])

  const onClickCloseHelper = () => {
    dispatch(editIdOpenFragment(''))

    const fragmentUpdates: FragmentUpdated = {}

    if (openedFragment.title !== fieldValues.title) {
      fragmentUpdates.title = fieldValues.title
    }

    if (openedFragment.excerpt !== fieldValues.excerpt) {
      fragmentUpdates.excerpt = fieldValues.excerpt
    }

    if (openedFragment.description !== fieldValues.description) {
      if (fieldValues.description !== '') {
        fragmentUpdates.description = fieldValues.description
      }
    }

    if (Object.keys(fragmentUpdates).length > 0) {
      dispatch(
        editSavedFragment({
          _id: idOpenFragment,
          ...fragmentUpdates
        })
      )
    }
  }

  return (
    // <OpenedDivBig layoutId={idOpenFragment} $yPosition={window.scrollY}>

    <OpenedDivBig $yPosition={window.scrollY}>
      <ClosingDivBig
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 8, opacity: 0 }}
        transition={{ ease: 'linear', duration: 0.2 }}
        onClick={() => onClickCloseHelper()}
      />

      <FragmentDivPopup>
        <PopupTitleContainer>
          <HorizontalWrapperGapMobile>
            {editingField === 'title' ? (
              <ButtonSmall
                variant={ButtonVariants.SECONDARY}
                onClick={() => toggleEditing('title')}
              >
                Anuluj zmiany
              </ButtonSmall>
            ) : (
              <ButtonSmall
                variant={ButtonVariants.PRIMARY}
                onClick={() => toggleEditing('title')}
              >
                Zmień tytuł
              </ButtonSmall>
            )}

            {editingField === 'title' &&
            fieldValues.title !== openedFragment.title ? (
              <ButtonSmall
                variant={ButtonVariants.SUCCESS}
                onClick={saveTitleHandler}
              >
                Zapisz tytuł
              </ButtonSmall>
            ) : null}
            {editingField === 'excerpt' ? (
              <ButtonSmall
                variant={ButtonVariants.SECONDARY}
                onClick={toggleExcerptReset}
              >
                Anuluj zmiany
              </ButtonSmall>
            ) : (
              <ButtonSmall
                variant={ButtonVariants.PRIMARY}
                onClick={() => toggleEditing('excerpt')}
              >
                Edytuj cytat
              </ButtonSmall>
            )}
            {editingField === 'excerpt' &&
            fieldValues.excerpt !== openedFragment.excerpt ? (
              <ButtonSmall
                variant={ButtonVariants.SUCCESS}
                onClick={saveExcerptHandler}
              >
                Zapisz cytat
              </ButtonSmall>
            ) : null}
            {editingField === 'description' ? (
              <ButtonSmall
                variant={ButtonVariants.SECONDARY}
                onClick={toggleDescriptionReset}
              >
                Anuluj zmiany
              </ButtonSmall>
            ) : (
              <ButtonSmall
                variant={ButtonVariants.PRIMARY}
                onClick={() => toggleEditing('description')}
              >
                Dodaj komentarz
              </ButtonSmall>
            )}

            {editingField === 'description' &&
            fieldValues.description !== openedFragment.description ? (
              <ButtonSmall
                variant={ButtonVariants.SUCCESS}
                onClick={saveDescriptionHandler}
              >
                Zapisz komentarz
              </ButtonSmall>
            ) : null}
          </HorizontalWrapperGapMobile>
          <ButtonSmall
            variant={ButtonVariants.DANGER}
            onClick={() => removeFragmentHandler()}
          >
            Usuń fragment
          </ButtonSmall>
        </PopupTitleContainer>
        <CenteredTitle>
          {editingField !== 'title' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {fieldValues.title}
            </motion.div>
          ) : (
            <PopupTitleInput
              type='title'
              name='title'
              placeholder='new title'
              value={fieldValues.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateFieldValue('title', e.target.value)
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </CenteredTitle>
        <PopupDatePar>{openedFragment?.source}</PopupDatePar>
        <PopupDatePar>{openedFragment?.coordinates}</PopupDatePar>

        <PopupListRow>
          <PopupTitleContainer>
            {editingField !== 'excerpt' ? (
              <PopupDescriptionAnimated
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {fieldValues.excerpt}
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
                  value={fieldValues.excerpt}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    updateFieldValue('excerpt', e.target.value)
                  }
                />
              </PopupDescriptionAnimated>
            )}
          </PopupTitleContainer>
        </PopupListRow>

        {fieldValues.description !== 'komentarz' ||
        editingField === 'description' ? (
          <PopupListRow>
            {editingField !== 'description' ? (
              <PopupDescriptionAnimated
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {fieldValues.description}
              </PopupDescriptionAnimated>
            ) : (
              <PopupDescriptionInput
                type='description'
                name='description'
                cols='25'
                rows='2'
                placeholder='nowy opis'
                value={fieldValues.description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  updateFieldValue('description', e.target.value)
                }
              />
            )}
          </PopupListRow>
        ) : null}
        <PopupTitleContainer>
          {' '}
          {openedFragment.keywords.length > 0 ? (
            <HorizontalWrapperGap>
              <PopupB> Projekty:</PopupB>
              <FragmentKeywordDisplay id={idOpenFragment} />
            </HorizontalWrapperGap>
          ) : null}
          <PopupDatePar>
            Ost. aktualizacja {openedFragment?.updatedAt.substring(0, 10)} o{' '}
            {openedFragment?.updatedAt.substring(12, 16)}{' '}
          </PopupDatePar>{' '}
        </PopupTitleContainer>
      </FragmentDivPopup>
    </OpenedDivBig>
  )
}
export default PupupEditWindow
