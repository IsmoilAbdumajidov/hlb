import React from 'react'

const SignUp = () => {
    return (

        <div className='bg-white shadow-lg rounded-xl  p-10'>
            <h1 className='text-2xl font-bold mb-5'>Ro'yxatdan o'tish</h1>
            <form className='flex flex-col gap-5'>
                <div>
                    <label className='text-sm' htmlFor="email1">Email</label>
                    <input className='w-full bg-gray-50   focus:outline-[#FF663B]' type="email" id='email1' placeholder='Emilingizni kiring' />
                </div>
                <div>
                    <label className='text-sm' htmlFor="password1">Parol</label>
                    <input className='w-full bg-gray-50   focus:outline-[#FF663B]' type="password" id='password1' placeholder='Emilingizni kiring' />
                </div>
                <button className='bg rounded-md py-3 text-white '>Kirish</button>
            </form>
        </div>

    )
}

export default SignUp