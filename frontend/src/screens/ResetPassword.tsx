import React, { useState } from 'react'
import { useAppDispatch } from '../app/reduxHooks'
import { resetPassword } from '../features/users/userSlice'
import { Wrapper, Form, Input, Button, LoginContainer } from '../styles/login'
import useRedirectResetListener from '../hooks/useRedirectListenerReset'
interface ResetPasswordProps {}

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const dispatch = useAppDispatch()

  useRedirectResetListener()
  const [token, setToken] = useState<string | number | any>('')

  const userToken = {
    resetPasswordToken: token,
  }

  const submitHandler = (e: any) => {
    e.preventDefault()
    dispatch(resetPassword(userToken))
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
