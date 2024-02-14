import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import TitleDashboard from '../../../components/user-page/TitleDashboard';


const My = () => {
    // ${!location==="kurs" ? "bg" : "hover:bg-gray-100"}
    const location = useLocation().pathname.split("/")[3]
    console.log(location);
    return (
        <div>
            <div className='border-b flex flex-wrap justify-between mb-3 pb-3 items-center border-black/10'>
                <TitleDashboard title={`${location!=="lessons" ? "Mening kurslarim" : "Mening Articllarim"}`} />
                <div className='rounded-lg flex   items-center p-2 gap-2 bg-white w-max'>
                    <Link to={"kurs"} className={`${location!=="lessons" ? "bg" : "hover:bg-gray-100"} p-1 px-4 rounded-md transition-all`}>Kurslarim</Link>
                    <Link to={"lessons"} className={`${location==="lessons" ? "bg" : "hover:bg-gray-100"} p-1 px-4 rounded-md transition-all`}>Articles</Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default My