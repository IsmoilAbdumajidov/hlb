import React from 'react'
import AccordionCom from '../../components/accordion/AccordionCom';

const Lessons = () => {
    return (
        <div>
            <div className='border-b mb-6 border-black/10'>
                <div className='absolute w-36 h-1 -top-5 left-[50%] -translate-x-[50%] bg-[#ff663b]'></div>
                <h1 className='text-bg text-3xl pb-5 sm:text-4xl md:text-3xl font-semibold '>Kurslar</h1>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='shadow rounded-lg'>
                    <AccordionCom title={"Hello world"} />
                </div>
                <div className='shadow rounded-lg'>
                    <AccordionCom title={"Hello world"} />
                </div>
                <div className='shadow rounded-lg'>
                    <AccordionCom title={"Hello world"} />
                </div>
                <div className='shadow rounded-lg'>
                    <AccordionCom title={"Hello world"} />
                </div>
                <div className='shadow rounded-lg'>
                    <AccordionCom title={"Hello world"} />
                </div>
                <div className='shadow rounded-lg'>
                    <AccordionCom title={"Hello world"} />
                </div>
            </div>
        </div>
    )
}

export default Lessons