import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { activateUser } from '../features/users/userSlice'
import { Wrapper, LoginContainer } from '../styles/login'
import useRedirectLoggedListener from '../hooks/useRedirectListenerLogged'
import { SpinnerWrapperSearch } from '../components/Miscellaneous/SearchBar/SearchBar.styled'
import { RotatingLines } from 'react-loader-spinner'
import { ButtonBig } from '../components/Miscellaneous/Buttons/BigButton.styled'
import { useNavigate } from 'react-router-dom'

interface ConfirmAccountProps {}

const ConfirmAccount: React.FC<ConfirmAccountProps> = () => {
  const dispatch = useAppDispatch()
  let navigate = useNavigate()

  const errorMessage = useAppSelector(state => state.user.error)
  const { token: confirmationToken } = useParams()

  useRedirectLoggedListener()

  const [timeoutSeconds, setTimeoutSeconds] = useState<number>(5)

  useEffect(() => {
    const tokenObject = {
      confirmationCode: confirmationToken
    }
    if (confirmationToken) {
      dispatch(activateUser(tokenObject))
    }
  }, [confirmationToken, dispatch])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeoutSeconds >= 0)
        setTimeoutSeconds((timeoutSeconds: number) => timeoutSeconds - 1)
    }, 1000)
    if (errorMessage === 'User status changed' && timeoutSeconds === -1) {
      navigate('/login')
    }
    return () => clearTimeout(timer)
  }, [errorMessage, navigate, timeoutSeconds])

  return (
    <LoginContainer>
      <Wrapper>
        <h2>Witamy w serwisie TurboLex</h2>

        {errorMessage === 'User status changed' && (
          <>
            {' '}
            <h4>Autoryzacja przebiegła pomyślnie</h4>
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
        {errorMessage === '' && (
          <>
            {' '}
            <h4>Za chwilę zostaniesz przekierowany do ekranu logowania</h4>
            <h4>Trwa autoryzacja twojego emaila</h4>{' '}
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
export default ConfirmAccount
