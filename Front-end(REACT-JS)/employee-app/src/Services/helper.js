import axios from "axios";
import { getCurrentToken } from "../Auth";

// export const BASE_URL='http://localhost:8080';
export const BASE_URL = "http://localhost:9090";

export const myAxios = axios.create({});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

// Method1:not working
// privateAxios.interceptors.request.use(config=>{
//     const token=getCurrentToken();
//     if(token){
//         config.headers.common.Authorization=`Bearer ${token}`
//         return config;
//     }
// },error=Promise.reject(error));

// Method2:working
privateAxios.interceptors.request.use(
  (config) => {
    const token = getCurrentToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    }
  },
  (error) => Promise.reject(error)
);

// this one is multipart array,json data both
export const multipartprivateAxios = axios.create({
  baseURL: BASE_URL,
});

multipartprivateAxios.interceptors.request.use(
  (config) => {
    const token = getCurrentToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      // config.headers:{'Content-Type'= 'multipart/form-data'};
      // config.headers["Content-Type"] ='application/json';
      // config.headers["Content-Type"] ='multipart/form-data';
      // config.headers["Content-Type"] ='application/json';
      //     config.headers[
      //     {
      //         "Content-Type" :"application/json",
      //         "accept":  "application/json"
      //     }
      // ]

      // config.headers[
      //     {
      //         "Content-Type" :"multipart/form-data",
      //         "accept":  "application/json"
      //     }
      // ]
      return config;
    }
  },
  (error) => Promise.reject(error)
);

// axios objects for Family tab:
export const privateFamilyTab = axios.create({
  baseURL: BASE_URL,
});

//configuring jwt token
privateFamilyTab.interceptors.request.use(
  (config) => {
    const token = getCurrentToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Content-Type"] = `application/json`;

      return config;
    }
  },
  (error) => Promise.reject(error)
);

// for getting informations
export const publicFamilyTab = axios.create({
  baseURL: BASE_URL,
});

//axios object for Accommodation tab:
export const privateAccommodationTab = axios.create({
  baseURL: BASE_URL,
});

//configuring jwt token
privateAccommodationTab.interceptors.request.use(
  (config) => {
    const token = getCurrentToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Content-Type"] = `application/json`;

      return config;
    }
  },
  (error) => Promise.reject(error)
);

export const publicAccommodationTab = axios.create({
  baseURL: BASE_URL,
});

//    for all remaining tabs
export const publicEmployeeAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateEmployeeAxios = axios.create({
  baseURL: BASE_URL,
});

privateEmployeeAxios.interceptors.request.use(
  (config) => {
    const token = getCurrentToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      // config.headers["Content-Type"] =`application/json`;

      return config;
    }
  },
  (error) => Promise.reject(error)
);
