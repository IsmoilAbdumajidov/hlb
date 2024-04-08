import React from 'react'
import Module from '../module/Module'
import click from "./img/click.png"
import humo from "./img/humo.png"
import uzcard from "./img/uzcard.png"

const BuyModule = ({ open, handleOpen, data, title, children }) => {

    return (
        <Module open={open} handleOpen={handleOpen} title={title}>
            {/* {children} */}
            <h1>Helloworeldsadsl dlskd lskldk</h1>
            <h1>Helloworeldsadsl dlskd lskldk</h1>
            <h1>Helloworeldsadsl dlskd lskldk</h1>
            <div className='flex justify-center gap-10 mt-5'>
                <a href={data?.invoice} className='border w-20 rounded flex  flex-col items-center justify-center text-center p-1'>
                    <img className='w-full object-cover' src={click} alt="" />
                </a>
                <a href={data?.invoice + "&card_type=humo"} className='border w-20 rounded flex  flex-col items-center justify-center text-center p-1'>
                    <img className='w-full   object-cover' src={humo} alt="" />
                </a>
                <a href={data?.invoice + "&card_type=uzcard"} className='border w-20 rounded flex  flex-col items-center justify-center text-center p-1'>
                    <img className='w-7   object-cover' src={uzcard} alt="" />
                </a>
            </div>
        </Module>
    )
}

export default BuyModule