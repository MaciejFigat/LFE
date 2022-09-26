import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserInfo } from '../interfaces'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { getUsers, deleteUser } from '../features/users/userSlice'
import { SendButton } from '../components/Miscellaneous/Buttons/Buttons.styled'
import {
  AdminContainer,
  AdminWrapper,
  Table,
  TableWrapper,
} from '../components/ArticleTable/ArticleTable.styled'
import { useNavigate } from 'react-router-dom'

interface UserListAdminProps {}

const UserListAdmin: React.FC<UserListAdminProps> = () => {
  const dispatch: any = useAppDispatch()
  let navigate = useNavigate()
  const users: any[] = useAppSelector((state) => state.user.allUsers)
  const userSuccess = useAppSelector((state) => state.user.success)
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const deleteUserHandler = (id: string) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteUser(id))
    }
  }

  // getUsers I have to pass an argument (anything really) because my thunk in the slice needs an argument to also receive thunkAPI, when thunkAPI is alone it's not working
  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      navigate('/login')
    }
    dispatch(getUsers(1))
    if (userSuccess === true) {
      dispatch(getUsers(1))
    }
  }, [dispatch, userInfo, navigate, userSuccess])

  return (
    <AdminWrapper>
      <AdminContainer>
        <SendButton variant='primary' large fontLarge>
          <Link to='/admin'>Powrót do panelu administracyjnego</Link>
        </SendButton>
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>name | email | admin</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user) => (
                  <tr key={user._id}>
                    <td>
                      {user.name} | {user.email} |&nbsp;
                      {user.isAdmin === true ? 'Yes' : 'No'}
                    </td>

                    <td>
                      <SendButton variant='info'>
                        <Link to={`/admin/user/${user._id}/edit`}>Edit</Link>
                      </SendButton>

                      <SendButton
                        variant='danger'
                        onClick={() => deleteUserHandler(user._id)}
                      >
                        Usuń
                      </SendButton>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </TableWrapper>
      </AdminContainer>
    </AdminWrapper>
  )
}
export default UserListAdmin
