import { useMutation, useQuery } from "@tanstack/react-query"
import { instance } from "../api/axios"
import { toast } from "react-toastify"

// get all courses card
export const getAllCourses = () => {
    return useQuery(["courses"], () => instance.get('student/courses/'), {
        refetchOnWindowFocus: false,
        // onSuccess:(data)=>console.log(data),
        onError: (error) => {
            toast.error("Qandaydir xatolik bor")
            console.log(error);
        }
    })
}
export const getLessonByID = (id) => {
    return useQuery(["lessons"], () => instance.get(`student/lessons/${id}/`), {
        refetchOnWindowFocus: false,
        // onSuccess:(data)=>console.log(data),
        onError: (error) => {
            toast.error("Qandaydir xatolik bor")
            console.log(error);
        }
    })
}
export const getMyLessonByID = (id) => {
    return useQuery(["mylessons"], () => instance.get(`student/student_lessons/${id}/`), {
        refetchOnWindowFocus: false,
        // onSuccess:(data)=>console.log(data),
        onError: (error) => {
            toast.error("Qandaydir xatolik bor")
            console.log(error);
        }
    })
}

export const getMyCourses = (id) => {
    return useQuery(["myCourse"], () => instance.get(`student/student_courses/${id}/`), {
        refetchOnWindowFocus: false,
        // onSuccess:(data)=>console.log(data),
        onError: (error) => {
            toast.error("Qandaydir xatolik bor")
            console.log(error);
        }
    })
}


export const ArticleDetail = (id) => {
    return useQuery(["articleId"], () => instance.get(`student/student_article/${id}/`), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => console.log(data),
        onError: (error) => {
            toast.error("Qandaydir xatolik bor")
            console.log(error);
        }
    })
}
export const getQuiz = (id) => {
    return useQuery(["articleId"], () => instance.get(`student/student_article_quiz/${id}/`), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => console.log(data),
        onError: (error) => {
            toast.error("Qandaydir xatolik bor")
            console.log(error);
        }
    })
}
export const postISRead = () => {
    return useMutation((data) => instance.post(`student/student_article_read/`, data), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => console.log(data),
        onError: (error) => {
            toast.error("Qandaydir xatolik bor")
            console.log(error);
        }
    })
}

export const subscribeCourse = ({ navigate }) => {
    return useMutation((data) => instance.post("student/add_course/", data),
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
export const testEnded = () => {
    return useMutation((data) => instance.post("student/student_quiz/", data),
        {
            onSuccess: (data) => {
                // console.log(data);
                toast.success("Kursga o'tdingiz")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}