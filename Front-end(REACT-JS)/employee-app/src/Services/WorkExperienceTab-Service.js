import { doSaveEducationalId, getCurrentUserDetail } from "../Auth";
import { privateEmployeeAxios, publicEmployeeAxios } from "./helper";
let pid = 0;
let workExperienceId = 0;

export const createWorkExperience = (workExperienceDetails) => {
  //  pid=localStorage.getItem("PersonalDetailId");
  //  console.log(pid);
  let user = getCurrentUserDetail();
  let userId = user.id;
  const workExperience = JSON.stringify(workExperienceDetails);
  console.log(workExperience);
  return privateEmployeeAxios
    .post(`/api/employee/workExperienceTab/create/${userId}`, workExperience, {
      headers: {
        "Content-Type": `application/json`,
      },
    })
    .then((response) => response.data);
};
export const updateWorkExperience = (workExperienceDetails) => {
  workExperienceId = localStorage.getItem("WorkExperienceId");
  const workExperience = JSON.stringify(workExperienceDetails);
  return privateEmployeeAxios
    .put(`/api/employee/workExperienceTab/${workExperienceId}`, workExperience)
    .then((response) => response.data);
};
export const getWorkExperienceById = () => {
  workExperienceId = localStorage.getItem("WorkExperienceId");

  return publicEmployeeAxios
    .get(`/api/employee/workExperienceTab/${workExperienceId}`)
    .then((response) => response.data);
};
export const getAllWorkExperience = () => {
  return publicEmployeeAxios
    .get("/api/employee/workExperienceTab/getAll")
    .then((response) => response.data);
};

export const deleteWorkExperienceById = () => {
  workExperienceId = localStorage.getItem("WorkExperienceId");
  localStorage.removeItem("WorkExperienceId");
  return privateEmployeeAxios
    .delete(`/api/employee/workExperienceTab/${workExperienceId}`)
    .then((response) => response.data);
};
