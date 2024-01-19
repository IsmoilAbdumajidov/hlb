import { Button } from '@material-tailwind/react'
import React, { useEffect, useRef, useState } from 'react'
import Module from '../../components/module/Module';
import InputComponent from '../../components/input/InputComponent';
import AccordionAdmin from '../../components/accordion/AccordionAdmin';
import { getCourseAdmin, postCourse } from '../../hooks/AdminApi';
import { instance } from '../../api/axios';
import { ErrorMessage, Form, Formik } from 'formik';

const validate = values => {
    let errors = {}

    // username
    if (!values.title) {
        errors.title = "Маълумотни тўлдиринг"
    }


    return errors
}

const AddKurs = () => {
    const [open, setOpen] = React.useState(false);
    const [file, setFile] = useState('')
    const [title, setTitle] = useState('')
    const refinp = useRef()

    const { mutate, data, error, isSuccess } = postCourse()
    const { data: courseData } = getCourseAdmin()

    // const onSubmit = async () => {
    //     const formData = new FormData();
    //     formData.append('image', file);
    //     mutate(
    //         {
    //             poster_image: file,
    //             title: title
    //         }
    //     )
    // }
    const onSubmit = (value) => {
        const formData = new FormData();
        formData.append('image', file);
        mutate(
            {
                poster_image: file,
                title: value.title
            })

    }

    const initialValues = {
        title: "",
        poster_image: ""
    }

    useEffect(() => {
        if (isSuccess) {
            setOpen(false)
        }
    }, [isSuccess])



    const handleOpen = () => setOpen(!open);
    return (
        <div className='mt-10'>
            <Module open={open} handleOpen={handleOpen} title={"Kurs qo'shish"}>
                <Formik onSubmit={onSubmit} initialValues={initialValues} validate={validate}>
                    {formik => {
                        return (
                            <Form className='flex flex-col gap-6'>
                                <div>
                                    <label className='text-sm' htmlFor="title_course">Username</label>
                                    <InputComponent typeInput={"text"} name={"title"} id={"title_course"} placeholder={"Kurs sarlavhasini kiriting"} />
                                    <ErrorMessage className='text-red-500 normal-case text-sm' component="div" name="title" />
                                </div>
                                <div>
                                    <label className='text-sm' htmlFor="file_course">File</label>
                                    <input onChange={(e) => setFile(e.target.files[0])} type={"file"} name={"poster_image"} id={"file_course"} className={`w-full bg-gray-50 rounded-md py-3  focus:outline-[#FF663B]`} />

                                </div>
                                <div className='flex justify-end gap-3'>
                                    <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
                                        <span>Cancel</span>
                                    </Button>
                                    <Button disabled={!formik.isValid || !file} type='submit' variant="gradient" color="green" onClick={onSubmit}>
                                        <span>Confirm</span>
                                    </Button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>

                {/* <form className='flex flex-col gap-6'>
                    <div>
                        <label className='text-sm' htmlFor="title_course">Username</label>
                        <InputComponent onChange={((e) => setTitle(e.target.value))} refProp={title_course} id={"title_course"} placeholder={"Kurs sarlavhasini kiriting"} />
                    </div>
                    <div>
                        <label className='text-sm' htmlFor="file_course">Username</label>
                        <InputComponent onChange={(e) => setFile(e.target.files[0])} refProp={file_course} id={"file_course"} type={"file"} />
                    </div>
                </form> */}
            </Module>
            <div className='flex justify-end'>
                <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Kurs Qo'shish</span>
                </Button>
            </div>
            {courseData ?
                <div className='overflow-x-scroll'>
                    <div className='border-b px-3 text-sm font-semibold min-w-[900px] py-2 border-gray-400 grid  grid-cols-12'>
                        <div className='flex col-span-11 gap-5 items-center'>
                            <div className='w-16'>Rasm</div>
                            <div>Sarlavha</div>
                        </div>
                        <div className='col-span-1'>Sozlamalar</div>
                    </div>
                    <div>
                        {courseData?.data.map((data, i) => (
                            <AccordionAdmin key={i} data={data} />
                        ))}
                    </div>
                </div>

                : "Kurslar kitilmadi..."}

        </div>
    )
}

export default AddKurs