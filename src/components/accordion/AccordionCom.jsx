import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";

function Icon({ id, open }) {
    return (
        <IoIosArrowDown className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`} />
    );

}

const AccordionCom = ({title, children}) => {
    console.log();
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);


    return (
        <>
            <Accordion className='p-4' open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader className='border-none'  onClick={() => handleOpen(1)}>
                    <h2 className='w-full pb-2 text-start'>{title}</h2>
                </AccordionHeader>
                <AccordionBody>
                    {children}
                </AccordionBody>
            </Accordion>
        </>
    );
}

export default AccordionCom