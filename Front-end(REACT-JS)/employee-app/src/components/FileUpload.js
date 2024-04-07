// import React, { useState } from "react";

// import axios from "axios";

// // function App() {
//     const FileUpload=()=>{

//     const [file, setFile] = useState();
//     const converted=useState(false);
//     var file_Array= new Array(3);

//     // function handleChange(e) {
//         const handleChange=(event)=>{
//         console.log(e.target.files);
//            setFile(URL.createObjectURL(event.target.files[0]));
//            if(event.target.files[0]){
//             readAndConvertFileToByteArray(event)
//            }

//            const readAndConvertFileToByteArray=(event)=>{

//             if(converted){
//                 file_Array.push("");
//             }
//            };

//            const files = fileList ? [...fileList] : [];

//       const data = new FormData();
//       files.forEach((file, i) => {
//       data.append(`file-${i}`, file, file.name);
//     });

//     }

//     return (
//         <div className="App">
//             <h2>Add Image:</h2>
//             <input type="file" onChange={handleChange} />
//             <input type="file" onChange={handleChange} />
//             <input type="file" onChange={handleChange} />
//             {/* <img src={file} /> */}

//         </div>

//     );
// }

// export default FileUpload;

// Method 2:

// import React, { useState } from "react";

//     const FileUpload=()=>{
//     const [file, setFile] = useState();
//     // const [fileList, setFileList] = useState<FileList | null>(null);
//     const [fileList, setFileList] = useState<FileList>(null);
//     // const converted=useState(false);
//     var file_Array= new Array(3);
//     const files = fileList ? [...fileList] : [];

//         const handleChange=(event)=>{
//         console.log(e.target.files);
//            setFile(URL.createObjectURL(event.target.files[0]));
//         //    if(event.target.files[0]){
//         //     // readAndConvertFileToByteArray(event);

//         //    }

//            const data = new FormData();
//            files.forEach((file, i) => {
//            data.append(`file-${i}`, file, file.name);
//          });
//            console.log(data);

//         //    const readAndConvertFileToByteArray=(event)=>{

//         //     if(converted){
//         //         file_Array.push("");
//         //     }
//         //    };

//     }

//     return (
//         <div className="App">
//             <h2>Add Image:</h2>
//             <input type="file" onChange={handleChange} />
//             <input type="file" onChange={handleChange} />
//             <input type="file" onChange={handleChange} />
//             {/* <img src={file} /> */}

//         </div>

//     );
// }

// export default FileUpload;

// Method 3:

// import React, { useState } from "react";

//     const FileUpload=()=>{
//     const [file, setFile] = useState();
//     const [fileList, setFileList] = useState([]);
//     var file_Array= new Array(3);
//     const files = fileList ? [...fileList] : [];

//         const handleChange=(event)=>{
//         console.log(event.target.files);
//            setFile(URL.createObjectURL(event.target.files[0]));

//            const data = new FormData();
//            files.forEach((file, i) => {
//            data.append(`file-${i}`, file, file.name);
//          });
//            console.log(data);
// }

//     return (
//         <div className="App">
//             <h2>Add Image:</h2>
//             <input type="file" onChange={handleChange} />
//             <input type="file" onChange={handleChange} />
//             <input type="file" onChange={handleChange} />

//         </div>

//     );
// }

// export default FileUpload;

// Method 4:

// import React, { useState } from "react";

//     const FileUpload=()=>{
//     const [file, setFile] = useState();
//     const [fileList, setFileList] = useState([]);
//     var file_Array= new Array(3);
//     const files = fileList ? [...fileList] : [];

//         const handleChange=(event)=>{
//         console.log(event.target.files);
//            setFile(URL.createObjectURL(event.target.files[0]));

//            const data = new FormData();
//            files.forEach((file, i) => {
//            data.append(`file-${i}`, file, file.name);
//          });
//            console.log(data);
// }

//     return (
//         <div className="App">
//             <h2>Add Image:</h2>
//             <input type="file" onChange={handleChange} />
//             <input type="file" onChange={handleChange} />
//             <input type="file" onChange={handleChange} />

//         </div>

//     );
// }

// import { ChangeEvent, useState } from 'react';
// const [fileList, setFileList] = useState<FileList | null>(null);

// // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const handleFileChange = (e) => {
//   setFileList(e.target.files);
// };

// const handleUploadClick = () => {
//   if (!fileList) {
//     return;
//   }

//   // 👇 Create new FormData object and append files
//   const data = new FormData();
//   files.forEach((file, i) => {
//     data.append(`file-${i}`, file, file.name);
//   });

//   // 👇 Uploading the files using the fetch API to the server
// //   fetch('https://httpbin.org/post', {
//     axios('https://httpbin.org/post', {
//     method: 'POST',
//     body: data,
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// };

// // 👇 files is not an array, but it's iterable, spread to get an array of files
// const files = fileList ? [...fileList] : [];

// return (
//     <>
//   <div>
//     <input type="file" onChange={handleFileChange} multiple />

//     <ul>
//       {files.map((file, i) => (
//         <li key={i}>
//           {file.name} - {file.type}
//         </li>
//       ))}
//     </ul>

//     <button onClick={handleUploadClick}>Upload</button>
//   </div>
//   </>
// );

// export default FileUpload;

// Method 5:

// import { useState } from "react";

// const FileUpload=()=>{

//     const [file, setFile] = useState();
//     const handleChange=(e)=> {
//         // console.log(e.target.files);
//         setFile(URL.createObjectURL(e.target.files[0]));
//         uploadedImage(e);
//     }

//     // not working for me

//     // const uploadedImage=(e)=> {
//     //     let reader = new FileReader();
//     //     let file = e.target.files[0];
//     //     console.log(file); //I can see the file's info
//     //     reader.onload= () => {
//     //         var array = new Uint32Array(file);
//     //         console.log("_+_array:",array); // the array is empty!
//     //         var binaryString = String.fromCharCode.apply(null,array) ;
//     //         // console.log("__binaryString:",binaryString);
//     //       this.setState({
//     //         file: binaryString
//     //       },()=>{
//     //         console.log(this.state.file);//ergo file is set to an empty image
//     //     });
//     //     }
//     //     reader.readAsArrayBuffer(file)
//     // }

//     // not working for me

//     // const uploadedImage=(e)=> {
//     //     const file = e.target.files[0];

//     //     return new Promise((resolve, reject) => {
//     //         const reader = new FileReader();

//     //         reader.onload = (event) => {
//     //             resolve(event.target.result);
//     //         };

//     //         reader.onerror = (err) => {
//     //             reject(err);
//     //         };

//     //         reader.readAsDataURL(file);
//     //         // console.log(file);
//     //     });
//     // }

// //     have some issue trying to rsolve in next method
//     // const uploadedImage=(e)=>{
//     //     let reader = new FileReader();
//     //     let file = e.target.files[0];
//     //     // console.log(file); //I can see the file's info
//     //     reader.onload= () => {
//     //         var array = new Uint32Array(reader.result); // read the actual file contents
//     //         console.log("_+_array:",array); // the array is empty!
//     //         var binaryString = String.fromCharCode.apply(null,array) ;

//     //         console.log("__binaryString:",binaryString);
//     //       this.setState({
//     //         file: binaryString
//     //       },()=>{
//     //         console.log(this.state.file);//ergo file is set to an empty image
//     //     });
//     //     }
//     //     reader.readAsArrayBuffer(file)
//     // }

// // method 6: not working

//     // const uploadedImage=(e)=>{
//     //     let reader = new FileReader();
//     //     let file = e.target.files[0];
//     //     // console.log(file); //I can see the file's info
//     //     reader.onload= () => {
//     //         var binary = '';
//     //         var array = new Uint32Array(reader.result); // read the actual file contents
//     //     //     console.log("_+_array:",array); // the array is empty!
//     //     //     var binaryString = String.fromCharCode.apply(null,array) ;
//     //     //     console.log("__binaryString:",binaryString);
//     //     //   this.setState({
//     //     //     file: binaryString
//     //     //   },()=>{
//     //     //     console.log(this.state.file);//ergo file is set to an empty image
//     //     // });

//     //     var len = array.byteLength;
//     //    for (var i = 0; i < len; i++) {
//     //     binary += String.fromCharCode(bytes[i]);
//     //    }
//     //     console.log(btoa(binary))

//     //     }
//     //     reader.readAsArrayBuffer(file)
//     // }

// // trying:not working

//     // const uploadedImage=(e)=>{
//     //     let reader = new FileReader();
//     //     let file = e.target.files[0];
//     //     // console.log(file); //I can see the file's info
//     //     reader.onload= () => {
//     //     //     var array = new Uint32Array(reader.result); // read the actual file contents
//     //     //     console.log("_+_array:",array); // the array is empty!
//     //     //     var binaryString = String.fromCharCode.apply(null,array) ;

//     //     //     console.log("__binaryString:",binaryString);
//     //     //   this.setState({
//     //     //     file: binaryString
//     //     //   },()=>{
//     //     //     console.log(this.state.file);//ergo file is set to an empty image
//     //     // });
//     //     // }

//     //     // reader.onload = function(e) {
//     //     //     reader.onload= () => {
//     //     //     // var data = e.target.result;
//     //     //     var data = e.target.result;
//     //     //     var wb = XLSX.read(data, {type: 'binary'});
//     //     //     process_wb(wb);
//     //     //     console.log(wb);
//     //     // }
//     //     // };

//     //     reader.onload= () => {
//     //         var data = e.target.result;
//     //         var wb = XLSX.read(data, {type: 'base64'});
//     //     };

//     //     }

//     //     reader.readAsArrayBuffer(file)
//     // }

//     //  not working
//     var file_array=new Array(3);
//     const uploadedImage = async (e) => {
//         const file = e.target.files[0];
//          // we need to get the raw bytes
//          const buffer = await file.arrayBuffer();
//          // each entry of array should contain 8 bits
//          const file_bytes = new Uint8Array(buffer);
//          console.log(file_bytes);
//          if(file_bytes){
//             file_array.push(file_bytes);
//             console.log("file array size which we have to send"+ file_array.length);
//             console.log(file_array.indexOf[0]);
//          }

//     }

//     return (
//         <div className="App">
//             <h2>Add Image:</h2>
//             <input type="file" onChange={handleChange} />
//             <input type="file" onChange={handleChange} />
//             <input type="file" onChange={handleChange} />

//         </div>

//     );

// };
// export default FileUpload;

// // method 6: trying
// // import axios from 'axios';
// import { useState } from "react";
// const FileUpload=()=>{

// //  const onChangeHandler=(event)=>{
//      onChangeHandler=event=>{

//         const[selectedFile,setselectedFile]=useState();
//         const [loaded,setLoaded]=useState();

//         console.log(event.target.files[0])
//         this.setState({
//             selectedFile: event.target.files[0],
//             loaded: 0,
//           })

//     }

//     constructor(props) {
//     // constructor=(props)=> {
//         super(props);
//           this.state = {
//             selectedFile: null
//           }

//       }

//        onClickHandler = () => {
//         const data = new FormData()
//         data.append('file', this.state.selectedFile);
//         axios.post("http://localhost:8000/upload", data, { // receive two parameter endpoint url ,form data

//     })
//     .then(res => { // then print response status
//       console.log(res.statusText);
//     })
//     }

//     return(<>
//     <input type="file" name="file" onChange={this.onChangeHandler}/>
//     <button
//     type="button"
//     class="btn btn-success btn-block"
//     onClick={this.onClickHandler}
//     >Upload</button>

//     </>
//     )
// };
// export default FileUpload;

// Method 7: trying

// method 6: trying:working code

// import { Component, useState } from "react";
// import axios from "axios";
// import { getCurrentToken } from "../Auth";
// import { privateEmployeeAxios } from "../Services/helper";
// class FileUpload extends Component{

//         constructor(props) {

//             super(props);
//               this.state = {
//                 image:''
//               }

//           }

//       onchange(e){
//        let files= e.target.files;
//        let reader=new FileReader();
//        reader.readAsDataURL(files[0]);

//        reader.onload=(e)=>{
//         console.log(e.target.result);
//         const url="http://localhost:9090/api/employee/personaltab/add";

//         // working code

//         const formData={files:e.target.result};
//         return privateEmployeeAxios.post(url,formData)
//         .then((response)=>{
//             console.log(response);
//         })}
// }
//    render(){
//     return(
//         <>
//     <input
//     type="file"
//     name="file"
//     onChange={(e)=>this.onchange(e)}
//     />
//     <button
//     type="button"
//     class="btn btn-success btn-block"
//     onClick={this.onClickHandler}
//     >Upload</button>

//     </>
//     )
// }
// };
// export default FileUpload;

// // method 7: trying with multipart file along with json data
// import { Component, useState } from "react";
// import axios from "axios";
// import { getCurrentToken } from "../Auth";
// import { privateEmployeeAxios } from "../Services/helper";
// class FileUpload extends Component {
//   //         constructor(props) {

//   //             super(props);
//   //               this.state = {
//   //                 image:''
//   //               }

//   //           }

//   //       onchange(e){
//   //        let files= e.target.files;
//   //        let reader=new FileReader();
//   //        reader.readAsDataURL(files[0]);

//   //        reader.onload=(e)=>{
//   //         console.log(e.target.result);
//   //         const url="http://localhost:9090/api/employee/personaltab/add";

//   //         // working code

//   //         const formData={files:e.target.result};
//   //         return privateEmployeeAxios.post(url,formData)
//   //         .then((response)=>{
//   //             console.log(response);
//   //         })}
//   // }
//   //    render(){
//   //     return(
//   //         <>
//   //     <input
//   //     type="file"
//   //     name="file"
//   //     onChange={(e)=>this.onchange(e)}
//   //     />
//   //     <button
//   //     type="button"
//   //     class="btn btn-success btn-block"
//   //     onClick={this.onClickHandler}
//   //     >Upload</button>

//   //     </>
//   //     )
//   // }

//   uploadJSONFiles(event) {
//     event.preventDefault();
//     let formData = new FormData();

//     let jsonBodyData = {
//       pid: 201,
//       firstName: "Ajay",
//       secondName: "kumar",
//       lastName: "Shukla",
//       age: 58,
//       dob: "1975-11-30",
//       gender: "Male",
//       emailId: "Ajay_Shukla@gmail.com",
//       mobileNo: "7509421836",
//       address: "Mangarh,Kunda,Pratapgarh",
//       city: "Kunda",
//       country: "India",
//       pinCode: 230204,
//       alternateMobileNo: "7509421836",
//       emergencyMobileNo: "8795155660",
//       bloodGroup: "B+",
//       passport: true,
//       passportDetails: "A1000234",
//       passportCopy: null,
//       aadhar: true,
//       aadharDetails: "2345 6543 4567",
//       aadharCopy: null,
//       drivingLicense: true,
//       drivingLicenseDetails: "HR-0619850034761",
//       drivingLicenseCopy: null,
//       maritalStatus: "Unmarried",
//       workLocation: "Coimbatore",
//     };
//     // for (let key of Object.keys(event.target.files)) {
//     //   if (key !== "length") {
//     //   }
//     // }

//     formData.append("files", event.target.files[0]);
//     if (event.target.files[1]) formData.append("DL", event.target.files[1]);
//     if (event.target.files[2]) formData.append("Aadhar", event.target.files[2]);
//     // formData.append('jsonBodyData',
//     //   new Blob([], {
//     //     type: 'application/json'
//     //   }));

//     formData.append("jsonBodyData", JSON.stringify(jsonBodyData));

//     const url = "http://localhost:9090/api/employee/personaltab/add";
//     console.log(formData.get("files"));

//     return (
//       privateEmployeeAxios
//         .post(url, formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         })
//         .then((response) => response.data)
//         // .then(result => console.log('Files successfully uploaded!'))
//         .catch((error) => console.log("error occurred!"))
//     );
//   }
//   render() {
//     return (
//       <div className="uk-margin-medium-top">
//         <label>Upload Files</label>
//         <input
//           type="file"
//           onChange={(event) => this.uploadJSONFiles(event)}
//           multiple
//         />
//       </div>
//     );
//   }
// }
// export default FileUpload;

// method 8: trying
// method 9: trying with multipart file along with json data
// import { Component, useState } from "react";
// import axios from "axios";
// import { getCurrentToken, getCurrentUserDetail } from "../Auth";
// import { privateEmployeeAxios } from "../Services/helper";
// class FileUpload extends Component {
//   //         constructor(props) {

//   //             super(props);
//   //               this.state = {
//   //                 image:''
//   //               }

//   //           }

//   //       onchange(e){
//   //        let files= e.target.files;
//   //        let reader=new FileReader();
//   //        reader.readAsDataURL(files[0]);

//   //        reader.onload=(e)=>{
//   //         console.log(e.target.result);
//   //         const url="http://localhost:9090/api/employee/personaltab/add";

//   //         // working code

//   //         const formData={files:e.target.result};
//   //         return privateEmployeeAxios.post(url,formData)
//   //         .then((response)=>{
//   //             console.log(response);
//   //         })}
//   // }
//   //    render(){
//   //     return(
//   //         <>
//   //     <input
//   //     type="file"
//   //     name="file"
//   //     onChange={(e)=>this.onchange(e)}
//   //     />
//   //     <button
//   //     type="button"
//   //     class="btn btn-success btn-block"
//   //     onClick={this.onClickHandler}
//   //     >Upload</button>

//   //     </>
//   //     )
//   // }

//   uploadJSONFiles(event) {
//     event.preventDefault();
//     let formData = new FormData();

//     let jsonBodyData = {
//       pid: 201,
//       firstName: "Ajay",
//       secondName: "kumar",
//       lastName: "Shukla",
//       age: 58,
//       dob: "1975-11-30",
//       gender: "Male",
//       emailId: "Ajay_Shukla@gmail.com",
//       mobileNo: "7509421836",
//       address: "Mangarh,Kunda,Pratapgarh",
//       city: "Kunda",
//       country: "India",
//       pinCode: 230204,
//       alternateMobileNo: "7509421836",
//       emergencyMobileNo: "8795155660",
//       bloodGroup: "B+",
//       passport: true,
//       passportDetails: "A1000234",
//       passportCopy: null,
//       aadhar: true,
//       aadharDetails: "2345 6543 4567",
//       aadharCopy: null,
//       drivingLicense: true,
//       drivingLicenseDetails: "HR-0619850034761",
//       drivingLicenseCopy: null,
//       maritalStatus: "Unmarried",
//       workLocation: "Coimbatore",
//     };

//     // working code:way1
//     // formData.append("files", event.target.files[0]);
//     // if (event.target.files[1]) formData.append("DL", event.target.files[1]);
//     // if (event.target.files[2]) formData.append("Aadhar", event.target.files[2]);

//     // formData.append("jsonBodyData", JSON.stringify(jsonBodyData));

//     // const url = "http://localhost:9090/api/employee/personaltab/add";
//     // console.log(formData.get("files"));

//     // return privateEmployeeAxios
//     //   .post(url, formData, {
//     //     headers: {
//     //       "Content-Type": "multipart/form-data",
//     //     },
//     //   })
//     //   .then((response) => response.data)
//     //   .catch((error) => console.log("error occurred!"));

//     // trying code:way2

//     // formData.append("files", event.target.files[0]);
//     // if (event.target.files[1]) formData.append("DL", event.target.files[1]);
//     // if (event.target.files[2]) formData.append("Aadhar", event.target.files[2]);

//     // formData.append("jsonBodyData", JSON.stringify(jsonBodyData));

//     for (let key of Object.keys(event.target.files)) {
//       if (key !== "length") {
//         formData.append("files", event.target.files[key]);
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

//     return privateEmployeeAxios
//       .post(url, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((response) => response.data)
//       .catch((error) => console.log("error occurred!"));
//   }
//   render() {
//     return (
//       <div className="uk-margin-medium-top">
//         <label>Upload Files</label>
//         <input
//           type="file"
//           onChange={(event) => this.uploadJSONFiles(event)}
//           multiple
//         />
//       </div>
//     );
//   }
// }
// export default FileUpload;

// method 10: trying code: with some changes
import { Component, useState } from "react";
import axios from "axios";
import { getCurrentToken, getCurrentUserDetail } from "../Auth";
import { privateEmployeeAxios } from "../Services/helper";
let count = 0;
class FileUpload extends Component {
  uploadJSONFiles(event) {
    event.preventDefault();
    let formData = new FormData();

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

    for (let key of Object.keys(event.target.files)) {
      if (key !== "length") {
        formData.append("files", event.target.files[key]);
      }
    }

    formData.append(
      "jsonBodyData",
      new Blob([JSON.stringify(jsonBodyData)], {
        type: "application/json",
      })
    );
    count = count + 1;

    let user = getCurrentUserDetail();
    const userId = user.id;
    console.log(userId);
    const url = `http://localhost:9090/api/employee/personaltab/add/${userId}`;
    console.log(formData.get("files"));

    if (count == 3) {
      console.log("formData size is" + count);
      console.log(formData.get("files"));
      return privateEmployeeAxios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => response.data)
        .catch((error) => console.log("error occurred!"));
    }
  }
  render() {
    return (
      <div className="uk-margin-medium-top">
        {/* <label>Upload Passport</label>
        <input
          type="file"
          onChange={(event) => this.uploadJSONFiles(event)}
          multiple
        /> */}
        <label>Upload Passport</label>
        <input type="file" onChange={(event) => this.uploadJSONFiles(event)} />
        <label>Upload Aadhar Card</label>
        <input type="file" onChange={(event) => this.uploadJSONFiles(event)} />
        <label>Upload Driving License</label>
        <input type="file" onChange={(event) => this.uploadJSONFiles(event)} />
      </div>
    );
  }
}
export default FileUpload;
