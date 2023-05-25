import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { resetPassword } from '../../features/users/userSlice'
import {
  Wrapper,
  LoginContainer,
  LoginTextLink,
  LoginTextWrapper,
  LoginWrapperSmall
} from './login'
import { useNavigate } from 'react-router-dom'
import { SpinnerWrapperSearch } from '../../modules/SearchBar/SearchBar.styled'
import { RotatingLines } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import {
  HighlightText,
  HorizontalLineBottomLight,
  HorizontalWrapper
} from '../../styles/misc.styled'
import { TextColor } from '../../consts'

interface ResetPasswordProps {}

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const dispatch = useAppDispatch()
  let navigate = useNavigate()
  const errorMessage = useAppSelector(state => state.user.error)

  const [timeoutSeconds, setTimeoutSeconds] = useState<number>(5)

  const { token: resetToken } = useParams()

  useEffect(() => {
    const userToken = {
      resetPasswordToken: resetToken
    }
    if (userToken) {
      dispatch(resetPassword(userToken))
    }
  }, [resetToken, dispatch])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeoutSeconds > 0)
        setTimeoutSeconds((timeoutSeconds: number) => timeoutSeconds - 1)
    }, 1000)
    if (errorMessage === 'User reset token confirmed' && timeoutSeconds === 0) {
      navigate('/profile')
    }
    return () => clearTimeout(timer)
  }, [errorMessage, navigate, timeoutSeconds])
  const navigateHelper = () => {
    navigate('/profile')
  }
  const navigateHomeHelper = () => {
    navigate('/')
  }
  return (
    <LoginContainer>
      <Wrapper>
        <LoginWrapperSmall>
          <h2>Witamy w serwisie TurboLex</h2>

          {errorMessage === 'User reset token confirmed' && (
            <LoginTextWrapper>
              {' '}
              <LoginTextLink onClick={navigateHomeHelper}>
                <HighlightText color={TextColor.SUCCESS}>
                  Token przyjęty przejdź do strony głównej
                </HighlightText>
              </LoginTextLink>
              <HorizontalLineBottomLight />
              <LoginTextLink>
                <HighlightText color={TextColor.WARNING}>
                  automatyczne przekierowanie za {timeoutSeconds} s
                </HighlightText>
              </LoginTextLink>
              <HorizontalLineBottomLight />
              <LoginTextLink onClick={navigateHelper}>
                <HighlightText color={TextColor.INFO}>
                  Przejdź do profilu by zmienić hasło
                </HighlightText>
              </LoginTextLink>
            </LoginTextWrapper>
          )}
          {errorMessage !== 'User reset token confirmed' &&
            errorMessage !== 'Request failed with status code 401' && (
              <>
                {' '}
                <LoginTextLink>
                  Za chwilę zostaniesz przekierowany do ekranu profilu
                  użytkownika
                </LoginTextLink>
                <LoginTextLink>Trwa analiza tokenu resetującego</LoginTextLink>{' '}
                <SpinnerWrapperSearch>
                  <RotatingLines
                    strokeColor='var(--background-secondary2)'
                    strokeWidth='3'
                    animationDuration='1.25'
                    ariaLabel='progress-bar-loading'
                    width='58'
                    visible={true}
                  />
                </SpinnerWrapperSearch>
              </>
            )}
          {errorMessage === 'Request failed with status code 401' && (
            <LoginTextWrapper>
              <LoginTextLink>Błąd tokenu, przepraszamy!</LoginTextLink>
              <LoginTextLink>
                <HorizontalWrapper>
                  <Link to='/login'>
                    <HighlightText color={TextColor.INFO}>
                      Powrót do ekranu logowania
                    </HighlightText>
                  </Link>
                </HorizontalWrapper>
              </LoginTextLink>
            </LoginTextWrapper>
          )}
        </LoginWrapperSmall>
      </Wrapper>
    </LoginContainer>
  )
}
export default ResetPassword
