import React, { useState } from 'react'
import { useLogin } from '../../hooks/PostingRegistration'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { Form, Formik } from 'formik'
import FormControl from '../../utils/form-utils/FormControl'

const SignIn = () => {
    const navigate = useNavigate()
    const { mutate } = useLogin({ navigate })

    // initila values
    const initialValues = {
        username: "",
        password: "",
    }
    // validation
    const validationSchema = Yup.object({
        username: Yup.string().required("Ma'lumot kiritlmadi"),
        password: Yup.string().required("Ma'lumot kiritilmadi").max(8, "8 tadan kam belgi kiritishingiz kerak").min(4, "4 tadan ko'p belgi kiritishingiz kerak")
    })

    // onsubmit function
    const onSubmit = (values, onSubmitProps) => {
        const res = { ...values, username: values.username.toLowerCase() }
        // console.log("Form data", values)
        mutate(res)
        setTimeout(() => {
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
        }, 3000);
    }

    return (

        <div className='bg-white shadow-lg rounded-xl p-5  sm:p-10'>
            <h1 className='text-2xl font-bold mb-5'>Kirish</h1>
            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                {
                    formik =>
                    (
                        <Form className='flex flex-col gap-6'>
                            <FormControl control={"input"} name={"username"} label={"Username"} placeholder={"Usernameni kiriting"} />
                            <FormControl maxLength={8} control={"password"} name={"password"} label={"Parol"} placeholder={"Parolingizni kiriting"} />
                            <button disabled={!formik.isValid || formik.isSubmitting} type='submit' className='bg mt-6 rounded-md py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#FF663B] text-white '>Submit</button>

                        </Form>
                    )

                }
            </Formik>
        </div>
    )
}

export default SignIn