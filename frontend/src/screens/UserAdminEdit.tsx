import React, { useState, useEffect } from 'react'
import { getUserById, updateUser } from '../features/users/userSlice'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import { Link } from 'react-router-dom'
import Toast from '../components/Miscellaneous/Toast/Toast'
import {
  EditFormContainer,
  EditForm,
  ContactField,
  ContactFieldContent
} from '../styles/UserEdit.styled'

import { AdminContainer, AdminWrapper } from '../styles/ArticleTable.styled'
import { useNavigate, useParams } from 'react-router-dom'
import { ButtonMedium } from '../components/Buttons/Buttons.styled'

interface UserAdminEditProps {}

const UserAdminEdit: React.FC<UserAdminEditProps> = () => {
  const dispatch: any = useAppDispatch()
  let navigate = useNavigate()
  const params = useParams()
  const user: UserInfo = useAppSelector(state => state.user.selectedUserInfo)
  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)

  const {
    _id: id,
    name: nameState,
    email: emailState,
    isAdmin: isAdminState,
    status: userStatus
  } = user

  const [name, setName] = useState(nameState)
  const [email, setEmail] = useState(emailState)
  const [isAdmin, setIsAdmin] = useState<boolean | undefined>(isAdminState)
  const [status, setStatus] = useState<'Active' | 'Pending' | undefined>(
    userStatus
  )

  const updatedUser = {
    _id: id,
    name: name,
    email: email,
    isAdmin: isAdmin,
    status: status
  }

  const activateHandler = (e: any) => {
    e.preventDefault()
    if (status === 'Pending') {
      setStatus('Active')
    } else {
      setStatus('Pending')
    }
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
      setStatus(userStatus)
    }
  }, [
    dispatch,
    nameState,
    emailState,
    isAdminState,
    userInfo,
    params,
    navigate,
    userStatus
  ])

  return (
    <AdminWrapper>
      <Toast option='editUser' />
      <AdminContainer>
        <ButtonMedium variant='info' large fontLarge>
          <Link to='/admin/userlist'>Powrót do listy użytkowników</Link>
        </ButtonMedium>
        <h1>Edytuj dane użytkownika: {nameState}</h1>{' '}
        {isAdmin === true ? (
          <p
            style={{
              color: 'var(--success1)',
              fontSize: '20px',
              fontWeight: 700
            }}
          >
            {user.name} ma uprawnienia administratora
          </p>
        ) : (
          <p
            style={{
              color: 'red',
              fontSize: '20px',
              fontWeight: 700
            }}
          >
            {user.name} nie ma uprawnień administratora
          </p>
        )}
        {status === 'Active' ? (
          <>
            <p
              style={{
                color: 'var(--success1)',
                fontSize: '20px',
                fontWeight: 700
              }}
            >
              {user.name} status aktywny
            </p>
            <ButtonMedium onClick={activateHandler} variant='success'>
              ustaw jako nieaktywny
            </ButtonMedium>
          </>
        ) : (
          <>
            <p
              style={{
                color: 'red',
                fontSize: '20px',
                fontWeight: 700
              }}
            >
              {user.name} oczekuje na potwierdzenie
            </p>{' '}
            <ButtonMedium onClick={activateHandler} variant='info'>
              aktywuj
            </ButtonMedium>
          </>
        )}
        <ButtonMedium onClick={adminGiveHandler} variant='info'>
          nadaj uprawnienia administratora
        </ButtonMedium>
        <ButtonMedium onClick={adminRemoveHandler} variant='danger'>
          odbierz uprawnienia administratora
        </ButtonMedium>
        <EditFormContainer>
          <EditForm>
            <ContactField>
              <label>Imię</label>
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
          <ButtonMedium onClick={editHandler} variant='success'>
            Zapisz zmiany
          </ButtonMedium>
        </div>
      </AdminContainer>
    </AdminWrapper>
  )
}
export default UserAdminEdit
