import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../../app/reduxHooks'
import { UserInfo } from '../../../interfaces'
import { HorizontalWrapperSpace } from '../../../styles/misc.styled'
import { ButtonMedium } from '../../../components/Miscellaneous/Buttons/BigButton.styled'
import SvgIcon from '../../../components/Miscellaneous/SvgIcon/SvgIcon'
import {
  HeroTitle,
  HeroWrapperColumns,
  HeroWrapperRow
} from '../HeroSection.styled'
import { titleSvg } from '../HeroSectionSVGS/Title'
import { ChoiceTitleContainer } from '../HomeChoiceWrapper/HomeChoiceWrapper.styled'

interface HeroWelcomeProps {}

const HeroWelcome: React.FC<HeroWelcomeProps> = () => {
  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)
  return (
    <>
      {' '}
      <ChoiceTitleContainer>
        <HeroWrapperColumns>
          <HeroTitle>{titleSvg}</HeroTitle>
        </HeroWrapperColumns>
        {/* {Object.keys(userInfo).length === 0 && ( */}
        {Object.keys(userInfo).length > 0 &&
        userInfo.status === 'Active' ? null : (
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
        )}
      </ChoiceTitleContainer>
    </>
  )
}
export default HeroWelcome
