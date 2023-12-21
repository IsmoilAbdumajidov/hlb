import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { instance } from '../../api/axios';
import { clearLS } from '../../utils/localStorage';
import UserNavbar from './UserNavbar';
import UserSaidbar from './UserSaidbar';

const UserPage = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    instance.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        if ((error.response && error?.response?.status === 401) || error?.response?.status === 403) {
            clearLS()
            navigate("/register");
        } else if (error.response && error.response.status === 500) {
            console.log(error);
        }

        return Promise.reject(error);
    });

    const logOut = () => {
        clearLS()
        navigate("/register")
    }

    return (
        <div className='bg-[#F3F4F6] min-h-screen'>
            <UserNavbar logOut={logOut} isOpen={isOpen} />

            <UserSaidbar setIsOpen={setIsOpen} isOpen={isOpen} />

            <Outlet />
            <div className={`${isOpen ? "ml-12" : "ml-12 md:ml-60"}  transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4 `}>
                loremm5000
            </div>
        </div>
    )
}

export default UserPage