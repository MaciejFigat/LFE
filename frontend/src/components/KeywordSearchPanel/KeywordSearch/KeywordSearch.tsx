import React, { useState } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import DropdownSelect from '../DropdownSelect/DropdownSelect'
import { KeywordSearchContainer } from './KeywordSearch.styled'
interface KeywordSearchProps {
  keywordOptionOne?: boolean
}

const KeywordSearch: React.FC<KeywordSearchProps> = ({ keywordOptionOne }) => {
  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const keywordsAll = fragments
    .map((fragment) => fragment.keywords.map((keyword: string) => keyword))
    .flat()
  //todo .flat() flattens the arr ie. [a, b, [c, d]].flat()=>[a, b, c, d]
  //? I wonder which one generates more boilerplate when compiled from TS, this or the next one
  let uniqueChars = [...Array.from(new Set(keywordsAll))]

  //? it iterates through elements show its index and then indexOf method show what index is this element when it first time appears, so if the result isn't the same for index and indexOf(element) then it means it's a duplicate

  const keywordHandler = (keyword: string) => {
    setSearchKeyword(keyword)
  }

  return (
    <KeywordSearchContainer>
      <DropdownSelect
        keywordOptionOne={keywordOptionOne}
        uniqueKeywords={uniqueChars}
      />
      <h2>Here are the keywords of this user:</h2>
      {uniqueChars.map((keyword, index) => (
        <b key={index} onClick={() => keywordHandler(keyword)}>
          {' '}
          {keyword}
        </b>
      ))}

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
