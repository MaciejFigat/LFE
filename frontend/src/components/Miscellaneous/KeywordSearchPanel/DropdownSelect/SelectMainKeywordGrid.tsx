import React, { useState, useEffect, useMemo } from 'react'
import { useAppSelector, useAppDispatch } from '../../../../app/reduxHooks'
import {
  DropDownButtons,
  DropDownHeader,
  DropDownHeaderInside,
  DropDownListContainer,
  DropDownListGrid,
  ListItem,
  ListItemHighlight,
  TitleInputMainKeyword,
} from './DropdownSelect.styled'
import {
  deleteSavedFragment,
  editSavedFragment,
} from '../../../../features/fragments/fragmentSlice'
import { getUserFragments } from '../../../../features/fragments/fragmentSlice'
import { sortingKeywordMainEdit } from '../../../../features/preferences/preferenceSlice'
import { updateUserFragmentsKeywordMain } from '../../../../features/fragments/fragmentSlice'
import { nanoid } from '@reduxjs/toolkit'
import { SendButtonVerySmall } from '../../Buttons/Buttons.styled'
import SvgIcon from '../../SvgIcon/SvgIcon'
import { HorizontalWrapperSpace } from '../../../../styles/misc.styled'

interface SelectMainKeywordGridProps {
  wide?: boolean
}

const SelectMainKeywordGrid: React.FC<SelectMainKeywordGridProps> = ({
  wide,
}) => {
  const dispatch: any = useAppDispatch()

  const keywordMain = useAppSelector(
    (state) => state.preference.sortingKeywords.keywordMain
  )
  const fragmentsKeywordMain: any[] = useAppSelector(
    (state) => state.fragment.fragmentsKeywordMain
  )
  const fragmentLoadingUpdate: boolean = useAppSelector(
    (state) => state.fragment.loadingUpdate
  )
  const fragmentSuccessUpdate: boolean = useAppSelector(
    (state) => state.fragment.successUpdate
  )

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )

  const keywordsAll = fragments
    ?.map((fragment) =>
      fragment.keywords
        ?.filter((keyword: string) => keyword !== '')
        .map((keyword: string) => keyword)
    )
    .flat()
  //todo .flat() flattens the arr ie. [a, b, [c, d]].flat()=>[a, b, c, d]

  let uniqueKeywords = [...Array.from(new Set(keywordsAll))]

  const [isOpen, setIsOpen] = useState(false)

  const [keywordEditing, setKeywordEditing] = useState<boolean>(false)
  const [keywordCreation, setKeywordCreation] = useState<boolean>(false)
  const [newKeyword, setNewKeyword] = useState<string>(keywordMain)

  const [selectedMainKeyword, setSelectedMainKeyword] = useState<string | null>(
    keywordMain
  )

  const toggling = () => setIsOpen((isOpen) => !isOpen)
  // * sets mainKeyword as ''
  const setNoKeywordHelper = () => {
    dispatch(sortingKeywordMainEdit(''))
  }

  const stopEditingHandler = () => {
    if (keywordEditing === true) {
      setKeywordEditing((keywordEditing) => !keywordEditing)
      setNewKeyword(keywordMain)
    }
    if (keywordCreation === true)
      setKeywordCreation((keywordCreation) => !keywordCreation)
  }
  const editingHandler = () => {
    setKeywordEditing((keywordEditing) => !keywordEditing)
  }
  const addNewHandler = () => {
    setSelectedMainKeyword('')

    if (keywordCreation === false)
      setKeywordCreation((keywordCreation) => !keywordCreation)
  }

  const onOptionClicked = (value: string | null) => () => {
    setSelectedMainKeyword(value)
    setIsOpen(false)
  }

  useEffect(() => {
    dispatch(sortingKeywordMainEdit(selectedMainKeyword))
  }, [dispatch, selectedMainKeyword])

  // whenever keywordMain changes ie. nav dropdownProject component, it changes selectedKeyword
  useMemo(() => {
    setSelectedMainKeyword(keywordMain)
  }, [keywordMain])

  // whenever loading prompted by saving new or editing keyword values I want to update the list of keywords and the main one
  // fragmentLoadingUpdate false-> true -> false
  // fragmentSuccessUpdate true -> false -> true
  useMemo(() => {
    if (fragmentLoadingUpdate === false && fragmentSuccessUpdate === true) {
      //! HERE it's commented for it's the cause of keywordMain change on every update or delete - since they use the same successUpdate etc
      //! setSelectedMainKeyword(newKeyword)
      const timer = setTimeout(() => dispatch(getUserFragments(1)), 3000)
      return () => clearTimeout(timer)
    }
  }, [fragmentLoadingUpdate, fragmentSuccessUpdate, dispatch])

  useEffect(() => {
    const fragmentsMatching = fragments
      ?.filter(
        (fragmentsSorted) =>
          fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0
      )
      .map((el) => ({ ...el, nanoId: nanoid() }))

    if (selectedMainKeyword !== '' && keywordMain !== '') {
      dispatch(updateUserFragmentsKeywordMain(fragmentsMatching))
    }
    const fragmentsNoName = fragments
      ?.filter(
        (fragmentsSorted) =>
          fragmentsSorted.keywords.length === 1 &&
          fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0
      )
      .map((el) => ({ ...el, nanoId: nanoid() }))
    if (selectedMainKeyword === '' && keywordMain !== '') {
      dispatch(updateUserFragmentsKeywordMain(fragmentsNoName))
      console.log(fragmentsNoName)
    }
  }, [fragments, dispatch, selectedMainKeyword, keywordMain])

  const removeKeywordHelperUltimate = () => {
    const fragmentsMatching = fragments?.filter(
      (fragmentsSorted) =>
        fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0
    )
    if (window.confirm('Czy potwierdzasz usunięcie powiązanych fragmentów?')) {
      if (fragmentsMatching.length === 1 || 2) {
        fragmentsMatching.map((fragment) =>
          dispatch(deleteSavedFragment(fragment._id))
        )
      } else if (fragmentsMatching.length > 2) {
        fragmentsMatching.map((fragment) =>
          dispatch(
            editSavedFragment({
              _id: fragment._id,
              keywords: fragment?.keywords?.filter(
                (keyword: string) => keyword !== selectedMainKeyword
              ),
            })
          )
        )
      }
    }
  }

  const saveNewKeywordHelper = () => {
    setKeywordEditing((keywordEditing) => !keywordEditing)
    setKeywordEditing((keywordCreation) => !keywordCreation)
    const fragmentsNoProject = fragments.filter(
      (filteredFragment) =>
        filteredFragment.keywords.length === 1 &&
        filteredFragment.keywords[0] === ''
    )
    for (let i = 0; i < fragmentsNoProject.length; i++) {
      const fragEdited = {
        _id: fragmentsNoProject[i]._id,
        keywords: [newKeyword],
        keywordValue: [
          {
            keyword: newKeyword,
            labelOne: fragmentsNoProject[0].keywordValue[0].labelOne,
            labelTwo: fragmentsNoProject[0].keywordValue[0].labelTwo,
            value: fragmentsNoProject[0].keywordValue[0].value,
            skip: fragmentsNoProject[0].keywordValue[0].skip,
          },
        ],
      }

      dispatch(editSavedFragment(fragEdited))
      // console.log(fragmentsKeywordMain[i].keywords)
    }
    // console.log('test')
  }
  const saveEditedKeywordHelper = () => {
    setKeywordEditing((keywordEditing) => !keywordEditing)
    setSelectedMainKeyword(newKeyword)
    // todo loop through fragmentsKeywordMain ->
    // for each fragment looped i will change an object in keywordValue that contains keywordMain
    // only keyword: '' will change, rest of the {} will remain intact
    // also keywords: [] needs ..., newkeyword
    // also no duplicates
    for (let i = 0; i < fragmentsKeywordMain.length; i++) {
      //* HERE
      const filteredArr = fragmentsKeywordMain[i].keywordValue.filter(
        (keywordSearched: any) => keywordSearched.keyword !== keywordMain
      )

      const foundObject = fragmentsKeywordMain[i].keywordValue.find(
        (keywordSearched: any) => keywordSearched.keyword === keywordMain
      )

      const simpleKeywordArr = fragmentsKeywordMain[i].keywords.filter(
        (keyword: string) => keyword !== keywordMain
      )
      //* HERE

      //* no duplicates edited in
      if (!fragmentsKeywordMain[i].keywords.includes(newKeyword)) {
        const fragEdited = {
          _id: fragmentsKeywordMain[i]._id,
          keywords: [...simpleKeywordArr, newKeyword],
          keywordValue: [
            ...filteredArr,
            {
              keyword: newKeyword,
              labelOne: foundObject.labelOne || 'pro',
              labelTwo: foundObject.labelTwo || 'contra',
              value: foundObject.value,
              skip: foundObject.skip,
            },
          ],
        }

        dispatch(editSavedFragment(fragEdited))
      }
    }
  }

  return (
    <>
      <HorizontalWrapperSpace>
        {keywordEditing || keywordCreation ? (
          <TitleInputMainKeyword
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            type='mainLabel'
            name='main label'
            placeholder={keywordMain}
            value={newKeyword}
            onChange={(e: any) => setNewKeyword(e.target.value)}
          />
        ) : (
          <DropDownHeader
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggling}
            className={isOpen ? 'active' : 'inactive'}
          >
            <DropDownHeaderInside
              className={isOpen ? 'activeButton' : 'inactiveButton'}
            >
              {selectedMainKeyword || 'Wybierz projekt'}
            </DropDownHeaderInside>
          </DropDownHeader>
        )}{' '}
        {/* //todo here */}
        {!keywordEditing && !keywordCreation && (
          <DropDownButtons>
            <SendButtonVerySmall variant='successEmpty' onClick={addNewHandler}>
              <SvgIcon variant='plus' toBottom contentAfter='dodaj' />
            </SendButtonVerySmall>
            <SendButtonVerySmall
              variant='primaryEmpty'
              onClick={editingHandler}
            >
              <SvgIcon variant='edit' toBottom contentAfter='edytuj' />
            </SendButtonVerySmall>

            <SendButtonVerySmall
              variant='dangerEmpty'
              onClick={removeKeywordHelperUltimate}
            >
              <SvgIcon
                variant='remove'
                toBottom
                contentAfter='usuń powiązane'
              />
            </SendButtonVerySmall>
          </DropDownButtons>
        )}
        {(keywordEditing || keywordCreation) && (
          <DropDownButtons>
            <SendButtonVerySmall
              variant='primaryEmpty'
              onClick={stopEditingHandler}
            >
              <SvgIcon variant='back' toBottom contentAfter='wróć' />
            </SendButtonVerySmall>
            {keywordCreation && (
              <SendButtonVerySmall
                variant='successEmpty'
                onClick={saveNewKeywordHelper}
              >
                <SvgIcon variant='save' toBottom contentAfter='zapisz nowy' />
              </SendButtonVerySmall>
            )}{' '}
            {keywordEditing && (
              <SendButtonVerySmall
                variant='successEmpty'
                onClick={saveEditedKeywordHelper}
              >
                <SvgIcon variant='save' toBottom contentAfter='zapisz zmiany' />
              </SendButtonVerySmall>
            )}
          </DropDownButtons>
        )}
      </HorizontalWrapperSpace>
      {/* //? dropdown after cog icon clicked in small version (!wide prop) */}

      {isOpen && uniqueKeywords.length > 1 && (
        <DropDownListContainer>
          <DropDownListGrid>
            <ListItemHighlight onClick={setNoKeywordHelper}>
              fragmenty bez projektu
            </ListItemHighlight>
            {uniqueKeywords?.map((keyword) => (
              <ListItem onClick={onOptionClicked(keyword)} key={Math.random()}>
                {keyword}
              </ListItem>
            ))}
          </DropDownListGrid>
        </DropDownListContainer>
      )}
    </>
  )
}
export default SelectMainKeywordGrid
