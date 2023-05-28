import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import {
  Wrapper,
  Form,
  Input,
  LoginContainer,
  LoginTextWrapper,
  LoginWrapper,
  FormLabel,
  LoginInputsWrapper,
  LoginTextLink,
  LoginTitleHeader
} from './login'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { createUser } from '../../features/users/userSlice'
import Toast from '../../components/Miscellaneous/Toast/Toast'
import useRedirectLoggedListener from '../../hooks/useRedirectListenerLogged'
import { ButtonVariants, TextColor } from '../../consts'
import { Link } from 'react-router-dom'

import { AppDispatch } from '../../app/store'
import {
  HighlightText,
  HorizontalLineBottomLight,
  HorizontalWrapper
} from '../../styles/misc.styled'
import {
  validateEmail,
  validatePassword,
  validateUsername
} from './functions/validateForm'

import { ButtonBig } from '../../components/Buttons/Buttons.styled'
import { ThreeDots } from 'react-loader-spinner'

interface UserRegisterProps {}

const UserRegister: React.FC<UserRegisterProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const userData = useAppSelector(state => state.user)
  const { loading } = userData
  useRedirectLoggedListener()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [emailError, setEmailError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [usernameError, setUsernameError] = useState<string | null>(null)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setUser(prevUser => ({ ...prevUser, [name]: value }))
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    dispatch(createUser(user))
  }

  useEffect(() => {
    if (user.name !== '') {
      setUsernameError(validateUsername(user.name))
    }
  }, [user.name])
  useEffect(() => {
    if (user.email !== '') {
      setEmailError(validateEmail(user.email))
    }
  }, [user.email])

  useEffect(() => {
    if (user.password !== '') {
      setPasswordError(validatePassword(user.password))
    }
  }, [user.password])

  return (
    <LoginContainer>
      <Toast option='registerUser' />
      <Wrapper>
        <LoginWrapper>
          <LoginTitleHeader>
            Dołącz do nas{' '}
            {loading ? (
              <HorizontalWrapper>
                <ThreeDots
                  height={'22'}
                  width={'22'}
                  color='var(--background-secondary1)'
                  ariaLabel='loading'
                />
              </HorizontalWrapper>
            ) : null}
          </LoginTitleHeader>
          <Form onSubmit={handleSubmit}>
            <LoginInputsWrapper>
              <FormLabel
                htmlFor='name'
                $hasError={usernameError ? true : false}
                $isApproved={usernameError === '' ? true : false}
              >
                {usernameError === ''
                  ? 'Imię ma prawidłowy format'
                  : usernameError}
                {usernameError === null ? 'Imię użytkownika' : null}
              </FormLabel>
              <Input
                type='name'
                name='name'
                id='name'
                value={user.name}
                onChange={handleInputChange}
              />
            </LoginInputsWrapper>
            <LoginInputsWrapper>
              <FormLabel
                htmlFor='email'
                $hasError={emailError ? true : false}
                $isApproved={emailError === '' ? true : false}
              >
                {' '}
                {emailError === null ? 'Adres email' : null}
                {emailError === '' ? 'Email ma prawidłowy format' : emailError}
              </FormLabel>
              <Input
                type='email'
                name='email'
                id='email'
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                value={user.email}
                onChange={handleInputChange}
              />
            </LoginInputsWrapper>
            <LoginInputsWrapper>
              <FormLabel
                htmlFor='password'
                $hasError={passwordError ? true : false}
                $isApproved={passwordError === '' ? true : false}
              >
                {passwordError === ''
                  ? 'Hasło ma prawidałowy format'
                  : passwordError}
                {passwordError === null ? 'Hasło' : null}
              </FormLabel>
              <Input
                type='password'
                name='password'
                id='password'
                value={user.password}
                onChange={handleInputChange}
              />
            </LoginInputsWrapper>

            <ButtonBig
              type='submit'
              disabled={
                passwordError === '' &&
                emailError === '' &&
                usernameError === ''
                  ? false
                  : true
              }
              variant={
                passwordError === '' &&
                emailError === '' &&
                usernameError === ''
                  ? ButtonVariants.SUCCESS
                  : ButtonVariants.DISABLED
              }
              data-testid='create-account-button'
            >
              Zarejestruj się
            </ButtonBig>
          </Form>
          <LoginTextWrapper>
            <LoginTextLink>
              <HorizontalWrapper>
                <Link to='/login'>
                  <HighlightText color={TextColor.INFO}>
                    Powrót do ekranu logowania
                  </HighlightText>
                </Link>
              </HorizontalWrapper>
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
            <HorizontalLineBottomLight />
            <LoginTextLink>
              Po wypełnieniu formularza postępuj zgodnie z instrukcjami w mailu
              aktywującym
            </LoginTextLink>
          </LoginTextWrapper>
        </LoginWrapper>
      </Wrapper>
    </LoginContainer>
  )
}
export default UserRegister
