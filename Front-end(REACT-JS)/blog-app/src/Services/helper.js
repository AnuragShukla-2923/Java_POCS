import axios from "axios";
import { getToken } from "../Auth";

export const BASE_URl='http://localhost:8080/api/v1';

export const myAxios=axios.create({
    baseURL: BASE_URl
});

// export const myAxios=axios.create({
// });

export const privateAxios=axios.create({
baseURL:BASE_URl

});


privateAxios.interceptors.request.use(config=>{
    const token=getToken();
    if(token){

        // config.headers.common.Authorization =`Bearer ${token}`;   this line is not working by dur
        config.headers["Authorization"] =`Bearer ${token}`;
        return config;
    }
},error=>Promise.reject(error));