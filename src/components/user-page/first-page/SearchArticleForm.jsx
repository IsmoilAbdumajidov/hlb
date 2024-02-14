import React from 'react'
import { useRef } from 'react'

const SearchArticleForm = ({ setPost, allData, }) => {
    const inpRef = useRef()
    const btnHandler = () => {
        if (inpRef.current.value) {
            // console.log(inpRef.current.value);
            setPost(inpRef.current.value)
            inpRef.current.value = ""
        }
        else {
            setPost("")
            toast.error("Inputga malumot kiritilmadi!!!")
        }
    }
    return (
        <div>
            <div className='flex flex-col sm:flex-row gap-2 justify-center mb-10'>
                <input ref={inpRef} className='border border-black py-2 w-full sm:w-[400px]' type="text" placeholder="Mavzularni qidirsh..." />
                <button onClick={btnHandler} className='bg py-2 px-5 rounded'>Search</button>
            </div>
            <div className='flex flex-col gap-4'>
                {
                    allData?.data?.map((item, i) => (
                        <div key={i} className='border flex flex-col justify-between items-center sm:flex-row shadow-md rounded px-3 py-5'>
                            <div>{item.title}</div>
                            <button className='bg-green-500 p-1 px-2 rounded text-white hover:scale-105 hover:shadow-lg hover:shadow-green-500 transition-all'>Sotib olish</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchArticleForm