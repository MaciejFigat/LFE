import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import {
  InfoSec,
  Container,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Button,
  ButtonLink,
  ImgWrapper,
  Img,
} from './InfoSection.styled'
interface InfoData {
  topline: string
  headline: string
  subtitle: string
  buttonLabel?: string
  img?: any
}

interface InfoSectionProps {
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

const InfoSection: React.FC<InfoSectionProps> = ({
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
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine variant={variant}>{data.topline}</TopLine>
                <Heading variant={variant}>{data.headline}</Heading>
                <Subtitle variant={variant}>{data.subtitle}</Subtitle>
                {data.buttonLabel && (
                  <Button large fontLarge variant={variant}>
                    {buttonNavLink && (
                      <NavLink to={buttonNavLink}>{data.buttonLabel}</NavLink>
                    )}
                    {buttonLink && (
                      <ButtonLink
                        variant={variant}
                        href={buttonLink}
                        target='_blank'
                      >
                        {data.buttonLabel}
                      </ButtonLink>
                    )}
                  </Button>
                )}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              {children ? (
                children
              ) : (
                <ImgWrapper imgStart>
                  <Img src={data.img}></Img>
                </ImgWrapper>
              )}
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}
export default InfoSection
