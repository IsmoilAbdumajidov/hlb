import React, { useState } from 'react'
import '../css/hover.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='border-b border-white/60 bg-white/50 fixed w-full top-0 left-0 z-30 backdrop-blur-md'>
      <nav className={`flex flex-col lg:flex-row justify-centerlgd:items-center lg:justify-between main-container w-full py-3  `}>
        <div className=' flex w-full py-3  lg:w-auto justify-between items-center'>
          <h1 className='text-bg text-4xl font-bold'>HLB</h1>
          <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden bg p-2 px-3 rounded-md text-white'>

            {
              isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            }
          </button>
        </div>
        <ul className={`${isOpen ? "h-full lg:h-auto mt-6" : "h-0 lg:h-auto mt-0"} overflow-hidden flex  lg:mt-0 text-xl lg:text-base  flex-col lg:flex-row  w-full lg:w-auto lg:items-center gap-4 lg:gap-10`}>
          <li className='border-b-2 lg:border-b-0 border-dotted'><a className='hvr-underline-from-left py-2' href="#">Home</a></li>
          <li className='border-b-2 lg:border-b-0 border-dotted'><a className='hvr-underline-from-left py-2' href="#">Biz haqimizda</a></li>
          <li className='border-b-2 lg:border-b-0 border-dotted'><a className='hvr-underline-from-left py-2' href="#">Kurslar</a></li>
          <li className='border-b-2 lg:border-b-0 border-dotted'><a className='hvr-underline-from-left py-2' href="#">Fikirlar</a></li>
          <select className='rounded-none w-max border-0 border-b-2 border-[#FCAF3C]'>
            <option className='hover:bg-[#FCAF3C]' value="uz">uz</option>
            <option className='hover:bg-[#FCAF3C]' value="eng">eng</option>
            <option className='hover:bg-[#FCAF3C]' value="ru">ru</option>
          </select>
          <button className='bg lg:ms-auto mt-auto lg:mt-0 rounded-lg w-full lg:w-auto text-white px-7 py-3 '>Click Me</button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar