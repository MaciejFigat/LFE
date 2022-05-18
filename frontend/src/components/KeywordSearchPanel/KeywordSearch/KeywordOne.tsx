import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import DropdownSelect from '../DropdownSelect/DropdownSelect'
import {
  FragmentB,
  FragmentDivSmall,
  FragmentParSmall,
  KeywordSearchContainer,
} from './KeywordSearch.styled'
import { Draggable } from 'react-beautiful-dnd'
interface KeywordOneProps {
  keywordOptionOne?: boolean
}

const KeywordOne: React.FC<KeywordOneProps> = ({ keywordOptionOne }) => {
  const sortingKeywords = useAppSelector(
    (state) => state.preference.sortingKeywords
  )

  const { keywordOne } = sortingKeywords
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [matchingFragments, setMatchingFragments] = useState<any[]>([])

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )

  useEffect(() => {
    setSearchKeyword(keywordOne)
  }, [keywordOne])

  useEffect(() => {
    setMatchingFragments(
      fragments.filter(
        (fragmentsSorted) =>
          fragmentsSorted.keywords?.indexOf(searchKeyword) >= 0
      )
    )
  }, [fragments, searchKeyword])

  return (
    <KeywordSearchContainer>
      <DropdownSelect
        keywordOptionOne={keywordOptionOne}
        // uniqueKeywords={uniqueChars}
      />

      {searchKeyword !== '' &&
        fragments.length > 0 &&
        fragments
          ?.filter(
            (fragmentsSorted) =>
              fragmentsSorted.keywords?.indexOf(searchKeyword) >= 0
          )
          ?.map((fragment: any, index: any) => (
            <Draggable
              key={fragment._id}
              draggableId={fragment._id}
              index={index}
            >
              {(provided, snapshot) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {/* <FragmentDivSmall key={fragment._id}> */}
                    <FragmentDivSmall>
                      <FragmentParSmall>
                        <FragmentB>T:</FragmentB> {fragment.title}
                      </FragmentParSmall>
                      <FragmentParSmall>
                        <FragmentB>E:</FragmentB> {fragment.excerpt}
                      </FragmentParSmall>
                      <FragmentParSmall>
                        <FragmentB>D:</FragmentB> {fragment.description}
                      </FragmentParSmall>
                    </FragmentDivSmall>
                  </div>
                )
              }}
            </Draggable>
          ))}
    </KeywordSearchContainer>
  )
}
export default KeywordOne
