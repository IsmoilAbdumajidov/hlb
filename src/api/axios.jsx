import axios from "axios";
import { clearLS, getFromLS } from "../utils/localStorage";

export const instance = axios.create({
    // baseURL: "https://hlbplatform.pythonanywhere.com/api/",
    baseURL: "https://api.int-audit.uz/",
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