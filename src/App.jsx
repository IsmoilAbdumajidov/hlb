import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import MainPage from './pages/main/MainPage'
import Register from './pages/login/Register'
import SignUp from './pages/login/SignUp'
import SignIn from './pages/login/SignIn'
import UserPage from './pages/userpage/UserPage'
import PrivateRoute from './router/PrivateRoute'
import { ToastContainer } from 'react-toastify'
import Lessons from './pages/userpage/first-page/Lessons'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import Quiz from './pages/userpage/my/Quiz'
import UserCourseArticle from './pages/userpage/first-page/UserCourseArticle'
import My from './pages/userpage/my/My'
import MyCourses from './pages/userpage/my/MyCourses'
import MyLesson from './pages/userpage/my/MyLesson'
import MyArticle from './pages/userpage/my/MyArticle'
import Course from './pages/userpage/first-page/Course'
import MyIndividualArticel from './pages/userpage/my/MyIndividualArticel'
import IndividualArticles from './pages/userpage/first-page/IndividualArticles'

const App = () => {
  // console.log("sas");

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
          <Route index element={<PrivateRoute path={"all"}><UserCourseArticle /></PrivateRoute>} ></Route>
          <Route path='all' element={<PrivateRoute path={"all"}><UserCourseArticle /></PrivateRoute>} >
            <Route index element={<PrivateRoute path={"kurs"}><Course /></PrivateRoute>} />
            <Route path='kurs' element={<PrivateRoute path={"kurs"}><Course /></PrivateRoute>} />
            <Route path='mavzu' element={<PrivateRoute path={"mavzu"}><IndividualArticles /></PrivateRoute>} />
          </Route>
          <Route path='kurs/lessons/:kursSlug' element={<PrivateRoute path={"kurslar/lessons/:kursSlug"}><Lessons /></PrivateRoute>} />
          <Route path='my' element={<PrivateRoute path={"my"}><My /></PrivateRoute>} >
            <Route index element={<PrivateRoute path={"kurs"}><MyCourses /></PrivateRoute>} />
            <Route path='kurs' element={<PrivateRoute path={"kurs"}><MyCourses /></PrivateRoute>} />
            <Route path='lessons' element={<PrivateRoute path={"lessons"}><MyIndividualArticel /></PrivateRoute>} />
          </Route>
          <Route path='my/kurs/lessons/:myKursSlug' element={<PrivateRoute path={"kurs/lessons/:myKursSlug"}><MyLesson /></PrivateRoute>} />
          <Route path='my/kurs/lessons/:myKursSlug/:articleSlug' element={<PrivateRoute path={"kurs/lessons/:myKursSlug/:articleSlug"}><MyArticle /></PrivateRoute>} />
          <Route path='my/kurs/lessons/:myKursSlug/:articleSlug/quiz' element={<PrivateRoute path={"kurs/lessons/:myKursSlug/:articleSlug/quiz"}><Quiz /></PrivateRoute>} />
        </Route>
      </Routes>




    </div>
  )
}

export default App