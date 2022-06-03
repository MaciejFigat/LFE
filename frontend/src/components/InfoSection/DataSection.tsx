import React, { ReactNode } from 'react'
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
} from './InfoSection.styled'
interface InfoData {
  topline: string
  headline: string
  subtitle: string
  buttonLabel?: string
  img?: any
  fragmentsFound: string[]
}

interface DataSectionProps {
  data: InfoData
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'blue'
    | 'bluegreen'
    | 'transparent'
  imgStart?: boolean
  children?: ReactNode
  buttonLink?: string
  buttonNavLink?: string
  paddingTop?: 'large' | 'small' | undefined
}

const DataSection: React.FC<DataSectionProps> = ({
  data,
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
          <InfoRow imgStart>
            <InfoColumn>
              <TextWrapper>
                <TopLine variant={variant}>Lorem ipsum dolor sit amet.</TopLine>
                <TopLine variant={variant}>
                  Forma: interpretacja indywidualna Data wydania: 3 stycznia
                  2018 r.
                </TopLine>
                <TopLine variant={variant}>Numer Dokumentu: 876219851</TopLine>
                <Subtitle variant={variant}>{data.headline}</Subtitle>
                <Subtitle variant={variant}>
                  0114-KDIP3-1.4011.461.2017.1.AM
                </Subtitle>
                <Subtitle variant={variant}> Wynik przydatny?</Subtitle>
                {/* <Button variant={variant}> */}
                <Button variant='blue'>
                  <ButtonLink
                    // variant={variant}
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
            </InfoColumn>
            <InfoColumn>
              <TextWrapper>
                <TopLine variant={variant}>{data.topline}</TopLine>
                <Subtitle variant={variant}>{data.headline}</Subtitle>

                <TopLine variant={variant}>ZNALEZIONE FRAGMENTY</TopLine>
                {data.fragmentsFound.map((fragment) => (
                  <Subtitle key={fragment} variant={variant}>
                    {fragment}
                  </Subtitle>
                ))}

                <Subtitle variant={variant}>{data.subtitle}</Subtitle>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}
export default DataSection
