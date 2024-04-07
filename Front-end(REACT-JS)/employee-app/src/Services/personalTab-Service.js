import axios from "axios";
import { getCurrentToken } from "../Auth";
import { multipartprivateAxios, myAxios, privateAxios } from "./helper";

// export const uploadImages=(json,files)=>{
    
//     let formData=new FormData();    
//     // formData.append("files",files);
//     return privateAxios.post("/api/employee/personaltab/add",json,formData).then((response)=>response.data);
    
//     };

//   // not working
// // export const uploadMultipartFiles=(json,files)=>{
  
// //     return multipartprivateAxios.post("/api/employee/personaltab/add",json,files).then((response)=>response.data);
    
// //     };

// // export const uploadMultipartFiles=(json,files)=>{
  
// //   //   return multipartprivateAxios.post("/api/employee/personaltab/add",{body:{json:{json},files:{files}}})
// //   //  .then((response)=>response.data);
// //   const jsonData=JSON.stringify(json);
// //   console.log(jsonData);
// //   console.log(files);
// //   console.log("both json and files coming");

// //   return multipartprivateAxios.post("/api/employee/personaltab/add",{
// //     json:jsonData,
// //     files:files})
    

   
  
// //   .then((response)=>response.data);
    
// //     };

// // method2

// export const uploadMultipartFiles=(json,files)=>{
//   export const uploadMultipartFiles=(files)=>{


 
//   // const jsonData=JSON.stringify(json);
//   // console.log(jsonData);
//   // console.log(files);
// //   console.log(formData);
//   // console.log("both json and files coming");

//   // return multipartprivateAxios.post("/api/employee/personaltab/add",{
//   //   json:jsonData,
//   //   files:files}
   
    
//   //   )
    
//   return multipartprivateAxios.post("http://localhost:9090/api/employee/personaltab/add",files
//   // {files:files}
   
    
//     )

   
  
//   .then((response)=>response.data);
    
//     };


// method 3
// // export const uploadMultipartFiles=(json,files)=>{
//   export const uploadMultipartFiles=(personalInfo,uploadedFiles)=>{
// // return multipartprivateAxios.post("http://localhost:9090/api/employee/personaltab/add",files
// //   // {files:files}
   
    
// //     )
// const jwt_token=getCurrentToken();
// let token=`Bearer ${jwt_token}`;
// const formData= new FormData();
// formData.append("personalInfo",JSON.stringify(personalInfo));
// formData.append("files",uploadedFiles);
// console.log(personalInfo);
// console.log(uploadedFiles);

// return axios
// // .post("http://localhost:9090/api/employee/personaltab/add",formData,{
//   .post("http://localhost:9090/api/employee/personaltab/add",{
//   // headers:{
//   //   [Content-Type]: 'multipart/form-data',
//   //   [Authorization]:`Bearer ${token}`
//   // }
//   headers:{
//     "Content-Type": "multipart/form-data",
//     "Authorization" : `Bearer ${token}`
// },
// // body:{formData:{
// //   files:files,
// //   json:json
// // }}
// body:formData
// })   


  
//   .then((response)=>response.data);
    
//     };


    // method 4

  export const uploadMultipartFiles=(personalInfo,uploadedFiles)=>{
    const jwt_token=getCurrentToken();
    let token=`Bearer ${jwt_token}`;
    const formData= new FormData();
    formData.append("personalInfo", new Blob([JSON.stringify(personalInfo)],{
      type: "application/json"
    }));
    
    formData.append("files",uploadedFiles);
    const headers = new Headers({});

    // if (Common.getCurrentToken()) {
    //     headers.append('Authorization', 'Bearer ' + Common.getToken())
    // }

    if (token) {
      headers.append('Authorization', token)
  }
    
    console.log(personalInfo);
    console.log(uploadedFiles);
    
    return axios
      .post("http://localhost:9090/api/employee/personaltab/add",{
    
    //   headers:{
    //     "Content-Type": "multipart/form-data",
    //     "Authorization" : `Bearer ${token}`
    // },
    headers:headers,
    body:formData
    }).then((response)=>response.data);
        
        };
