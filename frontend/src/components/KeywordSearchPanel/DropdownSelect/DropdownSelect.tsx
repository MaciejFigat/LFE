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

interface DropdownSelectProps {
  uniqueKeywords: string[]
  keywordOptionOne?: boolean
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  uniqueKeywords,
  keywordOptionOne,
}) => {
  const dispatch: any = useAppDispatch()
  const sortingKeywords = useAppSelector(
    (state) => state.preference.sortingKeywords
  )
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptionOne, setSelectedOptionOne] = useState<string | null>(
    sortingKeywords.keywordOne
  )
  const [selectedOptionTwo, setSelectedOptionTwo] = useState<string | null>(
    sortingKeywords.keywordTwo
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
      keywordTwo: sortingKeywords.keywordTwo,
    }

    if (
      keywordOptionOne &&
      selectedOptionOne !== sortingKeywords.keywordOne &&
      selectedOptionOne !== null
    ) {
      dispatch(sortingKeywordsEdit(sortingKeywordsObject))
    }
  }, [
    dispatch,
    keywordOptionOne,
    selectedOptionOne,

    sortingKeywords.keywordTwo,
    sortingKeywords.keywordOne,
  ])
  useEffect(() => {
    const sortingKeywordsObjectTwo = {
      keywordOne: sortingKeywords.keywordOne,
      keywordTwo: selectedOptionTwo,
    }
    if (
      !keywordOptionOne &&
      selectedOptionTwo !== null &&
      selectedOptionTwo !== sortingKeywords.keywordTwo
    ) {
      dispatch(sortingKeywordsEdit(sortingKeywordsObjectTwo))
      console.log(
        `testing option 2 ${selectedOptionTwo}, keyword 2 ${sortingKeywords.keywordTwo}`
      )
    }
  }, [
    dispatch,
    keywordOptionOne,
    selectedOptionTwo,
    sortingKeywords.keywordTwo,
    sortingKeywords.keywordOne,
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
