import React, { useState } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import { HorizontalWrapper } from '../../../styles/misc.styled'
import { ButtonSmall } from '../../Miscellaneous/Buttons/BigButton.styled'
import VisitedLinks from '../../Miscellaneous/VisitedLinks/VisitedLinks'

import HeroChart from './HeroChart'
interface HeroProjectCategoriesProps {}

const HeroProjectCategories: React.FC<HeroProjectCategoriesProps> = () => {
  const fragmentsKeywordMain: any[] = useAppSelector(
    (state) => state.fragment.fragmentsKeywordMain
  )
  const sortingKeywords = useAppSelector(
    (state) => state.preference.sortingKeywords
  )

  const { keywordMain } = sortingKeywords
  const [viewLinks, setViewLinks] = useState(false)
  const fragmentsSkipTrueOne =
    keywordMain !== ''
      ? fragmentsKeywordMain.filter((filteredFragment) =>
          filteredFragment.keywordValue.find(
            (keywordSearched: any) =>
              keywordSearched.keyword === keywordMain &&
              keywordSearched?.skip !== undefined &&
              keywordSearched.skip === true
          )
        )
      : null

  const fragmentsValueTrueTwo = fragmentsKeywordMain.filter(
    (filteredFragment) =>
      filteredFragment.keywordValue.find(
        (keywordSearched: any) =>
          keywordSearched.keyword === keywordMain &&
          keywordSearched?.skip !== undefined &&
          keywordSearched.skip === false &&
          keywordSearched.value === true
      )
  )
  const fragmentsValueFalseThree = fragmentsKeywordMain.filter(
    (filteredFragment) =>
      filteredFragment.keywordValue.find(
        (keywordSearched: any) =>
          keywordSearched.keyword === keywordMain &&
          keywordSearched?.skip !== undefined &&
          keywordSearched.skip === false &&
          keywordSearched.value === false
      )
  )
  const keywordValueFound = fragmentsKeywordMain[0]?.keywordValue?.find(
    (keywordSearched: any) => keywordSearched.keyword === keywordMain
  )
  const viewHandler = () => {
    setViewLinks((viewLinks) => !viewLinks)
  }
  return (
    <>
      {' '}
      {viewLinks ? (
        <VisitedLinks />
      ) : (
        <HeroChart
          values={[
            fragmentsSkipTrueOne?.length ?? 0,
            fragmentsValueTrueTwo?.length ?? 0,
            fragmentsValueFalseThree?.length ?? 0,
          ]}
          labels={[
            'bez kategorii',
            keywordValueFound?.labelOne,
            keywordValueFound?.labelTwo,
          ]}
        />
      )}
      <HorizontalWrapper>
        <ButtonSmall variant='secondary' onClick={viewHandler}>
          {viewLinks ? 'ostatnie dokumenty' : 'kategorie projektu'}
        </ButtonSmall>
      </HorizontalWrapper>
    </>
  )
}
export default HeroProjectCategories
