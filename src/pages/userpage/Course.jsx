import React from 'react'
import CourseCard from '../../components/user-page/CourseCard'
import { getAllCourses } from '../../hooks/CoursesApi'
import TitleDashboard from '../../components/user-page/TitleDashboard'

const Course = () => {

    const { data } = getAllCourses()
    console.log(data);
    return (
        <div>
            <TitleDashboard title={"Kurslar"}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 lg:grid-cols-3 mt-10 xl:grid-cols-4">
                {data?.data.map((item, i) => (
                    <CourseCard item={item} key={i} />
                ))}
            </div>
        </div>
    )
}

export default Course