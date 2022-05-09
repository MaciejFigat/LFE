import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
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
  const sortingKeywords = useAppSelector(
    (state) => state.preference.sortingKeywords
  )

  const { keywordOne, keywordTwo } = sortingKeywords
  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const keywordsAll =
    fragments &&
    fragments
      .map((fragment) => fragment.keywords.map((keyword: string) => keyword))
      .flat()
  //todo .flat() flattens the arr ie. [a, b, [c, d]].flat()=>[a, b, c, d]

  let uniqueChars = [...Array.from(new Set(keywordsAll))]

  useEffect(() => {
    if (keywordOptionOne) {
      setSearchKeyword(keywordOne)
    } else {
      setSearchKeyword(keywordTwo)
    }
  }, [keywordOptionOne, keywordOne, keywordTwo])

  return (
    <KeywordSearchContainer>
      <h2>User keywords</h2>
      <DropdownSelect
        keywordOptionOne={keywordOptionOne}
        uniqueKeywords={uniqueChars}
      />

      <h2>Fragments matching</h2>

      {searchKeyword !== '' &&
        // fragments &&
        // typeof fragments !== 'undefined' &&
        fragments.length > 0 &&
        fragments
          ?.filter(
            (fragmentsSorted) =>
              // todo here is filtering function comparing the selected searchKeyword and keywords within the arr
              fragmentsSorted.keywords.indexOf(searchKeyword) >= 0
          )
          ?.map((fragment) => (
            <FragmentDivSmall key={Math.random()}>
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
