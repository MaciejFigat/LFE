import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { AnimateSharedLayout } from 'framer-motion'
import HeroSearchDataSection from './HeroGridComponents/HeroSearchDataSection'

import { changeResultsDetailView } from '../../features/preferences/preferenceSlice'
import HeroWelcome from './HeroGridComponents/HeroWelcome'
import SimpleResultDisplay from '../../components/Miscellaneous/ResultDisplay/SimpleResultDisplay'
import { ButtonVerySmall } from '../../components/Buttons/Buttons.styled'
import SvgIcon from '../../components/SvgIcon/SvgIcon'
import { RelativeWrapper } from '../../styles/misc.styled'

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
          key={data && data[heroDocIndex]['uuid']}
          paddingTop='small'
          imgStart
          fragmentsFound={data && data[heroDocIndex]?.fragment}
          metryka={data && data[heroDocIndex]?.metryka}
          istota_interpretacji={data && data[heroDocIndex].istota_interpretacji}
          query={queryTrimmed}
        />
      )}
    </AnimateSharedLayout>
  )
}
const HeroTwoThird: React.FC = () => {
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
        <ButtonVerySmall
          variant='primaryEmpty'
          onClick={() => changeResultsViewHelper()}
        >
          {' '}
          <RelativeWrapper top='5px'>
            {resultsDetailView ? (
              <SvgIcon variant='folder' />
            ) : (
              <SvgIcon variant='store' />
            )}{' '}
          </RelativeWrapper>
        </ButtonVerySmall>
      )}
    </>
  )
}
const HeroTwoFourth: React.FC = () => {
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
