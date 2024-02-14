import axios from "axios";
import { clearLS, getFromLS } from "../utils/localStorage";

export const instance = axios.create({
    baseURL: "https://hlbplatform.pythonanywhere.com/api/",
    // baseURL: "https://a37f-188-113-241-24.ngrok-free.app/api/",
    // headers: {
    //     "Content-Type": "application/json", 
    // },
})


instance.interceptors.request.use(
    (config) => {
        const token = getFromLS("a-token");
        // console.log(config);
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.log("error");
        return Promise.reject(error);
    }
);