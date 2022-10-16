import React, { useState } from 'react'
import {
  Wrapper,
  Form,
  Input,
  Button,
  LoginContainer,
  LoginTextWrapper,
  Title,
  LoginLink,
} from '../styles/login'
import { useAppDispatch } from '../app/reduxHooks'
import { createUser } from '../features/users/userSlice'
import Toast from '../components/Miscellaneous/Toast/Toast'

import useRedirectLoggedListener from '../hooks/useRedirectListenerLogged'
import { Link } from 'react-router-dom'
interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const dispatch: any = useAppDispatch()

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
        <h3>Witamy!</h3>
        <Form onSubmit={submitHandler}>
          <Input
            type='name'
            name='name'
            placeholder='Wpisz swoje imię'
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <Input
            type='email'
            name='email'
            placeholder='Wpisz swój email'
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            type='password'
            name='password'
            placeholder='Wpisz swoje hasło'
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <Button>Zarejestruj się</Button>
        </Form>
      </Wrapper>
      <LoginTextWrapper>
        <Title>
          Powrót do ekranu{' '}
          <Link to='/login'>
            <LoginLink>&nbsp;logowania.</LoginLink>
          </Link>
        </Title>
        <Title>
          Po wypełnieniu powyższego formularza, zostanie wysłany email z
          instrukcjami aktywowania konta.
          {/* <LoginLink >
            &nbsp;resetuj hasło.
          </LoginLink> */}
        </Title>
      </LoginTextWrapper>
    </LoginContainer>
  )
}
export default Register
