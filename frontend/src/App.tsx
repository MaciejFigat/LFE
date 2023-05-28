import Nav from './modules/menu/Nav/Nav'
import Home from './screens/Home'
import { GlobalStyle } from './styles/GlobalStyles'
import { useAppSelector } from './app/reduxHooks'
import { Routes, Route, useLocation } from 'react-router-dom'
import ScrollTopHelper from './hooks/ScrollTopHelper'
import UserAdminEdit from './screens/UserAdminEdit'
import UserListAdmin from './screens/UserListAdmin'
import AdminPanel from './screens/AdminPanel'
import StoredFragments from './screens/StoredFragments'
import ResultDisplayIdQueryScreen from './screens/ResultDisplayIdQueryScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import UserProfileScreen from './screens/UserProfileScreen'
import ResetPasswordScreen from './modules/Login/ResetPassword'
import ConfirmAccountScreen from './screens/ConfirmAccountScreen'
import DocumentViewScreen from './screens/DocumentViewScreen'

function App () {
  const location = useLocation()
  const globalScheme: string = useAppSelector(
    state => state.preference.preferedScheme
  )
  return (
    <>
      <ScrollTopHelper />
      <GlobalStyle globalScheme={globalScheme} />
      <Nav />
      <Routes location={location} key={location.key}>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/search/result' element={<DocumentViewScreen />} />
        <Route
          path='/search/result/:id/:query'
          element={<ResultDisplayIdQueryScreen />}
        />
        <Route path='/storage' element={<StoredFragments />} />
        <Route path='/resetpassword/:token' element={<ResetPasswordScreen />} />
        <Route
          path='/confirmaccount/:token'
          element={<ConfirmAccountScreen />}
        />
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/admin/userlist' element={<UserListAdmin />} />
        <Route path='/admin/user/:id/edit' element={<UserAdminEdit />} />
        <Route path='/profile' element={<UserProfileScreen />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
