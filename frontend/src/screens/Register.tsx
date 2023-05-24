import React, { useState } from 'react'
import {
  Wrapper,
  Form,
  Input,
  LoginContainer,
  LoginTextWrapper,
  Title,
  LoginLink,
  LoginWrapper
} from '../styles/login'
import { useAppDispatch } from '../app/reduxHooks'
import { createUser } from '../features/users/userSlice'
import Toast from '../components/Miscellaneous/Toast/Toast'
import useRedirectLoggedListener from '../hooks/useRedirectListenerLogged'
import { Link } from 'react-router-dom'
import {
  ButtonBig,
  ButtonSmall
} from '../components/Miscellaneous/Buttons/BigButton.styled'
import { AppDispatch } from '../app/store'
interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  useRedirectLoggedListener()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const newUserInfo = { name, email, password }

  const submitHandler = (e: any) => {
    e.preventDefault()

    dispatch(createUser(newUserInfo))
  }

  return (
    <LoginContainer>
      <Toast option='registerUser' />
      <Wrapper>
        <LoginWrapper>
          <h3>Witamy!</h3>
          <Form onSubmit={submitHandler}>
            <Input
              type='name'
              name='name'
              placeholder='Wpisz imię'
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
            <Input
              type='email'
              name='email'
              placeholder='Wpisz email'
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Input
              type='password'
              name='password'
              placeholder='Wpisz hasło'
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <ButtonBig variant='primary'>Zarejestruj się</ButtonBig>
          </Form>
          <LoginTextWrapper>
            <Title>
              <ButtonSmall variant='secondary'>
                <Link to='/login'>
                  <LoginLink>Powrót do ekranu logowania</LoginLink>
                </Link>{' '}
              </ButtonSmall>
            </Title>
            <Title>
              Po wypełnieniu powyższego formularza, zostanie wysłany email z
              instrukcjami aktywowania konta.
            </Title>
          </LoginTextWrapper>
        </LoginWrapper>
      </Wrapper>
    </LoginContainer>
  )
}
export default Register
