import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import { doSaveWorkExperienceId } from "../Auth";
import { createWorkExperience, deleteWorkExperienceById, getWorkExperienceById, updateWorkExperience } from "../Services/WorkExperienceTab-Service";
import Base from "./Base";
import CustomEmployeeTabs from "./CustomEmployeeTabs";

const WorkExperienceTab=()=>{

    const navigate=useNavigate();
    const[formErrors,setFormErrors]=useState({});
    const[isSubmit,setIsSubmit]=useState(false);
    const[workExperienceDetails,setWorkExperienceDetails]=useState({
        totalWorkExperience:'',
        employerDetails:'',
        employeeId:'',
        jobTitle:'',
        datesOfEmployement:'',
        listOfResponsibilities:'',
        listOfAwardsOrRecognitions:'',
        jobLocation:''
});

const[error,setError]=useState({
    errors:{},
    isError:false
}) ;

const handleReset=()=>{
    setWorkExperienceDetails({
        totalWorkExperience:'',
        employerDetails:'',
        employeeId:'',
        jobTitle:'',
        datesOfEmployement:'',
        listOfResponsibilities:'',
        listOfAwardsOrRecognitions:'',
        jobLocation:''

    })


};

const handleChange=(event,property)=>{
  setWorkExperienceDetails({...workExperienceDetails,[property]:event.target.value});
    console.log(workExperienceDetails);


};


const handleDelete=()=>{
    alert("Are You Sure Want to Delete this Record?");
    deleteWorkExperienceById().then((data)=>{
      toast.success("Record Deleted Successfully!");
      handleReset();

    }).catch(error=>{
      toast.error("Something Wrong!");
    });


};
const handleUpdate=(event)=>{
    event.preventDefault();
    updateWorkExperience(workExperienceDetails).then((data)=>{
      toast.success("Updated Successfully!");
      handleReset();
    }).catch(error=>{
      console.log(error);
      setError({
        errors:error,
        isError:true
      })
    });


}

const handleView=(event)=>{
    event.preventDefault();
    getWorkExperienceById().then((data)=>{
      setWorkExperienceDetails(data);
      console.log(data);
    })

};

const submitForm=(event)=>{
    event.preventDefault();
     //validations
    setFormErrors(validate(workExperienceDetails));
    setIsSubmit(true);
   //calling APIS
};

useEffect(()=>{
  console.log(formErrors)
   if(Object.keys(formErrors).length=== 0 && isSubmit){
    console.log(workExperienceDetails);
    createWorkExperience(workExperienceDetails).then((data)=>{
        toast.success("Work Experience Details Created"+data.workExperienceId);
        handleReset();
        doSaveWorkExperienceId(data,()=>{
          console.log("Work ExperienceId Saved");
          navigate("/user/salaryTab");
        })
        
    }).catch(error=>{
        console.log(error);
        setError({
            errors:error,
            isError:true
        })
    })
  
 
   }
 },[formErrors]);


 
const validate=(values)=>{
  const errors={};
  const regex_totalWorkExperience=/^([0-9 ]{1,3})([years]{5})$/i;
  
  const regex_employerDetails=/^[a-zA-Z \.]{2,40}$/;
  const regex_employeeId=/^[1-9]{1}[0-9]{5,7}$/;
  const regex_jobTitle=/^[a-zA-Z\- ]{3,30}$/;
  // down is temporay done
  // const regex_datesOfEmployement=/^((\d{1,2})\/(\d{1,2})\/(\d{4}))$|^((\d{1,2})-(\d{1,2})-(\d{4}))-[till]{4}$/i;
  // const regex_datesOfEmployement=0;
  const regex_listOfResponsibilities=/^[a-zA-Z \,]{4,40}$/;
  const regex_listOfAwardsOrRecognitions=/^[a-zA-Z \,]{4,40}$/;
  const regex_jobLocation=/^[a-zA-Z\- ]{3,15}$/;



if(!values.totalWorkExperience){
  errors.totalWorkExperience="Total Work Experience is required";
  }else if (!regex_totalWorkExperience.test(values.totalWorkExperience)) {
    errors.totalWorkExperience="Invalid work Experience(give like '2 years' or '5 years')";
  }

  if(!values.employerDetails){
    errors.employerDetails="Employer Details is required";
    }else if (!regex_employerDetails.test(values.employerDetails)) {
      errors.employerDetails="Invalid Employer Details(give like Gramener ItSolution Pvt. Lmt.)";
    }

    if(!values.employeeId){
      errors.employeeId=" Employee Id is required";
      }else if (!regex_employeeId.test(values.employeeId)) {
        errors.employeeId="Invalid Employee Id(give numerical values like 100009999)";
      }

      if(!values.jobTitle){
        errors.jobTitle="Job Title is required";
        }else if (!regex_jobTitle.test(values.jobTitle)) {
          errors.jobTitle="Invalid Job Title(give like 'Trainee' or 'Software Engineer')";
        }

        // if(!values.datesOfEmployement){
        //   errors.datesOfEmployement="Date of employement is required";
        //   }else if (!regex_datesOfEmployement.test(values.datesOfEmployement)) {
        //     errors.datesOfEmployement="Invalid employement date(give like 19/11/2008 - 23/2/2018)";
        //   }

          if(!values.listOfResponsibilities){
            errors.listOfResponsibilities="Responsibilities are required";
            }else if (!regex_listOfResponsibilities.test(values.listOfResponsibilities)) {
              errors.listOfResponsibilities="Invalid Responsibility(give like Development,Testing as well as Deployment,Project Management)";
            }

            if(!values.listOfAwardsOrRecognitions){
              errors.listOfAwardsOrRecognitions="Awards or Recognitions are required";
              }else if (!regex_listOfAwardsOrRecognitions.test(values.listOfAwardsOrRecognitions)) {
                errors.listOfAwardsOrRecognitions="Invalid Awards(give like Best Team Lead or Employee of the month)";
              }

              if(!values.jobLocation){
                errors.jobLocation="Work Location is required";
                }else if (!regex_jobLocation.test(values.jobLocation)) {
                  errors.jobLocation="Invalid work location";
                }


 
  return errors;

};


return(
  <Base>
  <CustomEmployeeTabs/>
  <Container>
    <Row className="mt-3">
      <Col sm={{ size: 8, offset: 2 }}>
      <Card color="dark" inverse>
        <CardHeader><h3>Enter Work Experience Here!</h3></CardHeader>
        <CardBody>
         <Form onSubmit={submitForm}>
          <FormGroup>
            <Label for="totalWorkExperience">Total Work Experience</Label>
            <Input 
            type="text" 
            id="totalWorkExperience"
            placeholder="Enter Here"
            value={workExperienceDetails.totalWorkExperience}
            onChange={(e)=>handleChange(e,'totalWorkExperience')}
            invalid={error.errors?.response?.data?.totalWorkExperience?true:false}
            ></Input>
            <p>{formErrors.totalWorkExperience}</p>
            <FormFeedback>
              {error.errors?.response?.data?.totalWorkExperience}
            </FormFeedback>
          </FormGroup>


          <FormGroup>
            <Label for="employerDetails">Enter Employer Details</Label>
            <Input 
            type="text"
             id="employerDetails"
             placeholder="Enter here"
             value={workExperienceDetails.employerDetails}
             onChange={(e)=>handleChange(e,'employerDetails')}
             invalid={error.errors?.response?.data?.employerDetails?true:false}
             ></Input>
             <p>{formErrors.employerDetails}</p>
             <FormFeedback>
              {error.errors?.response?.data?.employerDetails}
             </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="employeeId">Enter Employee Id</Label>
            <Input 
            type="text"
            id="employeeId"
            placeholder="Enter Here"
            value={workExperienceDetails.employeeId}
            onChange={(e)=>handleChange(e,'employeeId')}
            invalid={error.errors?.response?.data?.employeeId?true:false}
            ></Input>
            <p>{formErrors.employeeId}</p>
            <FormFeedback>
              {error.errors?.response?.data?.employeeId}
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="jobTitle">Enter Job Title</Label>
            <Input
            type="text"
            id="jobTitle"
            placeholder="Enter here"
            value={workExperienceDetails.jobTitle}
            onChange={(e)=>handleChange(e,'jobTitle')}
            invalid={error.errors?.response?.data?.jobTitle?true:false}
            ></Input>
            <p>{formErrors.jobTitle}</p>
            <FormFeedback>
              {error.errors?.response?.data?.jobTitle}
            </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="datesOfEmployement">Enter Working Date(Joining to relieving date)</Label>
            <Input 
            type="text"
            id="datesOfEmployement"
            placeholder="Enter here"
            value={workExperienceDetails.datesOfEmployement}
            onChange={(e)=>handleChange(e,'datesOfEmployement')}
            invalid={error.errors?.response?.data?.datesOfEmployement?true:false}
            ></Input>
            <p>{formErrors.datesOfEmployement}</p>
            <FormFeedback>
              {error.errors?.response?.data?.datesOfEmployement}
            </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="listOfResponsibilities">Responsibilities</Label>
            <Input
            type="textarea"
            id="listOfResponsibilities"
            placeholder="Enter here"
            value={workExperienceDetails.listOfResponsibilities}
            onChange={(e)=>handleChange(e,'listOfResponsibilities')}
            invalid={error.errors?.response?.data?.listOfResponsibilities?true:false}
            ></Input>
            <p>{formErrors.listOfResponsibilities}</p>
            <FormFeedback>
            {error.errors?.response?.data?.listOfResponsibilities}

            </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="listOfAwardsOrRecognitions">Enter List of Awards or Recognitions</Label>
            <Input 
            type="textarea"
            id="listOfAwardsOrRecognitions"
            placeholder="Enter here"
            value={workExperienceDetails.listOfAwardsOrRecognitions}
            onChange={(e)=>handleChange(e,'listOfAwardsOrRecognitions')}
            invalid={error.errors?.response?.data?.listOfAwardsOrRecognitions?true:false}
            ></Input>
            <p>{formErrors.listOfAwardsOrRecognitions}</p>
            <FormFeedback>
              {error.errors?.response?.data?.listOfAwardsOrRecognitions}
            </FormFeedback>
          </FormGroup>
          
          <FormGroup>
            <Label for="jobLocation">Enter Job Locaton</Label>
            <Input
             type="text"
             id="jobLocation"
             placeholder="Enter here"
             value={workExperienceDetails.jobLocation}
             onChange={(e)=>handleChange(e,'jobLocation')}
             invalid={error.errors?.response?.data?.jobLocation?true:false}

             ></Input>
             <p>{formErrors.jobLocation}</p>
             <FormFeedback>
              {error.errors?.response?.data?.jobLocation}
             </FormFeedback>
          
          </FormGroup>
          
        
          
      

          <Container>
            <Button className="ms-2" color="success" onClick={handleView}
            hidden={localStorage.getItem("WorkExperienceId")?false:true}
            >View</Button>
            <Button className="ms-2" color="secondary" onClick={handleReset}>Reset</Button>
            <Button className="ms-2" color="warning" onClick={handleUpdate}
            hidden={localStorage.getItem("WorkExperienceId")?false:true}
            >Upload</Button>
            {/* <Button className="ms-2" color="danger" onClick={handleDelete}
            hidden={localStorage.getItem("WorkExperienceId")?false:true}
            >Delete</Button> */}
            <Button className="ms-2" color="primary"
            hidden={localStorage.getItem("WorkExperienceId")?true:false}
            >Save</Button>
          </Container>
         </Form>

        </CardBody>
      </Card>
      </Col>
    </Row>
  </Container>
  </Base>
)

};
export default WorkExperienceTab;