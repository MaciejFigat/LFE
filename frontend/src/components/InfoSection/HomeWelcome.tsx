import React from 'react'
import { getSearchResultsTwo } from '../../features/searchResults/searchResultsSlice'
import { useAppDispatch } from '../../app/reduxHooks'
import {
  InfoSec,
  Container,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  //   Heading,
  Subtitle,
  // Button,
  // ButtonLink,
  InfoColumnShort,
  CenterWrapper,
} from './InfoSection.styled'
interface HomeWelcomeProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'blue'
    | 'bluegreen'
    | 'transparent'
}

const HomeWelcome: React.FC<HomeWelcomeProps> = ({ variant }) => {
  const dispatch = useAppDispatch()
  return (
    <>
      <CenterWrapper>
        <InfoSec variant={variant} paddingTop='large'>
          <Container>
            <button onClick={() => dispatch(getSearchResultsTwo())}>
              TEST
            </button>
            <InfoRow imgStart={false}>
              <InfoColumnShort>
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
                    Krótki przewodnik po wyszukiwaniu:
                  </TopLine>
                  <Subtitle variant={variant}>
                    Nasz system choć wykorzystuje AI daje pierwszeństwo wynikom,
                    które najbardziej pokrywają się ze słowami kluczowymi.
                    Natomiast każde wyszukiwanie jest w pewien sposób
                    uogólniane, by w przypadku słabych wyników na słowach
                    kluczowych pokazać te, które są jak najbardziej zbliżone do
                    rządanej frazy. W obecnej chwili wyszukiwarka daje dostęp do
                    100 najtrafniejszych odpowiedzi.
                  </Subtitle>
                  <Subtitle variant={variant}>
                    W bazie dokumentów znajdują się aktualne interpretacje
                    podatkowe. Interpretacje nieaktualne są z niej usuwane.
                    Źródłem danych dla naszej bazy jest{' '}
                    <a href='https://sip.mf.gov.pl'>SIP</a>. Dokładamy wszelkich
                    starań, aby baza była jak najbardziej aktualna. Ministertwo,
                    często udostępnia aktualizacje po paru dniach.
                  </Subtitle>
                  <Subtitle variant={variant}>
                    Nasz system jest eksperymentalny i będący w fazie rozwoju.
                    Dla każdego wyniku prezentowana jest istota interpretacji i
                    maksymalnie 4 fragmenty tekstu, które najbardziej
                    odpowiadają na szukaną frazę. W najbliższym czasie planujemy
                    też dodanie do bazy danych archiwalnych interepretacji
                    podatkowych.
                  </Subtitle>
                </TextWrapper>
              </InfoColumn>
            </InfoRow>
          </Container>
        </InfoSec>
      </CenterWrapper>
    </>
  )
}
export default HomeWelcome
