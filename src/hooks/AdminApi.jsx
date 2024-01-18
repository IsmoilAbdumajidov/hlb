import { useMutation, useQuery } from "@tanstack/react-query"
import { instance } from "../api/axios"
import { toast } from "react-toastify"


export const postCourse = () => {
    return useMutation((data) => instance.post("admin/add_course/", data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    ),
        {
            onSuccess: (data) => {
                console.log(data);
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