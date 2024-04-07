import { getCurrentUserDetail } from "../Auth";
import { myAxios } from "./helper";

export const signUp=(user)=>{ 
    // return myAxios.post("http://localhost:8080/api/v1/auth/register",user).then((response)=>response.data);
    return myAxios.post("http://localhost:9090/api/v1/auth/register",user).then((response)=>response.data);
};


export const loginUser=(loginDetail)=>{

    // return myAxios.post("http://localhost:8080/api/v1/auth/login",loginDetail).then((response)=>response.data);
    return myAxios.post("http://localhost:9090/api/v1/auth/login",loginDetail).then((response)=>response.data);
};


export const getPersonByUserId=()=>{
let user=getCurrentUserDetail();
const userId=user.id;
console.log(userId);
return myAxios.get(`http://localhost:9090/api/users/personBy/${userId}`).then((response)=>response.data);
};


