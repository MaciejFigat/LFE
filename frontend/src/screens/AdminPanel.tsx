import React from 'react'
import { Link } from 'react-router-dom'

import {
  AdminContainer,
  AdminWrapperHeight
} from '../styles/ArticleTable.styled'
import SmallSection from '../components/Miscellaneous/SectionSmall/SmallSection'
import { useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import useRedirectListener from '../hooks/useRedirectListener'
import { ButtonMedium } from '../components/Buttons/Buttons.styled'
interface AdminPanelProps {}

const AdminPanel: React.FC<AdminPanelProps> = () => {
  //todo hook used to redirect to /login when not logged in
  useRedirectListener()
  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)
  const { name } = userInfo
  return (
    <AdminWrapperHeight>
      <SmallSection
        title='Panel administratora'
        description={name ? `${name}` : 'Hello'}
        variant='primary'
      />
      <AdminContainer>
        <ButtonMedium variant='infoEmpty' large fontLarge>
          <Link to='/admin/userlist'>Lista użytkowników</Link>
        </ButtonMedium>

        <ButtonMedium variant='primary' large fontLarge>
          <Link to='/profile'>Edytuj dane adninistratora</Link>
        </ButtonMedium>
      </AdminContainer>
    </AdminWrapperHeight>
  )
}
export default AdminPanel
