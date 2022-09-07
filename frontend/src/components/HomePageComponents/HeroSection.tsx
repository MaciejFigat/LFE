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
          <HeroP>
            {/* 𝐏𝐫𝐞𝐜𝐲𝐳𝐲𝐣𝐧𝐞 𝐰𝐲𝐬𝐳𝐮𝐤𝐢𝐰𝐚𝐧𝐢𝐞 */}
            Precyzyjne wyszukiwanie
            {/* <h5>Precyzyjne wyszukiwanie</h5> */}
          </HeroP>
          {/* <HeroP>{subtitleOne}</HeroP> */}
          <HeroP>Zapisywanie fragmentów</HeroP>
          {/* <HeroP>𝐙𝐚𝐩𝐢𝐬𝐲𝐰𝐚𝐧𝐢𝐞 𝐟𝐫𝐚𝐠𝐦𝐞𝐧𝐭ó𝐰</HeroP> */}
          {/* <HeroP>{subtitleTwo}</HeroP> */}
          {/* <HeroP>{subtitleTwo}</HeroP> */}
          <HeroP>Eksport projektów</HeroP>
          {/* <HeroP>{subtitleThree}</HeroP> */}
          {/* <HeroP>{subtitleThree}</HeroP> */}
        </HeroStory>
      </HeroTextContainer>
      {stepsBackground}
    </HeroSec>
  )
}
export default HeroSection
