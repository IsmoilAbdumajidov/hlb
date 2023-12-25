import React from 'react'
import AccordionCom from '../../components/accordion/AccordionCom';
import { useParams } from 'react-router-dom';
import { getLessonByID } from '../../hooks/CoursesApi';

const Lessons = () => {
    const { kursId } = useParams()
    const {data} = getLessonByID(kursId)
    console.log(data);
    return (
        <div>
            <div className='border-b mb-6 border-black/10'>
                <div className='absolute w-36 h-1 -top-5 left-[50%] -translate-x-[50%] bg-[#ff663b]'></div>
                <h1 className='text-bg text-3xl pb-5 sm:text-4xl md:text-3xl font-semibold '>Kurslar</h1>
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