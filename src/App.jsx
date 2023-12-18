import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import MainPage from './pages/main/MainPage'
import Register from './pages/login/Register'
import SignUp from './pages/login/SignUp'
import SignIn from './pages/login/SignIn'
import UserPage from './pages/userpage/UserPage'
import Home from './pages/userpage/Home'
import PrivateRoute from './router/PrivateRoute'
import Settings from './pages/userpage/Settings'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/register' element={<Register />}>
          <Route index element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='sign-in' element={<SignIn />} />
        </Route>

        <Route path='/user-page' element={<PrivateRoute path={"/user-page"}><UserPage /></PrivateRoute>}>
          <Route path='home' element={<PrivateRoute path={"/user-page/home"}><Home /></PrivateRoute>} />
          <Route path='settings' element={<PrivateRoute path={"/user-page/settings"}><Settings /></PrivateRoute>} />
        </Route>
      </Routes>




    </div>
  )
}

export default App