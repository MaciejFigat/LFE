import React, { ReactFragment } from 'react'
// import { NavLink } from 'react-router-dom'
import SvgIcon from '../SvgIcon/SvgIcon'
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
  topline: string
  headline: string
  subtitle: string
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
  return (
    <>
      <InfoSec variant={variant} paddingTop={paddingTop}>
        <Container>
          {/* <InfoRow imgStart={imgStart}> */}
          <InfoRow>
            <InfoColumnShort>
              <TextWrapper>
                <TopLine variant={variant}>Sygnatura: {metryka.syg}</TopLine>
                <TopLine variant={variant}>
                  Forma: {metryka.rodzaj_orzeczenia}
                </TopLine>
                <TopLine variant={variant}>
                  Numer Dokumentu: {metryka.numer_dokumentu}
                </TopLine>
                <Subtitle variant={variant}>
                  Organ wydający {metryka.organ}
                </Subtitle>
                <Subtitle variant={variant}>
                  0114-KDIP3-1.4011.461.2017.1.AM
                </Subtitle>
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
                {fragmentsFound.length > 0 &&
                  fragmentsFound
                    .filter((fragmentsSorted) =>
                      fragmentsSorted.startsWith('ISTOTA INTERPRETACJI')
                    )
                    .map((fragment) => (
                      <>
                        {' '}
                        <TopLine variant={variant}>
                          ISTOTA INTERPRETACJI:
                        </TopLine>
                        <Subtitle key={fragment} variant={variant}>
                          {parse(fragment.replace('ISTOTA INTERPRETACJI', ''))}
                        </Subtitle>
                      </>
                    ))}

                <TopLine variant={variant}>ZNALEZIONE FRAGMENTY:</TopLine>
                {fragmentsFound.length > 0 &&
                  fragmentsFound
                    .filter(
                      (fragmentsSorted) =>
                        !fragmentsSorted.startsWith('ISTOTA INTERPRETACJI')
                    )
                    .map((fragment) => (
                      <Subtitle key={fragment} variant={variant}>
                        (...) {parse(fragment)} (...)
                      </Subtitle>
                    ))}
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}
export default DataSection
