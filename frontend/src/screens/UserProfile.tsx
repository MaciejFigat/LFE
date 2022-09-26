import React, { useState, useEffect } from 'react'
import { UserInfo } from '../interfaces'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { updateUserProfile, getUserDetails } from '../features/users/userSlice'
import Toast from '../components/Miscellaneous/Toast/Toast'
import SmallSection from '../components/Miscellaneous/SectionSmall/SmallSection'

import {
  EditFormContainer,
  EditForm,
  ContactField,
  ContactFieldContent,
} from '../styles/UserEdit.styled'
import { SendButton } from '../components/Miscellaneous/Buttons/Buttons.styled'
import { AdminContainer, AdminWrapper } from '../styles/ArticleTable.styled'
import { useNavigate } from 'react-router-dom'

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
    <>
      <SmallSection
        title='Edit your account'
        description={name ? `${nameState}` : 'Hello'}
        variant='primary'
      />
      <AdminWrapper>
        <Toast option='editUser' />
        <AdminContainer>
          <EditFormContainer>
            <EditForm>
              <ContactField>
                <label>Name</label>
                <ContactFieldContent
                  type='text'
                  value={name}
                  placeholder='Name'
                  onChange={(e: any) => setName(e.target.value)}
                />
              </ContactField>
              <ContactField>
                <label>Email</label>
                <ContactFieldContent
                  type='text'
                  value={email}
                  placeholder='Email'
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </ContactField>
              <ContactField>
                <label>New password</label>
                <ContactFieldContent
                  type='text'
                  value={password}
                  placeholder='password'
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </ContactField>
            </EditForm>{' '}
          </EditFormContainer>
          <SendButton onClick={updateUserHandler} variant='success'>
            Save changes
          </SendButton>
        </AdminContainer>
      </AdminWrapper>
    </>
  )
}
export default UserProfile
