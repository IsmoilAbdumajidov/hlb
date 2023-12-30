import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const CourseCard = ({item}) => {
  const navigate = useNavigate()
  const param = useSearchParams()
  return (
    <Card className="w-full mt-5">
      <CardHeader color="blue-gray" className="relative mx-2 md:mx-3 aspect-[5/3]">
        <img className='w-full h-full object-cover'
          src={item.poster_image}
          alt={item.title}
        />
      </CardHeader>
      <CardBody className='px-3 pt-3 pb-0'>
        <Typography color="blue-gray">
          <span className='text-md'>{item.title}</span>
        </Typography>
      </CardBody>
      <CardFooter className="px-3 pt-0 pb-3 mt-auto">
        <button onClick={() => navigate(`/user-page/kurslar/lessons/${item.slug}`)} className='bg py-2 mt-3 w-full rounded-lg text-white'>Kirish</button>
      </CardFooter>
    </Card>
  )
}

export default CourseCard
