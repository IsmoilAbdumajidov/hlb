import React from 'react'
import { IoLogOutOutline } from "react-icons/io5";
import Tooltips from '../tooltip/Tooltips';


const UserNavbar = ({ logOut, isOpen }) => {
    return (
        <div className="fixed w-full shadow-md z-30 flex bg-white p-2 items-center justify-center h-16 px-10">
            <div className={`${isOpen ? "ml-12" : ""}   transform ease-in-out duration-500 flex-none h-full flex items-center justify-center`}>
                NERVE
            </div>

            <div className="grow h-full flex items-center justify-center"></div>
            <div className="flex-none h-full text-center flex items-center justify-center">
                <div className="flex space-x-3 gap-10 items-center px-3">
                    <div className=" md:block text-sm md:text-md text-black">John Doe</div>
                    <Tooltips position={"bottom"} content={"LogOut"}>
                        <button onClick={() => logOut()} className='flex w-9 h-9 rounded-md justify-center bg text-2xl text-white items-center'>
                            <IoLogOutOutline />
                        </button>
                    </Tooltips>
                </div>

            </div>
        </div>
    )
}

export default UserNavbar