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
import Course from './pages/userpage/Course'
import Lessons from './pages/userpage/Lessons'
import MyCourses from './pages/userpage/MyCourses'
import MyLesson from './pages/userpage/MyLesson'
import MyArticle from './pages/userpage/MyArticle'
import Quiz from './components/user-page/Quiz'

const App = () => {

  return (
    <div>

      <ToastContainer
        position="top-right"
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
          <Route path='my-kurs' element={<PrivateRoute path={"my-kurs"}><MyCourses /></PrivateRoute>} />
          <Route path='kurslar/lessons/:kursSlug' element={<PrivateRoute path={"kurslar/lessons/:kursSlug"}><Lessons /></PrivateRoute>} />
          <Route path='my-kurs/lessons/:myKursSlug' element={<PrivateRoute path={"my-kurs/lessons/:myKursSlug"}><MyLesson /></PrivateRoute>} />
          <Route path='my-kurs/lessons/:myKursSlug/:articleSlug' element={<PrivateRoute path={"my-kurs/lessons/:myKursSlug/:articleSlug"}><MyArticle /></PrivateRoute>} />
          <Route path='my-kurs/lessons/:myKursSlug/:articleSlug/quiz' element={<PrivateRoute path={"my-kurs/lessons/:myKursSlug/:articleSlug/quiz"}><Quiz /></PrivateRoute>} />
        </Route>
      </Routes>




    </div>
  )
}

export default App