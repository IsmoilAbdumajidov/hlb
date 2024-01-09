import React from 'react'
import "./spinner.css"

const Spinner = () => {
    return (
        <div className='fixed w-full h-screen top-0 left-0 z-20 bg-white/20 backdrop-blur-md flex justify-center items-center'>
            <div className="hollow-dots-spinner">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}

export default Spinner