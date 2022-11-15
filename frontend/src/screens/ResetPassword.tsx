import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../app/reduxHooks'
import { resetPassword } from '../features/users/userSlice'
import { Wrapper, Form, Input, Button, LoginContainer } from '../styles/login'
import useRedirectResetListener from '../hooks/useRedirectListenerReset'
import { useNavigate } from 'react-router-dom'

interface ResetPasswordProps {}

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const dispatch = useAppDispatch()
  let navigate = useNavigate()

  useRedirectResetListener()
  const [timeoutSeconds, setTimeoutSeconds] = useState<number>(5)
  // const [token, setToken] = useState<string | number | any>('')

  const { token: resetToken } = useParams()

  // const submitHandler = (e: any) => {
  //   e.preventDefault()
  //   dispatch(resetPassword(userToken))
  // }
  useEffect(() => {
    const userToken = {
      resetPasswordToken: resetToken,
    }
    if (userToken) {
      dispatch(resetPassword(userToken))
    }
  }, [resetToken, dispatch])
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (timeoutSeconds >= 0)
  //       setTimeoutSeconds((timeoutSeconds: number) => timeoutSeconds - 1)
  //   }, 1000)
  //   if (errorMessage === 'User status changed' && timeoutSeconds === -1) {
  //     navigate('/login')
  //   }
  //   return () => clearTimeout(timer)
  // }, [errorMessage, navigate, timeoutSeconds])

  return (
    <LoginContainer>
      <Wrapper>
        <h3>Please copy token you received on your email.</h3>
        {/* <Form onSubmit={submitHandler}>
          <Input
            type='token'
            name='token'
            placeholder='Enter your token'
            value={token}
            onChange={(e: any) => setToken(e.target.value)}
          />
          <Button>Login</Button>
        </Form> */}
      </Wrapper>
    </LoginContainer>
  )
}
export default ResetPassword
