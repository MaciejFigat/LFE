import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import DropdownSelect from '../DropdownSelect/DropdownSelect'
import { KeywordSearchContainer } from './KeywordSearch.styled'
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
  const keywordsAll = fragments
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
      <DropdownSelect
        keywordOptionOne={keywordOptionOne}
        uniqueKeywords={uniqueChars}
      />

      <h2>Fragments </h2>
      <h3>search key:{searchKeyword}</h3>
      {searchKeyword !== '' &&
        fragments.length > 0 &&
        fragments
          .filter(
            (fragmentsSorted) =>
              // todo here is filtering function comparing the selected searchKeyword and keywords within the arr
              fragmentsSorted.keywords.indexOf(searchKeyword) >= 0
          )
          .map((fragment, index) => (
            <p key={index}>
              {fragment.title} keywords arr: {fragment.keywords}
            </p>
          ))}
    </KeywordSearchContainer>
  )
}
export default KeywordSearch
