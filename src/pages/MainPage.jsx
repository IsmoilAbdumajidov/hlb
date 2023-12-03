import React from 'react'
import Navbar from '../components/main/Navbar'
import Header from '../components/main/Header'
import CountNumber from '../components/main/CountNumber'

const MainPage = () => {
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
    </div>
  )
}

export default MainPage