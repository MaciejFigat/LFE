import React from 'react'
import HeroWelcome from './HeroGridComponents.tsx/HeroWelcome'
import HomeSearchBarOnly from './HeroGridComponents.tsx/HomeSearchBarOnly'
import HomeSearchSample from './HeroGridComponents.tsx/HomeSearchSample'
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

interface HeroGridProps {
  //   children: ReactChild
}

const HeroGrid: React.FC<HeroGridProps> = () => {
  return (
    <HeroGridWrapper>
      <HeroNavigation>
        {/* <HeroNavOne>{titleSvgSmall}</HeroNavOne> */}
        <HeroNavOne>
          <HomeSearchSample />
        </HeroNavOne>
        <HeroNavOne>
          {' '}
          <HomeSearchBarOnly />
        </HeroNavOne>
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
