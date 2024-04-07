// export const MultipartFileUpload = () => {
//   const [uploadedFiles, setUploadedFiles] = useState([]);

//   const handleFileEvent = (e) => {
//     // --- HANDLE FILE UPLOAD EVENT HERE ---
//     const chosenFiles = Array.prototype.slice.call(e.target.files);
//     handleUploadFiles(chosenFiles);
//   };

//   const handleUploadFiles = (files) => {
//     // --- ADD FILES TO STATE ---
//   };

//   const uploaded = [...uploadedFiles];
//   files.some((file) => {
//     uploaded.push(file);
//   });
//   setUploadedFiles(uploaded);

//   return (
//     <>
//       <input
//         id="fileUpload"
//         type="file"
//         multiple
//         accept="application/pdf, image/png"
//       />
//       <label htmlFor="fileUpload">
//         <a className="btn btn-primary"> Upload Files </a>
//       </label>
//     </>
//   );
// };

// method2:way2:

// import { useState } from "react";

// const MAX_COUNT = 5;

// function MultipartFileUpload() {
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [fileLimit, setFileLimit] = useState(false);

//   const handleUploadFiles = (files) => {
//     const uploaded = [...uploadedFiles];
//     let limitExceeded = false;
//     files.some((file) => {
//       if (uploaded.findIndex((f) => f.name === file.name) === -1) {
//         uploaded.push(file);
//         if (uploaded.length === MAX_COUNT) setFileLimit(true);
//         if (uploaded.length > MAX_COUNT) {
//           alert(`You can only add a maximum of ${MAX_COUNT} files`);
//           setFileLimit(false);
//           limitExceeded = true;
//           return true;
//         }
//       }
//     });
//     if (!limitExceeded) setUploadedFiles(uploaded);
//   };

//   const handleFileEvent = (e) => {
//     const chosenFiles = Array.prototype.slice.call(e.target.files);
//     handleUploadFiles(chosenFiles);
//   };

//   return (
//     <div className="App">
//       <input
//         id="fileUpload"
//         type="file"
//         multiple
//         accept="application/pdf, image/png"
//         onChange={handleFileEvent}
//         disabled={fileLimit}
//       />

//       <label htmlFor="fileUpload">
//         <a className={`btn btn-primary ${!fileLimit ? "" : "disabled"} `}>
//           Upload Files
//         </a>
//       </label>

//       <div className="uploaded-files-list">
//         {uploadedFiles.map((file) => (
//           <div>{file.name}</div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MultipartFileUpload;

// Method 3: trying
// method 10: trying code: with some changes:Not working code
// import { Component, useEffect, useState } from "react";
// import axios from "axios";
// import { getCurrentToken, getCurrentUserDetail } from "../Auth";
// import { privateEmployeeAxios } from "../Services/helper";

// const MultipartFileUpload = () => {
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const MAX_FILE_COUNT = 3;
//   let file_count = 0;
//   let jsonBodyData = {
//     pid: 201,
//     firstName: "Ajay",
//     secondName: "kumar",
//     lastName: "Shukla",
//     age: 58,
//     dob: "1975-11-30",
//     gender: "Male",
//     emailId: "Ajay_Shukla@gmail.com",
//     mobileNo: "7509421836",
//     address: "Mangarh,Kunda,Pratapgarh",
//     city: "Kunda",
//     country: "India",
//     pinCode: 230204,
//     alternateMobileNo: "7509421836",
//     emergencyMobileNo: "8795155660",
//     bloodGroup: "B+",
//     passport: true,
//     passportDetails: "A1000234",
//     passportCopy: null,
//     aadhar: true,
//     aadharDetails: "2345 6543 4567",
//     aadharCopy: null,
//     drivingLicense: true,
//     drivingLicenseDetails: "HR-0619850034761",
//     drivingLicenseCopy: null,
//     maritalStatus: "Unmarried",
//     workLocation: "Coimbatore",
//   };

//   const uploadJSONFiles = (event) => {
//     event.preventDefault();
//     let formData = new FormData();
//     let selected_file = event.target.files;
//     let selected_file_name = selected_file[0].name;
//     for (let key of Object.keys(event.target.files)) {
//       //   if (key !== "length") {
//       //     // formData.append("files", event.target.files[key]);
//       //     if (selected_file_name == "anurag_passport.jpg") {
//       //       formData.append("files", event.target.files[key]);
//       //       console.log(formData.get("files"));
//       //       file_count = file_count + 1;
//       //     } else if (selected_file_name == "anurag_aadharcard.png") {
//       //       formData.append("aadhar", event.target.files[key]);
//       //       console.log(formData.get("aadhar"));
//       //       file_count = file_count + 1;
//       //     } else if (selected_file_name == "anurag_ pancard.jpeg") {
//       //       formData.append("driving", event.target.files[key]);
//       //       console.log(formData.get("driving"));
//       //       file_count = file_count + 1;
//       //     }
//       //   }

//       if (key !== "length") {
//         // formData.append("files", event.target.files[key]);
//         if (selected_file_name == "anurag_passport.jpg") {
//           //   formData.append("files", event.target.files[key]);
//           const chosenFiles = Array.prototype.slice.call(event.target.files);
//           setUploadedFiles(chosenFiles);
//           //   console.log(formData.get("files"));
//           file_count = file_count + 1;
//         } else if (selected_file_name == "anurag_aadharcard.png") {
//           //   formData.append("aadhar", event.target.files[key]);
//           const chosenFiles = Array.prototype.slice.call(event.target.files);
//           setUploadedFiles(chosenFiles);
//           //   console.log(formData.get("aadhar"));
//           file_count = file_count + 1;
//         } else if (selected_file_name == "anurag_ pancard.jpeg") {
//           //   formData.append("driving", event.target.files[key]);
//           const chosenFiles = Array.prototype.slice.call(event.target.files);
//           setUploadedFiles(chosenFiles);
//           //   console.log(formData.get("driving"));
//           file_count = file_count + 1;
//         }
//         if (file_count == 3) {
//           formData.append("files", uploadedFiles);
//           console.log(formData);
//         }
//       }
//     }

//     formData.append(
//       "jsonBodyData",
//       new Blob([JSON.stringify(jsonBodyData)], {
//         type: "application/json",
//       })
//     );

//     let user = getCurrentUserDetail();
//     const userId = user.id;
//     console.log(userId);
//     const url = `http://localhost:9090/api/employee/personaltab/add/${userId}`;

//     console.log(formData.get("files"));
//     console.log(formData);
//     console.log(file_count);
//     console.log("File name is" + " " + selected_file_name);
//     // console.log(uploadedFiles);

//     useEffect(() => console.log(uploadedFiles), [uploadedFiles]);

//     if (file_count == 3) {
//       return privateEmployeeAxios
//         .post(url, formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         })
//         .then((response) => response.data)
//         .catch((error) => console.log("error occurred!"));
//     }
//   };

//   //   render() {
//   return (
//     <div className="uk-margin-medium-top">
//       {/* <label>Upload Passport</label>
//       <input
//         type="file"
//         onChange={(event) => this.uploadJSONFiles(event)}
//         multiple
//       /> */}

//       <label>Upload Passport</label>
//       <input
//         type="file"
//         onChange={(event) => uploadJSONFiles(event)}
//         // multiple
//       />
//       <label>Upload Aadhar Card</label>
//       <input type="file" onChange={(event) => uploadJSONFiles(event)} />
//       <label>Upload Driving License</label>
//       <input type="file" onChange={(event) => uploadJSONFiles(event)} />
//     </div>
//   );
// };
// // }
// export default MultipartFileUpload;

// Method 11: tring for base64 files: not working

// import { Component, useEffect, useState } from "react";
// import axios from "axios";
// import { getCurrentToken, getCurrentUserDetail } from "../Auth";
// import { privateEmployeeAxios } from "../Services/helper";

// const MultipartFileUpload = () => {
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [passportCopy, setPassportCopy] = useState(null);
//   const [aadharCopy, setAadharCopy] = useState(null);
//   const [drivingLicenseCopy, setDrivingLicenseCopy] = useState(null);

//   const MAX_FILE_COUNT = 3;
//   let file_count = 0;
//   let user = getCurrentUserDetail();
//   const userId = user.id;
//   console.log(userId);
//   const url = `http://localhost:9090/api/employee/personaltab/add/${userId}`;

//   let jsonBodyData = {
//     pid: 201,
//     firstName: "Ajay",
//     secondName: "kumar",
//     lastName: "Shukla",
//     age: 58,
//     dob: "1975-11-30",
//     gender: "Male",
//     emailId: "Ajay_Shukla@gmail.com",
//     mobileNo: "7509421836",
//     address: "Mangarh,Kunda,Pratapgarh",
//     city: "Kunda",
//     country: "India",
//     pinCode: 230204,
//     alternateMobileNo: "7509421836",
//     emergencyMobileNo: "8795155660",
//     bloodGroup: "B+",
//     passport: true,
//     passportDetails: "A1000234",
//     passportCopy: null,
//     aadhar: true,
//     aadharDetails: "2345 6543 4567",
//     aadharCopy: null,
//     drivingLicense: true,
//     drivingLicenseDetails: "HR-0619850034761",
//     drivingLicenseCopy: null,
//     maritalStatus: "Unmarried",
//     workLocation: "Coimbatore",
//   };

//   const uploadJSONFiles = (event) => {
//     let selected_file = event.target.files;
//     let selected_file_name = selected_file[0].name;
//     event.preventDefault();
//     if (selected_file_name == "anurag_passport.jpg") {
//       setPassportCopy(getBase64(selected_file));
//       file_count = file_count + 1;
//     } else if (selected_file_name == "anurag_aadharcard.png") {
//       setAadharCopy(getBase64(selected_file));
//       file_count = file_count + 1;
//     } else if (selected_file_name == "anurag_ pancard.jpeg") {
//       setDrivingLicenseCopy(getBase64(selected_file));
//       file_count = file_count + 1;
//     }
//   };

//   console.log("passport copy" + passportCopy);
//   console.log("Aadhar copy" + aadharCopy);
//   console.log("Driving License copy" + drivingLicenseCopy);

//   const getBase64 = (file) => {
//     let document = "";
//     let reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = function () {
//       document = reader.result;
//     };
//     reader.onerror = function (error) {
//       console.log("Error: ", error);
//     };

//     return document;
//   };

//   return (
//     <div className="uk-margin-medium-top">
//       <label>Upload Passport</label>
//       <input type="file" onChange={(event) => uploadJSONFiles(event)} />
//       <label>Upload Aadhar Card</label>
//       <input type="file" onChange={(event) => uploadJSONFiles(event)} />
//       <label>Upload Driving License</label>
//       <input type="file" onChange={(event) => uploadJSONFiles(event)} />
//     </div>
//   );
// };
// // }
// export default MultipartFileUpload;

// Method 12:not working code
// import React, { useState } from "react";
// // const [files, setFiles] = useState({
// //   passport: "",
// //   aadharcard: "",
// //   drivingLicense: "",
// // });

// class MultipartFileUpload extends React.Component {
//   state = {
//     file: null,
//     base64URL: "",
//   };

//   state = {
//     passport: "",
//     aadharcard: "",
//     drivingLicense: "",
//   };

//   getBase64 = (file) => {
//     return new Promise((resolve) => {
//       let fileInfo;
//       let baseURL = "";
//       // Make new FileReader
//       let reader = new FileReader();

//       // Convert the file to base64 text
//       reader.readAsDataURL(file);

//       // on reader load somthing...
//       reader.onload = () => {
//         // Make a fileInfo Object

//         baseURL = reader.result;
//         console.log(baseURL);
//         resolve(baseURL);
//         this.setState({ passport: baseURL });
//         console.log(this.state.passport);
//       };
//     });
//   };

//   handleFileInputChange = (e) => {
//     let { file } = this.state;

//     file = e.target.files[0];

//     this.getBase64(file)
//       .then((result) => {
//         file["base64"] = result;
//         // setFiles({ ...files, result });

//         this.setState({
//           base64URL: result,
//           file,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     this.setState({
//       file: e.target.files[0],
//     });
//   };

//   render() {
//     return (
//       <div>
//         <input type="file" name="file" onChange={this.handleFileInputChange} />
//         {/* <input type="file" name="file" onChange={this.handleFileInputChange} />
//         <input type="file" name="file" onChange={this.handleFileInputChange} /> */}
//       </div>
//     );
//   }
// }

// export default MultipartFileUpload;

// method 13: trying code: not tested code:may be no use

// import React, { useState } from "react";
// import axios from "axios";
// import { getCurrentUserDetail } from "../Auth";

// export default function MultipartFileUpload() {
//   const [postImage, setPostImage] = useState({
//     myFile: "",
//   });

//   let user = getCurrentUserDetail();
//   const userId = user.id;
//   console.log(userId);
//   const url = `http://localhost:9090/api/employee/personaltab/add/${userId}`;
//   const createImage = (newImage) => axios.post(url, newImage);

//   const createPost = async (post) => {
//     try {
//       await createImage(post);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createPost(postImage);
//   };

//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);
//       fileReader.onload = () => {
//         resolve(fileReader.result);
//       };
//       fileReader.onerror = (error) => {
//         reject(error);
//       };
//     });
//   };
//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     const base64 = await convertToBase64(file);
//     setPostImage({ ...postImage, myFile: base64 });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="file"
//           label="Image"
//           name="myFile"
//           accept=".jpeg, .png, .jpg"
//           onChange={(e) => handleFileUpload(e)}
//         />

//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// method 12: trying for multipart file:perfectly working code:requirement achieved
import { Component, useEffect, useState } from "react";
import axios from "axios";
import { getCurrentToken, getCurrentUserDetail } from "../Auth";
import { privateEmployeeAxios } from "../Services/helper";

const MultipartFileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const MAX_FILE_COUNT = 3;
  let file_count = 0;
  // const [file_count, setFileCount] = useState(0);

  let jsonBodyData = {
    pid: 201,
    firstName: "Ajay",
    secondName: "kumar",
    lastName: "Shukla",
    age: 58,
    dob: "1975-11-30",
    gender: "Male",
    emailId: "Ajay_Shukla@gmail.com",
    mobileNo: "7509421836",
    address: "Mangarh,Kunda,Pratapgarh",
    city: "Kunda",
    state: "Uttar Pradesh",
    country: "India",
    pinCode: 230204,
    alternateMobileNo: "7509421836",
    emergencyMobileNo: "8795155660",
    bloodGroup: "B+",
    passport: true,
    passportDetails: "A1000234",
    passportCopy: null,
    aadhar: true,
    aadharDetails: "2345 6543 4567",
    aadharCopy: null,
    drivingLicense: true,
    drivingLicenseDetails: "HR-0619850034761",
    drivingLicenseCopy: null,
    maritalStatus: "Unmarried",
    workLocation: "Coimbatore",
  };
  let formData = new FormData();
  const uploadJSONFiles = (event) => {
    event.preventDefault();
    //Step1: setting json data to formdate

    // formData.append(
    //   "jsonBodyData",
    //   //   new Blob([JSON.stringify(jsonBodyData)], {
    //   //     type: "application/json",
    //   //   })
    formData.append("jsonBodyData", JSON.stringify(jsonBodyData));

    // Step2: Setting files to formdata
    let selected_file = event.target.files;
    let selected_file_name = selected_file[0].name;
    for (let key of Object.keys(event.target.files)) {
      if (key !== "length") {
        // formData.append("files", event.target.files[key]);
        if (selected_file_name == "anurag_passport.jpg") {
          //   formData.append("files[1]", event.target.files[key]);

          formData.append("files", event.target.files[0]);
          file_count = file_count + 1;
          // setFileCount(file_count + 1);
        } else if (selected_file_name == "anurag_aadharcard.png") {
          //   formData.append("aadhar", event.target.files[key]);
          //   formData.append("files[1]", event.target.files[key]);
          formData.append("files", event.target.files[0]);
          file_count = file_count + 1;
          // setFileCount(file_count + 1);
        } else if (selected_file_name == "anurag_ pancard.jpeg") {
          //   formData.append("driving", event.target.files[key]);
          //   formData.append("files[2]", event.target.files[key]);

          formData.append("files", event.target.files[0]);
          file_count = file_count + 1;
          // setFileCount(file_count + 1);
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
