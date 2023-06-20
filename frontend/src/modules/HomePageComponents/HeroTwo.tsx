import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import HeroSearchDataSection from './HeroGridComponents/HeroSearchDataSection'
import { changeResultsDetailView } from '../../features/preferences/preferenceSlice'
import HeroWelcome from './HeroGridComponents/HeroWelcome'
import SimpleResultDisplay from '../DocumentView/DocumentDisplay/SimpleDocumentDisplay'
import { ButtonSmallCircle } from '../../components/Buttons/Buttons.styled'
import SvgIcon from '../../components/SvgIcon/SvgIcon'
import { RelativeWrapper } from '../../styles/misc.styled'
import { ButtonVariants } from '../../consts'
import { AppDispatch } from '../../app/store'

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
    <>
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
          trafnosc={data && data[heroDocIndex]?.trafnosc}
          istota_interpretacji={data && data[heroDocIndex].istota_interpretacji}
          query={queryTrimmed}
        />
      )}
    </>
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
  const dispatch: AppDispatch = useAppDispatch()

  const changeResultsViewHelper = () => {
    dispatch(changeResultsDetailView())
  }

  return (
    <>
      {data && data?.length === 0 ? null : (
        <ButtonSmallCircle
          variant={ButtonVariants.PRIMARY_EMPTY}
          onClick={() => changeResultsViewHelper()}
        >
          {' '}
          <RelativeWrapper $top='5px'>
            <SvgIcon
              variant={resultsDetailView ? 'store' : 'folder'}
              contentAfter={
                resultsDetailView ? 'widok szczeg.' : 'widok ogólny'
              }
              toLeft='-63px'
              toTop='-28px'
              width='70px'
            />
          </RelativeWrapper>
        </ButtonSmallCircle>
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
      {data && data?.length === 0 ? <HeroWelcome /> : <SimpleResultDisplay />}
    </>
  )
}

export { HeroTwoMain, HeroTwoThird, HeroTwoFourth }
