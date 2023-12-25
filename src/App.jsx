import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import MainPage from './pages/main/MainPage'
import Register from './pages/login/Register'
import SignUp from './pages/login/SignUp'
import SignIn from './pages/login/SignIn'
import UserPage from './pages/userpage/UserPage'
import PrivateRoute from './router/PrivateRoute'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { getFromLS } from './utils/localStorage'
import Course from './pages/userpage/Course'
import Lessons from './pages/userpage/Lessons'

const App = () => {

  return (
    <div>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/register' element={<Register />}>
          <Route index element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='sign-in' element={<SignIn />} />
        </Route>

        <Route path='/user-page' element={<PrivateRoute path={"/user-page"}><UserPage /></PrivateRoute>}>
          <Route index element={<PrivateRoute path={"kurslar"}><Course /></PrivateRoute>} />
          <Route path='kurslar' element={<PrivateRoute path={"kurslar"}><Course /></PrivateRoute>} />
          <Route path='kurslar/lessons/:kursId' element={<PrivateRoute path={"lessons"}><Lessons /></PrivateRoute>} />
        </Route>
      </Routes>




    </div>
  )
}

export default App