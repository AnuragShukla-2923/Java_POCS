import { getCurrentUserDetail } from "../Auth";
import { publicEmployeeAxios, privateEmployeeAxios } from "./helper";

let pid = 0;
let educationalId = 0;

export const createEducationDetails = (educationDetails) => {
  let user = getCurrentUserDetail();
  let userId = user.id;

  // pid = localStorage.getItem("PersonalDetailId");
  // console.log(pid);
  const educationTabDto = JSON.stringify(educationDetails);
  return privateEmployeeAxios
    .post(`/api/employee/educationalTab/create/${userId}`, educationTabDto, {
      headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type": `application/json`,
      },
    })
    .then((response) => response.data);
};

export const getEducationDetailsById = () => {
  educationalId = localStorage.getItem("EducationalId");
  return publicEmployeeAxios
    .get(`/api/employee/educationalTab/${educationalId}`)
    .then((response) => response.data);
};

export const getAllEducationDetails = () => {
  return publicEmployeeAxios
    .get("/api/employee/educationalTab/getAll")
    .then((response) => response.data);
};

export const updateEducationDetails = (educationDetails) => {
  educationalId = localStorage.getItem("EducationalId");
  const educationTabDto = JSON.stringify(educationDetails);
  return privateEmployeeAxios
    .put(`/api/employee/educationalTab/${educationalId}`, educationTabDto)
    .then((response) => response.data);
};

export const deleteEducationDetailsById = () => {
  educationalId = localStorage.getItem("EducationalId");
  localStorage.removeItem("EducationalId");
  return privateEmployeeAxios
    .delete(`/api/employee/educationalTab/${educationalId}`)
    .then((response) => response.data);
};
