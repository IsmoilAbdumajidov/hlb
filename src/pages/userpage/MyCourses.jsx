import { jwtDecode } from 'jwt-decode'
import React from 'react'
import { getFromLS } from '../../utils/localStorage'
import { getMyCourses } from '../../hooks/CoursesApi'

const MyCourses = () => {
    const id = jwtDecode(getFromLS("a-token")).student_id
    const {data} = getMyCourses(id)
    console.log(data);
  return (
    <div>MyCourses</div>
  )
}

export default MyCourses