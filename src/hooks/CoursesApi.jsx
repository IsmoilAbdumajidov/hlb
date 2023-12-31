import { useMutation, useQuery } from "@tanstack/react-query"
import { instance } from "../api/axios"
import { toast } from "react-toastify"

// get all courses card
export const getAllCourses = ()=>{
    return useQuery(["courses"], ()=>instance.get('student/courses/'), {refetchOnWindowFocus:false,
        onSuccess:(data)=>console.log(data),
        onError:(error)=>console.log(error),
    })
}
export const getLessonByID = (id)=>{
    return useQuery(["lessons"], ()=>instance.get(`student/lessons/${id}/`), {refetchOnWindowFocus:false,
        onSuccess:(data)=>console.log(data),
        onError:(error)=>console.log(error),
    })
}

export const getMyCourses = (id)=>{
    return useQuery(["lessons"], ()=>instance.get(`student/student_courses/${id}/`), {refetchOnWindowFocus:false,
        onSuccess:(data)=>console.log(data),
        onError:(error)=>console.log(error),
    })
}
// kursga d
export const subscribeCourse = ({navigate}) => {
    return useMutation((data) => instance.post("student/add_course/", data, {
    }),
        {
            onSuccess: (data) => {
                // console.log(data);
                navigate('/user-page/my-kurs')
                toast.success("Kursga o'tdingiz")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}