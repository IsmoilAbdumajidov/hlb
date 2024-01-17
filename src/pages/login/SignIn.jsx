import React, { useState } from 'react'
import PassInput from '../../components/input/PassInput'
import { useLogin } from '../../hooks/PostingRegistration'
import { useNavigate } from 'react-router-dom'
import InputComponent from '../../components/input/InputComponent'

const inputStyle = "w-full bg-gray-50 rounded-md py-3  focus:outline-[#FF663B]"

const SignIn = () => {
    const from = location.state?.from?.pathname || "/user-page"
    const [data, setData] = useState({ username: "", password: "" })
    const navigate = useNavigate()

    const inputHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const {mutate} = useLogin({navigate})

    const onSubmit = (e) => {
        e.preventDefault()
        const res = {...data, username:data.username.toLowerCase()}
        console.log(res);
        mutate(res)
    }

    return (
        <div className='bg-white shadow-lg rounded-xl  p-10'>
            <h1 className='text-2xl font-bold mb-5'>Kirish</h1>
            <form onSubmit={onSubmit} className='flex flex-col gap-6'>
                <div>
                    <label className='text-sm' htmlFor="username">Username</label>
                    <InputComponent name='username' onChange={inputHandler} className={`lowercase`} type="text" id='username' placeholder='Usernameni kiring' />
                </div>
                <div>
                    <label className='text-sm' htmlFor="password">Parol</label>
                    <PassInput name={"password"} onChange={inputHandler} id={"password1"} placeholder={"Parolingizni kiriting"} className={inputStyle} />
                </div>
                <button className='bg mt-6 rounded-md py-3 hover:shadow-lg hover:shadow-[#FF663B] text-white '>Kirish</button>
            </form>
        </div>
    )
}

export default SignIn