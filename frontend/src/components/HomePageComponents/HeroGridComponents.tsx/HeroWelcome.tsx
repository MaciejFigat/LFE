import React from 'react'
import { NavLink } from 'react-router-dom'
import { HorizontalWrapperSpace } from '../../../styles/misc.styled'
import { ButtonMedium } from '../../Miscellaneous/Buttons/BigButton.styled'
import SvgIcon from '../../Miscellaneous/SvgIcon/SvgIcon'
import {
  HeroTitle,
  HeroWrapperColumns,
  HeroWrapperRow,
} from '../HeroSection.styled'
import { titleSvg } from '../HeroSectionSVGS/Title'
import { ChoiceTitleContainer } from '../HomeChoiceWrapper/HomeChoiceWrapper.styled'

interface HeroWelcomeProps {}

const HeroWelcome: React.FC<HeroWelcomeProps> = () => {
  return (
    <>
      {' '}
      <ChoiceTitleContainer>
        <HeroWrapperColumns>
          <HeroTitle>{titleSvg}</HeroTitle>
        </HeroWrapperColumns>
        {/* {Object.keys(userInfo).length === 0 && ( */}
        <HeroWrapperRow>
          <h3>Nie masz jeszcze konta?</h3>

          <ButtonMedium variant='primary'>
            <NavLink to='/register'>
              <HorizontalWrapperSpace>
                Zarejestruj się &nbsp;
                <SvgIcon variant='chevronRight' noContent lowerPosition='3px' />
              </HorizontalWrapperSpace>
            </NavLink>
          </ButtonMedium>
        </HeroWrapperRow>
        {/* )} */}
      </ChoiceTitleContainer>
    </>
  )
}
export default HeroWelcome
