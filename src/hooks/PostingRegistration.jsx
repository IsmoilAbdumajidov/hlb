import { useMutation, useQueryClient } from "@tanstack/react-query"
import { instance } from "../api/axios"
import { addToLS } from "../utils/localStorage";
import { toast } from "react-toastify";

export const postingRegister = ({ navigate }) => {
    return useMutation((data) => instance.post("accounts/register/", data, {
    }),
        {
            onSuccess: (data) => {
                addToLS("a-token", data?.data?.access_token)
                addToLS("r-token", data?.data?.refresh_token)
                navigate("/user-page")
                toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Kirishda xatolik bor")
            }
        }
    )

}

export const useLogin = ({ navigate }) => {
    return useMutation((data) => instance.post("accounts/login/", data, {
    }),
        {
            onSuccess: (data) => {
                addToLS("a-token", data?.data?.access)
                addToLS("r-token", data?.data?.refresh)
                navigate("/user-page")
                toast.success("Kirish muvaffaqiyatli bajarildi");
            },
            onError: (error) => {
                console.log(error);
                toast.error("Kirishda xatolik bor")
            }
        }
    )

}


