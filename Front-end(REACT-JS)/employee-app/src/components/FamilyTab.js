import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Col,
  Row,
  FormFeedback,
} from "reactstrap";
import { doSaveFamilyId } from "../Auth";
import {
  createFamilyDetails,
  getFamilyTabById,
  updateFamilyTab,
  deleteFamilyTab,
} from "../Services/familyTab-Service";
import Base from "./Base";
import CustomEmployeeTabs from "./CustomEmployeeTabs";

const FamilyTab = () => {
  const[formErrors,setFormErrors]=useState({});
  const[isSubmit,setIsSubmit]=useState(false);

  const [marriageStatus, setMarriageStatus] = useState(false);
  const [familyDetails, setFamilyDetails] = useState({
    fathersName: "",
    fathersOccupation: "",
    mothersName: "",
    mothersOccupation: "",
    marriedIf: "",
    partnerName: "",
    partnersOccupation: "",
    childrenIf: "",
    noOfChildrens: "",
  });


  const navigate=useNavigate();
  const resetValues = () => {
    setFamilyDetails({
      fathersName: "",
      fathersOccupation: "",
      mothersName: "",
      mothersOccupation: "",
      marriedIf: "",
      partnerName: "",
      partnersOccupation: "",
      childrenIf: "",
      noOfChildrens: "",
    });
  };

  const handleChange = (event, field) => {
    let fieldValue = event.target.value;
    setFamilyDetails({ ...familyDetails, [field]: fieldValue });
    setMarriageStatus(!marriageStatus);
  };

  // for error handling(showing backend error)
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleView = (event) => {
    event.preventDefault();

    //View Values
    getFamilyTabById().then((data) => {
      setFamilyDetails(data);
    });
  };

  //updating values
  const handleUpdatedDetails = (event) => {
    event.preventDefault();
    updateFamilyTab(familyDetails)
      .then((data) => {
        toast.success("Details Updated Successfully!");
        resetValues();
      })
      .catch((error) => {
        // toast.error("Some error occured!!");
        setError({
          errors:error,
          isError:true
        })
      });
  };

  //deleting Details by Id
  const handleDelete = () => {
    alert("Are Sure want to delete this record?");
    deleteFamilyTab()
      .then((data) => {
        toast.success("Deleted Successfully!!");
        resetValues();
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  // Form Submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    //validation
    console.log(familyDetails)
    setFormErrors(validate(familyDetails));
    setIsSubmit(true);

    //calling API
   };

  useEffect(()=>{
    console.log(formErrors)
    console.log(familyDetails)
     if(Object.keys(formErrors).length=== 0 && isSubmit){
      createFamilyDetails(familyDetails)
      .then((data) => {
        toast.success("Family Details Created Successfully!!" + data.familyId);
        resetValues();
        doSaveFamilyId(data,()=>{
          console.log("Family id Saved");
          navigate("/user/accommodationTab");
        })

        
      })
      .catch((error) => {
        console.log(error);
        setError({
          errors: error,
          isError: true,
        });
      });
    
   
     }
   },[formErrors]);

   const validate=(values)=>{
    const errors={};
    const regex_fathersName=/^[a-z ]{3,20}$/i;
    const regex_fathersOccupation=/^[a-z \-]{3,20}$/i;
    const regex_mothersName=/^[a-z ]{3,20}$$/i;
    const regex_mothersOccupation=/^[a-z \-]{3,20}$/i;
    const regex_marriedIf=/^(True|False|TRUE|FALSE)$/i;
    const regex_partnerName=/^[a-z ]{3,20}$/i;
    const regex_partnersOccupation=/^[a-z \-]{3,20}$/i;
    const regex_childrenIf=/^(True|False|TRUE|FALSE)$/i;
    const regex_noOfChildrens=/^[0-9]{1}$/;
  
  if(!values.fathersName){
    errors.fathersName="Father's Name is required";
    }else if (!regex_fathersName.test(values.fathersName)) {
      errors.fathersName="Invalid Name(Give full name)";
    }
    if(!values.fathersOccupation){
      errors.fathersOccupation="Father's Occupation is required";
      }else if (!regex_fathersOccupation.test(values.fathersOccupation)) {
        errors.fathersOccupation="Invalid Occupation";
      }
      if(!values.mothersName){
        errors.mothersName="Mother's Name is required";
        }else if (!regex_mothersName.test(values.mothersName)) {
          errors.mothersName="Invalid Name(Give full name)";
        }
        if(!values.mothersOccupation){
          errors.mothersOccupation="Mother's Occupation is required";
          }else if (!regex_mothersOccupation.test(values.mothersOccupation)) {
            errors.mothersOccupation="Invalid Occupation";
          }
          if(!values.marriedIf){
            errors.marriedIf="Marital Status is required";
            }else if (!regex_marriedIf.test(values.marriedIf)) {
              errors.marriedIf="Invalid Status";
            }
            if(values.marriedIf=='true'){
           
              if(!values.partnerName){
              errors.partnerName="Partner's Name is required";
              }else if (!regex_partnerName.test(values.partnerName)) {
                errors.partnerName="Invalid Name(Give full name)";
              }
              
              if(!values.partnersOccupation){
                errors.partnersOccupation="Occpation is required";
                }else if (!regex_partnersOccupation.test(values.partnersOccupation)) {
                  errors.partnersOccupation="Invalid Occupation";
                }
                if(!values.childrenIf){
                  errors.childrenIf="Children info  is required";
                  }else if (!regex_childrenIf.test(values.childrenIf)) {
                    errors.childrenIf="Invalid Value(Yes or No)";
                  }

                  if (values.childrenIf=='true') {

                    if(!values.noOfChildrens){
                      errors.noOfChildrens="No of Children  is required";
                      }else if (!regex_noOfChildrens.test(values.noOfChildrens)) {
                        errors.noOfChildrens="Invalid Value(numerical value only accepted)";
                      }
                    
                  }

                 

            }
              
   
    return errors;
  
  };

  return (
    <Base>
    <CustomEmployeeTabs/>
      <Container>
        <Row className="mt-3">
          {/* <Col sm={{size:6,offset:3}}> */}
          <Col sm={{ size: 8, offset: 2 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3>Enter Family Details !!</h3>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  <FormGroup>
                    <Label for="fathersName">Father's Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="fathersName"
                      value={familyDetails.fathersName}
                      onChange={(e) => handleChange(e, "fathersName")}
                      invalid={error.errors?.response?.data?.fathersName ? true : false}
                    ></Input>
                    <p>{formErrors.fathersName}</p>
                    <FormFeedback>
                      {error.errors?.response?.data?.fathersName}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="fathersOccupation">Father's Occupation</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="fathersOccupation"
                      value={familyDetails.fathersOccupation}
                      onChange={(e) => handleChange(e, "fathersOccupation")}
                      invalid={
                        error.errors?.response?.data?.fathersOccupation
                          ? true
                          : false
                      }
                    ></Input>
                    <p>{formErrors.fathersOccupation}</p>
                    <FormFeedback>
                      {error.errors?.response?.data?.fathersOccupation}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="mothersName">Mother's Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="mothersName"
                      value={familyDetails.mothersName}
                      onChange={(e) => handleChange(e, "mothersName")}
                      invalid={
                        error.errors?.response?.data?.mothersName ? true : false
                      }
                    ></Input>
                    <p>{formErrors.mothersName}</p>
                     <FormFeedback>
                      {error.errors?.response?.data?.mothersName}
                    </FormFeedback>
               

                  </FormGroup>

                  <FormGroup>
                    <Label for="mothersOccupation">Mother's Occupation</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="mothersOccupation"
                      value={familyDetails.mothersOccupation}
                      onChange={(e) => handleChange(e, "mothersOccupation")}
                      invalid={
                        error.errors?.response?.data?.mothersOccupation
                          ? true
                          : false
                      }
                    ></Input>
                    <p>{formErrors.mothersOccupation}</p>
                     <FormFeedback>
                      {error.errors?.response?.data?.mothersOccupation}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="marriedIf">Married(if)</Label>
                    <Input
                      type="select"
                      placeholder="Enter here"
                      id="marriedIf"
                      value={familyDetails.marriedIf}
                      onChange={(e) => handleChange(e, "marriedIf")}
                      invalid={
                        error.errors?.response?.data?.marriedIf ? true : false
                      }
                    >
                      <option>--Select option--</option>
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </Input>
                    <p>{formErrors.marriedIf}</p>
                    <FormFeedback>
                      {error.errors?.response?.data?.marriedIf}
                    </FormFeedback>

                    
                  </FormGroup>

                  <FormGroup>
                    <Label for="partnerName">Partner's Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="partnerName"
                      
                      value={familyDetails.partnerName}
                      onChange={(e) => handleChange(e, "partnerName")}
                      disabled={familyDetails.marriedIf=='false'?true:false}
                      invalid={
                        error.errors?.response?.data?.partnerName ? true : false
                      }
                     
                    ></Input>
                    <p>{formErrors.partnerName}</p>
                     <FormFeedback>
                      {error.errors?.response?.data?.partnerName}
                    </FormFeedback>
                    
                  </FormGroup>

                  <FormGroup>
                    <Label for="partnersOccupation">Partner's Occupation</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="partnersOccupation"
                    
                      value={familyDetails.partnersOccupation}
                      onChange={(e) => handleChange(e, "partnersOccupation")}
                      disabled={familyDetails.marriedIf=='false'?true:false}
                      invalid={
                        error.errors?.response?.data?.partnersOccupation
                          ? true
                          : false
                      }
                    ></Input>
                    <p>{formErrors.partnersOccupation}</p>
                     <FormFeedback>
                      {error.errors?.response?.data?.partnersOccupation}
                    </FormFeedback>

                  </FormGroup>

                  <FormGroup>
                    <Label for="childrenIf">Children(if)</Label>
                    <Input
                      type="select"
                      placeholder="Enter here"
                      id="childrenIf"
                      value={familyDetails.childrenIf}
                      disabled={familyDetails.marriedIf=='false'?true:false}
                      onChange={(e) => handleChange(e, "childrenIf")}
                      invalid={
                        error.errors?.response?.data?.childrenIf ? true : false
                      }
                    >
                      <option>--Select option--</option>
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </Input>
                    <p>{formErrors.childrenIf}</p>
                    <FormFeedback>
                      {error.errors?.response?.data?.childrenIf}
                    </FormFeedback>


                  </FormGroup>

                  <FormGroup>
                    <Label for="noOfChildrens">No of Childrens</Label>
                    <Input
                      type="number"
                      placeholder="Enter here"
                      id="noOfChildrens"
                      value={familyDetails.noOfChildrens}
                      disabled={familyDetails.marriedIf=='false' || familyDetails.childrenIf=='false'?true:false}
                      onChange={(e) => handleChange(e, "noOfChildrens")}
                      invalid={
                        error.errors?.response?.data?.noOfChildrens
                          ? true
                          : false
                      }
                    ></Input>
                    <p>{formErrors.noOfChildrens}</p>

                    <FormFeedback>
                      {error.errors?.response?.data?.noOfChildrens}
                    </FormFeedback>                 
                    
                     </FormGroup>

                  <Container className="text-center">
                    <Button
                      className="ms-2"
                      color="success"
                      onClick={handleView}
                      hidden={localStorage.getItem("FamilyId")?false:true}
                    >
                      View
                    </Button>
                    <Button
                      className="ms-2"
                      color="secondary"
                      onClick={resetValues}
              
                    >
                      Reset
                    </Button>
                    <Button
                      className="ms-2"
                      color="warning"
                      onClick={handleUpdatedDetails}
                      hidden={localStorage.getItem("FamilyId")?false:true}
                    >
                      Update
                    </Button>
                    {/* <Button
                      className="ms-2"
                      color="danger"
                      onClick={handleDelete}
                      hidden={localStorage.getItem("FamilyId")?false:true}
                    >
                      Delete
                    </Button> */}
                    <Button className="ms-2" color="primary"
                    hidden={localStorage.getItem("FamilyId")?true:false}
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
export default FamilyTab;
