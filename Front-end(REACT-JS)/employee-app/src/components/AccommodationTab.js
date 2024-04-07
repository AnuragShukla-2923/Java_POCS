import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
  FormFeedback,
} from "reactstrap";
import { doSaveAccommodationId } from "../Auth";

import {
  createAccommodationDetails,
  deleteAccommodationDetails,
  getAccommodationDetailsById,
  updateAccommodationDetails,
} from "../Services/AccommodationTab-Service";
import Base from "./Base";
import CustomEmployeeTabs from "./CustomEmployeeTabs";

const AccommodationTab = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [accommodationDetails, setAccommodationDetails] = useState({
    accommodationGivenByCompany: "",
    flatNo: "",
    completePostalAddress: "",
    contactDetails: "",
    shiftedOn: "",
    relievedOn: "",
    durationOfTime: "",
    monthlyRent: "",
    miscellaneousChargesIfAny: "",
    anyIssueIf: "",
  });

  const navigate = useNavigate();

  const handleReset = () => {
    setAccommodationDetails({
      accommodationGivenByCompany: "",
      flatNo: "",
      completePostalAddress: "",
      contactDetails: "",
      shiftedOn: "",
      relievedOn: "",
      durationOfTime: "",
      monthlyRent: "",
      miscellaneousChargesIfAny: "",
      anyIssueIf: "",
    });
  };

  // for error handling
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, field) => {
    let fieldValue = event.target.value;
    setAccommodationDetails({ ...accommodationDetails, [field]: fieldValue });
  };

  //getting Details by Id
  const handleView = (event) => {
    event.preventDefault();
    getAccommodationDetailsById().then((data) => {
      setAccommodationDetails(data);
    });
  };

  //Updating Details by Id
  const handleUpdateDetails = (event) => {
    event.preventDefault();
    updateAccommodationDetails(accommodationDetails)
      .then((data) => {
        toast.success("Details Updated SuccessFully!!");
        handleReset();
      })
      .catch((error) => {
        // toast.error("Something went Wrong!");
        console.log(error);
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  //handle Delete By id
  const handleDelete = () => {
    alert("Are You Sure Want to Delete this Record?");
    deleteAccommodationDetails()
      .then((data) => {
        toast.success("Record Deleted Successfully!");
        handleReset();
      })
      .catch((error) => {
        toast.error("Something Wrong!");
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    //validation
    setFormErrors(validate(accommodationDetails));
    setIsSubmit(true);

    //Api Calling
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(accommodationDetails);
      createAccommodationDetails(accommodationDetails)
        .then((data) => {
          console.log(data);
          toast.success(
            "Accommodation Details Created Successfully!!" +
              data.accommodationId
          );
          handleReset();
          doSaveAccommodationId(data, () => {
            console.log("AccommodationId Saved");
            navigate("/user/workExperienceTab");
          });
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 400 || error.response.status == 404) {
            toast.error(error.response.data.message);
          } else {
            toast.error("Something went wrong on server!!");
          }
          setError({
            errors: error,
            isError: true,
          });
        });
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex_accommodationGivenByCompany = /^(True|False)$/i;
    const regex_flatNo = /^[0-9]{1,5}$/;
    const regex_contactDetails = /^[7-9]{1}[0-9]{9}$/;
    const regex_durationOfTime = /^[0-9 ]{1,2}[years|months|days]{3,6}$/i;
    const regex_monthlyRent = /^([₹]|[$]{1})([1-9]{1}[0-9]{3,5})$/;
    const regex_miscellaneousChargesIfAny = /^[a-z0-9 \-\₹\$\/]{0,35}$/i;
    const regex_anyIssueIf = /^[a-z \-]{0,25}$/i;

    const regex_completePostalAddress = /^[A-Za-z0-9'\.\-\s\,]{4,60}$/i;
    // down 2 is pending(temporary done)
    const regex_shiftedOn =
      /^(\d{1,2})\/(\d{1,2})\/(\d{4})$|^(\d{1,2})-(\d{1,2})-(\d{4})$/;
    const regex_relievedOn =
      /^(\d{1,2})\/(\d{1,2})\/(\d{4})$|^(\d{1,2})-(\d{1,2})-(\d{4})$/;

    if (!values.accommodationGivenByCompany) {
      errors.accommodationGivenByCompany = "Accommodation  is required";
    } else if (
      !regex_accommodationGivenByCompany.test(
        values.accommodationGivenByCompany
      )
    ) {
      errors.accommodationGivenByCompany = "Invalid Value";
    }
    if (!values.flatNo) {
      errors.flatNo = "Flat No or House No is required";
    } else if (!regex_flatNo.test(values.flatNo)) {
      errors.flatNo = "Invalid FlatNo or house No";
    }
    if (!values.completePostalAddress) {
      errors.completePostalAddress = "Completed Postal address is required";
    } else if (
      !regex_completePostalAddress.test(values.completePostalAddress)
    ) {
      errors.completePostalAddress = "Invalid Address";
    }
    if (!values.contactDetails) {
      errors.contactDetails = "Contact No is required";
    } else if (!regex_contactDetails.test(values.contactDetails)) {
      errors.contactDetails = "Invalid Contact No";
    }
    if (!values.shiftedOn) {
      errors.shiftedOn = "Shifted date is required";
    } else if (!regex_shiftedOn.test(values.shiftedOn)) {
      errors.shiftedOn = "Invalid Shifted date";
    }
    if (!values.relievedOn) {
      errors.relievedOn = "Relieved date is required";
    } else if (!regex_relievedOn.test(values.relievedOn)) {
      errors.relievedOn = "Invalid Date";
    }
    if (!values.durationOfTime) {
      errors.durationOfTime = "Duration is required";
    } else if (!regex_durationOfTime.test(values.durationOfTime)) {
      errors.durationOfTime = "Invalid Duration(give like 2 years or 6 months)";
    }
    if (!values.monthlyRent) {
      errors.monthlyRent = "Monthly Rent is required";
    } else if (!regex_monthlyRent.test(values.monthlyRent)) {
      errors.monthlyRent = "Invalid Monthly Rent(give like Rs.15000)";
    }
    if (!values.miscellaneousChargesIfAny) {
      errors.miscellaneousChargesIfAny = "Miscellaneous charges is required";
    } else if (
      !regex_miscellaneousChargesIfAny.test(values.miscellaneousChargesIfAny)
    ) {
      errors.miscellaneousChargesIfAny = "Invalid Miscellaneous ";
    }
    if (!values.anyIssueIf) {
      errors.anyIssueIf = "Issue is required";
    } else if (!regex_anyIssueIf.test(values.anyIssueIf)) {
      errors.anyIssueIf = "Invalid Issue";
    }

    return errors;
  };

  return (
    <Base>
      <CustomEmployeeTabs />

      <Container>
        <Row className="mt-3">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3>Enter Accommodation Details Here !!</h3>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  <FormGroup>
                    <Label for="accommodationGivenByCompany">
                      Accommodation Given By Company(if)
                    </Label>

                    <Input
                      type="select"
                      id="accommodationGivenByCompany"
                      value={accommodationDetails.accommodationGivenByCompany}
                      onChange={(e) =>
                        handleChange(e, "accommodationGivenByCompany")
                      }
                      invalid={
                        error.errors?.response?.data
                          ?.accommodationGivenByCompany
                          ? true
                          : false
                      }
                    >
                      <option>--Select an Option--</option>
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </Input>
                    <p>{formErrors.accommodationGivenByCompany}</p>
                    <FormFeedback>
                      {
                        error.errors?.response?.data
                          ?.accommodationGivenByCompany
                      }
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="flatNo">Flat Number</Label>

                    <Input
                      type="text"
                      id="flatNo"
                      value={accommodationDetails.flatNo}
                      onChange={(e) => handleChange(e, "flatNo")}
                      placeholder="Enter Here"
                      invalid={
                        error.errors?.response?.data?.flatNo ? true : false
                      }
                    ></Input>
                    <p>{formErrors.flatNo}</p>
                    <FormFeedback>
                      {error.errors?.response?.data?.flatNo}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="completePostalAddress">
                      Complete Address(with postal Details)
                    </Label>

                    <Input
                      type="textarea"
                      id="completePostalAddress"
                      value={accommodationDetails.completePostalAddress}
                      onChange={(e) => handleChange(e, "completePostalAddress")}
                      placeholder="Enter Here"
                      invalid={
                        error.errors?.response?.data?.completePostalAddress
                          ? true
                          : false
                      }
                    ></Input>
                    <p>{formErrors.completePostalAddress}</p>
                    <FormFeedback>
                      {error.errors?.response?.data?.completePostalAddress}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="contactDetails">Contact Details</Label>

                    <Input
                      type="number"
                      id="contactDetails"
                      value={accommodationDetails.contactDetails}
                      onChange={(e) => handleChange(e, "contactDetails")}
                      placeholder="Enter Here"
                      invalid={
                        error.errors?.response?.data?.contactDetails
                          ? true
                          : false
                      }
                    ></Input>
                    <p>{formErrors.contactDetails}</p>
                    <FormFeedback>
                      {error.errors?.response?.data?.contactDetails}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="shiftedOn">Shifting Date</Label>

                    <Input
                      type="text"
                      id="shiftedOn"
                      value={accommodationDetails.shiftedOn}
                      placeholder="Enter Shifting Date"
                      onChange={(e) => handleChange(e, "shiftedOn")}
                      invalid={
                        error.errors?.response?.data?.shiftedOn ? true : false
                      }
                    ></Input>
                    <p>{formErrors.shiftedOn}</p>
                    <FormFeedback>
                      {error.errors?.response?.data?.shiftedOn}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="relievedOn">Relieved Date(if)</Label>

                    <Input
                      type="text"
                      id="relievedOn"
                      value={accommodationDetails.relievedOn}
                      placeholder="Enter Leaving Date(if)"
                      onChange={(e) => handleChange(e, "relievedOn")}
                      invalid={
                        error.errors?.response?.data?.relievedOn ? true : false
                      }
                    ></Input>
                    <p>{formErrors.relievedOn}</p>
                    <FormFeedback>
                      {error.errors?.response?.data?.relievedOn}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="durationOfTime">Duration of Time</Label>

                    <Input
                      type="text"
                      id="durationOfTime"
                      placeholder="Enter Here"
                      value={accommodationDetails.durationOfTime}
                      onChange={(e) => handleChange(e, "durationOfTime")}
                      invalid={
                        error.errors?.response?.data?.durationOfTime
                          ? true
                          : false
                      }
                    ></Input>
                    <p>{formErrors.durationOfTime}</p>
                    <FormFeedback>
                      {error.errors?.response?.data?.durationOfTime}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="monthlyRent">Monthly Rent</Label>

                    <Input
                      type="text"
                      id="monthlyRent"
                      placeholder="Enter Here"
                      value={accommodationDetails.monthlyRent}
                      onChange={(e) => handleChange(e, "monthlyRent")}
                      invalid={
                        error.errors?.response?.data?.monthlyRent ? true : false
                      }
                    ></Input>
                    <p>{formErrors.monthlyRent}</p>
                    <FormFeedback>
                      {error.errors?.response?.data?.monthlyRent}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="miscellaneousChargesIfAny">
                      Miscellaneous Charges if any
                    </Label>

                    <Input
                      type="textarea"
                      id="miscellaneousChargesIfAny"
                      placeholder="Enter Here"
                      value={accommodationDetails.miscellaneousChargesIfAny}
                      onChange={(e) =>
                        handleChange(e, "miscellaneousChargesIfAny")
                      }
                      invalid={
                        error.errors?.response?.data?.miscellaneousChargesIfAny
                          ? true
                          : false
                      }
                    ></Input>
                    <p>{formErrors.miscellaneousChargesIfAny}</p>
                    <FormFeedback>
                      {error.errors?.response?.data?.miscellaneousChargesIfAny}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="anyIssueIf">Issue If Any</Label>
                    <Input
                      type="textarea"
                      id="anyIssueIf"
                      placeholder="Enter Here"
                      value={accommodationDetails.anyIssueIf}
                      onChange={(e) => handleChange(e, "anyIssueIf")}
                      invalid={
                        error.errors?.response?.data?.anyIssueIf ? true : false
                      }
                    ></Input>
                    <p>{formErrors.anyIssueIf}</p>
                    <FormFeedback>
                      {error.errors?.response?.data?.anyIssueIf}
                    </FormFeedback>
                  </FormGroup>

                  <Container>
                    <Button
                      className="ms-2"
                      color="success"
                      onClick={handleView}
                      hidden={
                        localStorage.getItem("AccommodationId") ? false : true
                      }
                    >
                      View
                    </Button>
                    <Button
                      className="ms-2"
                      color="secondary"
                      onClick={handleReset}
                    >
                      Reset
                    </Button>
                    <Button
                      className="ms-2"
                      color="warning"
                      onClick={handleUpdateDetails}
                      hidden={
                        localStorage.getItem("AccommodationId") ? false : true
                      }
                    >
                      Update
                    </Button>
                    {/* <Button className="ms-2" color="danger" onClick={handleDelete}
                  hidden={localStorage.getItem("AccommodationId")?false:true}
                  >Delete</Button> */}
                    <Button
                      className="ms-2"
                      color="primary"
                      hidden={
                        localStorage.getItem("AccommodationId") ? true : false
                      }
                    >
                      Save & Next
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};
export default AccommodationTab;
