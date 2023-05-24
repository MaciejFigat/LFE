import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { AnimateSharedLayout } from 'framer-motion'
import HeroSearchDataSection from './HeroGridComponents/HeroSearchDataSection'
import { ButtonSmall } from '../../components/ButtonsSend/BigButton.styled'
import { changeResultsDetailView } from '../../features/preferences/preferenceSlice'
import HeroWelcome from './HeroGridComponents/HeroWelcome'
import SimpleResultDisplay from '../../components/Miscellaneous/ResultDisplay/SimpleResultDisplay'

interface HeroTwoProps {}

const HeroTwoMain: React.FC<HeroTwoProps> = () => {
  const searchResults: any = useAppSelector(
    state => state.searchResult.searchResults
  )
  const heroDocIndex: number = useAppSelector(
    state => state.searchResult.heroDocIndex
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
          key={data && data[heroDocIndex]['uuid']}
          paddingTop='small'
          imgStart={false}
          fragmentsFound={data && data[heroDocIndex]?.fragment}
          metryka={data && data[heroDocIndex]?.metryka}
          istota_interpretacji={data && data[heroDocIndex].istota_interpretacji}
          query={queryTrimmed}
        />
      )}
    </AnimateSharedLayout>
  )
}
const HeroTwoThird: React.FC<HeroTwoProps> = () => {
  const resultsDetailView: boolean = useAppSelector(
    state => state.preference.resultsDetailView
  )
  const searchResults: any = useAppSelector(
    state => state.searchResult.searchResults
  )

  const { data } = searchResults
  const dispatch: any = useAppDispatch()

  const changeResultsViewHelper = () => {
    dispatch(changeResultsDetailView())
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
const HeroTwoFourth: React.FC<HeroTwoProps> = () => {
  const searchResults: any = useAppSelector(
    state => state.searchResult.searchResults
  )

  const { data } = searchResults

  return (
    <>
      <AnimateSharedLayout>
        {data && data?.length === 0 ? <HeroWelcome /> : <SimpleResultDisplay />}
      </AnimateSharedLayout>
    </>
  )
}
export { HeroTwoMain, HeroTwoThird, HeroTwoFourth }
