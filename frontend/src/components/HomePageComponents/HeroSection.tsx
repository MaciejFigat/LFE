import React from 'react'
import { HeroSec, HeroTextContainer } from './HeroSection.styled'

import HomeChoiceWrapper from './HomeChoiceWrapper/HomeChoiceWrapper'

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <HeroSec>
      <HeroTextContainer>
        <HomeChoiceWrapper />
      </HeroTextContainer>
      {/* {stepsBackground} */}
    </HeroSec>
  )
}
export default HeroSection
