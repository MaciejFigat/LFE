import React, { useState } from 'react'
import { useAppDispatch } from '../app/reduxHooks'
import { activateUser } from '../features/users/userSlice'
import { Wrapper, Form, Input, Button, LoginContainer } from '../styles/login'
import useRedirectLoggedListener from '../hooks/useRedirectListenerLogged'

interface ConfirmAccountProps {}

const ConfirmAccount: React.FC<ConfirmAccountProps> = () => {
  const dispatch = useAppDispatch()

  useRedirectLoggedListener()
  const [token, setToken] = useState<string | number | any>('')

  const activationToken = {
    confirmationCode: token,
  }

  const activateHandler = (e: any) => {
    e.preventDefault()
    dispatch(activateUser(activationToken))
  }
  return (
    <LoginContainer>
      <Wrapper>
        <h3>
          Please copy the account activation token you received on your email.
        </h3>
        <Form onSubmit={activateHandler}>
          <Input
            type='token'
            name='token'
            placeholder='Enter your token'
            value={token}
            onChange={(e: any) => setToken(e.target.value)}
          />
          <Button>Activate User</Button>
        </Form>
      </Wrapper>
    </LoginContainer>
  )
}
export default ConfirmAccount
