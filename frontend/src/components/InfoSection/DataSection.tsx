import React, { ReactFragment } from 'react'
import SvgIcon from '../SvgIcon/SvgIcon'
import { useAppDispatch } from '../../app/reduxHooks'
import { useNavigate } from 'react-router-dom'
import { getDocResult } from '../../features/searchResults/searchResultsSlice'
import {
  InfoSec,
  Container,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  //   Heading,
  Subtitle,
  Button,
  ButtonLink,
  InfoColumnShort,
  CenterWrapper,
} from './InfoSection.styled'
import parse from 'html-react-parser'
//! problem solved with parse - html-react-parser - prarses string to html in React

interface InfoData {
  doc_id: number
  doc_link: string
  syg: string
  organ: string
  rodzaj_orzeczenia: string
  data: string
  numer_dokumentu: string
  uuid: string
}

interface DataSectionProps {
  metryka: InfoData
  query: string
  topline?: string
  headline?: string
  subtitle?: string
  fragmentsFound: string[]
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'blue'
    | 'bluegreen'
    | 'transparent'
  imgStart?: boolean
  children?: ReactFragment
  buttonLink?: string
  buttonNavLink?: string
  paddingTop?: 'large' | 'small' | undefined
}

const DataSection: React.FC<DataSectionProps> = ({
  metryka,
  query,
  topline,
  headline,
  subtitle,
  fragmentsFound,
  variant,
  imgStart,
  children,
  buttonLink,
  buttonNavLink,
  paddingTop,
}) => {
  const dispatch = useAppDispatch()
  let navigate = useNavigate()

  const submitHandlerDocNr = (index: number) => {
    const searchquery = {
      query: query,
      selectedDoc: index,
      docNumber: metryka.doc_id,
    }
    dispatch(getDocResult(searchquery))
    navigate('/search/result')
  }

  return (
    <CenterWrapper>
      <InfoSec variant={variant} paddingTop={paddingTop}>
        <Container>
          {/* <InfoRow> */}
          <InfoRow imgStart={imgStart}>
            <InfoColumnShort>
              <TextWrapper>
                <TopLine variant={variant}>
                  Sygnatura:{' '}
                  <Subtitle variant={variant}>{metryka.syg}</Subtitle>
                </TopLine>
                <TopLine variant={variant}>
                  Forma:{' '}
                  <Subtitle variant={variant}>
                    {metryka.rodzaj_orzeczenia}
                  </Subtitle>
                </TopLine>
                <TopLine variant={variant}>
                  Numer Dokumentu:
                  <Subtitle variant={variant}>
                    {metryka.numer_dokumentu}
                  </Subtitle>
                </TopLine>
                <TopLine variant={variant}>
                  Organ wydający:{' '}
                  <Subtitle variant={variant}>{metryka.organ}</Subtitle>
                </TopLine>
                <Subtitle variant={variant}> Wynik przydatny?</Subtitle>
                <Button variant={variant}>
                  <ButtonLink
                    variant={variant}
                    href={buttonLink}
                    target='_blank'
                  >
                    Tak <SvgIcon variant='question' />
                  </ButtonLink>
                </Button>
                <Button variant={variant}>
                  <ButtonLink
                    variant={variant}
                    href={buttonLink}
                    target='_blank'
                  >
                    Nie <SvgIcon variant='question' />
                  </ButtonLink>
                </Button>{' '}
              </TextWrapper>
            </InfoColumnShort>
            <InfoColumn>
              <TextWrapper>
                {/* //? I filter fragments that start with ISTOTA INTERPRETACJI string. Since they are not 100% guaranteed they won't be always displayed, afterwards said string needs to be removed, here replaced with '' */}
                {fragmentsFound.length > 0 &&
                  fragmentsFound
                    .filter((fragmentsSorted) =>
                      fragmentsSorted.startsWith('ISTOTA INTERPRETACJI')
                    )
                    .map((fragment) => (
                      <div key={fragment}>
                        {' '}
                        <TopLine variant={variant}>
                          ISTOTA INTERPRETACJI:
                        </TopLine>
                        <Subtitle variant={variant}>
                          {parse(fragment.replace('ISTOTA INTERPRETACJI', ''))}
                        </Subtitle>
                      </div>
                    ))}

                <TopLine variant={variant}>ZNALEZIONE FRAGMENTY:</TopLine>
                {fragmentsFound.length > 0 &&
                  fragmentsFound
                    .filter(
                      (fragmentsSorted) =>
                        !fragmentsSorted.startsWith('ISTOTA INTERPRETACJI')
                    )
                    .map((fragment, index) => (
                      <Subtitle
                        variant={variant}
                        key={fragment}
                        onClick={() => submitHandlerDocNr(index)}
                      >
                        (...) {parse(fragment)} (...)
                      </Subtitle>
                    ))}
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </CenterWrapper>
  )
}
export default DataSection
