import React from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import { HeroTitleLeft, HeroTwoContainer } from './HeroSection.styled'
import {
  HeroTextWrapper,
  HeroWrapperColumn,
  HeroWrapperRow,
  TopLine,
} from './HomeSection.styled'

import { AnimateSharedLayout } from 'framer-motion'

import HeroSearchDataSection from './HeroGridComponents.tsx/HeroSearchDataSection'

interface HeroTwoProps {}

const HeroTwoSecond: React.FC<HeroTwoProps> = () => {
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )
  const { data } = searchResults

  const variant = 'secondary'
  return (
    <AnimateSharedLayout>
      <HeroWrapperRow>
        <HeroTwoContainer>
          {/* <HeroTitleLeft>Wybierz dokument</HeroTitleLeft> */}
          {data && data?.length === 0 && (
            <HeroTextWrapper>
              <HeroTitleLeft>Wyszukaj</HeroTitleLeft>

              <TopLine variant={variant}>Wpisz frazę wyszukiwania</TopLine>
            </HeroTextWrapper>
          )}
          {data && data?.length > 0 && (
            <HeroTextWrapper>
              {/* <HeroTitleLeft>Przykładowe wyniki &#x2192;</HeroTitleLeft> */}

              <TopLine variant={variant}>
                Po kliknięciu przejdziesz do widoku wybranego dokumentu.
              </TopLine>
            </HeroTextWrapper>
          )}
          {data && data?.length > 0 && (
            <HeroTextWrapper>
              <HeroTitleLeft>Zapisywanie</HeroTitleLeft>

              <TopLine variant={variant}>
                Przeglądając wybrany dokument zaznacz tekst i zapisz fragment.
              </TopLine>
            </HeroTextWrapper>
          )}
        </HeroTwoContainer>
      </HeroWrapperRow>
    </AnimateSharedLayout>
  )
}
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
    </AnimateSharedLayout>
  )
}
export { HeroTwoMain, HeroTwoSecond }
