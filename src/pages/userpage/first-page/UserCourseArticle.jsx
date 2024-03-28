import React, { useEffect } from 'react'
import TitleDashboard from '../../../components/user-page/TitleDashboard'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

const UserCourseArticle = () => {
    const location = useLocation().pathname.split("/")
    const navigate = useNavigate();
    console.log(location);
    useEffect(() => {
        if (location[location.length - 1] === "user-page") {
            navigate("all")
        }
    }, [])
    return (
        <div>
            <div className='border-b flex flex-wrap justify-between mb-3 pb-3 items-center border-black/10'>
                <TitleDashboard title={`${location[3] !== "lessons" ? "Kurslarim" : "Mavzular"}`} />
                <div className='rounded-lg flex   items-center p-2 gap-2 bg-white w-max'>
                    <Link to={"kurs"} className={`${location[3] !== "mavzu" ? "bg" : "hover:bg-gray-100"} p-1 px-4 rounded-md transition-all`}>Kurslar</Link>
                    <Link to={"mavzu"} className={`${location[3] === "mavzu" ? "bg" : "hover:bg-gray-100"} p-1 px-4 rounded-md transition-all`}>Articles</Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default UserCourseArticle