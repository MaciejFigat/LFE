import React from 'react'
import {
  HeroSec,
  HeroTitle,
  HeroStory,
  HeroTextContainer,
} from './HeroSection.styled'
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
import { stepsBackgroundThree } from './HeroSectionSVGS/stepsBackground'

import { titleThreeSvg } from './HeroSectionSVGS/Title'

interface HeroThreeProps {}

const HeroThree: React.FC<HeroThreeProps> = () => {
  const variant = 'primary'
  return (
    <HeroSec>
      <HeroTextContainer>
        <HeroTitle>{titleThreeSvg}</HeroTitle>
        <HeroStory>
          <InfoSec variant={variant} paddingTop='large'>
            <Container>
              <InfoRow imgStart>
                <InfoColumnShort imgStart>
                  <TextWrapper>
                    {' '}
                    <TopLine variant={variant}></TopLine>
                    <Subtitle variant={variant}> </Subtitle>
                  </TextWrapper>
                </InfoColumnShort>
                <InfoColumn>
                  <TextWrapper>
                    {' '}
                    <TopLine variant={variant}>
                      Jak wyeksportować projekt?
                    </TopLine>
                    <Subtitle variant={variant}></Subtitle>
                  </TextWrapper>
                </InfoColumn>
              </InfoRow>
            </Container>
          </InfoSec>
        </HeroStory>
      </HeroTextContainer>
      {stepsBackgroundThree}
    </HeroSec>
  )
}
export default HeroThree
