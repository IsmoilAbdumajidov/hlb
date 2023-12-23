import React from 'react'
import { useNavigate } from 'react-router-dom'


const CourseCard = () => {
    const navigate = useNavigate()
    return (
        <div className='flex bg-white mt-9 group shadow-md flex-col group  rounded-lg'>
            <div className='aspect-[5/3] px-4 relative'>
                <img className='w-full h-full group-hover:-top-3 transition-all duration-300 relative -top-10 rounded-lg object-cover object-center' src="https://cdn.pixabay.com/photo/2023/05/20/16/54/rose-8006850_640.jpg" alt="" />
            </div>
            <div className='flex flex-col px-5 pb-5'>
                <h1 className='text-2xl  '>Lorem ipsum dolor sit.</h1>
                <button onClick={() => navigate("/user-page/kurslar/lessons")} className='bg py-3 w-full rounded-lg text-white mt-6'>Kirish</button>
            </div>
        </div>
    )
}

export default CourseCard