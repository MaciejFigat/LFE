import React from 'react'

import { HeroTitleLeft, HeroTwoContainer } from './HeroSection.styled'
import { useAppSelector } from '../../app/reduxHooks'

import {
  HeroTextWrapper,
  HeroWrapperColumn,
  HeroWrapperRow,
  TopLine,
} from './HomeSection.styled'
import CitationDisplay from './CitationDisplay'

interface HeroThreeProps {}

const HeroThree: React.FC<HeroThreeProps> = () => {
  const citations: any = useAppSelector((state) => state.fragment.citations)

  const variant = 'secondary'
  return (
    <HeroWrapperRow>
      <HeroTwoContainer>
        {citations && citations?.length <= 1 && (
          <HeroTextWrapper>
            <HeroTitleLeft>Stwórz nowe fragmenty</HeroTitleLeft>

            <TopLine variant={variant}>
              Zapisz fragmenty tekstu w dokumencie
            </TopLine>
          </HeroTextWrapper>
        )}

        <HeroTextWrapper>
          <HeroTitleLeft>Zapisane fragmenty</HeroTitleLeft>

          <TopLine variant={variant}>
            Podstawowe funkcjonalności dla niezalogowanych użytkowników.
          </TopLine>
        </HeroTextWrapper>

        {citations && citations?.length > 1 && (
          <HeroTextWrapper>
            <HeroTitleLeft>Eksportuj fragmenty </HeroTitleLeft>

            <TopLine variant={variant}>Eksport do txt Eksport do pdf</TopLine>
          </HeroTextWrapper>
        )}
      </HeroTwoContainer>
      <HeroWrapperColumn>
        <CitationDisplay />
      </HeroWrapperColumn>
    </HeroWrapperRow>
  )
}
export default HeroThree
