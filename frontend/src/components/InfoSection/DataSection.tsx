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

// interface InfoData {
//   topline: string
//   headline: string
//   subtitle: string
//   buttonLabel?: string
//   fragmentsFound: string[]
// }

interface DataSectionProps {
  // data: InfoData
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
                <TopLine variant={variant}>Lorem ipsum dolor sit amet.</TopLine>
                <TopLine variant={variant}>
                  Forma: interpretacja indywidualna Data wydania: 3 stycznia
                  2018 r.
                </TopLine>
                <TopLine variant={variant}>Numer Dokumentu: 876219851</TopLine>
                <Subtitle variant={variant}>{headline}</Subtitle>
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
                <TopLine variant={variant}>{topline}</TopLine>

                <Subtitle variant={variant}>{children}</Subtitle>

                {fragmentsFound.map((fragment) => (
                  <Subtitle key={fragment} variant={variant}>
                    {parse(fragment)}
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
