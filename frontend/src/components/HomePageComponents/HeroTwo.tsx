import React from 'react'
import {
  HeroSec,
  HeroTitle,
  HeroStory,
  HeroTextContainer,
  HeroP,
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
import { stepsBackgroundTwo } from './HeroSectionSVGS/stepsBackground'

import { titleTwoSvg } from './HeroSectionSVGS/Title'
import HighlightPopMenuDemo from '../HighlightPopRemake/HighlightPopMenuDemo'

interface HeroTwoProps {}

const HeroTwo: React.FC<HeroTwoProps> = () => {
  const variant = 'primary'
  return (
    <HeroSec>
      <HeroTextContainer>
        <HeroTitle>{titleTwoSvg}</HeroTitle>
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
                    <HighlightPopMenuDemo>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae dolorem veniam nulla illo, inventore tenetur
                      magnam qui obcaecati dolores eius?
                    </HighlightPopMenuDemo>
                    <TopLine variant={variant}>Zapisywanie fragmentów</TopLine>
                    <Subtitle variant={variant}>
                      <HighlightPopMenuDemo>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Incidunt explicabo enim, optio facere magni quae
                        blanditiis sequi corporis reiciendis itaque.
                      </HighlightPopMenuDemo>
                    </Subtitle>
                  </TextWrapper>
                </InfoColumn>
              </InfoRow>
            </Container>
          </InfoSec>
        </HeroStory>
      </HeroTextContainer>
      {/* <HighlightPopMenuDemo>
        <HeroP>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          deleniti ea inventore reiciendis ullam incidunt. Quisquam, voluptatem
          voluptatum! Veniam illum, sed ea quibusdam minima magnam maxime saepe
          nulla corporis aut earum nam error quod quam ex? Odit obcaecati odio
          esse amet voluptate assumenda maxime? Atque alias totam, iusto
          asperiores et placeat similique adipisci blanditiis consequuntur minus
          nesciunt tempora iure quisquam facere rem libero quaerat minima est
          ullam dolorem odio molestias cupiditate! Officiis saepe, optio aperiam
          commodi mollitia est accusantium culpa expedita dicta explicabo
          deleniti facilis recusandae quis maxime porro vitae! Similique modi
          ullam quisquam temporibus. Dignissimos nesciunt nisi aspernatur
          inventore?
        </HeroP>
      </HighlightPopMenuDemo> */}
      {stepsBackgroundTwo}
    </HeroSec>
  )
}
export default HeroTwo
