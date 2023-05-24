import React, {
  useState,
  ChangeEvent,
  MouseEvent,
  FormEvent,
  useEffect
} from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { logout, sendUserId } from '../../features/users/userSlice'
import {
  Wrapper,
  Form,
  LoginContainer,
  LoginTextWrapper,
  LoginWrapper,
  Input
} from './login'
import useRedirectLoggedListener from '../../hooks/useRedirectListenerLogged'
import { sendEmailToResetPassword } from '../../features/users/userSlice'
import { UserInfo } from '../../interfaces'
import { ButtonBig } from '../../components/ButtonsSend/BigButton.styled'
import { resetUserFragments } from '../../features/fragments/fragmentSlice'
import {
  FormLabel,
  LoginInputsWrapper,
  LoginTextLink,
  LoginTitleHeader
} from './UserLogin.styled'
import { validateEmail, validatePassword } from './functions/validateForm'
import {
  HighlightText,
  HorizontalLineBottomLight,
  HorizontalWrapper
} from '../../styles/misc.styled'
import { TextColor } from '../../consts'

interface LoginProps {}

const UserLogin: React.FC<LoginProps> = () => {
  const dispatch = useAppDispatch()

  const userInfoRedux: UserInfo = useAppSelector(state => state.user.userInfo)

  useRedirectLoggedListener()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userInfo = { email, password }
  const [emailError, setEmailError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (emailError === '' && passwordError === '') {
      dispatch(sendUserId(userInfo))
      setEmail('')
      setPassword('')
    }
  }
  const logoutHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(logout())
    dispatch(resetUserFragments())
  }

  const userEmail = { email }
  const resetPasswordHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (email !== '' && emailError === '') {
      dispatch(sendEmailToResetPassword(userEmail))
    }
  }
  useEffect(() => {
    if (email !== '') {
      setEmailError(validateEmail(email))
    }
  }, [email])

  useEffect(() => {
    if (password !== '') {
      setPasswordError(validatePassword(password))
    }
  }, [password])
  return (
    <LoginContainer>
      <Wrapper>
        <LoginWrapper>
          <LoginTitleHeader>Witamy</LoginTitleHeader>
          <Form onSubmit={submitHandler}>
            <LoginInputsWrapper>
              <FormLabel
                htmlFor='email'
                $hasError={emailError ? true : false}
                $isApproved={emailError === '' ? true : false}
              >
                {emailError === '' ? 'Email ma prawidłowy format' : emailError}
                {emailError === null ? 'Adres email' : null}
              </FormLabel>
              <Input
                type='email'
                name='email'
                required
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                autoComplete='email'
                placeholder='Wpisz email'
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </LoginInputsWrapper>
            <LoginInputsWrapper>
              <FormLabel
                htmlFor='password'
                $hasError={passwordError ? true : false}
                $isApproved={passwordError === '' ? true : false}
              >
                {' '}
                {passwordError === ''
                  ? 'Hasło ma prawidłowy format'
                  : passwordError}
                {passwordError === null ? 'Hasło' : null}
              </FormLabel>
              <Input
                type='password'
                autoComplete='current-password'
                placeholder='Wpisz hasło'
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </LoginInputsWrapper>
            <ButtonBig borderRadius='10px' variant='secondary'>
              Logowanie
            </ButtonBig>
          </Form>
          <LoginTextWrapper>
            <HorizontalLineBottomLight />
            <LoginTextLink>
              <HorizontalWrapper>
                <Link to='/'>
                  {' '}
                  <HighlightText color={TextColor.INFO}>
                    Wróć do strony startowej
                  </HighlightText>
                </Link>
              </HorizontalWrapper>
            </LoginTextLink>

            <HorizontalLineBottomLight />
            <LoginTextLink>
              <HorizontalWrapper>
                Wpisz swój email
                <HighlightText
                  hoverEffect
                  color={
                    emailError === '' || emailError === null
                      ? TextColor.INFO
                      : TextColor.WARNING
                  }
                  onClick={resetPasswordHandler}
                >
                  <a href='/' id='reset-password'>
                    {' '}
                    &nbsp;zresetować hasło
                  </a>
                </HighlightText>
              </HorizontalWrapper>
            </LoginTextLink>
            <HorizontalLineBottomLight />
            <LoginTextLink>
              <HorizontalWrapper>
                {Object.keys(userInfoRedux).length > 0 ? (
                  <>
                    <HighlightText
                      color={TextColor.INFO}
                      onClick={logoutHandler}
                    >
                      Wyloguj się
                    </HighlightText>
                  </>
                ) : (
                  <>
                    Nie masz u nas konta?
                    <Link to='/register'>
                      <HighlightText color={TextColor.INFO}>
                        &nbsp;Zarejestruj się
                      </HighlightText>
                    </Link>
                  </>
                )}
              </HorizontalWrapper>
            </LoginTextLink>
          </LoginTextWrapper>
        </LoginWrapper>
      </Wrapper>
    </LoginContainer>
  )
}
export default UserLogin
