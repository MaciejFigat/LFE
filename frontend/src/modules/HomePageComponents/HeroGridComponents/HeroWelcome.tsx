import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../../app/reduxHooks'
import { UserInfo } from '../../../interfaces'
import {
  HeroTitle,
  HeroWrapperColumns,
  HeroWrapperRow
} from '../HeroSection.styled'
import { titleSvg } from '../HeroSectionSVGS/Title'
import { ChoiceTitleContainer } from '../HomeChoiceWrapper/HomeChoiceWrapper.styled'

import DirectionalButton from '../../../components/Buttons/DirectionalButton'

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

        {Object.keys(userInfo).length === 0 ? (
          <HeroWrapperRow>
            <DirectionalButton>
              <NavLink to='/register'>Dołącz do nas</NavLink>
            </DirectionalButton>
          </HeroWrapperRow>
        ) : null}
      </ChoiceTitleContainer>
    </>
  )
}
export default HeroWelcome
