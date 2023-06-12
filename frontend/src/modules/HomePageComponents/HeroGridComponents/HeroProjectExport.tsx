import React from 'react'
import FirstColumnExportControls from '../../DragAndDropProject/FirstColumnExportControls'
import { useAppSelector } from '../../../app/reduxHooks'
import { FragmentStored, KeywordValue } from '../../../interfaces'
interface HeroProjectExportProps {}

const HeroProjectExport: React.FC<HeroProjectExportProps> = () => {
  const fragments: FragmentStored[] = useAppSelector(
    state => state.fragment.userFragments
  )
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
      : fragments.filter(
          filteredFragment =>
            filteredFragment.keywords?.length === 1 &&
            filteredFragment.keywords[0] === ''
        )

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
  const fragmentState = [
    fragmentsSkipTrueOne,
    fragmentsValueTrueTwo,
    fragmentsValueFalseThree
  ]

  return <FirstColumnExportControls state={fragmentState} />
}
export default HeroProjectExport
