import axios from "axios";
import { doSavePersonalId, getCurrentPid, getCurrentUserDetail } from "../Auth";
import { publicEmployeeAxios, privateEmployeeAxios } from "./helper";
let pid = 0;
let skillsId = 0;

// export const createSkillsDetails = (skillsDetails) => {
//   pid=localStorage.getItem("PersonalDetailId");
//   console.log(pid);

//   const skillsTabDto = JSON.stringify(skillsDetails);
//   return privateEmployeeAxios
//     .post(`/api/employee/skillTab/create/${pid}`, skillsTabDto)
//     .then((response) => response.data);
// };

export const createSkillsDetails = (skillsDetails) => {
  let user = getCurrentUserDetail();
  let userId = user.id;

  const skillsTabDto = JSON.stringify(skillsDetails);
  return privateEmployeeAxios
    .post(`/api/employee/skillTab/create/${userId}`, skillsTabDto, {
      headers: {
        "Content-Type": `application/json`,
      },
    })
    .then((response) => response.data);
};

export const getSkillsDetailsById = () => {
  skillsId = localStorage.getItem("SkillId");
  return publicEmployeeAxios
    .get(`/api/employee/skillTab/${skillsId}`)
    .then((response) => response.data);
};

export const getAllSkillsDetails = () => {
  return publicEmployeeAxios
    .get("/api/employee/skillTab/getAll")
    .then((response) => response.data);
};

export const updateSkillsDetails = (skillsDetails) => {
  skillsId = localStorage.getItem("SkillId");
  const skillsTabDto = JSON.stringify(skillsDetails);
  return privateEmployeeAxios
    .put(`/api/employee/skillTab/${skillsId}`, skillsTabDto, {
      headers: {
        "Content-Type": `application/json`,
      },
    })
    .then((response) => response.data);
};

export const deleteSkillsDetails = (skillsId) => {
  // skillsId = localStorage.getItem("SkillId");
  skillsId = skillsId;

  localStorage.removeItem("SkillId");
  return privateEmployeeAxios
    .delete(`/api/employee/skillTab/${skillsId}`)
    .then((response) => response.data);
};
