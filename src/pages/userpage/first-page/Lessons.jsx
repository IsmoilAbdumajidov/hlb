import React from 'react'
import AccordionCom from '../../../components/accordion/AccordionCom';
import { useNavigate, useParams } from 'react-router-dom';
import { getLessonByID, subscribeCourse } from '../../../hooks/CoursesApi';
import TitleDashboard from '../../../components/user-page/TitleDashboard';
import { getFromLS } from '../../../utils/localStorage';
import { jwtDecode } from 'jwt-decode';
import Spinner from '../../../components/spinner/Spinner';
import BuyModule from '../../../components/buyModule/BuyModule';
import { useState } from 'react';

const Lessons = () => {
    const { kursSlug } = useParams()
    const navigate = useNavigate()
    const { data: dataLesson, isFetching } = getLessonByID(kursSlug)
    const [open, setOpen] = useState(false)
    console.log(dataLesson);
    const { mutate, data: dataSubscripeCours } = subscribeCourse({ navigate, setOpen })
    // console.log(dataSubscripeCours)
    const clickHandler = () => {
        const id = jwtDecode(getFromLS("a-token"))?.student_id

        mutate(
            {
                student: id,
                course: kursSlug
            }
        )
    }

    const closeMoudle = () => {
        setOpen(false)
    }



    return (
        <div>
            {isFetching && <Spinner />}
            {/* {open && <BuyModule></BuyModule>} */}
            <BuyModule data={dataSubscripeCours?.data} handleOpen={closeMoudle} open={open} title={"Sotib olish"} >
                <h1>
                    Lorem ipsum dolor sit amet.
                </h1>
            </BuyModule>
            <div className='border-b flex justify-between mb-3 pb-3 items-center border-black/10'>
                <TitleDashboard title={"Kurslar"} />
                {(dataLesson?.data.length !== 0 || dataLesson?.data[0]?.my_course===false) && <button onClick={clickHandler} className='bg p-2 rounded text-white'>Kursga yozilish</button>}
            </div>
            <div className='flex flex-col gap-4'>
                {dataLesson?.data.map((item, i) => (
                    <div key={i} className='shadow rounded-lg'>
                        <AccordionCom data={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Lessons