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
import { sortingKeywordsEdit } from '../../../features/preferences/preferenceSlice'
import {
  updateUserFragmentsKeywordOne,
  updateUserFragmentsKeywordTwo,
} from '../../../features/fragments/fragmentSlice'
import { nanoid } from '@reduxjs/toolkit'

interface DropdownSelectProps {
  // uniqueKeywords: string[]
  keywordOptionOne?: boolean
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  keywordOptionOne,
}) => {
  const dispatch: any = useAppDispatch()
  const sortingKeywords = useAppSelector(
    (state) => state.preference.sortingKeywords
  )
  const { keywordOne, keywordTwo } = sortingKeywords

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const keywordsAll = fragments
    ?.map((fragment) => fragment.keywords?.map((keyword: string) => keyword))
    .flat()
  //todo .flat() flattens the arr ie. [a, b, [c, d]].flat()=>[a, b, c, d]

  let uniqueKeywords = [...Array.from(new Set(keywordsAll))]

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptionOne, setSelectedOptionOne] = useState<string | null>(
    keywordOne
  )
  const [selectedOptionTwo, setSelectedOptionTwo] = useState<string | null>(
    keywordTwo
  )

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value: string | null) => () => {
    if (keywordOptionOne) {
      setSelectedOptionOne(value)
    } else {
      setSelectedOptionTwo(value)
    }
    setIsOpen(false)
  }

  useEffect(() => {
    const sortingKeywordsObject = {
      keywordOne: selectedOptionOne,
      keywordTwo: keywordTwo,
    }
    if (
      keywordOptionOne &&
      selectedOptionOne !== keywordOne &&
      selectedOptionOne !== null
    ) {
      dispatch(sortingKeywordsEdit(sortingKeywordsObject))
    }
  }, [dispatch, keywordOptionOne, selectedOptionOne, keywordTwo, keywordOne])
  useEffect(() => {
    const sortingKeywordsObjectTwo = {
      keywordOne: keywordOne,
      keywordTwo: selectedOptionTwo,
    }
    if (
      !keywordOptionOne &&
      selectedOptionTwo !== null &&
      selectedOptionTwo !== keywordTwo
    ) {
      dispatch(sortingKeywordsEdit(sortingKeywordsObjectTwo))
    }
  }, [dispatch, keywordOptionOne, selectedOptionTwo, keywordTwo, keywordOne])

  useEffect(() => {
    const fragmentsMatchingOne = fragments
      ?.filter(
        (fragmentsSorted) =>
          fragmentsSorted.keywords?.indexOf(selectedOptionOne) >= 0
      )
      .map((el) => ({ ...el, nanoId: nanoid() }))
    const fragmentsMatchingTwo = fragments
      ?.filter(
        (fragmentsSorted) =>
          fragmentsSorted.keywords?.indexOf(selectedOptionTwo) >= 0
      )
      .map((el) => ({ ...el, nanoId: nanoid() }))

    if (keywordOptionOne) {
      dispatch(updateUserFragmentsKeywordOne(fragmentsMatchingOne))
    } else {
      dispatch(updateUserFragmentsKeywordTwo(fragmentsMatchingTwo))
    }
  }, [
    keywordOptionOne,
    fragments,
    dispatch,
    selectedOptionTwo,
    selectedOptionOne,
  ])

  return (
    <>
      <Main>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>
            {keywordOptionOne
              ? selectedOptionOne || 'Select a keyword'
              : selectedOptionTwo || 'Select a keyword'}
          </DropDownHeader>
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
export default DropdownSelect
