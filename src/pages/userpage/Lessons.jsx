import React from 'react'
import AccordionCom from '../../components/accordion/AccordionCom';
import { useParams } from 'react-router-dom';
import { getLessonByID, subscribeCourse } from '../../hooks/CoursesApi';
import TitleDashboard from '../../components/user-page/TitleDashboard';
import { getFromLS } from '../../utils/localStorage';
import { jwtDecode } from 'jwt-decode';

const Lessons = () => {
    const { kursSlug } = useParams()
    const { data } = getLessonByID(kursSlug)
    console.log(kursSlug);
    // console.log(data);
    const id = jwtDecode(getFromLS("a-token")).student_id
    console.log(jwtDecode(getFromLS("a-token")));
    const { mutate } = subscribeCourse()
    const clickHandler = () => {
        mutate(
            {
                student: id,
                course: kursSlug
            }
        )
    }

    return (
        <div>
            <div className='border-b flex justify-between mb-3 pb-3 items-center border-black/10'>
                <TitleDashboard title={"Kurslar"} />
                <button onClick={clickHandler} className='bg p-2 rounded text-white'>Kursga yozilish</button>
            </div>
            <div className='flex flex-col gap-4'>
                {data?.data.map((item, i) => (
                    <div key={i} className='shadow rounded-lg'>
                        <AccordionCom data={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Lessons