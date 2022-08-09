import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  Main,
} from './DropdownSelect.styled'
import {
  deleteSavedFragment,
  editSavedFragment,
  // getUserFragments,
} from '../../../features/fragments/fragmentSlice'
import { sortingKeywordMainEdit } from '../../../features/preferences/preferenceSlice'
import { updateUserFragmentsKeywordMain } from '../../../features/fragments/fragmentSlice'
import { nanoid } from '@reduxjs/toolkit'

interface SelectMainKeywordProps {}

const SelectMainKeyword: React.FC<SelectMainKeywordProps> = () => {
  const dispatch: any = useAppDispatch()

  const keywordMain = useAppSelector(
    (state) => state.preference.sortingKeywords.keywordMain
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
  const [selectedMainKeyword, setSelectedMainKeyword] = useState<string | null>(
    keywordMain
  )

  const toggling = () => setIsOpen(!isOpen)

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
    console.log(selectedMainKeyword)
  }, [fragments, dispatch, selectedMainKeyword])

  const removeKeywordHelper = () => {
    const fragmentsMatching = fragments?.filter(
      (fragmentsSorted) =>
        fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0 &&
        fragmentsSorted.keywords.length === 2
      // fragmentsSorted.keywords.length > 2
    )
    console.log(fragmentsMatching)
    //! new BE controller needed for deleting multiple fragments
    //* or for every fragment a loop dispatching deleteSavedFragment(id)
    // dispatch(deleteSavedFragment(id))
    //? if if fragment has only this keyword and keyword: '', then => delete fragment, if more keywords are present => delete the this keyword from said fragment )
  }
  const removeKeywordHelperTwo = () => {
    const fragmentsMatching = fragments?.filter(
      (fragmentsSorted) =>
        fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0 &&
        fragmentsSorted.keywords.length > 2
    )
    console.log(fragmentsMatching)
  }

  return (
    <>
      <Main>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>
            {selectedMainKeyword || 'Select a keyword'}
          </DropDownHeader>
          <button onClick={removeKeywordHelper}>
            Remove fragment (k === 2)
          </button>
          <button onClick={removeKeywordHelperTwo}>
            Remove keyword from keyword:[]
          </button>
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
