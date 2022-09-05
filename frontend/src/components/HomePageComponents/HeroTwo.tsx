import React from 'react'
import {
  HeroSec,
  HeroTitle,
  HeroStory,
  HeroTextContainer,
  HeroP,
} from './HeroSection.styled'
import { stepsBackgroundTwo } from './HeroSectionSVGS/stepsBackground'
import { subtitleOne } from './HeroSectionSVGS/SubtitleOne'
import { subtitleThree } from './HeroSectionSVGS/SubtitleThree'
import { subtitleTwo } from './HeroSectionSVGS/SubtitleTwo'
import { titleTwoSvg } from './HeroSectionSVGS/Title'

interface HeroTwoProps {}

const HeroTwo: React.FC<HeroTwoProps> = () => {
  return (
    <HeroSec>
      <HeroTextContainer>
        <HeroTitle>{titleTwoSvg}</HeroTitle>
        <HeroStory>
          <HeroP>{subtitleOne}</HeroP>
          <HeroP>{subtitleTwo}</HeroP>
          <HeroP>{subtitleThree}</HeroP>
        </HeroStory>
      </HeroTextContainer>
      {stepsBackgroundTwo}
    </HeroSec>
  )
}
export default HeroTwo
