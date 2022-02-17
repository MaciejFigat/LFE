import React, { useState } from 'react'
import { useAppDispatch } from '../app/reduxHooks'
import { testResetPassword } from '../features/users/userSlice'
import { Wrapper, Form, Input, Button, LoginContainer } from '../styles/login'
import useRedirectLoggedListener from '../hooks/useRedirectListenerLogged'

interface ResetPasswordProps {}

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const dispatch = useAppDispatch()

  useRedirectLoggedListener()
  const [token, setToken] = useState<string | number | any>('')
  // e4cce7334f1776b91b330bb6731f2e3bfee33ccb
  const submitHandler = (e: any) => {
    e.preventDefault()
    dispatch(testResetPassword(token))
  }

  return (
    <LoginContainer>
      <Wrapper>
        <h3>Please copy token you received on your email.</h3>
        <Form onSubmit={submitHandler}>
          <Input
            type='token'
            name='token'
            placeholder='Enter your token'
            value={token}
            onChange={(e: any) => setToken(e.target.value)}
          />
          <Button>Login</Button>
        </Form>
      </Wrapper>
    </LoginContainer>
  )
}
export default ResetPassword
