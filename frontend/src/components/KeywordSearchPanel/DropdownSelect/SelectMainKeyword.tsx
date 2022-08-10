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
import { SendButtonSmall } from '../../Buttons/Buttons.styled'

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

  // todo delete if there is only one keyword and '' from initial state or only one keyword (edited '')
  // const removeKeywordHelper = () => {
  //   const fragmentsMatching = fragments?.filter(
  //     (fragmentsSorted) =>
  //       fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0 &&
  //       (fragmentsSorted.keywords.length === 2 ||
  //         fragmentsSorted.keywords.length === 1)
  //     //* Some fragments after I edit a '' keyword will have length === 1
  //   )
  //   console.log(fragmentsMatching)
  //   fragmentsMatching.map((fragment) =>
  //     dispatch(deleteSavedFragment(fragment._id))
  //   )
  // dispatch(deleteSavedFragment(id))
  //! new BE controller needed for deleting multiple fragments
  //* or for every fragment a loop dispatching deleteSavedFragment(id)
  // dispatch(deleteSavedFragment(id))
  //? if if fragment has only this keyword and keyword: '', then => delete fragment, if more keywords are present => delete the this keyword from said fragment )
  // }
  // const removeKeywordHelperTwo = () => {
  //   const fragmentsMatching: any = fragments
  //     ?.filter(
  //       (fragmentsSorted) =>
  //         fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0 &&
  //         fragmentsSorted.keywords.length > 2
  //     )
  //     .map((fragment) =>
  //       dispatch(
  //         editSavedFragment({
  //           _id: fragment._id,
  //           keywords: fragment?.keywords?.filter(
  //             (keyword: string) => keyword !== selectedMainKeyword
  //           ),
  //         })
  //       )
  //     )

  //   console.log(fragmentsMatching)
  // }
  const removeKeywordHelperUltimate = () => {
    const fragmentsMatching = fragments?.filter(
      (fragmentsSorted) =>
        fragmentsSorted.keywords?.indexOf(selectedMainKeyword) >= 0
    )
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
  return (
    <>
      <Main>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>
            {selectedMainKeyword || 'Select a keyword'}
          </DropDownHeader>
          {/* <button onClick={removeKeywordHelper}>
            Remove fragment (k === 2)
          </button>
          <button onClick={removeKeywordHelperTwo}>
            Remove keyword from keyword:[]
          </button> */}
          <SendButtonSmall
            variant='secondaryEmpty'
            onClick={removeKeywordHelperUltimate}
          >
            remove keyword || remove fragment
          </SendButtonSmall>
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
