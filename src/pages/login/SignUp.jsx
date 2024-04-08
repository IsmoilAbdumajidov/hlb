import React from 'react'
import { postingRegister } from '../../hooks/PostingRegistration'
import { useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import FormControl from '../../utils/form-utils/FormControl'
import * as Yup from "yup"



const SignUp = () => {

    const navigate = useNavigate()
    const { mutate } = postingRegister({ navigate })

    // initila values
    const initialValues = {
        username: "",
        password: "",
        confirmPassword: "",
        full_name: "",
        phone_number: "",
    }
    // validation
    const validationSchema = Yup.object({
        username: Yup.string().required("Ma'lumot kiritlmadi"),
        full_name: Yup.string().required("Ma'lumot kiritlmadi"),
        phone_number: Yup.string().required("Ma'lumot kiritlmadi"),
        password: Yup.string().required("Ma'lumot kiritilmadi").max(8, "8 tadan kam belgi kiritishingiz kerak").min(4, "4 tadan ko'p belgi kiritishingiz kerak"),
        confirmPassword: Yup.string().required("Ma'lumot kiritilmadi").oneOf([Yup.ref("password"), ""], "Parollar mos kelmadi").max(8, "8 tadan kam belgi kiritishingiz kerak").min(4, "4 tadan ko'p belgi kiritishingiz kerak"),
    })

    // onsubmit function
    const onSubmit = (values, onSubmitProps) => {
        const res = {
            user: {
                username: values.username.toLowerCase(),
                password: values.password,
            },
            full_name: values.full_name,
            phone_number: values.phone_number,
        }
        console.log("Form data", res)
        mutate(res)
        setTimeout(() => {
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
        }, 3000);
    }

    return (

        <div className='bg-white shadow-lg rounded-xl  p-7'>
            <h1 className='text-2xl font-bold mb-5'>Ro'yxatdan o'tish</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik => (
                        <Form className='flex flex-col gap-4'>
                            <FormControl control={"input"} label={"F.I.O"} name={"full_name"} placeholder='F.I.O ni kiring' />
                            <FormControl control={"input"} name={"username"} className={"lowercase"} label={"Username"} placeholder={"Usernameni kiriting"} />
                            <FormControl control={"phone"} name={"phone_number"} label={"Telefon"} maxLength={17} value={"+998"} placeholder="+998 99 123 45 67" />
                            <FormControl maxLength={8} control={"password"} name={"password"} label={"Parol"} placeholder={"Parolingizni kiriting"} />
                            <FormControl maxLength={8} control={"password"} name={"confirmPassword"} label={"Parol"} placeholder={"Parolingizni takrorlang"} />
                            <button disabled={!formik.isValid || formik.isSubmitting} type='submit' className='bg mt-6 rounded-md py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#FF663B] text-white '>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>

    )
}

export default SignUp