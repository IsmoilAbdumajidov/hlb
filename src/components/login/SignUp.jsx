import React from 'react'
import { PatternFormat } from 'react-number-format'
import PassInput from './PassInput'


const SignUp = () => {
    return (

        <div className='bg-white shadow-lg rounded-xl  p-7'>
            <h1 className='text-2xl font-bold mb-5'>Ro'yxatdan o'tish</h1>
            <form className='flex flex-col gap-4'>
                <div>
                    <label className='text-sm' htmlFor="fio">F.I.O</label>
                    <input className='w-full bg-gray-50 rounded-md py-3  focus:outline-[#FF663B]' type="text" id='fio' placeholder='F.I.O ni kiring' />
                </div>
                <div>
                    <label className='text-sm' htmlFor="username">Username</label>
                    <input className='w-full bg-gray-50 rounded-md py-3  focus:outline-[#FF663B]' type="text" id='username' placeholder='Usernameni kiring' />
                </div>
                <div>
                    <label className='text-sm' htmlFor="username">Username</label>
                    <PatternFormat format="+998 (##) ### ## ##" className='w-full bg-gray-50 rounded-md py-3  focus:outline-[#FF663B]'   placeholder="+998 99 123 45 67"/>
                </div>
                <div>
                    <label className='text-sm' htmlFor="password">Parol</label>
                    <PassInput id={"password"}  placeholder={"Parolingizni kiriting"} className={"w-full bg-gray-50 rounded-md py-3  focus:outline-[#FF663B]"} />
                </div>
                    <div>
                        <label className='text-sm' htmlFor="password1">Parol</label>
                        <PassInput id={"password1"}  placeholder={"Parolingizni kiriting"} className={"w-full bg-gray-50 rounded-md py-3  focus:outline-[#FF663B]"} />
                    </div>
                <button className='bg mt-4 rounded-md py-3 hover:shadow-lg hover:shadow-[#FF663B] text-white '>Kirish</button>
            </form>
        </div>

    )
}

export default SignUp