// method 12: trying for multipart file
import { useState } from "react";
import { getCurrentUserDetail } from "../Auth";
import { privateEmployeeAxios } from "../Services/helper";

const MultipartFileUpload = () => {
  let file_count = 0;
  let jsonBodyData = {};
  let formData = new FormData();
  const uploadJSONFiles = (event) => {
    event.preventDefault();
    //Step1: setting json data to formdate
    formData.append("jsonBodyData", JSON.stringify(jsonBodyData));

    // Step2: Setting files to formdata
    let selected_file = event.target.files;
    let selected_file_name = selected_file[0].name;
    for (let key of Object.keys(event.target.files)) {
      if (key !== "length") {
        if (selected_file_name == "anurag_passport.jpg") {
          formData.append("files", event.target.files[0]);
          file_count = file_count + 1;
        } else if (selected_file_name == "anurag_aadharcard.png") {
          formData.append("files", event.target.files[0]);
          file_count = file_count + 1;
        } else if (selected_file_name == "anurag_ pancard.jpeg") {
          formData.append("files", event.target.files[0]);
          file_count = file_count + 1;
        }
      }
    }

    let user = getCurrentUserDetail();
    const userId = user.id;
    console.log(userId);
    const url = `http://localhost:9090/api/employee/personaltab/add/${userId}`;

    if (file_count == 3) {
      return privateEmployeeAxios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => response.data)
        .catch((error) => {
          console.log("error occurred!");
          console.log(error);
        });
    }
  };

  //   render() {
  return (
    <div className="uk-margin-medium-top">
      <label>Upload Passport</label>
      <input type="file" onChange={(event) => uploadJSONFiles(event)} />
      <label>Upload Aadhar Card</label>
      <input type="file" onChange={(event) => uploadJSONFiles(event)} />
      <label>Upload Driving License</label>
      <input type="file" onChange={(event) => uploadJSONFiles(event)} />
    </div>
  );
};
// }
export default MultipartFileUpload;
