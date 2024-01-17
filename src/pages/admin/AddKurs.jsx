import { Button } from '@material-tailwind/react'
import React from 'react'
import Module from '../../components/module/Module';
import InputComponent from '../../components/input/InputComponent';

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
            <div className='border-b  border-gray-400 p-3 flex justify-between font-semibold text-md'>
                <div className='flex gap-4'>
                    <div>Rasm</div>
                    <div>Sarlavha</div>
                </div>
                <div className='flex gap-2'>
                    Sozlamalar
                </div>
            </div>

        </div>
    )
}

export default AddKurs