import React, { useRef, useState } from 'react'
import { getAllArticles } from '../../../hooks/CoursesApi'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import SearchArticleForm from '../../../components/user-page/first-page/SearchArticleForm'


const MyIndividualArticel = () => {
    const [inputData, setinputData] = useState(null)
    const [post, setPost] = useState()
    const inpRef = useRef()
    const { data: allData, refetch } = getAllArticles(post)
    console.log(allData);
    useEffect(() => {
        refetch()
    }, [post])

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
            <SearchArticleForm setPost={setPost} allData={allData} />
        </div>
    )
}

export default MyIndividualArticel