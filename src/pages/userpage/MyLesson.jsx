
import React from 'react'
import TitleDashboard from '../../components/user-page/TitleDashboard'
import AccordionCom from '../../components/accordion/AccordionCom'
import { useNavigate, useParams } from 'react-router-dom'
import { getMyLessonByID } from '../../hooks/CoursesApi'
import Spinner from '../../components/spinner/Spinner'

const MyLesson = () => {
    const { myKursSlug } = useParams()
    // console.log(myKursSlug);

    const { data, isFetching } = getMyLessonByID(myKursSlug)

    // console.log(data);
    return (
        <div>
            {isFetching ? <Spinner /> :
                <>
                    <div className='border-b flex justify-between mb-3 pb-3 items-center border-black/10'>
                        <TitleDashboard title={"Mening kurslarim"} />
                    </div>
                    <div className='flex flex-col gap-4'>
                        {data?.data.map((item, i) => (
                            <div key={i} className='shadow rounded-lg'>
                                <AccordionCom parent={"myLesson"} data={item} />
                            </div>
                        ))}
                    </div>
                </>}
        </div>
    )
}

export default MyLesson