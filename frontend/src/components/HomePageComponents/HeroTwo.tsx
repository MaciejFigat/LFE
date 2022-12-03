import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { AnimateSharedLayout } from 'framer-motion'
import HeroSearchDataSection from './HeroGridComponents.tsx/HeroSearchDataSection'
import { ButtonSmall } from '../Miscellaneous/Buttons/BigButton.styled'
import { changeResultsDetailView } from '../../features/preferences/preferenceSlice'
import HeroWelcome from './HeroGridComponents.tsx/HeroWelcome'

interface HeroTwoProps {}

const HeroTwoMain: React.FC<HeroTwoProps> = () => {
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )
  const heroDocIndex: number = useAppSelector(
    (state) => state.searchResult.heroDocIndex
  )
  const { data, query } = searchResults
  const queryTrimmed = encodeURIComponent(query?.trim())

  return (
    <AnimateSharedLayout>
      {data && data?.length === 0 ? (
        <HeroWelcome />
      ) : (
        <HeroSearchDataSection
          highlightQuery={queryTrimmed}
          variant='secondary'
          key={data[heroDocIndex]['uuid']}
          paddingTop='small'
          imgStart={false}
          fragmentsFound={data[heroDocIndex].fragment}
          metryka={data[heroDocIndex].metryka}
          istota_interpretacji={data[heroDocIndex].istota_interpretacji}
          query={queryTrimmed}
        />
      )}
    </AnimateSharedLayout>
  )
}
const HeroTwoThird: React.FC<HeroTwoProps> = () => {
  const resultsDetailView: boolean = useAppSelector(
    (state) => state.preference.resultsDetailView
  )
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )

  const { data } = searchResults
  const dispatch: any = useAppDispatch()

  const changeResultsViewHelper = () => {
    dispatch(changeResultsDetailView())
    console.log(resultsDetailView)
  }

  return (
    <>
      {data && data?.length === 0 ? null : (
        <ButtonSmall
          variant='secondary'
          onClick={() => changeResultsViewHelper()}
        >
          {resultsDetailView ? 'widok uproszczony' : 'podgląd dokumentu'}
        </ButtonSmall>
      )}
    </>
  )
}
export { HeroTwoMain, HeroTwoThird }
