import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { resetPassword } from '../features/users/userSlice'
import { Wrapper, LoginContainer } from '../styles/login'
import useRedirectResetListener from '../hooks/useRedirectListenerReset'
import { useNavigate } from 'react-router-dom'
import { ButtonBig } from '../components/Miscellaneous/Buttons/BigButton.styled'
import { SpinnerWrapperSearch } from '../components/Miscellaneous/SearchBar/SearchBar.styled'
import { RotatingLines } from 'react-loader-spinner'

interface ResetPasswordProps {}

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const dispatch = useAppDispatch()
  let navigate = useNavigate()
  const errorMessage = useAppSelector((state) => state.user.error)
  useRedirectResetListener()
  const [timeoutSeconds, setTimeoutSeconds] = useState<number>(5)

  const { token: resetToken } = useParams()

  useEffect(() => {
    const userToken = {
      resetPasswordToken: resetToken,
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
      // navigate('/login')
    }
    return () => clearTimeout(timer)
  }, [errorMessage, navigate, timeoutSeconds])

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
              automatyczne przekierowanie za {timeoutSeconds}{' '}
              {(timeoutSeconds === 0 || 5 || 6) && 'sekund'}{' '}
              {(timeoutSeconds === 2 || 4 || 3) && 'sekundy'}{' '}
              {timeoutSeconds === 1 && 'sekundę'}
            </h4>
            <ButtonBig variant='success'>
              Zapraszamy do zalogowania się
            </ButtonBig>
          </>
        )}
        {errorMessage !== 'User reset token confirmed' && (
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
      </Wrapper>
    </LoginContainer>
  )
}
export default ResetPassword
