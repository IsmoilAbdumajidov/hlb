import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Button,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { VscTrash } from "react-icons/vsc";
import Module from '../module/Module';
import InputComponent from '../input/InputComponent';
function Icon({ id, open }) {
    return (
        <IoIosArrowDown className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`} />
    );

}

const AccordionAdmin = ({ title }) => {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const [openModule, setOpenModule] = React.useState(false);

    const handleOpenModule = () => setOpenModule(!openModule);
    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <div className='grid grid-cols-12  min-w-[900px] w-full px-3 py-2 items-center border-b border-gray-400'>
                    <div className='col-span-11 flex items-center gap-5'>
                        <img className='w-16 h-14 rounded object-cover' src="https://cdn.pixabay.com/photo/2024/01/04/21/55/mountain-8488489_640.jpg" alt="" />
                        <div>
                            {title}
                        </div>
                    </div>
                    <div className='flex col-span-1 justify-end items-center'>
                        <div className='flex gap-5'>
                            <CiEdit className='w-6 h-6 text-green-500' />
                            <VscTrash className='w-6 h-6 text-red-600' />
                        </div>
                        <AccordionHeader className=' p-0 w-max border-n' onClick={() => handleOpen(1)}>
                        </AccordionHeader>
                    </div>
                </div>
                <AccordionBody className="border-b flex flex-col gap-2 px-3 py-2 border-gray-400">
                    <Module open={openModule} handleOpen={handleOpenModule} title={"Kurs qo'shish"}>
                        <form className='flex flex-col gap-6'>
                            <div>
                                <label className='text-sm' htmlFor="title_course">Username</label>
                                <InputComponent id={"title_course"} placeholder={"Kurs sarlavhasini kiriting"} />
                            </div>
                            <div>
                                <label className='text-sm' htmlFor="file_course">Username</label>
                                <InputComponent id={"file_course"} type={"file"} />
                            </div>
                        </form>
                    </Module>
                    <div className='flex justify-between w-full items-center'>
                        <div className='text-black font-semibold'>Darslar:</div>
                        <Button variant="gradient" color="green" onClick={handleOpenModule}>
                            <span>Dars Qo'shish</span>
                        </Button>
                    </div>
                    <div className='flex items-center border border-gray-400 rounded p-2 justify-between'>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className='flex gap-5'>
                            <div className='bg-green-500 p-1 rounded'>
                            <CiEdit className='w-6 h-6 text-white' />
                            </div>
                            <div className='bg-red-600 w-max p-1 rounded'>
                            <VscTrash className='w-6 h-6 text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center border border-gray-400 rounded p-2 justify-between'>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className='flex gap-5'>
                            <div className='bg-green-500 p-1 rounded'>
                            <CiEdit className='w-6 h-6 text-white' />
                            </div>
                            <div className='bg-red-600 w-max p-1 rounded'>
                            <VscTrash className='w-6 h-6 text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center border border-gray-400 rounded p-2 justify-between'>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className='flex gap-5'>
                            <div className='bg-green-500 p-1 rounded'>
                            <CiEdit className='w-6 h-6 text-white' />
                            </div>
                            <div className='bg-red-600 w-max p-1 rounded'>
                            <VscTrash className='w-6 h-6 text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center border border-gray-400 rounded p-2 justify-between'>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className='flex gap-5'>
                            <div className='bg-green-500 p-1 rounded'>
                            <CiEdit className='w-6 h-6 text-white' />
                            </div>
                            <div className='bg-red-600 w-max p-1 rounded'>
                            <VscTrash className='w-6 h-6 text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center border border-gray-400 rounded p-2 justify-between'>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className='flex gap-5'>
                            <div className='bg-green-500 p-1 rounded'>
                            <CiEdit className='w-6 h-6 text-white' />
                            </div>
                            <div className='bg-red-600 w-max p-1 rounded'>
                            <VscTrash className='w-6 h-6 text-white' />
                            </div>
                        </div>
                    </div>
                </AccordionBody>
            </Accordion>
        </>
    )
}

export default AccordionAdmin