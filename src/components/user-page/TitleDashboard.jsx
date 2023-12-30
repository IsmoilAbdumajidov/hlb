import Title from 'antd/es/skeleton/Title'
import React from 'react'

const TitleDashboard = ({ title }) => {
    return (
        <>
            <div className='absolute w-36 h-1 -top-5 left-[50%] -translate-x-[50%] bg-[#ff663b]'></div>
            <div className='text-bg text-2xl  font-semibold '>{title}</div>
        </>

    )
}

export default TitleDashboard