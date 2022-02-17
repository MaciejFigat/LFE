import Nav from './components/menu/Nav/Nav'
import Home from './screens/Home'
import { GlobalStyle } from './styles/GlobalStyles'
import { Routes, Route, useLocation } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'
import ScrollTopHelper from './components/ScrollTopHelper'
import UserAdminEdit from './screens/UserAdminEdit'
import UserListAdmin from './screens/UserListAdmin'
import UserProfile from './screens/UserProfile'
import AdminPanel from './screens/AdminPanel'
import ResetPassword from './screens/ResetPassword'

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollTopHelper />
      <GlobalStyle />
      <Nav />
      <Routes location={location} key={location.key}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/admin/userlist' element={<UserListAdmin />} />
        <Route path='/admin/user/:id/edit' element={<UserAdminEdit />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
