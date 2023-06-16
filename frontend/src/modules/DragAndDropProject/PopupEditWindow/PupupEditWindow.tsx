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
  HighlightText,
  HorizontalWrapper,
  HorizontalWrapperGap,
  OpenedDivBig
} from '../../../styles/misc.styled'
import {
  ColumnButtonContainer,
  ColumnPopupContainer,
  FragmentDivPopup,
  PopupDescriptionAnimated,
  PopupDescriptionInput,
  PopupListRow,
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
import { ButtonMedium } from '../../../components/Buttons/Buttons.styled'
import { ButtonVariants, TextColor } from '../../../consts'

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
    <OpenedDivBig $yPosition={window.scrollY}>
      <HorizontalWrapper>
        <ClosingDivBig
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 8, opacity: 0 }}
          transition={{ ease: 'linear', duration: 0.2 }}
          onClick={() => onClickCloseHelper()}
        />
      </HorizontalWrapper>
      <FragmentDivPopup>
        <ColumnPopupContainer>
          <ColumnButtonContainer>
            {' '}
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
            <HorizontalWrapper>
              {' '}
              <HighlightText color={TextColor.SECONDARY}>
                {openedFragment?.coordinates}
              </HighlightText>
            </HorizontalWrapper>
            <HorizontalWrapper>
              {' '}
              <HighlightText color={TextColor.PRIMARY}>
                {openedFragment?.source}
              </HighlightText>{' '}
            </HorizontalWrapper>
            <HorizontalWrapper>
              Ost. aktualizacja {openedFragment?.updatedAt.substring(0, 10)} o{' '}
              {openedFragment?.updatedAt.substring(12, 16)}{' '}
            </HorizontalWrapper>
          </ColumnButtonContainer>
          <ColumnButtonContainer>
            {openedFragment.keywords.length > 0 ? (
              <HorizontalWrapperGap>
                <HighlightText color={TextColor.PRIMARY}>
                  Projekty:
                </HighlightText>{' '}
                <FragmentKeywordDisplay id={idOpenFragment} />
              </HorizontalWrapperGap>
            ) : null}
            {editingField === 'title' ? (
              <ButtonMedium
                variant={ButtonVariants.SECONDARY_EMPTY}
                onClick={() => toggleEditing('title')}
              >
                Anuluj zmiany
              </ButtonMedium>
            ) : (
              <ButtonMedium
                variant={ButtonVariants.PRIMARY_EMPTY}
                onClick={() => toggleEditing('title')}
              >
                Zmień tytuł
              </ButtonMedium>
            )}{' '}
            {editingField === 'title' &&
            fieldValues.title !== openedFragment.title ? (
              <ButtonMedium
                variant={ButtonVariants.SUCCESS}
                onClick={saveTitleHandler}
              >
                Zapisz tytuł
              </ButtonMedium>
            ) : null}
            <ButtonMedium
              variant={ButtonVariants.DANGER_EMPTY}
              onClick={() => removeFragmentHandler()}
            >
              Usuń fragment
            </ButtonMedium>
          </ColumnButtonContainer>
        </ColumnPopupContainer>

        {/* //? CYTAT */}

        <ColumnPopupContainer>
          <ColumnButtonContainer>
            <CenteredTitle>Cytat</CenteredTitle>{' '}
            <PopupListRow>
              {editingField !== 'excerpt' ? (
                <PopupDescriptionAnimated
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {fieldValues.excerpt}
                </PopupDescriptionAnimated>
              ) : (
                <>
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
                </>
              )}
            </PopupListRow>
          </ColumnButtonContainer>
          <ColumnButtonContainer>
            {' '}
            {editingField === 'excerpt' ? (
              <ButtonMedium
                variant={ButtonVariants.SECONDARY_EMPTY}
                onClick={toggleExcerptReset}
              >
                Anuluj zmiany
              </ButtonMedium>
            ) : (
              <ButtonMedium
                variant={ButtonVariants.PRIMARY_EMPTY}
                onClick={() => toggleEditing('excerpt')}
              >
                Edytuj cytat
              </ButtonMedium>
            )}
            {editingField === 'excerpt' &&
            fieldValues.excerpt !== openedFragment.excerpt ? (
              <ButtonMedium
                variant={ButtonVariants.SUCCESS_EMPTY}
                onClick={saveExcerptHandler}
              >
                Zapisz cytat
              </ButtonMedium>
            ) : null}
          </ColumnButtonContainer>
        </ColumnPopupContainer>
        {/* //* Komentarz */}

        <ColumnPopupContainer>
          <ColumnButtonContainer>
            <CenteredTitle>Komentarz</CenteredTitle>{' '}
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
                    placeholder='nowy komentarz'
                    value={fieldValues.description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      updateFieldValue('description', e.target.value)
                    }
                  />
                )}
              </PopupListRow>
            ) : null}
          </ColumnButtonContainer>
          <ColumnButtonContainer>
            {' '}
            {editingField === 'description' ? (
              <ButtonMedium
                variant={ButtonVariants.SECONDARY_EMPTY}
                onClick={toggleDescriptionReset}
              >
                Anuluj zmiany
              </ButtonMedium>
            ) : (
              <ButtonMedium
                variant={ButtonVariants.PRIMARY_EMPTY}
                onClick={() => toggleEditing('description')}
              >
                Dodaj komentarz
              </ButtonMedium>
            )}
            {editingField === 'description' &&
            fieldValues.description !== openedFragment.description ? (
              <ButtonMedium
                variant={ButtonVariants.SUCCESS_EMPTY}
                onClick={saveDescriptionHandler}
              >
                Zapisz komentarz
              </ButtonMedium>
            ) : null}
          </ColumnButtonContainer>
        </ColumnPopupContainer>
      </FragmentDivPopup>
    </OpenedDivBig>
  )
}
export default PupupEditWindow
