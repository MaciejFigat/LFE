import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../../../app/reduxHooks'

import DropdownSelect from '../DropdownSelect/DropdownSelect'
import {
  FragmentB,
  FragmentDivSmall,
  FragmentParSmall,
  KeywordSearchContainer,
} from './KeywordSearch.styled'
interface KeywordSearchProps {
  keywordOptionOne?: boolean
}

const KeywordSearch: React.FC<KeywordSearchProps> = ({ keywordOptionOne }) => {
  const [matchingFragments, setMatchingFragments] = useState<any[]>([])

  const fragmentsKeywordOne: any[] = useAppSelector(
    (state) => state.fragment.fragmentsKeywordOne
  )
  const fragmentsKeywordTwo: any[] = useAppSelector(
    (state) => state.fragment.fragmentsKeywordTwo
  )

  useEffect(() => {
    if (keywordOptionOne) {
      setMatchingFragments(fragmentsKeywordOne)
    } else {
      setMatchingFragments(fragmentsKeywordTwo)
    }
  }, [keywordOptionOne, fragmentsKeywordTwo, fragmentsKeywordOne])

  return (
    <KeywordSearchContainer>
      <DropdownSelect keywordOptionOne={keywordOptionOne} />

      {matchingFragments.length > 0 &&
        matchingFragments.map((fragment: any) => (
          <FragmentDivSmall key={fragment.nanoId}>
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
        ))}
    </KeywordSearchContainer>
  )
}
export default KeywordSearch
