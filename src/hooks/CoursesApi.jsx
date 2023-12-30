import { useMutation, useQuery } from "@tanstack/react-query"
import { instance } from "../api/axios"

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
// kursga yozilish
export const subscribeCourse = () => {
    return useMutation((data) => instance.post("student/add_course/", data, {
    }),
        {
            onSuccess: (data) => {
                console.log(data);
                toast.success("Kursga  o'tdingiz")
                
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}