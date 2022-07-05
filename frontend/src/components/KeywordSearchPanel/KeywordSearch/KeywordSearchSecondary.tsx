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
interface KeywordSearchSecondaryProps {
  keywordOptionOne?: boolean
}

const KeywordSearchSecondary: React.FC<KeywordSearchSecondaryProps> = ({
  keywordOptionOne,
}) => {
  const sortingKeywords = useAppSelector(
    (state) => state.preference.sortingKeywords
  )

  const { keywordOne, keywordTwo } = sortingKeywords
  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )

  useEffect(() => {
    if (keywordOptionOne) {
      setSearchKeyword(keywordOne)
    } else {
      setSearchKeyword(keywordTwo)
    }
  }, [keywordOptionOne, keywordOne, keywordTwo])

  return (
    <KeywordSearchContainer>
      <DropdownSelect keywordOptionOne={keywordOptionOne} />

      {searchKeyword !== '' &&
        fragments.length > 0 &&
        fragments
          ?.filter(
            (fragmentsSorted) =>
              // todo here is filtering function comparing the selected searchKeyword and keywords within the arr
              fragmentsSorted.keywords?.indexOf(searchKeyword) >= 0
          )
          ?.map((fragment: any, index: any) => (
            <Draggable
              key={Math.random()}
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
                    <FragmentDivSmall key={Math.random()}>
                      <FragmentParSmall>
                        <FragmentB>T:</FragmentB> {fragment?.title}
                      </FragmentParSmall>
                      <FragmentParSmall>
                        <FragmentB>E:</FragmentB> {fragment?.excerpt}
                      </FragmentParSmall>
                      <FragmentParSmall>
                        <FragmentB>D:</FragmentB> {fragment?.description}
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
export default KeywordSearchSecondary
