import { getCurrentUserDetail } from "../Auth";
import { privateAccommodationTab, publicAccommodationTab } from "./helper";

let pid = 0;
let accommodationId = 0;

export const createAccommodationDetails = (accommodationDetails) => {
  // pid=localStorage.getItem("PersonalDetailId");
  // console.log(pid);
  let user = getCurrentUserDetail();
  let userId = user.id;
  const accommodationDetailsDTO = JSON.stringify(accommodationDetails);

  return privateAccommodationTab
    .post(
      `/api/employee/accommodationTab/create/${userId}`,
      accommodationDetailsDTO
    )
    .then((response) => response.data);
};

// for updating an accommodation Details
export const updateAccommodationDetails = (accommodationDetails) => {
  accommodationId = localStorage.getItem("AccommodationId");
  const accommodationDetailsDTO = JSON.stringify(accommodationDetails);

  return privateAccommodationTab
    .put(
      `/api/employee/accommodationTab/${accommodationId}`,
      accommodationDetailsDTO
    )
    .then((response) => response.data);
};

// for deleting  a single Accommodation Details by ID
export const deleteAccommodationDetails = () => {
  accommodationId = localStorage.getItem("AccommodationId");
  return privateAccommodationTab
    .delete(`/api/employee/accommodationTab/${accommodationId}`)
    .then((response) => response.data);
};

// for Getting  a single Accommodation Details by ID
export const getAccommodationDetailsById = () => {
  accommodationId = localStorage.getItem("AccommodationId");
  localStorage.removeItem("AccommodationId");
  return publicAccommodationTab
    .get(`/api/employee/accommodationTab/${accommodationId}`)
    .then((response) => response.data);
};

// for getting all Accommodation Details
export const getAllAccommodationDetails = () => {
  return publicAccommodationTab
    .get("/api/employee/accommodationTab/getAll")
    .then((response) => response.data);
};
