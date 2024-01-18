import { Button } from '@material-tailwind/react'
import React, { useRef, useState } from 'react'
import Module from '../../components/module/Module';
import InputComponent from '../../components/input/InputComponent';
import AccordionAdmin from '../../components/accordion/AccordionAdmin';
import { postCourse } from '../../hooks/AdminApi';
import { instance } from '../../api/axios';

const AddKurs = () => {
    const [open, setOpen] = React.useState(false);
    const title_course = useRef()
    const file_course = useRef()
    const [file, setFile] = useState('')
    const [title, setTitle] = useState('')

    // const inputHandler = (e) => {
    //     const [file, setFile] = useState('')
    //     const [title, setTitle] = useState('')
    // }
    // const { mutate } = postCourse()
    const onSubmit = async () => {
        const formData = new FormData();
        formData.append('image', file);
        console.log(file);
        try {
            console.log(formData);
            const resp = await instance.post("https://ebf0-188-113-248-5.ngrok-free.app/api/admin/add_course/",
                {
                    poster_image: file,
                    title: title
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        // "Content-Type": "application/json", 
                    },
                }
            )
            setFile(null)

            console.log(resp);
        } catch (error) {

        }
    }



    const handleOpen = () => setOpen(!open);
    return (
        <div className='mt-10'>
            <Module onSubmit={onSubmit} open={open} handleOpen={handleOpen} title={"Kurs qo'shish"}>
                <form className='flex flex-col gap-6'>
                    <div>
                        <label className='text-sm' htmlFor="title_course">Username</label>
                        <InputComponent onChange={((e) => setTitle(e.target.value))} refProp={title_course} id={"title_course"} placeholder={"Kurs sarlavhasini kiriting"} />
                    </div>
                    <div>
                        <label className='text-sm' htmlFor="file_course">Username</label>
                        <InputComponent onChange={(e) => setFile(e.target.files[0])} refProp={file_course} id={"file_course"} type={"file"} />
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