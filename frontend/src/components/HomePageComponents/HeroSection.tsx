import React from 'react'
import {
  HeroSec,
  HeroTitle,
  HeroStory,
  HeroTextContainer,
  HeroP,
} from './HeroSection.styled'
import { stepsBackground } from './HeroSectionSVGS/stepsBackground'
import { titleSvg } from './HeroSectionSVGS/Title'

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <HeroSec>
      <HeroTextContainer>
        <HeroTitle>{titleSvg}</HeroTitle>
        <HeroStory>
          <HeroP>Precyzyjne wyszukiwanie</HeroP>
          <HeroP>Zapisywanie fragmentów</HeroP>
          <HeroP>Eksport projektów</HeroP>
        </HeroStory>
      </HeroTextContainer>
      {stepsBackground}
    </HeroSec>
  )
}
export default HeroSection
