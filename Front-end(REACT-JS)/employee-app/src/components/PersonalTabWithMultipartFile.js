import React, { useState } from "react";

import { getCurrentUserDetail } from "../Auth";
import { privateEmployeeAxios } from "../Services/helper";
import {
  uploadImages,
  uploadMultipartFiles,
} from "../Services/personalTab-Service";
import {
  gender_selections,
  age_obj,
  work_location_obj,
  blood_grp_obj,
  country_name,
  city_Name,
  state_name,
  marital_status_obj,
} from "../Services/JsonArrays";
import {
  Form,
  Row,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import Base from "./Base";
import { toast } from "react-toastify";
import CustomEmployeeTabs from "./CustomEmployeeTabs";

const PersonalTabWithMultiPartFile = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    secondName: "",
    lastName: "",
    age: "",
    dob: "",
    gender: "",
    email: "",
    mobile: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    alternateNo: "",
    emergencyNo: "",
    bloodgroup: "",
    maritalStatus: "",
    workLocation: "",
    pancardCopy: "",
    pancardDetail: "",
    Pancard: "",
    aadharcopy: "",
    aadharDetail: "",
    aadharcard: "",
    passportCopy: "",
    passportDetail: "",
    passportIf: "",
  });

  const handleReset = () => {
    setPersonalInfo({
      firstName: "",
      secondName: "",
      lastName: "",
      age: "",
      dob: "",
      gender: "",
      email: "",
      mobile: "",
      address: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      alternateNo: "",
      emergencyNo: "",
      bloodgroup: "",
      maritalStatus: "",
      workLocation: "",
      pancardCopy: "",
      pancardDetail: "",
      Pancard: "",
      aadharcopy: "",
      aadharDetail: "",
      aadharcard: "",
      passportCopy: "",
      passportDetail: "",
      passportIf: "",
    });
  };

  const [files, setFiles] = useState({
    passport_Copy: "",
    aadhar_copy: "",
    pancard_Copy: "",
  });

  let file_count = 0;
  let jsonBodyData;
  let formData = new FormData();
  let user = getCurrentUserDetail();
  const userId = user.id;
  const url = `http://localhost:9090/api/employee/personaltab/add/${userId}`;

  const handleFileChange = (event, field) => {
    uploadJSONFiles(event);
    let actualValue = event.target.value;
    setFiles({ ...files, [field]: actualValue });
  };

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setPersonalInfo({ ...personalInfo, [field]: actualValue });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); //validations
    //calling api along with sending data and token also

    console.log(personalInfo);
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
    // }
  };
  // multipart file code adding below:Starting
  const uploadJSONFiles = (event) => {
    event.preventDefault();

    // if (file_count == 0) {
    //   jsonBodyData = personalInfo;
    //Step1: setting json data to formdate
    // formData.append("jsonBodyData", JSON.stringify(jsonBodyData));
    formData.append("jsonBodyData", JSON.stringify(personalInfo));
    console.log(formData.get("jsonBodyData"));
    // }

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
  };

  // multipart file code adding below:Ended

  return (
    <div>
      <Base>
        <CustomEmployeeTabs />
        <Container>
          <Row className="mt-4">
            {/* {JSON.stringify(personalInfo)} */}
            <Col>
              {/* <Card color="dark" inverse> */}
              <Card>
                <CardHeader>
                  <h3 className="text-center">Enter your Personal Details</h3>
                </CardHeader>
                <CardBody>
                  {/* personal Details form */}
                  <Form onSubmit={handleFormSubmit}>
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="firstName">First Name</Label>
                          <Input
                            type="text"
                            id="firstName"
                            placeholder="Enter First Name"
                            value={personalInfo.firstName}
                            onChange={(e) => handleChange(e, "firstName")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="secondName">Second Name</Label>
                          <Input
                            type="text"
                            id="secondName"
                            placeholder="Enter Second Name"
                            value={personalInfo.secondName}
                            onChange={(e) => handleChange(e, "secondName")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="lastName">Last Name</Label>
                          <Input
                            type="text"
                            id="lastName"
                            placeholder="Enter Last Name"
                            value={personalInfo.lastName}
                            onChange={(e) => handleChange(e, "lastName")}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* Second row */}
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="age">Age</Label>
                          <Input
                            type="select"
                            id="Age"
                            placeholder="Enter Age"
                            value={personalInfo.age}
                            onChange={(e) => handleChange(e, "age")}
                          >
                            {age_obj.map((age_obj) => {
                              return (
                                <option
                                  // key={age_obj.label}
                                  key={age_obj.id}
                                  value={age_obj.value}
                                >
                                  {age_obj.value}
                                </option>
                              );
                            })}
                          </Input>
                        </FormGroup>
                      </Col>

                      <Col md={4}>
                        <FormGroup>
                          <Label for="dob">Enter DOB</Label>
                          <Input
                            type="date"
                            id="date"
                            placeholder="Enter DOB"
                            value={personalInfo.dob}
                            onChange={(e) => handleChange(e, "dob")}
                          />
                        </FormGroup>
                      </Col>

                      <Col md={4}>
                        <FormGroup>
                          <Label for="gender">Gender</Label>
                          <Input
                            type="select"
                            id="gender"
                            value={personalInfo.gender}
                            onChange={(e) => handleChange(e, "gender")}
                          >
                            {gender_selections.map((gender_selections) => {
                              return (
                                <option
                                  key={gender_selections.id}
                                  value={gender_selections.value}
                                >
                                  {gender_selections.value}
                                </option>
                              );
                            })}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* Third row */}
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="email">Enter Email</Label>
                          <Input
                            type="email"
                            id="email"
                            placeholder="Enter Email "
                            value={personalInfo.email}
                            onChange={(e) => handleChange(e, "email")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="mobile">Contact No</Label>
                          <Input
                            type="number"
                            id="mobile"
                            placeholder="Enter Mobile Number"
                            value={personalInfo.mobile}
                            onChange={(e) => handleChange(e, "mobile")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="address">Address</Label>
                          <Input
                            type="text"
                            id="address"
                            placeholder="Enter Address"
                            value={personalInfo.address}
                            onChange={(e) => handleChange(e, "address")}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* Fourth Row */}
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="country">Select Coutry</Label>
                          <Input
                            type="select"
                            id="country"
                            placeholder="Select Country "
                            value={personalInfo.country}
                            onChange={(e) => handleChange(e, "country")}
                          >
                            {country_name.map((country_name) => {
                              return (
                                <option
                                  // key={country_name.label}
                                  key={country_name.id}
                                  value={country_name.value}
                                >
                                  {country_name.value}
                                </option>
                              );
                            })}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="state">Select State</Label>
                          <Input
                            type="select"
                            id="state"
                            placeholder="Select State"
                            value={personalInfo.state}
                            onChange={(e) => handleChange(e, "state")}
                          >
                            {state_name.map((state_name) => {
                              return (
                                <option
                                  // key={state_name.label}
                                  key={state_name.id}
                                  value={state_name.value}
                                >
                                  {state_name.value}
                                </option>
                              );
                            })}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="city">Select City</Label>
                          <Input
                            type="select"
                            id="city"
                            placeholder="Select your City"
                            value={personalInfo.city}
                            onChange={(e) => handleChange(e, "city")}
                          >
                            {city_Name.map((city_Name) => {
                              return (
                                <option
                                  // key={city_Name.label}
                                  key={city_Name.id}
                                  value={city_Name.value}
                                >
                                  {city_Name.value}
                                </option>
                              );
                            })}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* row five */}
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="pincode">Enter Pincode</Label>
                          <Input
                            type="text"
                            id="pincode"
                            placeholder="Enter Pincode "
                            value={personalInfo.pincode}
                            onChange={(e) => handleChange(e, "pincode")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="alternateNo">Alternate Contact No</Label>
                          <Input
                            type="text"
                            id="alternateMo"
                            placeholder="Alternate No"
                            value={personalInfo.alternateNo}
                            onChange={(e) => handleChange(e, "alternateNo")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="emergencyNo">Emergency Contact No</Label>
                          <Input
                            type="text"
                            id="emergencyNo"
                            placeholder="Emergency ContactNo"
                            value={personalInfo.emergencyNo}
                            onChange={(e) => handleChange(e, "emergencyNo")}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* sixth row */}
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="bloodGroup">Blood Group</Label>
                          <Input
                            type="select"
                            id="bloodGroup"
                            placeholder="Select Blood group"
                            value={personalInfo.bloodgroup}
                            onChange={(e) => handleChange(e, "bloodgroup")}
                          >
                            {blood_grp_obj.map((blood_grp_obj) => {
                              return (
                                <option
                                  // key={blood_grp_obj.label}
                                  key={blood_grp_obj.id}
                                  value={blood_grp_obj.value}
                                >
                                  {blood_grp_obj.value}
                                </option>
                              );
                            })}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="maritalStatus">Marital Status</Label>
                          <Input
                            type="select"
                            id="maritalStatus"
                            placeholder="Select Marital Status"
                            value={personalInfo.maritalStatus}
                            onChange={(e) => handleChange(e, "maritalStatus")}
                          >
                            {marital_status_obj.map((marital_status_obj) => {
                              return (
                                <option
                                  // key={marital_status_obj.label}
                                  key={marital_status_obj.id}
                                  value={marital_status_obj.value}
                                >
                                  {marital_status_obj.value}
                                </option>
                              );
                            })}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="workLocation">Work Location</Label>
                          <Input
                            type="select"
                            id="workLocation"
                            placeholder="Select Work Location"
                            value={personalInfo.workLocation}
                            onChange={(e) => handleChange(e, "workLocation")}
                          >
                            {work_location_obj.map((work_location_obj) => {
                              return (
                                <option
                                  key={work_location_obj.id}
                                  value={work_location_obj.value}
                                >
                                  {work_location_obj.value}
                                </option>
                              );
                            })}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* row seventh */}

                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="passportIf">PassportIf(?)</Label>
                          <Input
                            type="select"
                            id="passportIf"
                            value={personalInfo.passportIf}
                            onChange={(e) => handleChange(e, "passportIf")}
                          >
                            <option>--Select Passpost(if)--</option>
                            <option value={false}>No</option>
                            <option value={true}>Yes</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="passportDetail">Passport Detail</Label>
                          <Input
                            type="text"
                            id="passportDetail"
                            placeholder="Passport Detail"
                            value={personalInfo.passportDetail}
                            onChange={(e) => handleChange(e, "passportDetail")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="passportCopy">Attach Passport</Label>
                          <Input
                            type="file"
                            id="passportCopy"
                            accept="image/png,image/jpeg/image/jpg"
                            placeholder="Attach Passport"
                            value={files.passport_Copy}
                            onChange={(e) => {
                              handleFileChange(e, "passport_Copy");
                            }}
                            // onChange={(event) => uploadJSONFiles(event)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    {/* row eight */}

                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="aadharcard">Aadhar card</Label>
                          <Input
                            type="select"
                            id="aadharcard"
                            value={personalInfo.aadharcard}
                            onChange={(e) => handleChange(e, "aadharcard")}
                          >
                            <option>--Select Aadhar(if)--</option>
                            <option value={false}>No</option>
                            <option value={true}>Yes</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="aadharDetail">Aadhar Detail</Label>
                          <Input
                            type="text"
                            id="aadharDetail"
                            placeholder="Enter Aadhar No"
                            value={personalInfo.aadharDetail}
                            onChange={(e) => handleChange(e, "aadharDetail")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="aadharcopy">Attach Aadhar</Label>
                          <Input
                            type="file"
                            id="aadharcopy"
                            accept="image/png,image/jpeg/image/jpg"
                            placeholder="Attach Aadhar"
                            value={files.aadhar_copy}
                            onChange={(e) => handleFileChange(e, "aadhar_copy")}
                            // onChange={(event) => uploadJSONFiles(event)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    {/* row nine */}

                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="Pancard">Pan Card(?)</Label>
                          <Input
                            type="select"
                            id="Pancard"
                            value={personalInfo.Pancard}
                            onChange={(e) => handleChange(e, "Pancard")}
                          >
                            <option>--Select--</option>
                            <option value={false}>No</option>
                            <option value={true}>Yes</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="pancardDetail">Pancard Detail</Label>
                          <Input
                            type="text"
                            id="pancardDetail"
                            placeholder="Enter Pan Number"
                            value={personalInfo.pancardDetail}
                            onChange={(e) => handleChange(e, "pancardDetail")}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="pancardCopy">Pancard Copy</Label>
                          <Input
                            type="file"
                            id="pancardCopy"
                            accept="image/png,image/jpeg/image/jpg"
                            placeholder="Attach Pancard"
                            value={files.pancard_Copy}
                            onChange={(e) =>
                              handleFileChange(e, "pancard_Copy")
                            }
                            // onChange={(event) => uploadJSONFiles(event)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Container>
                      <Button color="primary" className="text-center">
                        {/* {" "} */}
                        Save & Next
                      </Button>
                      <Button
                        color="secondary"
                        className="ms-2"
                        onClick={handleReset}
                      >
                        Reset
                      </Button>
                    </Container>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Base>
    </div>
  );
};
export default PersonalTabWithMultiPartFile;
