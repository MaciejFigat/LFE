import React from 'react'
import { useAppSelector } from '../../../app/reduxHooks'

import HeroChart from './HeroChart'
import { FragmentStored, KeywordValue } from '../../../interfaces'
interface HeroProjectCategoriesProps {}

const HeroProjectCategories: React.FC<HeroProjectCategoriesProps> = () => {
  const fragmentsKeywordMain: FragmentStored[] = useAppSelector(
    state => state.fragment.fragmentsKeywordMain
  )
  const sortingKeywords = useAppSelector(
    state => state.preference.sortingKeywords
  )

  const { keywordMain } = sortingKeywords

  const fragmentsSkipTrueOne =
    keywordMain !== ''
      ? fragmentsKeywordMain.filter(filteredFragment =>
          filteredFragment.keywordValue?.find(
            (keywordSearched: KeywordValue) =>
              keywordSearched.keyword === keywordMain &&
              keywordSearched?.skip !== undefined &&
              keywordSearched.skip === true
          )
        )
      : null

  const fragmentsValueTrueTwo = fragmentsKeywordMain.filter(filteredFragment =>
    filteredFragment.keywordValue?.find(
      (keywordSearched: KeywordValue) =>
        keywordSearched.keyword === keywordMain &&
        keywordSearched?.skip !== undefined &&
        keywordSearched.skip === false &&
        keywordSearched.value === true
    )
  )
  const fragmentsValueFalseThree = fragmentsKeywordMain.filter(
    filteredFragment =>
      filteredFragment.keywordValue?.find(
        (keywordSearched: KeywordValue) =>
          keywordSearched.keyword === keywordMain &&
          keywordSearched?.skip !== undefined &&
          keywordSearched.skip === false &&
          keywordSearched.value === false
      )
  )
  const keywordValueFound = fragmentsKeywordMain[0]?.keywordValue?.find(
    (keywordSearched: KeywordValue) => keywordSearched.keyword === keywordMain
  )

  return (
    <>
      <HeroChart
        values={[
          fragmentsSkipTrueOne?.length ?? 0,
          fragmentsValueTrueTwo?.length ?? 0,
          fragmentsValueFalseThree?.length ?? 0
        ]}
        labels={[
          'bez kategorii',
          keywordValueFound?.labelOne ?? 'pro',
          keywordValueFound?.labelTwo ?? 'contra'
        ]}
      />
    </>
  )
}
export default HeroProjectCategories
