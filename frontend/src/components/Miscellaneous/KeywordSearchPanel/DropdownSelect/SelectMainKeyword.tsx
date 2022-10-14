import React, { useState, useEffect, useMemo } from 'react'
import { useAppSelector, useAppDispatch } from '../../../../app/reduxHooks'
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  HeaderAndCogContainer,
  ListItem,
  Main,
  OptionsDropdownContainer,
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

interface SelectMainKeywordProps {}

const SelectMainKeyword: React.FC<SelectMainKeywordProps> = () => {
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
    ?.map((fragment) => fragment.keywords?.map((keyword: string) => keyword))
    .flat()
  //todo .flat() flattens the arr ie. [a, b, [c, d]].flat()=>[a, b, c, d]

  let uniqueKeywords = [...Array.from(new Set(keywordsAll))]

  const [isOpen, setIsOpen] = useState(false)
  const [optionsOpen, setOptionsOpen] = useState(false)
  const [keywordEditing, setKeywordEditing] = useState<boolean>(false)
  const [keywordCreation, setKeywordCreation] = useState<boolean>(false)
  const [newKeyword, setNewKeyword] = useState<string>(keywordMain)

  const [selectedMainKeyword, setSelectedMainKeyword] = useState<string | null>(
    keywordMain
  )

  const toggling = () => setIsOpen((isOpen) => !isOpen)

  const editingHandler = () => {
    setKeywordEditing((keywordEditing) => !keywordEditing)
  }
  const editingNewHandler = () => {
    setSelectedMainKeyword('')
    setKeywordEditing((keywordEditing) => !keywordEditing)
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

    if (selectedMainKeyword !== '') {
      dispatch(updateUserFragmentsKeywordMain(fragmentsMatching))
    }
    const fragmentsNoName = fragments
      ?.filter(
        (fragmentsSorted) =>
          fragmentsSorted.keywords.length === 1 &&
          fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0
      )
      .map((el) => ({ ...el, nanoId: nanoid() }))
    if (selectedMainKeyword === '') {
      dispatch(updateUserFragmentsKeywordMain(fragmentsNoName))
      console.log(fragmentsNoName)
    }
  }, [fragments, dispatch, selectedMainKeyword])

  const removeKeywordHelperUltimate = () => {
    const fragmentsMatching = fragments?.filter(
      (fragmentsSorted) =>
        fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0
    )
    if (window.confirm('Are you sure?')) {
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
    for (let i = 0; i < fragmentsKeywordMain.length; i++) {
      const fragEdited = {
        _id: fragmentsKeywordMain[i]._id,
        keywords: [newKeyword],
        keywordValue: [
          {
            keyword: newKeyword,
            labelOne: fragmentsKeywordMain[0].keywordValue[0].labelOne,
            labelTwo: fragmentsKeywordMain[0].keywordValue[0].labelTwo,
            value: fragmentsKeywordMain[0].keywordValue[0].value,
            skip: fragmentsKeywordMain[0].keywordValue[0].skip,
          },
        ],
      }

      dispatch(editSavedFragment(fragEdited))
      // console.log(fragmentsKeywordMain[i].keywords)
    }
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
              labelOne: foundObject.labelOne,
              labelTwo: foundObject.labelTwo,
              value: foundObject.value,
              skip: foundObject.skip,
            },
          ],
        }

        dispatch(editSavedFragment(fragEdited))
      }
    }
  }

  const togglingOptions = () => {
    setOptionsOpen((optionsOpen) => !optionsOpen)
    if (optionsOpen === false) {
      setNewKeyword(keywordMain)
    }
    if (keywordEditing === true && optionsOpen === true)
      setKeywordEditing((keywordEditing) => !keywordEditing)
    // setNewKeyword(keywordMain)
    if (keywordCreation === true && optionsOpen === true)
      setKeywordCreation((keywordCreation) => !keywordCreation)
    // setNewKeyword(keywordMain)
  }

  return (
    <>
      <Main>
        <DropDownContainer>
          <HeaderAndCogContainer>
            {keywordEditing ? (
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
              >
                {selectedMainKeyword || 'Wybierz projekt'}
              </DropDownHeader>
            )}{' '}
            <SendButtonVerySmall
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              variant='secondaryEmpty'
              onClick={togglingOptions}
            >
              <SvgIcon
                variant='cog'
                toBottom
                contentAfter='opcje'
                lowerPosition
              />
            </SendButtonVerySmall>
          </HeaderAndCogContainer>
          <DropDownListContainer>
            {optionsOpen && !keywordEditing && !keywordCreation && (
              <OptionsDropdownContainer>
                <SendButtonVerySmall
                  variant='successEmpty'
                  onClick={editingNewHandler}
                >
                  <SvgIcon variant='plus' toBottom contentAfter='dodaj nowy' />
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
              </OptionsDropdownContainer>
            )}
            {optionsOpen && keywordEditing && (
              <OptionsDropdownContainer>
                <SendButtonVerySmall
                  variant='primaryEmpty'
                  onClick={editingHandler}
                >
                  <SvgIcon variant='back' toBottom contentAfter='wróć' />
                </SendButtonVerySmall>

                {keywordCreation ? (
                  <SendButtonVerySmall
                    variant='successEmpty'
                    onClick={saveNewKeywordHelper}
                  >
                    <SvgIcon variant='save' toBottom contentAfter='zapisz' />
                  </SendButtonVerySmall>
                ) : (
                  <SendButtonVerySmall
                    variant='successEmpty'
                    onClick={saveEditedKeywordHelper}
                  >
                    <SvgIcon
                      variant='save'
                      toBottom
                      contentAfter='zapisz zmiany'
                    />
                  </SendButtonVerySmall>
                )}
              </OptionsDropdownContainer>
            )}
          </DropDownListContainer>

          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {uniqueKeywords?.map((keyword) => (
                  <ListItem
                    onClick={onOptionClicked(keyword)}
                    key={Math.random()}
                  >
                    {keyword}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Main>{' '}
    </>
  )
}
export default SelectMainKeyword
