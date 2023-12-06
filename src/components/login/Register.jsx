import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import RegisterAnim from '../LottiAnimations/RegisterAnimation/RegisterAnim'

const Register = () => {
    const navigate = useNavigate()
    const [isOpen, setisOpen] = useState(true)
    return (
        <div className='h-screen bg-orange-50 py-5'>
            <div className='h-full main-container items-center grid grid-cols-1 gap-52 lg:grid-cols-2 justify-between'>
                <div>
                    <div className='rounded-lg flex m-auto  items-center p-2 gap-2 mb-7 bg-white w-max'>
                        <button onClick={()=>(navigate("sign-in"),setisOpen(true))} className={`${isOpen ? "bg text-white" : "hover:bg-gray-100 transition-all"} p-2 px-3 sm:px-6 rounded-md`}>Kirish</button>
                        <button onClick={()=>(navigate("sign-up"),setisOpen(false))} className={`${!isOpen ? "bg text-white" : "hover:bg-gray-100 transition-all"} p-2 px-3 sm:px-6 rounded-md`}>Ro'yxatdan o'tish</button>
                    </div>
                    <Outlet/>
                </div>
                <div className='hidden lg:block'>
                    <RegisterAnim />
                </div>
            </div>
        </div>
    )
}

export default Register