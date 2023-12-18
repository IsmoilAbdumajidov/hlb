import axios from "axios";

export const instance = axios.create({
    baseURL: "https://hlbplatform.pythonanywhere.com/api/accounts/",
    // baseURL: "https://hlbplatform.pythonanywhere.com/",
    headers: {
        "Content-Type": "application/json",
    },
})


instance.interceptors.request.use(
    (config) => {
        // console.log(config);
        const token = sessionStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
