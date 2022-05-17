import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import {
  updateUserFragmentsKeywordOne,
  updateUserFragmentsKeywordTwo,
} from '../../../features/fragments/fragmentSlice'
import { nanoid } from '@reduxjs/toolkit'
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
  const dispatch: any = useAppDispatch()

  const sortingKeywords = useAppSelector(
    (state) => state.preference.sortingKeywords
  )

  const { keywordOne, keywordTwo } = sortingKeywords
  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const keywordsAll =
    // fragments &&
    fragments
      ?.map((fragment) => fragment.keywords?.map((keyword: string) => keyword))
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

  useEffect(() => {
    const fragmentsMatching = fragments
      ?.filter(
        (fragmentsSorted) =>
          fragmentsSorted.keywords?.indexOf(searchKeyword) >= 0
      )
      .map((el) => ({ ...el, nanoId: nanoid() }))

    if (keywordOptionOne) {
      dispatch(updateUserFragmentsKeywordOne(fragmentsMatching))
      // todo id: nanoid(),
    } else {
      dispatch(updateUserFragmentsKeywordTwo(fragmentsMatching))
      // todo id: nanoid(),
    }
  }, [keywordOptionOne, fragments, searchKeyword, dispatch])

  return (
    <KeywordSearchContainer>
      <DropdownSelect
        keywordOptionOne={keywordOptionOne}
        uniqueKeywords={uniqueChars}
      />

      {searchKeyword !== '' &&
        fragments.length > 0 &&
        fragments
          ?.filter(
            (fragmentsSorted) =>
              // todo here is filtering function comparing the selected searchKeyword and keywords within the arr
              fragmentsSorted.keywords?.indexOf(searchKeyword) >= 0
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
