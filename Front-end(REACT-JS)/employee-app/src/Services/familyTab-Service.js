import { getCurrentUserDetail } from "../Auth";
import { privateFamilyTab, publicFamilyTab } from "./helper";

let pid = 0;
let familyId = 0;
export const createFamilyDetails = (familyDetails) => {
  // pid=localStorage.getItem("PersonalDetailId");
  // console.log(pid);
  let user = getCurrentUserDetail();
  let userId = user.id;

  const familyTabDto = JSON.stringify(familyDetails);
  return privateFamilyTab
    .post(`/api/employee/familyTab/create/${userId}`, familyTabDto)
    .then((response) => response.data);
};

export const getFamilyTabById = () => {
  familyId = localStorage.getItem("FamilyId");
  return publicFamilyTab
    .get(`/api/employee/familyTab/${familyId}`)
    .then((response) => response.data);
};

export const getAllFamilyTab = () => {
  return publicFamilyTab
    .get("/api/employee/familyTab/getAll")
    .then((response) => response.data);
};

export const updateFamilyTab = (updateFamilyDetails) => {
  familyId = localStorage.getItem("FamilyId");
  const familyTabDto = JSON.stringify(updateFamilyDetails);
  return privateFamilyTab
    .put(`/api/employee/familyTab/${familyId}`, familyTabDto)
    .then((response) => response.data);
};

export const deleteFamilyTab = () => {
  familyId = localStorage.getItem("FamilyId");
  localStorage.removeItem("FamilyId");
  return privateFamilyTab
    .delete(`/api/employee/familyTab/${familyId}`)
    .then((response) => response.data);
};
