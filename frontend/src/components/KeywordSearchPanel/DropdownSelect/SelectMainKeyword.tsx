import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  HorizontalButtonContainer,
  ListItem,
  Main,
  TitleInputMainKeyword,
} from './DropdownSelect.styled'
import {
  deleteSavedFragment,
  editSavedFragment,
  // getUserFragments,
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
  const [keywordEditing, setKeywordEditing] = useState<boolean>(false)
  const [newKeyword, setNewKeyword] = useState<string>('')

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
    for (let i = 0; i < fragmentsKeywordMain.length; i++) {
      // const fragEdited = {
      //   _id: fragmentsKeywordMain[i]._id,
      //   keywords: [newKeyword],
      //   keywordValue: {
      //     keyword: newKeyword,
      //     labelOne: fragmentsKeywordMain[i].labelOne,
      //     labelTwo: fragmentsKeywordMain[i].labelTwo,
      //     value: fragmentsKeywordMain[i].value,
      //     skip: fragmentsKeywordMain[i].skip,
      //   },
      // }
      // // @ts-ignore
      // dispatch(editSavedFragment(fragEdited))
      const fragEdited = {
        _id: fragmentsKeywordMain[i]._id,
        keywords: [newKeyword],
        keywordValue: [
          {
            keyword: newKeyword,
            labelOne: fragmentsKeywordMain[i].labelOne ?? 'pro',
            labelTwo: fragmentsKeywordMain[i].labelTwo ?? 'contra',
            value: fragmentsKeywordMain[i].value ?? true,
            skip: fragmentsKeywordMain[i].skip ?? true,
            // labelOne: 'pro',
            // labelTwo: 'contra',
            // value: true,
            // skip: true,
          },
        ],
      }

      dispatch(editSavedFragment(fragEdited))
      console.log(fragmentsKeywordMain[i].keywords)
    }
  }
  return (
    <>
      <Main>
        <DropDownContainer>
          {keywordEditing ? (
            <TitleInputMainKeyword
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              type='mainLabel'
              name='main label'
              placeholder='new project'
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
          )}
          <HorizontalButtonContainer>
            {!keywordEditing && (
              <>
                <SendButtonVerySmall
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  variant='successEmpty'
                  onClick={editingNewHandler}
                >
                  <SvgIcon variant='add' toBottom contentAfter='add new' />
                </SendButtonVerySmall>
                {/* {selectedMainKeyword && ( */}
                <SendButtonVerySmall
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  variant='primaryEmpty'
                  onClick={editingHandler}
                >
                  <SvgIcon variant='edit' toBottom contentAfter='edit' />
                </SendButtonVerySmall>
                {/* )} */}
                <SendButtonVerySmall
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  variant='secondaryEmpty'
                  onClick={removeKeywordHelperUltimate}
                >
                  <SvgIcon
                    variant='remove'
                    toBottom
                    contentAfter='usuń powiązane'
                  />
                </SendButtonVerySmall>
              </>
            )}
            {keywordEditing && (
              <>
                <SendButtonVerySmall
                  variant='primaryEmpty'
                  onClick={editingHandler}
                >
                  <SvgIcon variant='back' toBottom contentAfter='wróć' />
                </SendButtonVerySmall>

                <SendButtonVerySmall
                  variant='successEmpty'
                  onClick={saveNewKeywordHelper}
                >
                  <SvgIcon variant='save' toBottom contentAfter='zapisz' />
                </SendButtonVerySmall>
              </>
            )}
          </HorizontalButtonContainer>
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
