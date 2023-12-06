import React from 'react'
// import img from "./img/accountant-animate.svg"
import { Controls, Player } from '@lottiefiles/react-lottie-player'
import anim from "./img/animation.json"

const Header = () => {
    return (
        <div className={`  main-container overflow-hidden  rounded-3xl`}>
            <div className='w-full h-full items-center  flex flex-col py-5 gap-14 lg:h-[600px] lg:flex-row'>
                <div className="w-full text-center lg:text-start lg:w-[50%] pt-10 lg:pt-0">
                    <p className='text-[#FCAF3C] uppercase sm:text-lg tracking-wider'>HLB ONLAYN TA'LIM PLATFORMASI</p>
                    <h1 className='text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold text-[#0C2E60]'>Lorem ipsum dolor sit amet consectetur.</h1>
                    <button className='bg px-6 mt-8 hover:shadow-xl hover:shadow-orange-500 shadow-lg shadow-orange-500/80 py-3 rounded-md text-white'>O'qishni boshlash</button>
                </div>
                <div className='w-full text-center lg:text-start lg:w-[50%]'>
                    {/* <img className='w-full' src={img} alt="" /> */}
                    <Player
                        autoplay
                        loop
                        src={anim}
                        className='w-full'
                    >
                    </Player>
                </div>
            </div>
        </div>
    )
}

export default Header