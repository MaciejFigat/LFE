import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
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
} from '../../../features/fragments/fragmentSlice'
import { sortingKeywordMainEdit } from '../../../features/preferences/preferenceSlice'
import { updateUserFragmentsKeywordMain } from '../../../features/fragments/fragmentSlice'
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
    // todo loop through fragmentsKeywordMain ->
    // for each fragment looped i will change an object in keywordValue that contains keywordMain
    // only keyword: '' will change, rest of the {} will remain intact
    // also keywords: [] needs ..., newkeyword
    // also no duplicates
    for (let i = 0; i < fragmentsKeywordMain.length; i++) {
      //  todo 1
      const kvalueNoKewordMain = fragmentsKeywordMain[i].keywordValue.filter(
        (keywordSearched: any) => keywordSearched.keyword !== keywordMain
      )
      const kvalueWithKewordMain = fragmentsKeywordMain[i].keywordValue.filter(
        (keywordSearched: any) => keywordSearched.keyword === keywordMain
      )

      //  todo 2

      //* no duplicates edited in
      if (!fragmentsKeywordMain[i].keywords.includes(newKeyword)) {
        const fragEdited = {
          _id: fragmentsKeywordMain[i]._id,
          keywords: [
            ...fragmentsKeywordMain[i].keywords.filter(
              (keyword: string) => keyword !== keywordMain
            ),
            newKeyword,
          ],
          keywordValue: [
            ...kvalueNoKewordMain,
            {
              keyword: newKeyword,
              labelOne: kvalueWithKewordMain.labelOne,
              labelTwo: kvalueWithKewordMain.labelTwo,
              value: kvalueWithKewordMain.value,
              skip: kvalueWithKewordMain.skip,
            },
          ],
        }

        dispatch(editSavedFragment(fragEdited))
      }
    }
  }

  const togglingOptions = () => {
    setOptionsOpen((optionsOpen) => !optionsOpen)
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
                placeholder='new project'
                // placeholder={newKeyword}
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
                {selectedMainKeyword || 'Select a project'}
              </DropDownHeader>
            )}{' '}
            <SendButtonVerySmall
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              variant='secondaryEmpty'
              // onClick={editingHandler}
              onClick={togglingOptions}
            >
              <SvgIcon variant='cog' toBottom contentAfter='opcje' />
            </SendButtonVerySmall>
          </HeaderAndCogContainer>
          <DropDownListContainer>
            {optionsOpen && !keywordEditing && !keywordCreation && (
              <OptionsDropdownContainer>
                <SendButtonVerySmall
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  variant='successEmpty'
                  onClick={editingNewHandler}
                >
                  <SvgIcon variant='plus' toBottom contentAfter='dodaj nowy' />
                </SendButtonVerySmall>
                {/* {selectedMainKeyword && ( */}
                <SendButtonVerySmall
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  variant='primaryEmpty'
                  onClick={editingHandler}
                >
                  <SvgIcon variant='edit' toBottom contentAfter='edytuj' />
                </SendButtonVerySmall>
                {/* )} */}
                <SendButtonVerySmall
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
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
          {/* <button onClick={removeKeywordHelper}>
            Remove fragment (k === 2)
          </button>
          <button onClick={removeKeywordHelperTwo}>
            Remove keyword from keyword:[]
          </button> */}

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
                {/* <ListItem onClick={onOptionClicked('')} key={Math.random()}>
                  new project
                </ListItem> */}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Main>{' '}
    </>
  )
}
export default SelectMainKeyword
