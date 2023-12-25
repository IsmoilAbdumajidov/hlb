import { useQuery } from "@tanstack/react-query"
import { instance } from "../api/axios"

// get all courses card
export const getAllCourses = ()=>{
    return useQuery(["courses"], ()=>instance.get('student/courses/'), {refetchOnWindowFocus:false,
        onSuccess:(data)=>console.log(data),
        onError:(error)=>console.log(error),
    })
}