import { jwtDecode } from 'jwt-decode'
import React from 'react'
import { getFromLS } from '../../utils/localStorage'
import { getMyCourses } from '../../hooks/CoursesApi'
import TitleDashboard from '../../components/user-page/TitleDashboard'
import CourseCard from '../../components/user-page/CourseCard'
import Skeleton from '../../components/Skeleton/Skeleton'

const MyCourses = () => {
  const id = jwtDecode(getFromLS("a-token")).student_id
  const { data, isFetching } = getMyCourses(id)
  return (
    <div>
      {isFetching ? <Skeleton /> :
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 lg:grid-cols-3 mt-10 xl:grid-cols-4">
          {data?.data.map((item, i) =>
          (
            <CourseCard path="lessons/" type="myCourse" item={item} key={i} />
          ))}
        </div>
      }
    </div>
  )
}

export default MyCourses