import React from 'react'
// import { IoLogOutOutline } from "react-icons/io5";
// import Tooltips from '../tooltip/Tooltips';
import MenuBar from '../menuBar/MenuBar';


const UserNavbar = ({ logOut, isOpen }) => {
    return (
        <div className="fixed w-full shadow-md z-30 flex bg-white p-2 items-center justify-center h-16 px-10">
            <div className={`${isOpen ? "ml-12" : ""}   transform ease-in-out duration-500 flex-none h-full flex items-center justify-center`}>
                NERVE
            </div>

            <div className="grow h-full flex items-center justify-center"></div>
            <MenuBar  logOut={logOut} />
        </div>
    )
}

export default UserNavbar