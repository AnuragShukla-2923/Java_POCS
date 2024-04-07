import {myAxios} from './helper';
 
export const loadAllCategories=()=>{

    // return myAxios.get("http://localhost:8080/api/v1/categories/")
    //               .then(response=>{return response.data})

    // return myAxios.get("/categories/")
    //               .then(response=>{return response.data})

    return myAxios.get(`/categories/`)
                  .then(response=>{return response.data})
};