import React, { useRef, useState } from 'react'
import { SearchArticle, getAllArticles } from '../../hooks/CoursesApi'
import { toast } from 'react-toastify'

const MySameArticel = () => {
    const { data:allData } = getAllArticles()
    const [inputData, setinputData] = useState("")
    const {data:SearchData, refetch} = SearchArticle(inputData)
    console.log(SearchData);
    const btnHandler = ()=>{
        if (inputData) {
            refetch()
        }
        else{
            toast.error("Inputga malumot kiritilmadi!!!")
        }
    }
    return (
        <div>
            <input onChange={(e)=>setinputData(e.target.value)} className='border border-black' type="text" />
            <button onClick={btnHandler} className='bg py-2 px-3 rounded'>Search</button>
            <div className='flex flex-col gap-4'>
                {
                    allData?.data?.map((item, i) => (
                        <div key={i} className='border shadow-md rounded px-3 py-5'>{item.title}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default MySameArticel