import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";



const CourseCard = () => {
  const navigate = useNavigate()
  return (
    <Card className="w-full mt-5">
      <CardHeader color="blue-gray" className="relative mx-2 md:mx-3 aspect-[5/3]">
        <img className='w-full h-full object-cover'
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody className='px-3 pt-3 pb-0'>
        <Typography color="blue-gray">
          <p className='md:text-xl'>UI/UX Review Check</p>
        </Typography>
      </CardBody>
      <CardFooter className="px-3 pt-0 pb-3">
        <button onClick={() => navigate("/user-page/kurslar/lessons")} className='bg py-2 mt-3 w-full rounded-lg text-white'>Kirish</button>
      </CardFooter>
    </Card>
  )
}

export default CourseCard
