import React from 'react'
import { Link } from 'react-router-dom'
import { SendButton } from '../components/Buttons/Buttons.styled'
import { AdminContainer } from '../components/ArticleTable/ArticleTable.styled'
import SmallSection from '../components/SectionSmall/SmallSection'
import { useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import useRedirectListener from '../hooks/useRedirectListener'
interface AdminPanelProps {}

const AdminPanel: React.FC<AdminPanelProps> = () => {
  //todo hook used to redirect to /login when not logged in
  useRedirectListener()
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const { name } = userInfo
  return (
    <>
      <SmallSection
        title='Admin Panel'
        description={name ? `${name}` : 'Hello'}
        variant='tertiary'
      />
      <AdminContainer>
        <SendButton variant='primary' large fontLarge>
          <Link to='/admin/userlist'>User List</Link>
        </SendButton>

        <SendButton variant='danger' large fontLarge>
          <Link to='/profile'>Edit Admin Account</Link>
        </SendButton>
      </AdminContainer>
    </>
  )
}
export default AdminPanel
