import React from 'react'
import {
  HeroSec,
  HeroTitle,
  HeroStory,
  HeroTextContainer,
  HeroP,
} from './HeroSection.styled'
import { stepsBackground } from './HeroSectionSVGS/stepsBackground'
import { subtitleOne } from './HeroSectionSVGS/SubtitleOne'
import { subtitleThree } from './HeroSectionSVGS/SubtitleThree'
import { subtitleTwo } from './HeroSectionSVGS/SubtitleTwo'
import { titleSvg } from './HeroSectionSVGS/Title'

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <HeroSec>
      <HeroTextContainer>
        <HeroTitle>{titleSvg}</HeroTitle>
        <HeroStory>
          <HeroP>{subtitleOne}</HeroP>
          <HeroP>{subtitleTwo}</HeroP>
          <HeroP>{subtitleThree}</HeroP>
        </HeroStory>
      </HeroTextContainer>
      {stepsBackground}
    </HeroSec>
  )
}
export default HeroSection
