import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import AddKursForm from './AddKursForm';
import AccordionAdmin from '../../../accordion/AccordionAdmin';
import { patchCourse, postCourse } from '../../../../hooks/AdminApi';

const AddKurs = ({ courseData }) => {
    const [open, setOpen] = useState(false);
    const [isPost, setIsPost] = useState("")
    const [initialValues, setInitialValues] = useState({ title: "", poster_image: "" })

    const { mutate, isSuccess } = postCourse()

    const { mutate: patchMutate } = patchCourse()

    const onSubmit = () => {
        const formData = new FormData();
        formData.append('image', initialValues.poster_image);
        if (isPost) {
            mutate(
                {
                    poster_image: initialValues.poster_image,
                    title: initialValues.title
                })
        }
        else {
            console.log(initialValues);
            patchMutate(
                {
                    title: initialValues.title,
                    poster_image: initialValues.poster_image,
                    id: initialValues.id
                }
            )
        }


    }

    useEffect(() => {
        if (isSuccess) {
            setOpen(false)
        }
    }, [isSuccess])
    const EditCourse = (element) => {
        setInitialValues({ id: element.id, title: element.title })
        setOpen(true)
    }


    const handleOpen = () => { setOpen(!open), setIsPost(true), setInitialValues("") };
    return (
        <div className='mt-10'>
            <AddKursForm open={open} handleOpen={handleOpen} setInitialValues={setInitialValues} onSubmit={onSubmit} initialValues={initialValues} />
            <div className='flex justify-end'>
                <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Kurs Qo'shish</span>
                </Button>
            </div>
            {courseData ?
                <div className='overflow-x-scroll'>
                    <div className='border-b px-3 text-sm    font-semibold min-w-[900px] py-2 border-gray-400 flex justify-between'>
                        <div className='flex flex-1 gap-5 items-center'>
                            <div className='w-14'>Rasm</div>
                            <div>Sarlavha</div>
                        </div>
                        <div className='w-[100px]'>Sozlamalar</div>
                    </div>
                    <div className='min-w-[900px]'>
                        {courseData?.map((data, i) => (
                            <AccordionAdmin setIsPost={setIsPost} edit={EditCourse} key={i} data={data} />
                        ))}
                    </div>
                </div>

                : "Kurslar kitilmadi..."}

        </div>
    )
}

export default AddKurs