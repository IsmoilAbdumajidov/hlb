import React from 'react'
// import Tooltips from '../../components/tooltip/Tooltips'
// import { IoLogOutOutline } from "react-icons/io5";
import MenuBar from '../../components/menuBar/MenuBar';

const AdminNavbar = ({ logOut, isOpen }) => {

    return (
        <div className="fixed w-full shadow-md z-30 flex bg-white p-2 items-center justify-center h-16 px-10">
            <div className={`${isOpen ? "ml-12" : ""}   transform ease-in-out duration-500 flex-none h-full flex items-center justify-center`}>
                NERVE
            </div>

            <div className="grow h-full flex items-center justify-center"></div>
            <MenuBar  logOut={logOut} />
            {/* <div className="flex space-x-3 gap-10 items-center px-3">
                <div className="hidden sm:block text-sm md:text-md text-black">{full_name}</div>
                <Tooltips position={"bottom"} content={"LogOut"}>
                    <div onClick={() => logOut()} className='flex w-9 h-9 rounded-md justify-center bg text-2xl text-white items-center'>
                        <IoLogOutOutline />
                    </div>
                </Tooltips>
            </div> */}
        </div>
    )
}

export default AdminNavbar