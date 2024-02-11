import React from 'react'
import TitleDashboard from '../../components/user-page/TitleDashboard'
import { Link, Outlet, useLocation } from 'react-router-dom'

const UserCourseArticle = () => {
    const location = useLocation().pathname.split("/")[3]
    return (
        <div>
            <div className='border-b flex flex-wrap justify-between mb-3 pb-3 items-center border-black/10'>
                <TitleDashboard title={`${location !== "lessons" ? "Kurslarim" : "Mavzular"}`} />
                <div className='rounded-lg flex   items-center p-2 gap-2 bg-white w-max'>
                    <Link to={"kurs"} className={`${location !== "mavzu" ? "bg" : "hover:bg-gray-100"} p-1 px-4 rounded-md transition-all`}>Kurslar</Link>
                    <Link to={"mavzu"} className={`${location === "mavzu" ? "bg" : "hover:bg-gray-100"} p-1 px-4 rounded-md transition-all`}>Articles</Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default UserCourseArticle