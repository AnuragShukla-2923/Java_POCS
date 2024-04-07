import { myAxios } from "./helper";

export const signUp=(user)=>{

    return myAxios.post("/auth/register",user).then((response)=>response.data);
    // return myAxios.post("http://localhost:8080/api/v1/auth/register",user).then((response)=>response.data);
};


export const loginUser=(loginDetail)=>{
    return myAxios.post("/auth/login",loginDetail).then((response)=>response.data);
// return myAxios.post("http://localhost:8080/api/v1/auth/login",loginDetail).then((response)=>response.data);

};