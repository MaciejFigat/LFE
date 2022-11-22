import React from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import { HeroTitleLeft, HeroTwoContainer } from './HeroSection.styled'
import {
  HeroTextWrapper,
  HeroWrapperColumn,
  HeroWrapperRow,
  TopLine,
} from './HomeSection.styled'

// import FragmentsColumn from '../FragmentsColumn/FragmentsColumn'
import { AnimateSharedLayout } from 'framer-motion'

import DataSectionSimple from '../Miscellaneous/InfoSection/DataSectionSimple'
import { TwoColumnsWrapper } from '../../styles/misc.styled'

interface HeroTwoProps {}

const HeroTwo: React.FC<HeroTwoProps> = () => {
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )
  const { data, query } = searchResults
  const queryTrimmed = encodeURIComponent(query?.trim())
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
              <HeroTitleLeft>Przykładowe wyniki &#x2192;</HeroTitleLeft>

              <TopLine variant={variant}>
                Po kliknięciu przejdziesz do widoku wybranego dokumentu.
              </TopLine>
              <TopLine variant={variant}>
                W tym widoku możesz, zaznaczając tekst, wybrać opcję Kopiuj lub
                Zapisz.
              </TopLine>
            </HeroTextWrapper>
          )}
        </HeroTwoContainer>
        <HeroWrapperColumn>
          {/* <HeroTitleLeft>Wybierz dokument</HeroTitleLeft> */}
          <TwoColumnsWrapper>
            {data
              .slice(0, 4)

              .map((fragmentArray: any) => (
                <DataSectionSimple
                  variant='secondary'
                  key={fragmentArray['uuid']}
                  paddingTop='small'
                  imgStart
                  fragmentsFound={fragmentArray.fragment}
                  metryka={fragmentArray.metryka}
                  istota_interpretacji={fragmentArray.istota_interpretacji}
                  query={queryTrimmed}
                />
              ))}
          </TwoColumnsWrapper>
        </HeroWrapperColumn>
      </HeroWrapperRow>
    </AnimateSharedLayout>
  )
}
export default HeroTwo
