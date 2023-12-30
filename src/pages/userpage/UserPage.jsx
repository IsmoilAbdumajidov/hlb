import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { instance } from '../../api/axios';
import { clearLS } from '../../utils/localStorage';
import UserSaidbar from '../../components/user-page/UserSaidbar';
import UserNavbar from '../../components/user-page/UserNavbar';

const UserPage = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)


    const logOut = () => {
        clearLS()
        navigate("/register")
    }

    return (
        <div className='bg-[#EEEEEE] min-h-screen'>
            <UserNavbar logOut={logOut} isOpen={isOpen} />

            <UserSaidbar setIsOpen={setIsOpen} isOpen={isOpen} />

            <div className={`${isOpen ? "ml-12" : "ml-12 md:ml-60"}  transform ease-in-out duration-500 pt-20 px-2 md:px-8 pb-4 `}>
                <Outlet />
            </div>
        </div>
    )
}

export default UserPage