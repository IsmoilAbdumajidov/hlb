import { useMutation, useQueryClient } from "@tanstack/react-query"
import { instance } from "../api/axios"

export const postingRegister = (path, data) => {
    const queryClient = useQueryClient()
    return useMutation(() => instance.post(path, data))
}