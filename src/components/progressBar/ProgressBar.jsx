import React from 'react'
import { Progress, Typography } from "@material-tailwind/react";

const ProgressBar = ({bar}) => {
    return (
        <div className="w-full">
            <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray">
                    <span className='text-[12px]'>Completed</span>
                </Typography>
                <Typography color="blue-gray">
                    <span className='text-[12px]'>{bar}%</span>
                </Typography>
            </div>
            <Progress className='h-2' value={bar} />
        </div>
    )
}

export default ProgressBar
