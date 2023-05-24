import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { logout, sendUserId } from '../features/users/userSlice'
import {
  Wrapper,
  Form,
  Input,
  Button,
  Title,
  LoginContainer,
  LoginTextWrapper,
  LoginWrapper
} from '../styles/login'
import useRedirectLoggedListener from '../hooks/useRedirectListenerLogged'
import { sendEmailToResetPassword } from '../features/users/userSlice'
import { UserInfo } from '../interfaces'
import {
  ButtonBig,
  ButtonSmall
} from '../components/Miscellaneous/Buttons/BigButton.styled'
import { resetUserFragments } from '../features/fragments/fragmentSlice'

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const dispatch = useAppDispatch()

  const userInfoRedux: UserInfo = useAppSelector(state => state.user.userInfo)

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
    dispatch(resetUserFragments())
  }
  const userEmail = { email }

  const resetPasswordHandler = (e: any) => {
    e.preventDefault()
    dispatch(sendEmailToResetPassword(userEmail))
  }

  return (
    <LoginContainer>
      <Wrapper>
        <LoginWrapper>
          <h3>Zapraszamy</h3>
          <Form onSubmit={submitHandler}>
            <Input
              type='email'
              name='email'
              placeholder='Wpisz email'
              autoComplete='email'
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />

            <Input
              type='password'
              autoComplete='current-password'
              placeholder='Wpisz hasło'
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />

            <ButtonBig variant='primary'>Logowanie</ButtonBig>
          </Form>
          {Object.keys(userInfoRedux).length > 0 && (
            <Button onClick={logoutHandler}>Wylogowanie</Button>
          )}
          <LoginTextWrapper>
            <ButtonBig variant='secondary'>
              <Link to='/register'>Rejestracja</Link>
            </ButtonBig>

            <Title>
              Możesz zresetować hasło. Wpisz swój email w pole email powyżej i
              kliknij
            </Title>
            <ButtonSmall variant='secondary'>
              <div onClick={resetPasswordHandler}>&nbsp;reset hasła</div>
            </ButtonSmall>
          </LoginTextWrapper>
        </LoginWrapper>
      </Wrapper>
    </LoginContainer>
  )
}
export default Login
