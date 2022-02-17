import React, { useState, useEffect } from 'react'
import { getUserById, updateUser } from '../features/users/userSlice'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import Toast from '../components/Toast/Toast'
import {
  EditFormContainer,
  EditForm,
  ContactField,
  ContactFieldContent,
} from '../components/ArticleTable/UserEdit.styled'
import { SendButton } from '../components/Buttons/Buttons.styled'
import {
  AdminContainer,
  AdminWrapper,
} from '../components/ArticleTable/ArticleTable.styled'
import { useNavigate, useParams } from 'react-router-dom'

interface UserAdminEditProps {}

const UserAdminEdit: React.FC<UserAdminEditProps> = () => {
  const dispatch: any = useAppDispatch()
  let navigate = useNavigate()
  const params = useParams()
  const user: UserInfo = useAppSelector((state) => state.user.selectedUserInfo)
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  const {
    _id: id,
    name: nameState,
    email: emailState,
    isAdmin: isAdminState,
  } = user

  const [name, setName] = useState(nameState)
  const [email, setEmail] = useState(emailState)
  const [isAdmin, setIsAdmin] = useState<boolean | undefined>(isAdminState)

  const updatedUser = {
    _id: id,
    name: name,
    email: email,
    isAdmin: isAdmin,
  }
  const editHandler = (e: any) => {
    e.preventDefault()
    dispatch(updateUser(updatedUser))
  }

  const adminGiveHandler = (e: any) => {
    e.preventDefault()
    setIsAdmin(true)
  }
  const adminRemoveHandler = (e: any) => {
    e.preventDefault()
    setIsAdmin(false)
  }

  useEffect(() => {
    // this checks whether userInfo is empty
    if (Object.keys(userInfo).length === 0) {
      navigate('/login')
    }
    if (typeof params.id === 'string') {
      dispatch(getUserById(params.id))
      setName(nameState)
      setEmail(emailState)
      setIsAdmin(isAdminState)
    }
  }, [
    dispatch,
    nameState,
    emailState,
    isAdminState,
    userInfo,
    params,
    navigate,
  ])

  return (
    <AdminWrapper>
      <Toast option='editUser' />
      <AdminContainer>
        <h1>EDIT USER: {nameState}</h1>{' '}
        {isAdmin === true ? (
          <p
            style={{
              color: 'var(--success1)',
              fontSize: '20px',
              fontWeight: 700,
            }}
          >
            {user.name} is an Admin
          </p>
        ) : (
          <p
            style={{
              color: 'red',
              fontSize: '20px',
              fontWeight: 700,
            }}
          >
            {user.name} is not an Admin
          </p>
        )}
        <SendButton onClick={adminGiveHandler} variant='info'>
          set as Admin
        </SendButton>
        <SendButton onClick={adminRemoveHandler} variant='danger'>
          remove Admin rights
        </SendButton>
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
                type='email'
                value={email}
                placeholder='Email'
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </ContactField>
          </EditForm>{' '}
        </EditFormContainer>
        <div>
          <SendButton onClick={editHandler} variant='success'>
            Save changes
          </SendButton>
        </div>
      </AdminContainer>
    </AdminWrapper>
  )
}
export default UserAdminEdit
