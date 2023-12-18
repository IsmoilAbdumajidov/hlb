import { useMutation, useQueryClient } from "@tanstack/react-query"
import { instance } from "../api/axios"
import { addToLS } from "../utils/localStorage";

export const postingRegister = ({navigate}) => {
    // const queryClient = useQueryClient()
    return useMutation((data) => instance.post("register/", data, {
        // withCredentials:true,
    }),
        {
            onSuccess: (data) => {
                navigate("/");
                addToLS("a-token",data.data.access_token)
                addToLS("r-token",data.data.refresh_token)
                navigate("/user-page")
            }
        }
    )

}
