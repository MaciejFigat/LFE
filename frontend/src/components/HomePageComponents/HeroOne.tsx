import React from 'react'
import {
  HeroTextContainer,
  HeroSecNoSvg,
  HeroTitleCenter,
} from './HeroSection.styled'

import { titleOneSvg } from './HeroSectionSVGS/Title'
import {
  InfoColumn,
  InfoColumnShort,
  InfoRow,
  Subtitle,
  TextWrapper,
  TopLine,
} from './HomeSection.styled'

interface HeroOneProps {}

const HeroOne: React.FC<HeroOneProps> = () => {
  const variant = 'secondary'
  return (
    <HeroSecNoSvg>
      <HeroTextContainer>
        <HeroTitleCenter>{titleOneSvg}</HeroTitleCenter>
        {/* <HeroTextWrapper> */}
        <InfoRow imgStart border>
          <InfoColumnShort imgStart>
            <TextWrapper>
              {' '}
              <TopLine variant={variant}>Turbo Lex</TopLine>
              <Subtitle variant={variant}> adam@turbo-lex.pl </Subtitle>
            </TextWrapper>
          </InfoColumnShort>
          <InfoColumn>
            <TextWrapper>
              {' '}
              <TopLine variant={variant}>
                Jak uzyskujemy precyzję wyszukiwania?
              </TopLine>
              <p>
                {' '}
                Nasz system wykorzystuje algorytmy AI. Daje on pierwszeństwo
                wynikom, które najbardziej pokrywają się ze słowami kluczowymi.
                Każde wyszukiwanie jest uogólniane, by w przypadku
                niewystarczającej liczby wyników na słowach kluczowych pokazać
                te, które są jak najbardziej zbliżone do rządanej frazy. W
                obecnej chwili wyszukiwarka daje dostęp do 100 najtrafniejszych
                odpowiedzi.
              </p>
              <Subtitle variant={variant}></Subtitle>
              <p>
                {' '}
                W bazie dokumentów znajdują się aktualne interpretacje
                podatkowe. Interpretacje nieaktualne są z niej usuwane. Źródłem
                danych dla naszej bazy jest{' '}
                <a href='https://sip.mf.gov.pl'>SIP</a>. Dokładamy wszelkich
                starań, aby baza była jak najbardziej aktualna. Ministertwo,
                często udostępnia aktualizacje po paru dniach.
              </p>
              <Subtitle variant={variant}></Subtitle>
              {/* <Subtitle variant={variant}>
                      Nasz system jest eksperymentalny i będący w fazie rozwoju.
                      Dla każdego wyniku prezentowana jest istota interpretacji
                      i maksymalnie 4 fragmenty tekstu, które najbardziej
                      odpowiadają na szukaną frazę. W najbliższym czasie
                      planujemy też dodanie do bazy danych archiwalnych
                      interepretacji podatkowych.
                    </Subtitle> */}
            </TextWrapper>
          </InfoColumn>
        </InfoRow>
        {/* </HeroTextWrapper> */}
      </HeroTextContainer>
      {/* {stepsBackgroundOne} */}
    </HeroSecNoSvg>
  )
}
export default HeroOne
