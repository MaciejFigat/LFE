import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../app/reduxHooks'
import { logout, sendUserId } from '../features/users/userSlice'
import {
  Wrapper,
  Form,
  Input,
  Button,
  Title,
  LoginLink,
  LoginContainer,
  LoginTextWrapper,
} from '../styles/login'
import useRedirectLoggedListener from '../hooks/useRedirectListenerLogged'
import { sendEmailToResetPassword } from '../features/users/userSlice'

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const dispatch = useAppDispatch()

  useRedirectLoggedListener()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userInfo = { email, password }

  const submitHandler = (e: any) => {
    e.preventDefault()
    dispatch(sendUserId(userInfo))
  }

  const logoutHandler = (e: any) => {
    e.preventDefault()
    dispatch(logout())
  }
  const userEmail = { email }

  const resetPasswordHandler = (e: any) => {
    e.preventDefault()
    dispatch(sendEmailToResetPassword(userEmail))
  }

  return (
    <LoginContainer>
      <Wrapper>
        <h3>Welcome back</h3>
        <Form onSubmit={submitHandler}>
          <Input
            type='email'
            name='email'
            placeholder='Enter your email'
            autoComplete='email'
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />

          <Input
            type='password'
            autoComplete='current-password'
            placeholder='Enter your password'
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />

          <Button>Login</Button>
        </Form>

        <Button onClick={logoutHandler}>Logout</Button>
      </Wrapper>
      <LoginTextWrapper>
        <Title>
          Please feel free to{' '}
          <Link to='/register'>
            <LoginLink>&nbsp;register.</LoginLink>
          </Link>
        </Title>
        <Title>
          Forgot the password - please type the email and click
          <LoginLink onClick={resetPasswordHandler}>
            &nbsp;reset password.
          </LoginLink>
        </Title>
      </LoginTextWrapper>
    </LoginContainer>
  )
}
export default Login
