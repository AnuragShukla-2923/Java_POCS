import { getCurrentUserDetail } from "../Auth";
import { publicEmployeeAxios, privateEmployeeAxios } from "./helper";

let pid = 0;
let salaryId = 0;

export const createSalaryDetails = (salaryDetails) => {
  // pid=localStorage.getItem("PersonalDetailId");
  // console.log(pid);
  let user = getCurrentUserDetail();
  let userId = user.id;

  const salaryTabDto = JSON.stringify(salaryDetails);
  console.log(salaryTabDto);
  return privateEmployeeAxios
    .post(`/api/employee/SalaryTab/create/${userId}`, salaryTabDto, {
      headers: {
        "Content-Type": `application/json`,
      },
    })
    .then((response) => response.data);
};

export const getSalaryDetailsById = () => {
  salaryId = localStorage.getItem("SalaryId");
  return publicEmployeeAxios
    .get(`api/employee/SalaryTab/${salaryId}`)
    .then((response) => response.data);
};

export const getAllSalaryDetails = () => {
  return publicEmployeeAxios
    .get("/api/employee/SalaryTab/getAll")
    .then((response) => response.data);
};

export const updateSalaryDetails = (salaryDetails) => {
  salaryId = localStorage.getItem("SalaryId");
  const salaryTabDto = JSON.stringify(salaryDetails);
  return privateEmployeeAxios
    .put(`/api/employee/SalaryTab/${salaryId}`, salaryTabDto)
    .then((response) => response.data);
};

export const deleteSalaryDetails = () => {
  salaryId = localStorage.getItem("SalaryId");
  localStorage.removeItem("SalaryId");
  return privateEmployeeAxios
    .delete(`/api/employee/SalaryTab/${salaryId}`)
    .then((response) => response.data);
};
