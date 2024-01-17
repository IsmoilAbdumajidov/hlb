import { Button } from '@material-tailwind/react'
import React from 'react'
import Module from '../../components/module/Module';
import InputComponent from '../../components/input/InputComponent';
import AccordionAdmin from '../../components/accordion/AccordionAdmin';

const AddKurs = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <div className='mt-10'>
            <Module open={open} handleOpen={handleOpen} title={"Kurs qo'shish"}>
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
            <div className='flex justify-end'>
                <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Kurs Qo'shish</span>
                </Button>
            </div>
            <div className='overflow-x-scroll'>
                <div className='border-b px-3 text-sm font-semibold min-w-[900px] py-2 border-gray-400 grid  grid-cols-12'>
                    <div className='flex col-span-11 gap-5 items-center'>
                        <div className='w-16'>Rasm</div>
                        <div>Sarlavha</div>
                    </div>
                    <div className='col-span-1'>Sozlamalar</div>
                </div>
                <AccordionAdmin title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veniam cumque unde."} />
                <AccordionAdmin title={"Loremg elit. Quis veniam cumque unde."} />
                <AccordionAdmin title={"Lorem ipsum dolor sit amet eniam cumque unde."} />
            </div>

        </div>
    )
}

export default AddKurs