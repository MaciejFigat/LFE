import React, { useState, useEffect } from 'react'
import { UserInfo } from '../interfaces'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { updateUserProfile, getUserDetails } from '../features/users/userSlice'
import Toast from '../components/Miscellaneous/Toast/Toast'

import { useNavigate } from 'react-router-dom'
import {
  Form,
  Input,
  InputAndLabelWrapper,
  LoginContainer,
  LoginWrapper,
  Wrapper,
} from '../styles/login'
import { ButtonMedium } from '../components/Miscellaneous/Buttons/BigButton.styled'

interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = () => {
  const dispatch: any = useAppDispatch()
  let navigate = useNavigate()
  const user: UserInfo = useAppSelector((state) => state.user.userInfo)

  const { _id: id, name: nameState, email: emailState } = user

  const [name, setName] = useState(nameState)
  const [email, setEmail] = useState(emailState)
  const [password, setPassword] = useState('')

  const updatedUser = {
    _id: id,
    name: name,
    email: email,
    password: password,
  }

  const updateUserHandler = (e: any) => {
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
  return (
    <LoginContainer>
      <Toast option='editUser' />
      <Wrapper>
        <LoginWrapper>
          <h3>
            {name ? `edycja profilu ${nameState}` : 'Użytkownik niezalogowany'}
          </h3>

          <Form onSubmit={updateUserHandler}>
            <InputAndLabelWrapper>
              <Input
                type='name'
                name='name'
                placeholder='imię'
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
              <label>imię</label>
            </InputAndLabelWrapper>
            <InputAndLabelWrapper>
              <Input
                type='email'
                name='new email'
                placeholder='email'
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <label>email</label>
            </InputAndLabelWrapper>
            <InputAndLabelWrapper>
              <Input
                type='password'
                name='new password'
                placeholder='nowe hasło'
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <label>nowe hasło</label>
            </InputAndLabelWrapper>
            <ButtonMedium variant='success'>Zapisz zmiany</ButtonMedium>
          </Form>
        </LoginWrapper>
      </Wrapper>
    </LoginContainer>
  )
}
export default UserProfile
