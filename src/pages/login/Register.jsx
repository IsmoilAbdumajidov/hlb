import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import RegisterAnim from '../../components/LottiAnimations/RegisterAnimation/RegisterAnim'
import { getFromLS } from '../../utils/localStorage'
import { FaArrowLeft } from "react-icons/fa6";
const Register = () => {
    const navigate = useNavigate()
    const [isOpen, setisOpen] = useState('')
    const location = useLocation()
    const token = getFromLS("a-token")
    useEffect(() => {
        if (token) {
            navigate("/user-page")
        }
    }, []);

    useEffect(() => {
        setisOpen(location.pathname.includes("sign-up") ? false : true)
    }, [])

    return (
        <div className='min-h-screen bg-orange-50 py-5'>
            <button onClick={() => navigate('/')} className='border ml-10 bg p-2 text-white rounded-md'>
                <FaArrowLeft className='' />
            </button>
            <div className='h-full main-container items-center grid grid-cols-1 gap-52 lg:grid-cols-2 justify-between'>
                <div>
                    <div className='rounded-lg flex m-auto  items-center p-2 gap-2 mb-7 bg-white w-max'>
                        <button onClick={() => (navigate("sign-in"), setisOpen(true))} className={`${isOpen ? "bg text-white" : "hover:bg-gray-100 transition-all"} p-2 px-3 sm:px-6 rounded-md`}>Kirish</button>
                        <button onClick={() => (navigate("sign-up"), setisOpen(false))} className={`${!isOpen ? "bg text-white" : "hover:bg-gray-100 transition-all"} p-2 px-3 sm:px-6 rounded-md`}>Ro'yxatdan o'tish</button>
                    </div>

                    <Outlet />
                </div>
                <div className='hidden lg:block'>
                    <RegisterAnim />
                </div>
            </div>
        </div>
    )
}

export default Register