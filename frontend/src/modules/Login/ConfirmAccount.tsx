import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { activateUser } from '../../features/users/userSlice'
import { Wrapper, LoginContainer } from '../../styles/login'
import useRedirectLoggedListener from '../../hooks/useRedirectListenerLogged'
import { SpinnerWrapperSearch } from '../../modules/SearchBar/SearchBar.styled'
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import { LoginTextLink, LoginWrapperSmall } from './login'
import {
  HighlightText,
  HorizontalLineBottomLight,
  HorizontalWrapper
} from '../../styles/misc.styled'
import { TextColor } from '../../consts'

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
      if (timeoutSeconds > 0)
        setTimeoutSeconds((timeoutSeconds: number) => timeoutSeconds - 1)
    }, 1000)
    if (errorMessage === 'User status changed' && timeoutSeconds === 0) {
      navigate('/login')
    }
    return () => clearTimeout(timer)
  }, [errorMessage, navigate, timeoutSeconds])

  return (
    <LoginContainer>
      <Wrapper>
        <LoginWrapperSmall>
          <h2>Witamy w serwisie TurboLex</h2>

          {/* {errorMessage === 'User status changed' && ( */}
          {
            <>
              <h4>Autoryzacja przebiegła pomyślnie</h4>
              <HorizontalLineBottomLight />
              <LoginTextLink>
                <HighlightText color={TextColor.WARNING}>
                  automatyczne przekierowanie za {timeoutSeconds} s
                </HighlightText>{' '}
              </LoginTextLink>
              <HorizontalLineBottomLight />
              <LoginTextLink>
                <HorizontalWrapper>
                  <Link to='/'>
                    {' '}
                    <HighlightText color={TextColor.INFO}>
                      Powrót do strony startowej
                    </HighlightText>
                  </Link>
                </HorizontalWrapper>
              </LoginTextLink>
            </>
          }
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
        </LoginWrapperSmall>
      </Wrapper>
    </LoginContainer>
  )
}
export default ConfirmAccount
