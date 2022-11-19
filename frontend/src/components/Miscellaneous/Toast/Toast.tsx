import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'

import { userSuccessReset } from '../../../features/users/userSlice'
import { ToastBody, ToastContainer } from './Toast.styled'
import { UserInfo as UserName } from '../../../interfaces'
interface ToastProps {
  option:
    | 'registerUser'
    | 'loginUser'
    | 'editUser'
    | 'deleteUser'
    | 'sentEmail'
    | 'errorEmail'
    | 'warningEmail'
    | 'noneEmail'
  emailMessage?: string
}

const Toast: React.FC<ToastProps> = ({ option, emailMessage }) => {
  const dispatch: any = useAppDispatch()

  const successUser: boolean = useAppSelector((state) => state.user.success)
  const userInfo: UserName = useAppSelector((state) => state.user.userInfo)
  const { name } = userInfo
  const loadingUser: boolean = useAppSelector((state) => state.user.loading)

  const [toastMessage, setToastMessage] = useState<string>('')
  const [toastVariant, setToastVariant] = useState<
    'none' | 'success' | 'danger' | 'info' | 'warning'
  >('none')

  useEffect(() => {
    switch (option) {
      case 'deleteUser':
        if (successUser === true && loadingUser === false) {
          setToastVariant('warning')
          setToastMessage('User Deleted')
        }
        break
      case 'editUser':
        if (successUser === true && loadingUser === false) {
          setToastVariant('info')
          setToastMessage('User Data Edited')
        }
        break
      case 'registerUser':
        if (successUser === true && loadingUser === false) {
          setToastVariant('success')
          setToastMessage(`Welcome ${name}`)
        }
        break
      case 'sentEmail':
        setToastVariant('success')
        if (emailMessage) {
          setToastMessage(emailMessage)
        }

        break
      case 'errorEmail':
        setToastVariant('danger')
        if (emailMessage) {
          setToastMessage(emailMessage)
        }

        break
      case 'noneEmail':
        setToastVariant('none')

        break
      case 'warningEmail':
        setToastVariant('warning')
        if (emailMessage) {
          setToastMessage(emailMessage)
        }

        break

      default:
        break
    }
  }, [option, successUser, loadingUser, name, emailMessage])

  useEffect(() => {
    const timer = setTimeout(() => {
      switch (option) {
        case 'registerUser':
        case 'editUser':
        case 'deleteUser':
          setToastVariant('none')
          dispatch(userSuccessReset())
          break
        case 'sentEmail':
        case 'errorEmail':
        case 'warningEmail':
          setToastVariant('none')
          break
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [dispatch, option, loadingUser])

  return (
    <ToastContainer variant={toastVariant}>
      <ToastBody variant={toastVariant}>{toastMessage}</ToastBody>
    </ToastContainer>
  )
}
export default Toast
