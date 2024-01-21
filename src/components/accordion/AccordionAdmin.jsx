import React, { useState } from 'react'
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
import { deleteCourse, deleteLesson, patchLesson, postLesson } from '../../hooks/AdminApi';
function Icon({ id, open }) {
    return (
        <IoIosArrowDown className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`} />
    );

}

const AccordionAdmin = ({ data, edit, setIsPost }) => {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const [openModule, setOpenModule] = React.useState(false);
    const [initialValues, setInitialValues] = useState({ title: "", isPaid: false, price: "" })
    const [post, setPost] = useState(false)
    // console.log(data);
    // console.log(title);
    // console.log(price);
    // console.log(isPaid);

    const { mutate } = postLesson()
    const {mutate:patchMutate}=patchLesson()
    const onSubmit = (e) => {
        e.preventDefault()

        if (post) {
            mutate({
                course: data?.id,
                number: data?.lessons.length + 1,
                title: initialValues.title,
                price: initialValues.price,
                paid: initialValues.isPaid
            })
        }
        else {
            console.log(initialValues);
            patchMutate(
                {   
                    id:initialValues.id,
                    title: initialValues.title,
                    price: +initialValues.price,
                    paid: initialValues.isPaid
                }
            )
        }
    }
    const { mutate: deleteL } = deleteLesson()
    const { mutate: deleteC } = deleteCourse()

    const deleteHandler = (type, id) => {
        if (type === "course") {
            deleteC(id)
        }
        else if (type === "lesson") {
            deleteL(id)
        }
    }
    const EditLesson = (element) => {
        // console.log(element);
        setInitialValues({ id: element.id, title: element.title,price:element.price,isPaid:element.paid })
        setOpenModule(true)
    }


    const handleOpenModule = () => { setOpenModule(!openModule),setPost(true), setInitialValues("") };
    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <div className='grid grid-cols-12  min-w-[900px] w-full px-3 py-2 items-center border-b border-gray-400'>
                    <div className='col-span-11 flex items-center gap-5'>
                        <img className='w-16 h-14 rounded object-cover' src={data?.poster_image} alt="" />
                        <div>
                            {data?.title}
                        </div>
                    </div>
                    <div className='flex col-span-1 justify-end items-center'>
                        <div className='flex gap-5'>
                            <CiEdit onClick={() => { edit(data), setIsPost(false) }} className='w-6 h-6 text-green-500' />
                            <VscTrash onClick={() => deleteHandler("course", data?.id)} className='w-6 h-6 text-red-600' />
                        </div>
                        <AccordionHeader className=' p-0 w-max border-n' onClick={() => handleOpen(1)}>
                            <h1></h1>
                        </AccordionHeader>
                    </div>
                </div>
                <AccordionBody className="border-b  flex flex-col gap-2 px-3 py-2 border-gray-400">
                    <Module open={openModule} handleOpen={handleOpenModule} title={"Dars qo'shish"}>
                        <form onSubmit={onSubmit} className='flex flex-col gap-6'>
                            <div>
                                <label className='text-sm' htmlFor="title_lesson">Dars sarlavhasi</label>
                                <InputComponent value={initialValues.title} onChange={(e) => setInitialValues({ ...initialValues, title: e.target.value })} id={"title_lesson"} placeholder={"Kurs sarlavhasini kiriting"} />
                            </div>
                            <div className=''>
                                <label className='text-sm' htmlFor="ispaid"></label>
                                <InputComponent checked={initialValues.isPaid} className={"w-max"} onChange={(e) => setInitialValues({ ...initialValues, isPaid: e.target.checked })} typeInput={"checkbox"} id={"ispaid"} type={"file"} />
                            </div>
                            {initialValues.isPaid &&
                                <div>
                                    <label className='text-sm' htmlFor="price">Username</label>
                                    <InputComponent value={initialValues.price} onChange={(e) => setInitialValues({ ...initialValues, price: +e.target.value })} typeInput={"number"} id={"price"} />
                                </div>
                            }
                            <div className='flex justify-end gap-3'>
                                <Button variant="text" color="red" onClick={handleOpenModule} className="mr-1">
                                    <span>Cancel</span>
                                </Button>
                                <Button type='submit' variant="gradient" color="green">
                                    <span>Confirm</span>
                                </Button>
                            </div>
                        </form>
                    </Module>
                    <div className='flex justify-between w-full items-center'>
                        <div className='text-black font-semibold'>Darslar:</div>
                        <Button variant="gradient" color="green" onClick={handleOpenModule}>
                            <span>Dars Qo'shish</span>
                        </Button>
                    </div>
                    {data.lessons.length ?
                        data.lessons.map((item, i) => (
                            <div key={i}>
                                <div className='flex items-center border border-gray-400 rounded p-2 justify-between'>
                                    <div>{item.title}</div>
                                    <div className='flex gap-5'>
                                        <div className='bg-green-500 p-1 rounded'>
                                            <CiEdit onClick={() => { EditLesson(item), setPost(false) }} className='w-6 h-6 text-white' />
                                        </div>
                                        <div className='bg-red-600 w-max p-1 rounded'>
                                            <VscTrash onClick={() => deleteHandler("lesson", item.id)} className='w-6 h-6 text-white' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : "Darslar mavjud emas..."}
                </AccordionBody>
            </Accordion>
        </>
    )
}

export default AccordionAdmin