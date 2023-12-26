import React from 'react'
import CourseCard from '../../components/user-page/CourseCard'
import { getAllCourses } from '../../hooks/CoursesApi'

const Course = () => {

    const { data } = getAllCourses()
    console.log(data);
    return (
        <div>
            <div className='border-b border-black/10'>
                <div className='absolute w-36 h-1 -top-5 left-[50%] -translate-x-[50%] bg-[#ff663b]'></div>
                <h1 className='text-bg text-3xl pb-5 sm:text-4xl md:text-3xl font-semibold '>Kurslar</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 lg:grid-cols-3 mt-10 xl:grid-cols-4">
                {data?.data.map((item, i) => (
                    <CourseCard item={item} key={i} />
                ))}
            </div>
        </div>
    )
}

export default Course