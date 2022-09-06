import React from 'react'
import {
  HeroSec,
  HeroTitle,
  HeroStory,
  HeroTextContainer,
} from './HeroSection.styled'
import { stepsBackgroundOne } from './HeroSectionSVGS/stepsBackground'

import { titleOneSvg } from './HeroSectionSVGS/Title'
import {
  Container,
  InfoColumn,
  InfoColumnShort,
  InfoRow,
  InfoSec,
  Subtitle,
  TextWrapper,
  TopLine,
} from './HomeSection.styled'

interface HeroOneProps {}

const HeroOne: React.FC<HeroOneProps> = () => {
  const variant = 'secondary'
  return (
    <HeroSec>
      <HeroTextContainer>
        <HeroTitle>{titleOneSvg}</HeroTitle>
        <HeroStory>
          <InfoSec variant={variant} paddingTop='large'>
            <Container>
              <InfoRow imgStart>
                <InfoColumnShort imgStart>
                  <TextWrapper>
                    {' '}
                    <TopLine variant={variant}>Turbo Lex</TopLine>
                    <Subtitle variant={variant}>
                      {' '}
                      Kontakt: adam@turbo-lex.pl{' '}
                    </Subtitle>
                  </TextWrapper>
                </InfoColumnShort>
                <InfoColumn>
                  <TextWrapper>
                    {' '}
                    <TopLine variant={variant}>
                      Jak uzyskujemy precyzję wyszukiwania?
                    </TopLine>
                    <Subtitle variant={variant}>
                      Nasz system wykorzystuje algorytmy AI. Daje on
                      pierwszeństwo wynikom, które najbardziej pokrywają się ze
                      słowami kluczowymi. Każde wyszukiwanie jest uogólniane, by
                      w przypadku niewystarczającej liczby wyników na słowach
                      kluczowych pokazać te, które są jak najbardziej zbliżone
                      do rządanej frazy. W obecnej chwili wyszukiwarka daje
                      dostęp do 100 najtrafniejszych odpowiedzi.
                    </Subtitle>
                    <Subtitle variant={variant}>
                      W bazie dokumentów znajdują się aktualne interpretacje
                      podatkowe. Interpretacje nieaktualne są z niej usuwane.
                      Źródłem danych dla naszej bazy jest{' '}
                      <a href='https://sip.mf.gov.pl'>SIP</a>. Dokładamy
                      wszelkich starań, aby baza była jak najbardziej aktualna.
                      Ministertwo, często udostępnia aktualizacje po paru
                      dniach.
                    </Subtitle>
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
            </Container>
          </InfoSec>
          {/* <HeroP>{subtitleOne}</HeroP>
          <HeroP>{subtitleTwo}</HeroP>
          <HeroP>{subtitleThree}</HeroP> */}
        </HeroStory>
      </HeroTextContainer>
      {stepsBackgroundOne}
    </HeroSec>
  )
}
export default HeroOne
