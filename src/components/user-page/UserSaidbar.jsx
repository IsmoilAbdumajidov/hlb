import React from 'react'
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { LuArrowLeft } from "react-icons/lu";
import { NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineAcademicCap } from "react-icons/hi2";

const UserSaidbar = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate()
    return (
        <div className={`${isOpen ? "-translate-x-48" : "translate-x-none"}   w-60  fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B]`}>
            <div className={`${isOpen ? "translate-x-24 scale-x-0" : "translate-x-0"}  w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white  bg-[#1E293B]  absolute top-2 rounded-full h-12`}>
                <div onClick={() => navigate(-1)} className='w-8 flex justify-center cursor-pointer ml-5'><LuArrowLeft className='text-white w-5 h-5 text-xl' /></div>
                <div className="flex items-center space-x-3 group bg_liner pl-10 pr-2 py-1 rounded-full text-white ">
                    <div className="transform ease-in-out duration-300 mr-12">
                        NERVE
                    </div>
                </div>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="-right-6 transition transform ease-in-out duration-500 flex border-4 border-white bg absolute top-2 p-3 rounded-full text-white hover:rotate-45">
                <HiOutlineSquares2X2 />
            </div>
            <div className={`${isOpen ? "hidden" : "flex"} text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]`}>
                <NavLink to={"kurslar"} className="hover:ml-4 w-full text-white hover:text-[#FCAF3C] bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                    <HiOutlineAcademicCap />
                    <div>
                        Kurslar
                    </div>
                </NavLink>
                <NavLink to={"my-kurs"} className="hover:ml-4 w-full text-white hover:text-[#FCAF3C] bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>

                    <div>
                        Courses
                    </div>
                </NavLink>
                <NavLink to={"sallom"} className="hover:ml-4 w-full text-white hover:text-[#FCAF3C] bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                    </svg>

                    <div>
                        Graph
                    </div>
                </NavLink>
            </div>

            <div className={`${isOpen ? "flex" : "hidden"}  mt-20 flex-col space-y-2 w-full h-[calc(100vh)]`}>
                <div className="hover:ml-4 justify-end pr-5 text-white hover:text-[#FCAF3C] w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                    <HiOutlineAcademicCap />
                </div>
                <div className="hover:ml-4 justify-end pr-5 text-white hover:text-[#FCAF3C] w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                </div>
                <div className="hover:ml-4 justify-end pr-5 text-white hover:text-[#FCAF3C] w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default UserSaidbar