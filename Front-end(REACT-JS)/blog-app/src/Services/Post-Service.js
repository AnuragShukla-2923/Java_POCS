import { privateAxios } from "./helper";
import { myAxios } from "./helper";

//create Post function
export const createPost=(postData)=>{
 
return privateAxios.post(`/user/${postData.id}/category/${postData.id}/posts`,postData).then(response=>response.data)
};



//get all post
export const loadAllPost=(pageNumber,pageSize)=>{
return myAxios.get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(response=>response.data)
};

//load Single Post of given Id
export const loadPost=(postId)=>{
return myAxios.get("/posts/"+postId).then(response=>response.data)
};
