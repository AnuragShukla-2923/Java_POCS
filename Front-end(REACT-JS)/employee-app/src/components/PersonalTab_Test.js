// import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import moment from "moment/moment";
// import { Country, State, City } from "country-state-city";

// import "../App.css";
// import {
//   gender_selections,
//   age_obj,
//   work_location_obj,
//   blood_grp_obj,
//   country_name,
//   city_Name,
//   state_name,
//   marital_status_obj,
// } from "../Services/JsonArrays";
// import {
//   Form,
//   Row,
//   Card,
//   CardBody,
//   CardHeader,
//   Col,
//   Container,
//   FormGroup,
//   Input,
//   Label,
//   Button,
//   FormFeedback,
// } from "reactstrap";
// import Base from "./Base";
// import {
//   createPersonalDetails,
//   deletePersonalDetailsById,
//   getPersonalDetailsById,
//   updatePersonalDetails,
// } from "../Services/personalTab-Service_Test";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import CustomEmployeeTabs from "./CustomEmployeeTabs";
// import { doLogout, doSavePersonalId, getCurrentUserDetail } from "../Auth";
// import { getPersonByUserId } from "../Services/user-Service";
// import Select from "react-select";

// const PersonalTab_Test = () => {
//   const navigate = useNavigate();
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [dateOfBirth, setdateOfBirth] = useState();
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [files, setFiles] = useState([]);

//   const [file, setFile] = useState({
//     passportCopy: null,
//     aadharCopy: null,
//     drivingLicenseCopy: null,
//   });

//   //   const [files, setFiles] = useState({
//   //     passportCopy: null,
//   //     aadharCopy: null,
//   //     drivingLicenseCopy: null,
//   //   });

//   let age_present = 0;
//   let dbCity = null;
//   let dbState = null;
//   let dbCountry = null;

//   const [personalInfo, setPersonalInfo] = useState({
//     firstName: "",
//     secondName: "",
//     lastName: "",
//     age: "",
//     dob: "",
//     gender: "",
//     emailId: "",
//     mobileNo: "",
//     address: "",
//     city: "",
//     state: "",
//     country: "",
//     pinCode: "",
//     alternateMobileNo: "",
//     emergencyMobileNo: "",
//     bloodGroup: "",
//     passport: "",
//     passportDetails: "",
//     passportCopy: null,
//     aadhar: "",
//     aadharDetails: "",
//     aadharCopy: null,
//     drivingLicense: "",
//     drivingLicenseDetails: "",
//     drivingLicenseCopy: null,
//     maritalStatus: "",
//     workLocation: "",
//   });

//   // for error handling
//   const [error, setError] = useState({
//     errors: {},
//     isError: false,
//   });

//   let user = getCurrentUserDetail();
//   let userId = user.id;
//   console.log(userId);

//   const handleReset = () => {
//     setPersonalInfo({
//       firstName: "",
//       secondName: "",
//       lastName: "",
//       age: "",
//       dob: "",
//       gender: "",
//       emailId: "",
//       mobileNo: "",
//       address: "",
//       city: "",
//       state: "",
//       country: "",
//       pinCode: "",
//       alternateMobileNo: "",
//       emergencyMobileNo: "",
//       bloodGroup: "",
//       passport: "",
//       passportDetails: "",
//       passportCopy: null,
//       aadhar: "",
//       aadharDetails: "",
//       aadharCopy: null,
//       drivingLicense: "",
//       drivingLicenseDetails: "",
//       drivingLicenseCopy: null,
//       maritalStatus: "",
//       workLocation: "",
//     });
//   };

//   const handleView = (event) => {
//     event.preventDefault();
//     console.log(setIsHidden);
//     getPersonalDetailsById().then((data) => {
//       setPersonalInfo(data);
//     });
//   };

//   const getPersonalDetails = () => {
//     getPersonByUserId()
//       .then((data) => {
//         dbCity = data.city;
//         dbState = data.state;
//         dbCountry = data.country;
//         setPersonalInfo(data);

//         if (data.country) {
//           let getCountry = Country.getAllCountries().find(
//             (item) => item.name == data.country
//           );
//           setPersonalInfo({ ...personalInfo, country: getCountry.name });
//           setSelectedCountry(getCountry);
//         }
//         if (data.state) {
//           let getState = State.getAllStates().find(
//             (item) => item.name == data.state
//           );
//           setPersonalInfo({ ...personalInfo, state: getState.name });
//           setSelectedState(getState);
//         }
//         if (data.city) {
//           let getCity = City.getAllCities().find(
//             (item) => item.name == data.city
//           );
//           setPersonalInfo({ ...personalInfo, city: getCity.name });
//           setSelectedCity(getCity);
//         }
//         if (data.dob) {
//           let dbdob = new Date(data.dob);
//           setPersonalInfo({ ...personalInfo, dob: data.dob });
//           setdateOfBirth(dbdob);
//         }
//         console.log(personalInfo);
//       })
//       .catch((error) => {
//         console.log(error);
//         toast.success("No record is present");
//       });
//   };

//   useEffect(() => {
//     getPersonalDetails();
//   }, []);

//   window.onbeforeunload = function () {
//     doLogout();
//   };

//   const handleUpdate = (event) => {
//     event.preventDefault();
//     setFormErrors(validate(personalInfo));
//     setIsSubmit(true);
//     // console.log(personalInfo);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       updatePersonalDetails(personalInfo)
//         .then((data) => {
//           toast.success("Updated Successfully!");
//           handleReset();
//         })
//         .catch((error) => {
//           console.log(error);
//           setError({
//             errors: error,
//             isError: true,
//           });
//         });
//     }
//   };

//   const handleDelete = () => {
//     alert("Are You Sure Want to Delete this Record?");
//     deletePersonalDetailsById()
//       .then((data) => {
//         toast.success("Record Deleted Successfully!");
//         handleReset();
//       })
//       .catch((error) => {
//         toast.error("Something Wrong!");
//       });
//   };

//   const ageCalculator = (event) => {
//     event.preventDefault();
//     const enteredDoB = event.target.dob;
//   };

//   const validate = (values) => {
//     const errors = {};
//     const regex_firstName = /^[a-z]{2,12}$/i;
//     const regex_secondName = /^[a-z]{2,12}$/i;
//     const regex_lastName = /^[a-z]{2,12}$/i;
//     const regex_dob = /^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/;
//     const regex_age = /^([2-5][0-9]{1})$/;
//     const regex_gender = /^([FEMALE]{6})$|^([MALE]{4})$||^([OTHER]{5})$/i;
//     const regex_emailId = /^[a-z0-9]{4,18}@[a-z]{4,7}.[a-z]{2,3}$/i;
//     const regex_mobileNo = /^[789]{1}[0-9]{9}$/;
//     const regex_address = /^[a-zA-Z0-9\-\,\. ]{4,30}$/i;
//     const regex_country = /^[a-z ]{5,30}$/i;
//     const regex_state = /^[a-z ]{3,30}$/i;
//     const regex_city = /^[a-z ]{3,30}$/i;
//     const regex_pinCode = /^[1-9][0-9]{5}$/;
//     const regex_alternateMobileNo = /^[789]{1}[0-9]{9}$/;
//     const regex_emergencyMobileNo = /^[789]{1}[0-9]{9}$/;
//     const regex_bloodGroup = /^(A|B|AB|O)[+-]$/;
//     const regex_maritalStatus = /^[(married|unmarried)]{7,9}$/i;
//     const regex_workLocation = /^[a-z \-]{3,15}$/i;
//     const regex_passport = /^(True|False)$/i;
//     const regex_passportDetails = /^[A-Z]{1}[1-9]{1}[0-9]{6}$/;
//     const regex_aadhar = /^(True|False)$/i;
//     const regex_aadharDetails = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;
//     const regex_drivingLicense = /^(True|False)$/i;
//     const regex_drivingLicenseDetails =
//       /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/;

//     if (!values.firstName) {
//       errors.firstName = "First Name is required";
//     } else if (!regex_firstName.test(values.firstName)) {
//       errors.firstName = "Invalid First Name";
//     }

//     if (!values.secondName == "") {
//       if (!values.secondName) {
//         errors.secondName = "Second Name is required";
//       } else if (!regex_secondName.test(values.secondName)) {
//         errors.secondName = "Invalid Second Name";
//       }
//     }

//     if (!values.lastName) {
//       errors.lastName = "Last Name is required";
//     } else if (!regex_lastName.test(values.lastName)) {
//       errors.lastName = "Invalid Last Name";
//     }
//     if (!dateOfBirth) {
//       errors.dob = "DOB is required";
//     } else {
//       personalInfo.dob = dateOfBirth;
//       setPersonalInfo({ ...personalInfo });
//       console.log(personalInfo);

//       // calculating Age
//       age_present = age_calculator(dateOfBirth);
//       console.log(age_present);
//       personalInfo.age = age_present;
//       console.log("Age_present" + age_present);
//       setPersonalInfo({ ...personalInfo });

//       if (age_present) {
//         if (!personalInfo.age) {
//           errors.age = "Age is required";
//         } else if (!regex_age.test(personalInfo.age)) {
//           errors.age = "Invalid Age(age must be between 20 to 50)";
//         } else {
//         }
//       } else if (age_present == 0) {
//         errors.age = "Invalid Age(age must be between 20 to 50,can't be 0)";
//       }
//     }

//     if (!values.gender) {
//       errors.gender = "Gender is required";
//     } else if (!regex_gender.test(values.gender)) {
//       errors.gender = "Invalid Gender";
//     }
//     if (!values.emailId) {
//       errors.emailId = "Email is required";
//     } else if (!regex_emailId.test(values.emailId)) {
//       errors.emailId = "Invalid Email";
//     }
//     if (!values.mobileNo) {
//       errors.mobileNo = "Contact NO is required";
//     } else if (!regex_mobileNo.test(values.mobileNo)) {
//       errors.mobileNo = "Invalid Contact No";
//     }
//     if (!values.address) {
//       errors.address = "Address is required";
//     } else if (!regex_address.test(values.address)) {
//       errors.address = "Invalid Address";
//     }

//     if (!selectedCountry) {
//       errors.country = "Country is required";
//     } else {
//       personalInfo.country = selectedCountry.name;
//       setPersonalInfo({ ...personalInfo });
//     }

//     if (!selectedState) {
//       errors.state = "State is required";
//     } else {
//       personalInfo.state = selectedState.name;
//       setPersonalInfo({ ...personalInfo });
//     }

//     if (!selectedCity) {
//       errors.city = "City is required";
//     } else {
//       personalInfo.city = selectedCity.name;
//       setPersonalInfo({ ...personalInfo });
//     }

//     if (!values.pinCode) {
//       errors.pinCode = "Pincode is required";
//     } else if (!regex_pinCode.test(values.pinCode)) {
//       errors.pinCode = "Invalid pincode";
//     }

//     if (!values.alternateMobileNo) {
//       errors.alternateMobileNo = "Alternate No is required";
//     } else if (!regex_alternateMobileNo.test(values.alternateMobileNo)) {
//       errors.alternateMobileNo = "Invalid Alternate No";
//     }
//     if (!values.emergencyMobileNo) {
//       errors.emergencyMobileNo = "Emergency No is required";
//     } else if (!regex_emergencyMobileNo.test(values.emergencyMobileNo)) {
//       errors.emergencyMobileNo = "Invalid Emergency No";
//     }
//     if (!values.bloodGroup) {
//       errors.bloodGroup = "Blood grp is required";
//     } else if (!regex_bloodGroup.test(values.bloodGroup)) {
//       errors.bloodGroup = "Invalid blood grp";
//     }
//     if (!values.maritalStatus) {
//       errors.maritalStatus = "Marital Status is required";
//     } else if (!regex_maritalStatus.test(values.maritalStatus)) {
//       errors.maritalStatus = "Invalid Status";
//     }
//     if (!values.workLocation) {
//       errors.workLocation = "Work Location is required";
//     } else if (!regex_workLocation.test(values.workLocation)) {
//       errors.workLocation = "Invalid Location";
//     }
//     if (!values.passport) {
//       errors.passport = "Passport status is required";
//     } else if (!regex_passport.test(values.passport)) {
//       errors.passport = "Invalid Value";
//     }
//     if (values.passport == "true") {
//       if (!values.passportDetails) {
//         errors.passportDetails = "Passport Detail is required";
//       } else if (!regex_passportDetails.test(values.passportDetails)) {
//         errors.passportDetails = "Invalid Detail";
//       }
//     }

//     if (!values.aadhar) {
//       errors.aadhar = "Aadhar is required";
//     } else if (!regex_aadhar.test(values.aadhar)) {
//       errors.aadhar = "Invalid value";
//     }

//     if (values.aadhar == "true") {
//       if (!values.aadharDetails) {
//         errors.aadharDetails = "Aadhar Detail is required";
//       } else if (!regex_aadharDetails.test(values.aadharDetails)) {
//         errors.aadharDetails = "Invalid Value";
//       }
//     }

//     if (!values.drivingLicense) {
//       errors.drivingLicense = "Driving Status is required";
//     } else if (!regex_drivingLicense.test(values.drivingLicense)) {
//       errors.drivingLicense = "Invalid Value";
//     }

//     if (values.drivingLicense == "true") {
//       if (!values.drivingLicenseDetails) {
//         errors.drivingLicenseDetails = "Driving Detail is required";
//       } else if (
//         !regex_drivingLicenseDetails.test(values.drivingLicenseDetails)
//       ) {
//         errors.drivingLicenseDetails = "Invalid Value";
//       }
//     }

//     return errors;
//   };

//   const age_calculator = (dateOfBirth) => {
//     let today = new Date();
//     var birthDate = new Date(dateOfBirth);
//     let age_now = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//       age_now--;
//     }

//     return age_now;
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     //validations
//     setFormErrors(validate(personalInfo));
//     setIsSubmit(true);
//   };

//   //   useEffect(() => {
//   //     if (Object.keys(formErrors).length === 0 && isSubmit) {
//   //       //   console.log(personalInfo);
//   //       createPersonalDetails(personalInfo)
//   //         .then((data) => {
//   //           toast.success("Personal Details Created Successfully!" + data.pid);
//   //           handleReset();

//   //           doSavePersonalId(data, () => {
//   //             console.log("Pid is saved to localstorage");
//   //             setIsHidden(true);
//   //             navigate("/user/skillsTab");
//   //           });
//   //         })
//   //         .catch((error) => {
//   //           console.log(error);

//   //           if (error.response.status == 400 || error.response.status == 404) {
//   //             toast.error(error.response.data.message);
//   //           } else {
//   //             toast.error(error?.response?.data?.message);
//   //           }
//   //           setError({
//   //             errors: error,
//   //             isError: true,
//   //           });

//   //           console.log(error?.response?.data?.message);
//   //         });
//   //     }
//   //   }, [formErrors]);

//   useEffect(() => {
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       if (files.length == 3) {
//         let formData = new FormData();
//         formData.append("jsonBodyData", JSON.stringify(personalInfo));
//         files.forEach((fileItem, index) => {
//           // limitting the files for upload max 3
//           if (index < 3) {
//             formData.append("files", fileItem.file);
//           }
//         });

//         createPersonalDetails(formData)
//           .then((data) => {
//             toast.success("Personal Details Created Successfully!" + data.pid);
//             handleReset();

//             doSavePersonalId(data, () => {
//               console.log("Pid is saved to localstorage");
//               setIsHidden(true);
//               navigate("/user/skillsTab");
//             });
//           })
//           .catch((error) => {
//             console.log(error);

//             if (error.response.status == 400 || error.response.status == 404) {
//               toast.error(error.response.data.message);
//             } else {
//               toast.error(error?.response?.data?.message);
//             }
//             setError({
//               errors: error,
//               isError: true,
//             });

//             console.log(error?.response?.data?.message);
//           });
//       }
//     }
//   }, [formErrors, isSubmit]);

//   const uploadJSONFiles = (event) => {
//     event.preventDefault();
//     // Step2: Setting files to formdata
//     let selected_file = event.target.files;
//     let selected_file_name = selected_file[0].name;
//     let fileItem = [...files];
//     // The concdition is to avoid duplicated and will replace the old file with new item with name check
//     if (fileItem.some((fileItem) => fileItem.key === selected_file_name)) {
//       fileItem = fileItem.filter(
//         (fileItem) => fileItem.key !== selected_file_name
//       );
//     }
//     fileItem.push({ file: event.target.files[0], key: selected_file_name });
//     setFiles(fileItem);
//     // setFile(fileItem);
//   };

//   const handleChange = (event, field) => {
//     let actualValue = event.target.value;
//     setPersonalInfo({ ...personalInfo, [field]: actualValue });
//   };

//   //   const handleFileChange = (event) => {
//   //     event.preventDefault();
//   //     if (event.target.files) {
//   //       setFile(event.target.files[0]);
//   //       uploadJSONFiles(event);
//   //     }
//   //   };
//   const handleFileChange = (event, field) => {
//     uploadJSONFiles(event);
//     let actualValue = event.target.value;
//     setFiles({ ...files, [field]: actualValue });
//     // setFile({ ...file, [field]: actualValue });
//   };

//   return (
//     <div>
//       <Base>
//         <CustomEmployeeTabs />
//         <Container>
//           <Row className="mt-4">
//             <Col>
//               {/* <Card color="dark" inverse> */}
//               <Card>
//                 <CardHeader>
//                   <h3 className="text-center">Enter your Personal Details</h3>
//                 </CardHeader>
//                 <CardBody>
//                   {/* personal Details form */}
//                   <Form onSubmit={handleFormSubmit}>
//                     <Row>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="firstName">
//                             First Name<sup style={{ color: "red" }}>*</sup>
//                           </Label>
//                           <Input
//                             type="text"
//                             id="firstName"
//                             placeholder="First Name"
//                             value={personalInfo.firstName}
//                             onChange={(e) => handleChange(e, "firstName")}
//                             invalid={
//                               error.errors?.response?.data?.firstName
//                                 ? true
//                                 : false
//                             }
//                           ></Input>
//                           <p id="1">{formErrors.firstName}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.firstName}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="secondName">Second Name</Label>
//                           <Input
//                             type="text"
//                             id="secondName"
//                             placeholder="Second Name"
//                             value={personalInfo.secondName}
//                             onChange={(e) => handleChange(e, "secondName")}
//                             invalid={
//                               error.errors?.response?.data?.secondName
//                                 ? true
//                                 : false
//                             }
//                           />
//                           <p id="1">{formErrors.secondName}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.secondName}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="lastName">Last Name</Label>
//                           <Input
//                             type="text"
//                             id="lastName"
//                             placeholder="Last Name"
//                             value={personalInfo.lastName}
//                             onChange={(e) => handleChange(e, "lastName")}
//                             invalid={
//                               error.errors?.response?.data?.lastName
//                                 ? true
//                                 : false
//                             }
//                           />
//                           <p id="1">{formErrors.lastName}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.lastName}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     {/* Second row */}
//                     <Row>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="dob">Select DOB</Label>
//                           <DatePicker
//                             className="form-control"
//                             id="date"
//                             dateFormat="dd/MM/yyyy"
//                             selected={dateOfBirth}
//                             value={dateOfBirth}
//                             onChange={(date) => setdateOfBirth(date)}
//                             minDate={new Date("01-01-1950")}
//                             maxDate={new Date()}
//                             isClearable
//                             showYearDropdown
//                             scrollableYearDropdown
//                           />
//                           <p id="1">{formErrors.dob}</p>
//                         </FormGroup>
//                       </Col>

//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="age">Age</Label>
//                           <Input
//                             type="text"
//                             id="Age"
//                             placeholder="Enter Age"
//                             value={personalInfo.age}
//                             // value={m}
//                             disabled
//                             onChange={(e) => handleChange(e, "age")}
//                             invalid={
//                               error.errors?.response?.data?.age ? true : false
//                             }
//                           ></Input>
//                           <p id="1">{formErrors.age}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.age}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>

//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="gender">Gender</Label>
//                           <Input
//                             type="select"
//                             id="gender"
//                             value={personalInfo.gender}
//                             onChange={(e) => handleChange(e, "gender")}
//                             invalid={
//                               error.errors?.response?.data?.gender
//                                 ? true
//                                 : false
//                             }
//                           >
//                             {gender_selections.map((gender_selections) => {
//                               return (
//                                 <option
//                                   key={gender_selections.id}
//                                   value={gender_selections.value}
//                                 >
//                                   {gender_selections.value}
//                                 </option>
//                               );
//                             })}
//                           </Input>
//                           <p id="1">{formErrors.gender}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.gender}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     {/* Third row */}
//                     <Row>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="emailId">
//                             Enter Email<sup style={{ color: "red" }}>*</sup>
//                           </Label>
//                           <Input
//                             type="email"
//                             id="emailId"
//                             placeholder="Enter Email "
//                             value={personalInfo.emailId}
//                             onChange={(e) => handleChange(e, "emailId")}
//                             invalid={
//                               error.errors?.response?.data?.message
//                                 ? true
//                                 : false
//                             }
//                           />
//                           <p id="1">{formErrors.emailId}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.emailId}
//                             {error.errors?.response?.data?.message}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="mobile">
//                             Contact No<sup style={{ color: "red" }}>*</sup>
//                           </Label>
//                           <Input
//                             type="number"
//                             id="mobile"
//                             placeholder="Contact No"
//                             value={personalInfo.mobileNo}
//                             onChange={(e) => handleChange(e, "mobileNo")}
//                             invalid={
//                               error.errors?.response?.data?.mobileNo
//                                 ? true
//                                 : false
//                             }
//                           />
//                           <p id="1">{formErrors.mobileNo}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.mobileNo}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="address">Address</Label>
//                           <Input
//                             type="text"
//                             id="address"
//                             placeholder="Address"
//                             value={personalInfo.address}
//                             onChange={(e) => handleChange(e, "address")}
//                             invalid={
//                               error.errors?.response?.data?.address
//                                 ? true
//                                 : false
//                             }
//                           />
//                           <p id="1">{formErrors.address}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.address}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     {/* Fourth Row */}
//                     <Row>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="country">Select Country</Label>
//                           <Select
//                             options={Country.getAllCountries()}
//                             getOptionLabel={(options) => {
//                               return options["name"];
//                             }}
//                             getOptionValue={(options) => {
//                               return options["name"];
//                             }}
//                             value={selectedCountry}
//                             defaultValue={dbCountry}
//                             onChange={(item) => {
//                               setPersonalInfo({
//                                 ...personalInfo,
//                                 country: item,
//                               });
//                               setSelectedCountry(item);
//                             }}
//                           ></Select>
//                           <p id="1">{formErrors.country}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.country}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>

//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="state">Select State</Label>
//                           <Select
//                             options={State?.getStatesOfCountry(
//                               selectedCountry?.isoCode
//                             )}
//                             getOptionLabel={(options) => {
//                               return options["name"];
//                             }}
//                             getOptionValue={(options) => {
//                               return options["name"];
//                             }}
//                             defaultValue={dbState}
//                             value={selectedState}
//                             onChange={(item) => {
//                               setPersonalInfo({ ...personalInfo, state: item });
//                               setSelectedState(item);
//                             }}
//                           />

//                           <p id="1">{formErrors.state}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.state}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="city">Select City</Label>
//                           <Select
//                             options={City.getCitiesOfState(
//                               selectedState?.countryCode,
//                               selectedState?.isoCode
//                             )}
//                             getOptionLabel={(options) => {
//                               return options["name"];
//                             }}
//                             getOptionValue={(options) => {
//                               return options["name"];
//                             }}
//                             defaultValue={dbCity}
//                             value={selectedCity}
//                             onChange={(item) => {
//                               setPersonalInfo({ ...personalInfo, city: item });
//                               setSelectedCity(item);
//                             }}
//                           />

//                           <p id="1">{formErrors.city}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.city}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     {/* row five */}
//                     <Row>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="pinCode">Enter Pincode</Label>
//                           <Input
//                             type="text"
//                             id="pinCode"
//                             placeholder="Pincode "
//                             value={personalInfo.pinCode}
//                             onChange={(e) => handleChange(e, "pinCode")}
//                             invalid={
//                               error.errors?.response?.data?.pinCode
//                                 ? true
//                                 : false
//                             }
//                           />
//                           <p id="1">{formErrors.pinCode}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.pinCode}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="alternateMobileNo">
//                             Alternate Contact No
//                           </Label>
//                           <Input
//                             type="number"
//                             id="alternateMobileNo"
//                             placeholder="Alternate No"
//                             value={personalInfo.alternateMobileNo}
//                             onChange={(e) =>
//                               handleChange(e, "alternateMobileNo")
//                             }
//                             invalid={
//                               error.errors?.response?.data?.alternateMobileNo
//                                 ? true
//                                 : false
//                             }
//                           />
//                           <p id="1">{formErrors.alternateMobileNo}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.alternateMobileNo}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="emergencyMobileNo">
//                             Emergency Contact No
//                           </Label>
//                           <Input
//                             type="number"
//                             id="emergencyMobileNo"
//                             placeholder="Emergency No"
//                             value={personalInfo.emergencyMobileNo}
//                             onChange={(e) =>
//                               handleChange(e, "emergencyMobileNo")
//                             }
//                             invalid={
//                               error.errors?.response?.data?.emergencyMobileNo
//                                 ? true
//                                 : false
//                             }
//                           />
//                           <p id="1">{formErrors.emergencyMobileNo}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.emergencyMobileNo}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     {/* sixth row */}
//                     <Row>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="bloodGroup">Blood Group</Label>
//                           <Input
//                             type="select"
//                             id="bloodGroup"
//                             placeholder="Blood group"
//                             value={personalInfo.bloodGroup}
//                             onChange={(e) => handleChange(e, "bloodGroup")}
//                             invalid={
//                               error.errors?.response?.data?.bloodGroup
//                                 ? true
//                                 : false
//                             }
//                           >
//                             {blood_grp_obj.map((blood_grp_obj) => {
//                               return (
//                                 <option
//                                   // key={blood_grp_obj.label}
//                                   key={blood_grp_obj.id}
//                                   value={blood_grp_obj.value}
//                                 >
//                                   {blood_grp_obj.value}
//                                 </option>
//                               );
//                             })}
//                           </Input>
//                           <p id="1">{formErrors.bloodGroup}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.bloodGroup}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="maritalStatus">
//                             Marital Status<sup style={{ color: "red" }}>*</sup>
//                           </Label>
//                           <Input
//                             type="select"
//                             id="maritalStatus"
//                             placeholder="Status"
//                             value={personalInfo.maritalStatus}
//                             onChange={(e) => handleChange(e, "maritalStatus")}
//                             invalid={
//                               error.errors?.response?.data?.maritalStatus
//                                 ? true
//                                 : false
//                             }
//                           >
//                             {marital_status_obj.map((marital_status_obj) => {
//                               return (
//                                 <option
//                                   // key={marital_status_obj.label}
//                                   key={marital_status_obj.id}
//                                   value={marital_status_obj.value}
//                                 >
//                                   {marital_status_obj.value}
//                                 </option>
//                               );
//                             })}
//                           </Input>
//                           <p id="1">{formErrors.maritalStatus}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.maritalStatus}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="workLocation">Work Location</Label>
//                           <Input
//                             type="select"
//                             id="workLocation"
//                             placeholder="Location"
//                             value={personalInfo.workLocation}
//                             onChange={(e) => handleChange(e, "workLocation")}
//                             invalid={
//                               error.errors?.response?.data?.workLocation
//                                 ? true
//                                 : false
//                             }
//                           >
//                             {work_location_obj.map((work_location_obj) => {
//                               return (
//                                 <option
//                                   key={work_location_obj.id}
//                                   value={work_location_obj.value}
//                                 >
//                                   {work_location_obj.value}
//                                 </option>
//                               );
//                             })}
//                           </Input>
//                           <p id="1">{formErrors.workLocation}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.workLocation}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     {/* row seventh */}

//                     <Row>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="passport">
//                             Passport<sup style={{ color: "red" }}>*</sup>
//                           </Label>
//                           <Input
//                             type="select"
//                             id="passport"
//                             value={personalInfo.passport}
//                             onChange={(e) => handleChange(e, "passport")}
//                             invalid={
//                               error.errors?.response?.data?.passport
//                                 ? true
//                                 : false
//                             }
//                           >
//                             <option>--Select--</option>
//                             <option value={false}>No</option>
//                             <option value={true}>Yes</option>
//                           </Input>
//                           <p id="1">{formErrors.passport}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.passport}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="passportDetails">Passport Detail</Label>
//                           <Input
//                             type="text"
//                             id="passportDetails"
//                             placeholder="Passport Detail"
//                             disabled={
//                               personalInfo.passport == "false" ? true : false
//                             }
//                             value={personalInfo.passportDetails}
//                             onChange={(e) => handleChange(e, "passportDetails")}
//                             invalid={
//                               error.errors?.response?.data?.passportDetails
//                                 ? true
//                                 : false
//                             }
//                           />
//                           <p id="1">{formErrors.passportDetails}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.passportDetails}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="passportCopy">Attach Passport</Label>
//                           <Input
//                             type="file"
//                             id="passportCopy"
//                             accept="image/png,image/jpeg/image/jpg"
//                             placeholder="Attach Passport"
//                             disabled={
//                               personalInfo.passport == "false" ? true : false
//                             }
//                             // value={file.passport_Copy}
//                             value={file.passportCopy}
//                             onChange={(e) => {
//                               //   handleFileChange(e, "passport_Copy");
//                               handleFileChange(e, "passportCopy");
//                             }}
//                             invalid={
//                               error.errors?.response?.data?.aadharcard
//                                 ? true
//                                 : false
//                             }
//                           />
//                           <p>{formErrors.passportDetails}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.firstName}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                     </Row>

//                     {/* row eight */}

//                     <Row>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="aadhar">
//                             Aadhar<sup style={{ color: "red" }}>*</sup>
//                           </Label>
//                           <Input
//                             type="select"
//                             id="aadhar"
//                             value={personalInfo.aadhar}
//                             onChange={(e) => handleChange(e, "aadhar")}
//                             invalid={
//                               error.errors?.response?.data?.aadhar
//                                 ? true
//                                 : false
//                             }
//                           >
//                             <option>--Select--</option>
//                             <option value={false}>No</option>
//                             <option value={true}>Yes</option>
//                           </Input>
//                           <p id="1">{formErrors.aadhar}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.aadhar}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="aadharDetails">Aadhar Detail</Label>
//                           <Input
//                             type="text"
//                             id="aadharDetails"
//                             placeholder="Aadhar No"
//                             disabled={
//                               personalInfo.aadhar == "false" ? true : false
//                             }
//                             value={personalInfo.aadharDetails}
//                             onChange={(e) => handleChange(e, "aadharDetails")}
//                             invalid={
//                               error.errors?.response?.data?.aadharDetails
//                                 ? true
//                                 : false
//                             }
//                           />
//                           <p id="1">{formErrors.aadharDetails}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.aadharDetails}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="aadharcopy">Attach Aadhar</Label>
//                           <Input
//                             type="file"
//                             id="aadharcopy"
//                             accept="image/png,image/jpeg/image/jpg"
//                             placeholder="Attach Aadhar"
//                             disabled={
//                               personalInfo.aadhar == "false" ? true : false
//                             }
//                             // value={file.aadhar_copy}
//                             value={file.aadharCopy}
//                             onChange={(e) =>
//                               // handleFileChange(e, "aadhar_copy")

//                               handleFileChange(e, "aadharCopy")
//                             }
//                             invalid={
//                               error.errors?.response?.data?.Pancard
//                                 ? true
//                                 : false
//                             }
//                           />
//                           <FormFeedback>
//                             {error.errors?.response?.data?.firstName}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                     </Row>

//                     {/* row nine */}

//                     <Row>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="drivingLicense">
//                             Driving License<sup style={{ color: "red" }}>*</sup>
//                           </Label>
//                           <Input
//                             type="select"
//                             id="drivingLicense"
//                             value={personalInfo.drivingLicense}
//                             onChange={(e) => handleChange(e, "drivingLicense")}
//                             invalid={
//                               error.errors?.response?.data?.drivingLicense
//                                 ? true
//                                 : false
//                             }
//                           >
//                             <option>--Select--</option>
//                             <option value={false}>No</option>
//                             <option value={true}>Yes</option>
//                           </Input>
//                           <p id="1">{formErrors.drivingLicense}</p>
//                           <FormFeedback>
//                             {error.errors?.response?.data?.drivingLicense}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="drivingLicenseDetails">
//                             Driving License Detail
//                           </Label>
//                           <Input
//                             type="text"
//                             id="drivingLicenseDetails"
//                             placeholder="License Number"
//                             disabled={
//                               personalInfo.drivingLicense == "false"
//                                 ? true
//                                 : false
//                             }
//                             value={personalInfo.drivingLicenseDetails}
//                             onChange={(e) =>
//                               handleChange(e, "drivingLicenseDetails")
//                             }
//                             invalid={
//                               error.errors?.response?.data
//                                 ?.drivingLicenseDetails
//                                 ? true
//                                 : false
//                             }
//                           />
//                           <p id="1">{formErrors.drivingLicenseDetails}</p>
//                           <FormFeedback>
//                             {
//                               error.errors?.response?.data
//                                 ?.drivingLicenseDetails
//                             }
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md={4}>
//                         <FormGroup>
//                           <Label for="pancardCopy">License Copy</Label>
//                           <Input
//                             type="file"
//                             id="pancardCopy"
//                             accept="image/png,image/jpeg/image/jpg"
//                             placeholder="Attach Pancard"
//                             // value={file.pancard_Copy}
//                             value={file.drivingLicenseCopy}
//                             disabled={
//                               personalInfo.drivingLicense == "false"
//                                 ? true
//                                 : false
//                             }
//                             onChange={(e) =>
//                               //   handleFileChange(e, "pancard_Copy")
//                               handleFileChange(e, "drivingLicenseCopy")
//                             }
//                             invalid={
//                               error.errors?.response?.data?.firstName
//                                 ? true
//                                 : false
//                             }
//                           />
//                           <FormFeedback>
//                             {error.errors?.response?.data?.firstName}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                     </Row>

//                     <Container className="text-center">
//                       <Button
//                         color="success"
//                         onClick={handleView}
//                         hidden={
//                           localStorage.getItem("PersonalDetailId")
//                             ? false
//                             : true
//                         }
//                       >
//                         View{" "}
//                       </Button>

//                       <Button
//                         color="secondary"
//                         className="ms-2"
//                         onClick={handleReset}
//                       >
//                         Reset
//                       </Button>
//                       <Button
//                         color="warning"
//                         className="ms-2"
//                         onClick={handleUpdate}
//                         hidden={
//                           localStorage.getItem("PersonalDetailId")
//                             ? false
//                             : true
//                         }
//                       >
//                         Update
//                       </Button>

//                       <Button
//                         color="primary"
//                         className="ms-2"
//                         hidden={
//                           localStorage.getItem("PersonalDetailId")
//                             ? true
//                             : false &&
//                               (userId &&
//                               localStorage.getItem("PersonalDetailId") == null
//                                 ? false
//                                 : true)
//                         }
//                       >
//                         Save & Next
//                       </Button>
//                     </Container>
//                   </Form>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </Base>
//     </div>
//   );
// };
// export default PersonalTab_Test;
