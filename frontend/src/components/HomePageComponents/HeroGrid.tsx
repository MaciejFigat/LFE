import React, { ReactChild } from 'react'
import { NavLink } from 'react-router-dom'
import { HorizontalWrapperSpace } from '../../styles/misc.styled'
import {
  ButtonMedium,
  ButtonSmall,
} from '../Miscellaneous/Buttons/BigButton.styled'
import SvgIcon from '../Miscellaneous/SvgIcon/SvgIcon'
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
  HeroWrapperRow,
} from './HeroSection.styled'
import { titleSvgSmall } from './HeroSectionSVGS/Title'

interface HeroGridProps {
  //   children: ReactChild
}

const HeroGrid: React.FC<HeroGridProps> = ({}) => {
  return (
    <HeroGridWrapper>
      <HeroNavigation>
        <HeroNavOne>{titleSvgSmall}</HeroNavOne>
        <HeroNavOne>
          {' '}
          <HeroWrapperRow>
            <h3>Nie masz jeszcze konta?</h3>

            <ButtonMedium variant='primary'>
              <NavLink to='/register'>
                <HorizontalWrapperSpace>
                  Zarejestruj się &nbsp;
                  <SvgIcon
                    variant='chevronRight'
                    noContent
                    lowerPosition='3px'
                  />
                </HorizontalWrapperSpace>
              </NavLink>
            </ButtonMedium>
          </HeroWrapperRow>
        </HeroNavOne>
        <HeroNavTwo>
          {' '}
          <ButtonSmall variant='primary'>
            <NavLink to='/register'>
              <HorizontalWrapperSpace>
                Zarejestruj się &nbsp;
                <SvgIcon variant='chevronRight' noContent lowerPosition='3px' />
              </HorizontalWrapperSpace>
            </NavLink>
          </ButtonSmall>{' '}
        </HeroNavTwo>
        <HeroNavTwo>Links 1</HeroNavTwo>
      </HeroNavigation>

      <HeroMainContainer>
        <HeroMainArticle>
          <HeroArticleBigSection>BigTop</HeroArticleBigSection>
          <HeroArticleSmallSection>SmallTop</HeroArticleSmallSection>
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
