import React from 'react'
import PassInput from './PassInput'

const SignIn = () => {
    const inputStyle = "w-full bg-gray-50 rounded-md py-3  focus:outline-[#FF663B]"
    return (
        <div className='bg-white shadow-lg rounded-xl  p-10'>
            <h1 className='text-2xl font-bold mb-5'>Kirish</h1>
            <form className='flex flex-col gap-6'>
                <div>
                    <label className='text-sm' htmlFor="username">Username</label>
                    <input className={inputStyle} type="text" id='username' placeholder='Usernameni kiring' />
                </div>
                <div>
                    <label className='text-sm' htmlFor="password">Parol</label>
                    <PassInput id={"password1"} placeholder={"Parolingizni kiriting"} className={inputStyle} />
                </div>
                <button className='bg mt-6 rounded-md py-3 hover:shadow-lg hover:shadow-[#FF663B] text-white '>Kirish</button>
            </form>
        </div>
    )
}

export default SignIn