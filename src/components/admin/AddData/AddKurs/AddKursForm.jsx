import React from 'react'
import Module from '../../../module/Module'
import { ErrorMessage, Form, Formik } from 'formik'
import InputComponent from '../../../input/InputComponent'
import { Button } from '@material-tailwind/react'

const AddKursForm = ({setInitialValues,handleOpen,onSubmit,open,initialValues}) => {
    return (
        <Module open={open} handleOpen={handleOpen} title={"Kurs qo'shish"}>
            <Formik onSubmit={onSubmit} initialValues={initialValues} >
                {formik => {
                    return (
                        <Form className='flex flex-col gap-6'>
                            <div>
                                <label className='text-sm' htmlFor="title_course">Username</label>
                                <InputComponent value={initialValues.title} onChange={(e) => setInitialValues({ ...initialValues, title: e.target.value })} typeInput={"text"} name={"title"} id={"title_course"} placeholder={"Kurs sarlavhasini kiriting"} />
                                <ErrorMessage className='text-red-500 normal-case text-sm' component="div" name="title" />
                            </div>
                            <div>
                                <label className='text-sm' htmlFor="file_course">File</label>
                                <input onChange={(e) => setInitialValues({ ...initialValues, poster_image: e.target.files[0] })} type={"file"} name={"poster_image"} id={"file_course"} className={`w-full bg-gray-50 rounded-md py-3  focus:outline-[#FF663B]`} />

                            </div>
                            <div className='flex justify-end gap-3'>
                                <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
                                    <span>Cancel</span>
                                </Button>
                                <Button disabled={!initialValues.title} type='submit' variant="gradient" color="green">
                                    <span>Confirm</span>
                                </Button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </Module>
    )
}

export default AddKursForm