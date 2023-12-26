import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { CiLock, CiUnlock } from "react-icons/ci";

function Icon({ id, open }) {
    return (
        <IoIosArrowDown className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`} />
    );

}

const AccordionCom = ({ data }) => {
    console.log();
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);


    return (
        <>
            <Accordion className='px-3' open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader className='border-none' onClick={() => handleOpen(1)}>
                    <h2 className='w-full text-sm font-normal md:text-lg text-start'>{data.title}</h2>
                </AccordionHeader>
                <AccordionBody className="pb-4 pt-0">
                    <div className='border-b-2 text-black border-dotted pt-3 pb-1 border-black flex justify-between'>
                        <div className='flex items-center gap-3'>
                            {/* <CiUnlock /> */}
                            <CiLock className='text-lg'/>
                            <p >Kassa operatsiyalari</p>
                        </div>
                        <div className='bg-green-300 p-2 rounded text-white'>Test +12 ball</div>
                    </div>
                    <div className='border-b-2 text-black border-dotted pt-3 pb-1 border-black flex justify-between'>
                        <div className='flex items-center gap-3'>
                            {/* <CiUnlock /> */}
                            <CiLock className='text-lg'/>
                            <p >Kassa operatsiyalari</p>
                        </div>
                        <div className='bg-green-300 p-2 rounded text-white'>Test +12 ball</div>
                    </div>
                    <div className='border-b-2 text-black border-dotted pt-3 pb-1 border-black flex justify-between'>
                        <div className='flex items-center gap-3'>
                            {/* <CiUnlock /> */}
                            <CiLock className='text-lg'/>
                            <p >Kassa operatsiyalari</p>
                        </div>
                        <div className='bg-green-300 p-2 rounded text-white'>Test +12 ball</div>
                    </div>
                    <div className='border-b-2 text-black border-dotted pt-3 pb-1 border-black flex justify-between'>
                        <div className='flex items-center gap-3'>
                            {/* <CiUnlock /> */}
                            <CiLock className='text-lg'/>
                            <p >Kassa operatsiyalari</p>
                        </div>
                        <div className='bg-green-300 p-2 rounded text-white'>Test +12 ball</div>
                    </div>
                    <div className='border-b-2 text-black border-dotted pt-3 pb-1 border-black flex justify-between'>
                        <div className='flex items-center gap-3'>
                            {/* <CiUnlock /> */}
                            <CiLock className='text-lg'/>
                            <p >Kassa operatsiyalari</p>
                        </div>
                        <div className='bg-green-300 p-2 rounded text-white'>Test +12 ball</div>
                    </div>
                </AccordionBody>
            </Accordion>
        </>
    );
}

export default AccordionCom