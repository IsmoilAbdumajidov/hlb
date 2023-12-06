import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import PageNotFound from './pages/PageNotFound'
import Register from './components/login/Register'
import SignUp from './components/login/SignUp'
import SignIn from './components/login/SignIn'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/register' element={<Register/>}>
            <Route index element={<SignIn/>} />
            <Route path='sign-up' element={<SignUp/>} />
            <Route path='sign-in' element={<SignIn/>} />
        </Route>
      </Routes>




    </div>
  )
}

export default App