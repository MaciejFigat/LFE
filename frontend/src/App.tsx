import Nav from './components/menu/Nav/Nav'
import Home from './screens/Home'
import { GlobalStyle } from './styles/GlobalStyles'
import { useAppSelector } from './app/reduxHooks'
import { Routes, Route, useLocation } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'
import ScrollTopHelper from './components/ScrollTopHelper'
import UserAdminEdit from './screens/UserAdminEdit'
import UserListAdmin from './screens/UserListAdmin'
import UserProfile from './screens/UserProfile'
import AdminPanel from './screens/AdminPanel'
import ResetPassword from './screens/ResetPassword'
import ConfirmAccount from './screens/ConfirmAccount'
// import Contact from './screens/Contact'
import StoredFragments from './screens/StoredFragments'
import ResultDisplayScreen from './screens/ResultDisplayScreen'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import ResultDisplayIdQueryScreen from './screens/ResultDisplayIdQueryScreen'

function App() {
  const location = useLocation()
  const globalScheme: any = useAppSelector(
    (state) => state.preference.preferedScheme
  )
  return (
    <>
      <ScrollTopHelper />
      <GlobalStyle globalScheme={globalScheme} />
      <Nav />
      <Routes location={location} key={location.key}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/search/result' element={<ResultDisplayScreen />} />
        <Route
          path='/search/result/:id/:query'
          element={<ResultDisplayIdQueryScreen />}
        />
        <Route path='/storage' element={<StoredFragments />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/confirmaccount' element={<ConfirmAccount />} />
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
