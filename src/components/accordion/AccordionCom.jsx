import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { CiLock, CiUnlock } from "react-icons/ci";
import { ArticleDetail } from '../../hooks/CoursesApi';
import { useNavigate } from 'react-router-dom';
import { Store } from '../../App';
import { BsCheck2All } from "react-icons/bs";

function Icon({ id, open }) {
    return (
        <IoIosArrowDown className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`} />
    );

}

const AccordionCom = ({ data, parent }) => {
    console.log();
    const [open, setOpen] = React.useState(0);

    const navigate = useNavigate()

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const { update, count } = Store()



    const { mutate } = ArticleDetail({ navigate, update, count })


    const clickHandler = (item) => {
        if (parent === "myLesson") {
            mutate(item.id)
        }
    }
    return (
        <>
            <Accordion className='px-3' open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader className='border-none' onClick={() => handleOpen(1)}>
                    <h2 className='w-full text-sm font-normal md:text-lg text-start'>{data.title}</h2>
                    {
                        data?.finished && <BsCheck2All className='w-6 h-6 text-green-500' />
                    }
                </AccordionHeader>
                <AccordionBody className="pb-4 pt-0 cursor-pointer flex flex-col gap-2">
                    {data?.lesson_articles?.length ?
                        data?.lesson_articles?.map((item, i) => (
                            <div onClick={() => clickHandler(item)} key={i} className='border-b-2 rounded gap-4 text-black border-dotted  p-1 border-black'>
                                <div className='flex justify-between'>
                                    {item.lock === false ?
                                        <CiUnlock className='w-6 h-6' />
                                        :
                                        <CiLock className='w-6 h-6' />
                                    }
                                    <div className='flex gap-3 items-center'>
                                        {
                                            item?.finished && <BsCheck2All className='w-6 h-6 text-green-500' />
                                        }
                                        <div className='bg-orange-500 order-3 ml-auto min-w-max flex p-2 rounded text-white'>Test +{item.quiz_score} ball</div>
                                    </div>
                                </div>
                                <p>{item.title}</p>
                            </div>
                        ))
                        : <p>Darslar mavjud emas...</p>
                    }
                </AccordionBody>
            </Accordion>
        </>
    );
}

export default AccordionCom