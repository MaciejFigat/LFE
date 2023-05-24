import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { resetPassword } from '../features/users/userSlice'
import { Wrapper, LoginContainer, LoginLink } from '../styles/login'
import { useNavigate } from 'react-router-dom'
import {
  ButtonBig,
  ButtonSmall
} from '../components/ButtonsSend/BigButton.styled'
import { SpinnerWrapperSearch } from '../modules/SearchBar/SearchBar.styled'
import { RotatingLines } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { HighlightText } from '../styles/misc.styled'

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
      if (timeoutSeconds >= 0)
        setTimeoutSeconds((timeoutSeconds: number) => timeoutSeconds - 1)
    }, 1000)
    if (
      errorMessage === 'User reset token confirmed' &&
      timeoutSeconds === -1
    ) {
      navigate('/profile')
    }
    return () => clearTimeout(timer)
  }, [errorMessage, navigate, timeoutSeconds])
  const navigateHelper = () => {
    navigate('/profile')
  }
  return (
    <LoginContainer>
      <Wrapper>
        <h2>Witamy w serwisie TurboLex</h2>

        {errorMessage === 'User reset token confirmed' && (
          <>
            {' '}
            <h4>
              Token przyjęty, możesz korzystać z serwisu lub zmienić hasło
            </h4>
            <h4>
              automatyczne przekierowanie za{' '}
              <HighlightText>{timeoutSeconds}</HighlightText> s
            </h4>
            <ButtonBig variant='success' onClick={navigateHelper}>
              Przejdź do profilu
            </ButtonBig>
          </>
        )}
        {errorMessage !== 'User reset token confirmed' &&
          errorMessage !== 'Request failed with status code 401' && (
            <>
              {' '}
              <h4>
                Za chwilę zostaniesz przekierowany do ekranu profilu użytkownika
              </h4>
              <h4>Trwa analiza tokenu resetującego</h4>{' '}
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
          <>
            {' '}
            <h4>Błąd tokenu, przepraszamy!</h4>
            <h4>Spróbuj ponownie lub skontaktuj się z administratorem</h4>
            <ButtonSmall variant='secondary'>
              <Link to='/login'>
                <LoginLink>Powrót do ekranu logowania</LoginLink>
              </Link>{' '}
            </ButtonSmall>{' '}
          </>
        )}
      </Wrapper>
    </LoginContainer>
  )
}
export default ResetPassword
