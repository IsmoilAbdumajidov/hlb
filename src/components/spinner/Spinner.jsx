import React from 'react'
import "./spinner.css"

const Spinner = () => {
    return (
        <div className='fixed w-full h-screen top-0 left-0 z-20 bg-white/20 backdrop-blur-md flex justify-center items-center'>
            <div className="fingerprint-spinner">
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
            </div>
        </div>
    )
}

export default Spinner