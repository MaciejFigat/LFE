import React, { useState, useEffect, FormEvent } from 'react'
import { UserInfo } from '../../interfaces'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { Link, useNavigate } from 'react-router-dom'
import {
  updateUserProfile,
  getUserDetails
} from '../../features/users/userSlice'
import Toast from '../../components/Miscellaneous/Toast/Toast'
import {
  Form,
  Input,
  LoginContainer,
  LoginWrapper,
  Wrapper,
  FormLabel,
  LoginInputsWrapper,
  LoginTitleHeader,
  LoginTextLink
} from './login'
import { AppDispatch } from '../../app/store'
import {
  validateEmail,
  validatePassword,
  validateUsername
} from './functions/validateForm'
import { ButtonBig } from '../../components/Buttons/Buttons.styled'
import { ButtonVariants, TextColor } from '../../consts'
import {
  HighlightText,
  HorizontalLineBottomLight,
  HorizontalWrapper
} from '../../styles/misc.styled'

interface UserEditProps {}

const UserEdit: React.FC<UserEditProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  let navigate = useNavigate()
  const user: UserInfo = useAppSelector(state => state.user.userInfo)

  const { _id: id, name: nameState, email: emailState } = user

  const [name, setName] = useState(nameState)
  const [email, setEmail] = useState(emailState)
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [usernameError, setUsernameError] = useState<string | null>(null)

  const updatedUser = {
    _id: id,
    name: name,
    email: email,
    password: password
  }

  const updateUserHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updateUserProfile(updatedUser))
  }
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate('/login')
    }

    if (typeof id === 'string') {
      dispatch(getUserDetails(id))
    }
    setName(nameState)
    setEmail(emailState)
  }, [dispatch, nameState, emailState, id, user, navigate])
  useEffect(() => {
    if (name && name !== '') {
      setUsernameError(validateUsername(name))
    }
  }, [name])
  useEffect(() => {
    if (email && email !== '') {
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
      <Toast option='editUser' />
      <Wrapper>
        <LoginWrapper>
          <LoginTitleHeader>Edycja danych użytkownika</LoginTitleHeader>

          <Form onSubmit={updateUserHandler}>
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
                placeholder='imię'
                value={name}
                onChange={(e: any) => setName(e.target.value)}
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
                name='new email'
                placeholder='email'
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
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
                name='new password'
                placeholder='nowe hasło'
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
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
              Zapisz zmiany
            </ButtonBig>
          </Form>
          <LoginTextLink>
            Możesz przejść do serwisu bez zmiany swoich danych
          </LoginTextLink>
          <HorizontalLineBottomLight />
          <LoginTextLink>
            <HorizontalWrapper>
              <Link to='/'>
                {' '}
                <HighlightText color={TextColor.INFO}>
                  Przejdź do strony startowej
                </HighlightText>
              </Link>
            </HorizontalWrapper>
          </LoginTextLink>
        </LoginWrapper>
      </Wrapper>
    </LoginContainer>
  )
}
export default UserEdit
