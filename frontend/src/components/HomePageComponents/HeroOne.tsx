import React from 'react'
import SvgIcon from '../Miscellaneous/SvgIcon/SvgIcon'
import {
  HeroTextContainer,
  HeroSecNoSvg,
  HeroTitleLeft,
} from './HeroSection.styled'
import { titleOneSvg } from './HeroSectionSVGS/Title'

import {
  InfoColumn,
  InfoColumnShort,
  InfoRow,
  TextWrapper,
  TextWrapperParSimple,
  TopLine,
} from './HomeSection.styled'

interface HeroOneProps {}

const HeroOne: React.FC<HeroOneProps> = () => {
  const variant = 'secondary'
  return (
    <HeroSecNoSvg>
      <HeroTextContainer>
        <InfoRow imgStart border>
          {/* <InfoRow imgStart> */}
          <InfoColumnShort imgStart>
            <TextWrapper>
              {' '}
              <TextWrapperParSimple>
                Zaawansowane wyszukiwanie - panel obok paska wyszukiwania
                <SvgIcon variant='moreOptions' noMargin noContent />
              </TextWrapperParSimple>
            </TextWrapper>
          </InfoColumnShort>
          <InfoColumn>
            {' '}
            <TextWrapper>
              <HeroTitleLeft>{titleOneSvg}</HeroTitleLeft>{' '}
              {/* <HeroTitleLeft>
                {' '}
                Jak uzyskujemy precyzję wyszukiwania?
              </HeroTitleLeft>{' '} */}
              {/* <TopLine variant={variant}>
              
              </TopLine> */}
              <TopLine variant={variant}>
                {' '}
                Nasz system wykorzystuje algorytmy AI. Daje on pierwszeństwo
                wynikom, które najbardziej pokrywają się ze słowami kluczowymi.
                Każde wyszukiwanie jest uogólniane, by w przypadku
                niewystarczającej liczby wyników na słowach kluczowych pokazać
                te, które są jak najbardziej zbliżone do rządanej frazy. W
                obecnej chwili wyszukiwarka daje dostęp do 100 najtrafniejszych
                odpowiedzi.
              </TopLine>
              <TopLine variant={variant}>
                {' '}
                W bazie dokumentów znajdują się aktualne interpretacje
                podatkowe. Interpretacje nieaktualne są z niej usuwane. Źródłem
                danych dla naszej bazy jest
                <a href='https://sip.mf.gov.pl'>SIP</a>
              </TopLine>
            </TextWrapper>
          </InfoColumn>
        </InfoRow>
      </HeroTextContainer>
    </HeroSecNoSvg>
  )
}
export default HeroOne
