import React from 'react'
import CourseCard from '../../../components/user-page/first-page/CourseCard'
import { getAllCourses } from '../../../hooks/CoursesApi'
import TitleDashboard from '../../../components/user-page/TitleDashboard'
import Skeleton from '../../../components/Skeleton/Skeleton'

const Course = () => {

    const { data, isFetching } = getAllCourses()
    // console.log(data);
    return (
        <div>
            {isFetching ? <Skeleton /> :
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 lg:grid-cols-3 mt-10 xl:grid-cols-4">
                    {data?.data.map((item, i) => (
                        <CourseCard path="/user-page/kurslar/lessons/" type="allCourse" item={item} key={i} />
                    ))}
                </div>
            }
        </div>
    )
}

export default Course