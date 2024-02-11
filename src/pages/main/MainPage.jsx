import React from 'react'
import Navbar from '../../components/main/Navbar'
import Header from '../../components/main/Header'
import CountNumber from '../../components/main/CountNumber'
import Courses from '../../components/main/Courses'
import OurPartners from '../../components/main/OurPartners'
import Footer from '../../components/main/Footer'
import "../../components/main/header.css"
import { useNavigate } from 'react-router-dom'
import { getFromLS } from '../../utils/localStorage'
import { useEffect } from 'react'

const MainPage = () => {
  const navigate = useNavigate()
  const token = getFromLS("a-token")
  useEffect(() => {
    if (token) {
      navigate("/user-page/all")
    }
  }, []);
  return (
    <div>
      <div className="header_img">
        <div className='bg_second pt-[78px]'>
          <Navbar />
          <div className='bg-white/20  backdrop-blur-lg'>
            <Header />
          </div>
        </div>
      </div>
      <CountNumber/>
      <Courses/>
      <OurPartners/>
      <Footer/>
    </div>
  )
}

export default MainPage