import { getCurrentUserDetail } from "../Auth";
import { publicEmployeeAxios, privateEmployeeAxios } from "./helper";

let userId = 0;
let personalDetailId = 0;
let user = getCurrentUserDetail();
userId = user.id;
// only for json data in request body
// export const createPersonalDetails = (personalInfo) => {
//   let user = getCurrentUserDetail();
//   userId = user.id;
//   const personalTabDto = JSON.stringify(personalInfo);
//   return privateEmployeeAxios
//     .post(`/api/employee/personaltab/add/${userId}`, personalTabDto, {
//       headers: {
//         // "Content-Type": "multipart/form-data",
//         "Content-Type": `application/json`,
//       },
//     })
//     .then((response) => response.data);
// };

// for multipart file in request part
export const createPersonalDetails = (formData) => {
  let user = getCurrentUserDetail();
  userId = user.id;
  return privateEmployeeAxios
    .post(`/api/employee/personaltab/add/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

export const getPersonalDetailsById = () => {
  personalDetailId = localStorage.getItem("PersonalDetailId");
  return publicEmployeeAxios
    .get(`/api/employee/personaltab/${personalDetailId}`)
    .then((response) => response.data);
};

export const getAllPersonalDetails = () => {
  return publicEmployeeAxios
    .get("/api/employee/personaltab/getAll")
    .then((response) => response.data);
};

// for sending data in requestbody as json data
// export const updatePersonalDetails = (personalDetails) => {
//   personalDetailId = localStorage.getItem("PersonalDetailId");
//   const personalTabDto = JSON.stringify(personalDetails);
//   return privateEmployeeAxios
//     .put(`/api/employee/personaltab/${personalDetailId}`, personalTabDto)
//     .then((response) => response.data);
// };

// for multipart files
export const updatePersonalDetails = (formData) => {
  let personId = localStorage.getItem("PersonalDetailId");
  let user = getCurrentUserDetail();
  let userId = user.id;
  return privateEmployeeAxios
    .put(`/api/employee/personaltab/${personId}/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

export const deletePersonalDetailsById = () => {
  personalDetailId = localStorage.getItem("PersonalDetailId");
  localStorage.removeItem("PersonalDetailId");
  return privateEmployeeAxios
    .delete(`/api/employee/personaltab/${personalDetailId}`)
    .then((response) => response.data);
};
