import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


const data = [
    {
        num: 500,
        title: "Jami tahsil olayotgan o'quvchilarimiz"
    },
    {
        num: 200,
        title: "Platformamizda mavjud kurslar soni"
    },
    {
        num: 400,
        title: "Lorem ipsum dolor sit amet adipisicing elit."
    }
]

const Count = ({ countData }) => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div>
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                <h1 className='text-3xl sm:text-5xl font-bold'>+{counterOn && <CountUp start={0} end={countData.num} duration={3} delay={0} />}</h1>
                <p className='text-md sm:text-lg'>{countData.title}</p>
            </ScrollTrigger>
        </div>
    )
}

const CountNumber = () => {
    return (
        <div className='bg_liner'>
            <div className="main-container py-20 text-center sm:text-start text-white gap-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                <div className='text-2xl font-semibold'>
                    Istalgan joyda, o'zingizga qulay vaqtda o'qish imkoniyati
                </div>
                {data.map((item, i) => (
                    <Count countData={item} key={i} />
                ))}
            </div>
        </div>
    )
}

export default CountNumber



