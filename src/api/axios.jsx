import axios from "axios";
import { clearLS, getFromLS } from "../utils/localStorage";

export const instance = axios.create({
    baseURL: "https://hlbplatform.pythonanywhere.com/api/",
    // baseURL: "https://b561-213-230-88-91.ngrok-free.app/api/",
    headers: {
        "Content-Type": "application/json",
    },
})


instance.interceptors.request.use(
    (config) => {
        const token = getFromLS("a-token");
        console.log(config);
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.log("error");
        if ((error.response && error?.response?.status === 401) || error?.response?.status === 403) {
            clearLS()
            navigate("/register");
        } else if (error.response && error.response.status === 500) {
            console.log(error);
        }
        return Promise.reject(error);
    }
);


instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.log("error");
    if ((error.response && error?.response?.status === 401) || error?.response?.status === 403) {
        clearLS()
        navigate("/register");
    } else if (error.response && error.response.status === 500) {
        console.log(error);
    }

    return Promise.reject(error);
});