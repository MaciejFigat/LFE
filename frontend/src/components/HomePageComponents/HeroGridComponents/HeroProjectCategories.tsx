import React from 'react'

import { useAppSelector } from '../../../app/reduxHooks'
// import { ClayButtonWrapperSecondary } from '../../../styles/misc.styled'
// import { HorizontalContainer } from '../../FragmentsColumn/FragmentsColumn.styled'
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

  return (
    <>
      {' '}
      {/* <ClayButtonWrapperSecondary paddingProps='0.75rem 1.5rem'>
        <HorizontalContainer>
          {keywordMain}
          <RelativeWrapper top='4px' left='5px'>
                      
                    </RelativeWrapper>
        </HorizontalContainer>
      </ClayButtonWrapperSecondary> */}
      {/* {keywordMain !== '' ? (
        <>
          <ClayButtonWrapperSecondary paddingProps='0.75rem 1.5rem'>
            <HorizontalContainer>
              bez kategorii {fragmentsSkipTrueOne?.length}
            </HorizontalContainer>
          </ClayButtonWrapperSecondary>
          <ClayButtonWrapperSecondary paddingProps='0.75rem 1.5rem'>
            <HorizontalContainer>
              {keywordValueFound?.labelOne} {fragmentsValueTrueTwo.length}
            </HorizontalContainer>
          </ClayButtonWrapperSecondary>
          <ClayButtonWrapperSecondary paddingProps='0.75rem 1.5rem'>
            <HorizontalContainer>
              {keywordValueFound?.labelTwo} {fragmentsValueFalseThree.length}
            </HorizontalContainer>
          </ClayButtonWrapperSecondary>
        </>
      ) : null} */}
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
    </>
  )
}
export default HeroProjectCategories
