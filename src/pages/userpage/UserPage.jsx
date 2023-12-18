import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { instance } from '../../api/axios';
import { clearLS } from '../../utils/localStorage';

const UserPage = () => {
    const navigate = useNavigate();
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
    return (
        <div className=''>
            UserPage
            <Outlet />
        </div>
    )
}

export default UserPage