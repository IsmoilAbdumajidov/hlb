import axios from "axios";

export const instance = axios.create({
    // baseURL: "https://dummyjson.com",
    baseURL: "https://hlbplatform.pythonanywhere.com/swagger/",
    headers: {
        "Content-Type": "application/json",
    },
})