import React from 'react'
import HeroWelcome from './HeroGridComponents/HeroWelcome'
import HomeSearchSample from './HeroGridComponents/HomeSearchSample'
import {
  HeroArticleBigSection,
  HeroArticleBottomBigSection,
  HeroArticleBottomSmallSection,
  HeroArticleSmallSection,
  HeroGridWrapper,
  HeroMainArticle,
  HeroMainContainer,
  HeroNavigation,
  HeroNavOne,
  HeroNavTwo,
} from './HeroSection.styled'

interface HeroGridProps {}

const HeroGrid: React.FC<HeroGridProps> = () => {
  return (
    <HeroGridWrapper>
      <HeroNavigation>
        <HeroNavOne>
          <HomeSearchSample />
        </HeroNavOne>
        <HeroNavOne> </HeroNavOne>
        <HeroNavTwo> </HeroNavTwo>
        <HeroNavTwo> </HeroNavTwo>
      </HeroNavigation>

      <HeroMainContainer>
        <HeroMainArticle>
          <HeroArticleBigSection>
            <HeroWelcome />
          </HeroArticleBigSection>
          <HeroArticleSmallSection>222</HeroArticleSmallSection>
          <HeroArticleBottomBigSection> </HeroArticleBottomBigSection>
          <HeroArticleBottomSmallSection></HeroArticleBottomSmallSection>
        </HeroMainArticle>
        <HeroMainArticle></HeroMainArticle>
        <HeroMainArticle></HeroMainArticle>
      </HeroMainContainer>
    </HeroGridWrapper>
  )
}
export default HeroGrid
