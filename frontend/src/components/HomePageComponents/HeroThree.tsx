import React from 'react'
import {
  HeroSec,
  HeroTitle,
  HeroStory,
  HeroTextContainer,
  HeroP,
} from './HeroSection.styled'
import { stepsBackgroundThree } from './HeroSectionSVGS/stepsBackground'
import { subtitleOne } from './HeroSectionSVGS/SubtitleOne'
import { subtitleThree } from './HeroSectionSVGS/SubtitleThree'
import { subtitleTwo } from './HeroSectionSVGS/SubtitleTwo'
import { titleThreeSvg } from './HeroSectionSVGS/Title'

interface HeroThreeProps {}

const HeroThree: React.FC<HeroThreeProps> = () => {
  return (
    <HeroSec>
      <HeroTextContainer>
        <HeroTitle>{titleThreeSvg}</HeroTitle>
        <HeroStory>
          <HeroP>{subtitleOne}</HeroP>
          <HeroP>{subtitleTwo}</HeroP>
          <HeroP>{subtitleThree}</HeroP>
        </HeroStory>
      </HeroTextContainer>
      {stepsBackgroundThree}
    </HeroSec>
  )
}
export default HeroThree
