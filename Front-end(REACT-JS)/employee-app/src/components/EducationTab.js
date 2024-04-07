import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import { doSaveEducationalId } from "../Auth";
import { createEducationDetails, deleteEducationDetailsById, getEducationDetailsById, updateEducationDetails } from "../Services/EducationTab-Service";
import Base from './Base';
import CustomEmployeeTabs from "./CustomEmployeeTabs";


const EducationTab=()=>{
const navigate=useNavigate();
const[formErrors,setFormErrors]=useState({});
 const[isSubmit,setIsSubmit]=useState(false);
const[educationalDetails,setEducationalDetails]=useState({
        graduationDegreeName:'',
        graduationUniversityName:'',
        graduationCollegeName:'',
        gradautionPassingYear:'',
        graduationBackLogs:'',
        graduationBackLogsClearedIf:'',
        graduationCGPA:'',
        educationGap:'',
        educationGapDuration:'',
        graduationMarkSheet:null,
        postGraduationDegree:'',
        postGraduationDegreeName:'',
        postGraduationUniversityName:'',
        postGraduationCollegeName:'',
        postGraduationPassingYear:'',
        postGraduationBackLogs:'',
        postGraduationBackLogsClearedIf:'',
        postGraduationCGPA:'',
        postGraduationMarkSheet:null,
        twelfthStandard:'',
        twelfthStandardSchoolName:'',
        twelfthStandardBoardName:'',
        twelfthStandardPassingyear:'',
        twelfthStandardCGPA_Percentage:'',
        twelfthStandardMarkSheets:null,
        tenthStandard:'',
        tenthStandardSchoolName:'',
        tenthStandardBoardName:'',
        tenthStandardPassingyear:'',
        tenthStandardCGPA_Percentage:'',
        tenthStandardMarkSheets:null
});
    
    const[error,setError]=useState({
        errors:{},
        isError:false
    }) ;
    
    
    const handleReset=()=>{
        setEducationalDetails({
            graduationDegreeName:'',
            graduationUniversityName:'',
            graduationCollegeName:'',
            gradautionPassingYear:'',
            graduationBackLogs:'',
            graduationBackLogsClearedIf:'',
            graduationCGPA:'',
            educationGap:'',
            educationGapDuration:'',
            // graduationMarkSheet:'',
            postGraduationDegree:'',
            postGraduationDegreeName:'',
            postGraduationUniversityName:'',
            postGraduationCollegeName:'',
            postGraduationPassingYear:'',
            postGraduationBackLogs:'',
            postGraduationBackLogsClearedIf:'',
            postGraduationCGPA:'',
            // postGraduationMarkSheet:'',
            twelfthStandard:'',
            twelfthStandardSchoolName:'',
            twelfthStandardBoardName:'',
            twelfthStandardPassingyear:'',
            twelfthStandardCGPA_Percentage:'',
            // twelfthStandardMarkSheets:''
            tenthStandard:'',
            tenthStandardSchoolName:'',
            tenthStandardBoardName:'',
            tenthStandardPassingyear:'',
            tenthStandardCGPA_Percentage:'',
            // tenthStandardMarkSheets:''
    
        
        })
    
    };

    const handleDelete=()=>{
        alert("Are You Sure Want to Delete this Record?");
        deleteEducationDetailsById().then((data)=>{
          toast.success("Record Deleted Successfully!");
          handleReset();
    
        }).catch(error=>{
          toast.error("Something Wrong!");
        });


    };

    const handleView=(event)=>{
        event.preventDefault();
        getEducationDetailsById().then((data)=>{
            setEducationalDetails(data);
        })

    };
    
    const handleChange=(event,property)=>{
        setEducationalDetails({...educationalDetails,[property]:event.target.value});
        console.log(educationalDetails);
    };

    const handleUpdate=(event)=>{
        event.preventDefault();
        updateEducationDetails(educationalDetails).then((data)=>{
          toast.success("Updated Successfully!");
          handleReset();
        }).catch(error=>{
          console.log(error);
          setError({
            errors:error,
            isError:true
          })
        });


    };
    
    const submitForm=(event)=>{
        event.preventDefault();
       //validation
       console.log(educationalDetails);
        setFormErrors(validate(educationalDetails));
        setIsSubmit(true);
       //calling APIS
      };

    useEffect(()=>{
      console.log(formErrors)
      console.log(educationalDetails);
       if(Object.keys(formErrors).length=== 0 && isSubmit){
        console.log(educationalDetails)
        createEducationDetails(educationalDetails).then((data)=>{
          toast.success("Educational Details Created Successfully!"+data.educationId);
          handleReset();
          doSaveEducationalId(data,()=>{
            console.log("Educational Id is stored in Localstorage");
            navigate("/user/familyTab");
          })
          
        }).catch(error=>{
          console.log(error)
          if (error.response.status==400 ||error.response.status==404){
            toast.error(error.response.data.message);
          }else{
           
            toast.error("Something went wrong on server!!");
          }
          setError({
            errors:error,
            isError:true
          })
        })
        
     
       }
     },[formErrors]);

     const validate=(values)=>{
      const errors={};
      const regex_graduationDegreeName=/^[a-z \-]{3,30}$/i;
      const regex_graduationUniversityName=/^[a-z \-\,]{3,50}$/i;
      const regex_graduationCollegeName=/^[a-z \-\,]{3,50}$/i;
      const regex_gradautionPassingYear=/^(19[789]\d|20[0-2]\d)$/;
      const regex_graduationBackLogs=/^(True|False)$/i;
      const regex_graduationBackLogsClearedIf=/^(True|False)$/i;
      const regex_graduationCGPA=/^([0-9]{1}\s)|([0-9]{1})|([0-9]{1}[%])$/i;
      const regex_educationGap=/^(True|False)$/i;
      // const regex_educationGapDuration=/^([0-9 ]{2,3})([years])$/i;
      const regex_educationGapDuration=/^[0-9 ]{1,3}$/i;
      const regex_postGraduationDegree=/^(True|False)$/i;
      const regex_postGraduationDegreeName=/^[a-z \-]{3,30}$/i;
      const regex_postGraduationUniversityName=/^[a-z \-\,]{3,50}$/i;
      const regex_postGraduationCollegeName=/^[a-z \-\,]{3,50}$/i;
      const regex_postGraduationPassingYear=/^(19[789]\d|20[0-2]\d)$/;
      const regex_postGraduationBackLogs=/^(True|False)$/i;
      const regex_postGraduationBackLogsClearedIf=/^(True|False)$/i; 
      const regex_postGraduationCGPA=/^([0-9]{1}\s)|([0-9]{1})|([0-9]{1}[%])$/i;
      const  regex_twelfthStandard=/^([12]{2})th$/;
      const regex_twelfthStandardSchoolName=/^[a-z \-\,]{3,50}$/i;
      const regex_twelfthStandardBoardName=/^[a-zA-Z \-\,\.]{3,50}$/i;
      const regex_twelfthStandardPassingyear =/^(19[789]\d|20[0-2]\d)$/;
      const regex_twelfthStandardCGPA_Percentage=/^([0-9]{1}\s)|([0-9]{1})|([0-9]{1}[%])$/i;
      const regex_tenthStandard=/^([10]{2})th$/;
      const regex_tenthStandardSchoolName=/^[a-z \-\,]{3,50}$/i;
      const regex_tenthStandardBoardName=/^[a-zA-Z \-\,\.]{3,50}$/i;
      const regex_tenthStandardPassingyear=/^(19[789]\d|20[0-2]\d)$/;
      const regex_tenthStandardCGPA_Percentage=/^([0-9]{1}\s)|([0-9]{1})|([0-9]{1}[%])$/i;

    if(!values.graduationDegreeName){
      errors.graduationDegreeName="Graduation Degree Name is required";
      }else if (!regex_graduationDegreeName.test(values.graduationDegreeName)) {
        errors.graduationDegreeName="Invalid Degree Name";
      }
      if(!values.graduationUniversityName){
        errors.graduationUniversityName="University name is required";
        }else if (!regex_graduationUniversityName.test(values.graduationUniversityName)) {
          errors.graduationUniversityName="Invalid University Name";
        }
        if(!values.graduationCollegeName){
          errors.graduationCollegeName="College name is required";
          }else if (!regex_graduationCollegeName.test(values.graduationCollegeName)) {
            errors.graduationCollegeName="Invalid College name";
          }
          if(!values.gradautionPassingYear){
            errors.gradautionPassingYear="Passout Year is required";
            }else if (!regex_gradautionPassingYear.test(values.gradautionPassingYear)) {
              errors.gradautionPassingYear="Invalid Passout year";
            }
            if(!values.graduationBackLogs){
              errors.graduationBackLogs="Required";
              }else if (!regex_graduationBackLogs.test(values.graduationBackLogs)) {
                errors.graduationBackLogs="Invalid Value";
              }

             if (values.graduationBackLogs=='true') {
              if(!values.graduationBackLogsClearedIf){
                errors.graduationBackLogsClearedIf="Required";
                }else if (!regex_graduationBackLogsClearedIf.test(values.graduationBackLogsClearedIf)) {
                  errors.graduationBackLogsClearedIf="Invalid Value";
                }
              
             }

             

                if(!values.graduationCGPA){
                  errors.graduationCGPA="CGPA is required";
                  }else if (!regex_graduationCGPA.test(values.graduationCGPA)) {
                    errors.graduationCGPA="Invalid Value";
                  }

                  if(!values.educationGap){
                    errors.educationGap="Required";
                    }else if (!regex_educationGap.test(values.educationGap)) {
                      errors.educationGap="Invalid Value";
                    }
                   if (values.educationGap=='true') {
                    if(!values.educationGapDuration){
                      errors.educationGapDuration="Duration is required";
                      }else if (!regex_educationGapDuration.test(values.educationGapDuration)) {
                        errors.educationGapDuration="Invalid Value";
                      }
                    
                   }

                    

                      if(!values.postGraduationDegree){
                        errors.postGraduationDegree="PG is required";
                        }else if (!regex_postGraduationDegree.test(values.postGraduationDegree)) {
                          errors.postGraduationDegree="Invalid Value";
                        }


                        if (values.postGraduationDegree=='true') {


                          
                        if(!values.postGraduationDegreeName){
                          errors.postGraduationDegreeName="Degree Name is required";
                          }else if (!regex_postGraduationDegreeName.test(values.postGraduationDegreeName)) {
                            errors.postGraduationDegreeName="Invalid Value";
                          }

                        if(!values.postGraduationUniversityName){
                          errors.postGraduationUniversityName="University Name is required";
                          }else if (!regex_postGraduationUniversityName.test(values.postGraduationUniversityName)) {
                            errors.postGraduationUniversityName="Invalid Value";
                          }
                         
                            if(!values.postGraduationCollegeName){
                              errors.postGraduationCollegeName="College Name is required";
                              }else if (!regex_postGraduationCollegeName.test(values.postGraduationCollegeName)) {
                                errors.postGraduationCollegeName="Invalid Value";
                              }
                              if(!values.postGraduationPassingYear){
                                errors.postGraduationPassingYear="Passout Year is required";
                                }else if (!regex_postGraduationPassingYear.test(values.postGraduationPassingYear)) {
                                  errors.postGraduationPassingYear="Invalid Year";
                                }
                                if(!values.postGraduationBackLogs){
                                  errors.postGraduationBackLogs="Back log status is required";
                                  }else if (!regex_postGraduationBackLogs.test(values.postGraduationBackLogs)) {
                                    errors.postGraduationBackLogs="Invalid Value";
                                  }

                                 
                                 if (values.postGraduationBackLogs=='true') {

                                  
                                  if(!values.postGraduationBackLogsClearedIf){
                                    errors.postGraduationBackLogsClearedIf="Backlog Status is required";
                                    }else if (!regex_postGraduationBackLogsClearedIf.test(values.postGraduationBackLogsClearedIf)) {
                                      errors.postGraduationBackLogsClearedIf="Invalid Value";
                                    }
                                    
                                  
                                 }

                                    if(!values.postGraduationCGPA){
                                      errors.postGraduationCGPA="CGPA/% is required";
                                      }else if (!regex_postGraduationCGPA.test(values.postGraduationCGPA)) {
                                        errors.postGraduationCGPA="Invalid Value";
                                      }
                                      
                          
                        }


                                      if(!values.twelfthStandard){
                                        errors.twelfthStandard="Class Name is required";
                                        }else if (!regex_twelfthStandard.test(values.twelfthStandard)) {
                                          errors.twelfthStandard="Invalid Value";
                                        }
                                        if(!values.twelfthStandardSchoolName){
                                          errors.twelfthStandardSchoolName="12th School Name is required";
                                          }else if (!regex_twelfthStandardSchoolName.test(values.twelfthStandardSchoolName)) {
                                            errors.twelfthStandardSchoolName="Invalid Value";
                                          }
                                          if(!values.twelfthStandardBoardName){
                                            errors.twelfthStandardBoardName="12th Board Name is required";
                                            }else if (!regex_twelfthStandardBoardName.test(values.twelfthStandardBoardName)) {
                                              errors.twelfthStandardBoardName="Invalid Value";
                                            }
                                            if(!values.twelfthStandardPassingyear){
                                              errors.twelfthStandardPassingyear="Passout Year is required";
                                              }else if (!regex_twelfthStandardPassingyear.test(values.twelfthStandardPassingyear)) {
                                                errors.twelfthStandardPassingyear="Invalid Value";
                                              }


                                            if(!values.twelfthStandardCGPA_Percentage){
                                              errors.twelfthStandardCGPA_Percentage="CGPA/% is required";
                                              }else if (!regex_twelfthStandardCGPA_Percentage.test(values.twelfthStandardCGPA_Percentage)) {
                                                errors.twelfthStandardCGPA_Percentage="Invalid Value";
                                              }
                                             

                                               
                                               
                                                if(!values.tenthStandard){
                                                  errors.tenthStandard="Class is required";
                                                  }else if (!regex_tenthStandard.test(values.tenthStandard)) {
                                                    errors.tenthStandard="Invalid Value";
                                                  }
                                                  if(!values.tenthStandardSchoolName){
                                                    errors.tenthStandardSchoolName="Tenth School Name is required";
                                                    }else if (!regex_tenthStandardSchoolName.test(values.tenthStandardSchoolName)) {
                                                      errors.tenthStandardSchoolName="Invalid School name";
                                                    }
                                                    if(!values.tenthStandardBoardName){
                                                      errors.tenthStandardBoardName="Board Name is required";
                                                      }else if (!regex_tenthStandardBoardName.test(values.tenthStandardBoardName)) {
                                                        errors.tenthStandardBoardName="Invalid Value";
                                                      }
                                                      if(!values.tenthStandardPassingyear){
                                                        errors.tenthStandardPassingyear="Passout Year is required";
                                                        }else if (!regex_tenthStandardPassingyear.test(values.tenthStandardPassingyear)) {
                                                          errors.tenthStandardPassingyear="Invalid Value";
                                                        }
                                                        if(!values.tenthStandardCGPA_Percentage){
                                                          errors.tenthStandardCGPA_Percentage="CGPA/% is required";
                                                          }else if (!regex_tenthStandardCGPA_Percentage.test(values.tenthStandardCGPA_Percentage)) {
                                                            errors.tenthStandardCGPA_Percentage="Invalid Value";
                                                          }
                                                         

     
      return errors;
    
    };






    return(
        <Base>
        <CustomEmployeeTabs/>
         <Container>
          <Row className="mt-3">
            <Col sm={{size:8,offset:2}}>
              <Card color="dark" inverse>

                <CardHeader><h3>Enter Educational Details!!</h3></CardHeader>
                <CardBody>
                  <Form onSubmit={submitForm}>
                    {/* again typed */}
                    <FormGroup>
                      <Label for="graduationDegreeName">Graduation Degree Name</Label>
                      <Input type="text" id="graduationDegreeName"
                      placeholder="Enter here"
                      value={educationalDetails.graduationDegreeName}
                      onChange={(e)=>handleChange(e,'graduationDegreeName')}
                      invalid={error.errors?.response?.data?.graduationDegreeName?true:false}

                      ></Input>
                      <p>{formErrors.graduationDegreeName}</p>
                      <FormFeedback>
                        {error.errors?.response?.data?.graduationDegreeName}
                      </FormFeedback>
                    </FormGroup>

                    {/* copied  */}

                    
             
                     
                    <FormGroup>
                         <Label for="graduationUniversityName">Graduation University Name</Label>
                         <Input
                          type="text"
                          id="graduationUniversityName" 
                          placeholder="Enter Here"
                          value={educationalDetails.graduationUniversityName}
                          onChange={(e)=>handleChange(e,'graduationUniversityName')}
                          invalid={error.errors?.response?.data?.graduationUniversityName?true:false}
                          >
                       </Input>
                       <p>{formErrors.graduationUniversityName}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.graduationUniversityName}
                         </FormFeedback>
                     </FormGroup>
                     
                     <FormGroup>
                         <Label for="graduationCollegeName">Graduation College Name</Label>
                         <Input
                          type="text"
                          id="graduationCollegeName" 
                          placeholder="Enter Here"
                          value={educationalDetails.graduationCollegeName}
                          onChange={(e)=>handleChange(e,'graduationCollegeName')}
                          invalid={error.errors?.response?.data?.graduationCollegeName?true:false}
                          >
                       </Input>
                       <p>{formErrors.graduationCollegeName}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.graduationCollegeName}
                         </FormFeedback>
                     </FormGroup>
                     
                     <FormGroup>
                         <Label for="gradautionPassingYear">Graduation Passout Year</Label>
                         <Input
                          type="text"
                          id="gradautionPassingYear" 
                          placeholder="Enter Here"
                          value={educationalDetails.gradautionPassingYear}
                          onChange={(e)=>handleChange(e,'gradautionPassingYear')}
                          invalid={error.errors?.response?.data?.gradautionPassingYear?true:false}
                          >
                       </Input>
                       <p>{formErrors.gradautionPassingYear}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.gradautionPassingYear}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="graduationBackLogs">Graduation Backlogs(if?)</Label>
                         <Input
                          type="select"
                          id="graduationBackLogs" 
                          value={educationalDetails.graduationBackLogs}
                          onChange={(e)=>handleChange(e,'graduationBackLogs')}
                          invalid={error.errors?.response?.data?.graduationBackLogs?true:false}
                          >
                            <option>--Select--</option> 
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                       </Input>
                       <p>{formErrors.graduationBackLogs}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.graduationBackLogs}
                         </FormFeedback>
                     </FormGroup>
     
     
                     <FormGroup>
                         <Label for="graduationBackLogsClearedIf">Graduation Backlogs Cleared(or not)</Label>
                         <Input 
                         type="select"
                         id="graduationBackLogsClearedIf" 
                         value={educationalDetails.graduationBackLogsClearedIf} 
                         disabled={educationalDetails.graduationBackLogs=='false'?true:false}
                         onChange={(e)=>handleChange(e,'graduationBackLogsClearedIf')}
                         invalid={error.errors?.response?.data?.graduationBackLogsClearedIf?true:false}
                         >
                            <option>--Select--</option> 
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                     
                         </Input>
                         <p>{formErrors.graduationBackLogsClearedIf}</p>
     
                         <FormFeedback>
                         {error.errors?.response?.data?.graduationBackLogsClearedIf}
                         </FormFeedback>
     
     
     
                     </FormGroup>

                     <FormGroup>
                         <Label for="graduationCGPA">Graduation CGPA/%</Label>
                         <Input
                          type="text"
                          id="graduationCGPA" 
                          placeholder="Enter Here"
                          value={educationalDetails.graduationCGPA}
                          onChange={(e)=>handleChange(e,'graduationCGPA')}
                          invalid={error.errors?.response?.data?.graduationCGPA?true:false}
                          >
                       </Input>
                       <p>{formErrors.graduationCGPA}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.graduationCGPA}
                         </FormFeedback>
                     </FormGroup>


                     <FormGroup>
                         <Label for="educationGap">Education Gap(if?)</Label>
                         <Input
                          type="select"
                          id="educationGap" 
                          value={educationalDetails.educationGap}
                          onChange={(e)=>handleChange(e,'educationGap')}
                          invalid={error.errors?.response?.data?.educationGap?true:false}
                          >
                             <option >--Select any Value--</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                       </Input>
                       <p>{formErrors.educationGap}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.educationGap}
                         </FormFeedback>
                     </FormGroup>


                     <FormGroup>
                         <Label for="educationGapDuration">Education Gap Duration (in years)</Label>
                         <Input
                          type="number"
                          id="educationGapDuration" 
                          placeholder="Enter Here"
                          disabled={educationalDetails.educationGap=='false'?true:false}
                          value={educationalDetails.educationGapDuration}
                          onChange={(e)=>handleChange(e,'educationGapDuration')}
                          invalid={error.errors?.response?.data?.educationGapDuration?true:false}
                          >
                       </Input>
                       <p>{formErrors.educationGapDuration}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.educationGapDuration}
                         </FormFeedback>
                     </FormGroup>


                     {/* <FormGroup>
                         <Label for="graduationMarkSheet">Upload Graduation Degree</Label>
                         <Input
                          type="file"
                          id="graduationMarkSheet" 
                          placeholder="Select Here"
                          value={educationalDetails.graduationMarkSheet}
                          onChange={(e)=>handleChange(e,'graduationMarkSheet')}
                          invalid={error.errors?.response?.data?.graduationMarkSheet?true:false}
                          >
                       </Input>
     
                         <FormFeedback>
                         {error.errors?.response?.data?.graduationMarkSheet}
                         </FormFeedback>
                     </FormGroup> */}

                     <FormGroup>
                         <Label for="postGraduationDegree">PG(if?)</Label>
                         <Input
                          type="select"
                          id="postGraduationDegree" 
                          value={educationalDetails.postGraduationDegree}
                          onChange={(e)=>handleChange(e,'postGraduationDegree')}
                          invalid={error.errors?.response?.data?.postGraduationDegree?true:false}
                          >
                            <option >--Select any Value--</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                            
                       </Input>
                       <p>{formErrors.postGraduationDegree}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.postGraduationDegree}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="postGraduationDegreeName">PG Degree Name</Label>
                         <Input
                          type="text"
                          id="postGraduationDegreeName" 
                          placeholder="Enter Here"
                          disabled={educationalDetails.postGraduationDegree=='false'?true:false}
                          value={educationalDetails.postGraduationDegreeName}
                          onChange={(e)=>handleChange(e,'postGraduationDegreeName')}
                          invalid={error.errors?.response?.data?.postGraduationDegreeName?true:false}
                          >
                       </Input>
                       <p>{formErrors.postGraduationDegreeName}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.postGraduationDegreeName}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="postGraduationUniversityName">PG University Name</Label>
                         <Input
                          type="text"
                          id="postGraduationUniversityName" 
                          placeholder="Enter Here"
                          value={educationalDetails.postGraduationUniversityName}
                          disabled={educationalDetails.postGraduationDegree=='false'?true:false}
                          onChange={(e)=>handleChange(e,'postGraduationUniversityName')}
                          invalid={error.errors?.response?.data?.postGraduationUniversityName?true:false}
                          >
                       </Input>
                       <p>{formErrors.postGraduationUniversityName}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.postGraduationUniversityName}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="postGraduationCollegeName">PG College Name</Label>
                         <Input
                          type="text"
                          id="postGraduationCollegeName" 
                          placeholder="Enter Here"
                          value={educationalDetails.postGraduationCollegeName}
                          disabled={educationalDetails.postGraduationDegree=='false'?true:false}
                          onChange={(e)=>handleChange(e,'postGraduationCollegeName')}
                          invalid={error.errors?.response?.data?.postGraduationCollegeName?true:false}
                          >
                       </Input>
                       <p>{formErrors.postGraduationCollegeName}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.postGraduationCollegeName}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="postGraduationPassingYear">PG Passing year</Label>
                         <Input
                          type="text"
                          id="postGraduationPassingYear" 
                          placeholder="Enter Here"
                          value={educationalDetails.postGraduationPassingYear}
                          disabled={educationalDetails.postGraduationDegree=='false'?true:false}
                          onChange={(e)=>handleChange(e,'postGraduationPassingYear')}
                          invalid={error.errors?.response?.data?.postGraduationPassingYear?true:false}
                          >
                       </Input>
                       <p>{formErrors.postGraduationPassingYear}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.postGraduationPassingYear}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="postGraduationBackLogs">PG Backlogs(if?)</Label>
                         <Input
                          type="select"
                          id="postGraduationBackLogs" 
                          disabled={educationalDetails.postGraduationDegree=='false'?true:false}
                          value={educationalDetails.postGraduationBackLogs}
                          onChange={(e)=>handleChange(e,'postGraduationBackLogs')}
                          invalid={error.errors?.response?.data?.postGraduationBackLogs?true:false}
                          >
                            <option value="">--Select any Value--</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                       </Input>
                       <p>{formErrors.postGraduationBackLogs}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.postGraduationBackLogs}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="postGraduationBackLogsClearedIf">PG Backlogs Cleared(?)</Label>
                         <Input
                          type="select"
                          id="postGraduationBackLogsClearedIf" 
                          disabled={educationalDetails.postGraduationBackLogs=='false' ||educationalDetails.postGraduationDegree=='false' ?true:false}
                          value={educationalDetails.postGraduationBackLogsClearedIf}
                          onChange={(e)=>handleChange(e,'postGraduationBackLogsClearedIf')}
                          invalid={error.errors?.response?.data?.postGraduationBackLogsClearedIf?true:false}
                          >
                            <option>--Select any Value--</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                       </Input>
                       <p>{formErrors.postGraduationBackLogsClearedIf}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.postGraduationBackLogsClearedIf}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="postGraduationCGPA">PG CGPA</Label>
                         <Input
                          type="text"
                          id="postGraduationCGPA" 
                          placeholder="Enter Here"
                          value={educationalDetails.postGraduationCGPA}
                          disabled={educationalDetails.postGraduationDegree=='false'?true:false}
                          onChange={(e)=>handleChange(e,'postGraduationCGPA')}
                          invalid={error.errors?.response?.data?.postGraduationCGPA?true:false}
                          >
                       </Input>
                       <p>{formErrors.postGraduationCGPA}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.postGraduationCGPA}
                         </FormFeedback>
                     </FormGroup>

                     {/* <FormGroup>
                         <Label for="postGraduationMarkSheet">Upload PG Degree</Label>
                         <Input
                          type="file"
                          id="postGraduationMarkSheet" 
                           placeholder="Enter Here"
                          value={educationalDetails.postGraduationMarkSheet}
                          onChange={(e)=>handleChange(e,'postGraduationMarkSheet')}
                          invalid={error.errors?.response?.data?.postGraduationMarkSheet?true:false}
                          >
                       </Input>
     
                         <FormFeedback>
                         {error.errors?.response?.data?.postGraduationMarkSheet}
                         </FormFeedback>
                     </FormGroup> */}

                     <FormGroup>
                         <Label for="twelfthStandard">12th Standard</Label>
                         <Input
                          type="text"
                          id="twelfthStandard" 
                          placeholder="Enter Here"
                          value={educationalDetails.twelfthStandard}
                          onChange={(e)=>handleChange(e,'twelfthStandard')}
                          invalid={error.errors?.response?.data?.twelfthStandard?true:false}
                          >
                       </Input>
                       <p>{formErrors.twelfthStandard}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.twelfthStandard}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="twelfthStandardSchoolName">12th School Name</Label>
                         <Input
                          type="text"
                          id="twelfthStandardSchoolName" 
                          placeholder="Enter Here"
                          value={educationalDetails.twelfthStandardSchoolName}
                          onChange={(e)=>handleChange(e,'twelfthStandardSchoolName')}
                          invalid={error.errors?.response?.data?.twelfthStandardSchoolName?true:false}
                          >
                       </Input>
                       <p>{formErrors.twelfthStandardSchoolName}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.twelfthStandardSchoolName}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="twelfthStandardBoardName">12th Board Name</Label>
                         <Input
                          type="text"
                          id="twelfthStandardBoardName" 
                          placeholder="Enter Here"
                          value={educationalDetails.twelfthStandardBoardName}
                          onChange={(e)=>handleChange(e,'twelfthStandardBoardName')}
                          invalid={error.errors?.response?.data?.twelfthStandardBoardName?true:false}
                          >
                       </Input>
                       <p>{formErrors.twelfthStandardBoardName}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.twelfthStandardBoardName}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="twelfthStandardPassingyear">Twelfth Passout Year</Label>
                         <Input
                          type="text"
                          id="twelfthStandardPassingyear" 
                          placeholder="Enter Here"
                          value={educationalDetails.twelfthStandardPassingyear}
                          onChange={(e)=>handleChange(e,'twelfthStandardPassingyear')}
                          invalid={error.errors?.response?.data?.twelfthStandardPassingyear?true:false}
                          >
                       </Input>
                       <p>{formErrors.twelfthStandardPassingyear}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.twelfthStandardPassingyear}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="twelfthStandardCGPA_Percentage">Twelfth percentage</Label>
                         <Input
                          type="text"
                          id="twelfthStandardCGPA_Percentage" 
                          placeholder="Enter Here"
                          value={educationalDetails.twelfthStandardCGPA_Percentage}
                          onChange={(e)=>handleChange(e,'twelfthStandardCGPA_Percentage')}
                          invalid={error.errors?.response?.data?.twelfthStandardCGPA_Percentage?true:false}
                          >
                       </Input>
                       <p>{formErrors.twelfthStandardCGPA_Percentage}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.twelfthStandardCGPA_Percentage}
                         </FormFeedback>
                     </FormGroup>

                     {/* <FormGroup>
                         <Label for="twelfthStandardMarkSheets">Upload Twelfth Marksheet</Label>
                         <Input
                          type="file"
                          id="twelfthStandardMarkSheets" 
                          placeholder="Enter Here"
                          value={educationalDetails.twelfthStandardMarkSheets}
                          onChange={(e)=>handleChange(e,'twelfthStandardMarkSheets')}
                          invalid={error.errors?.response?.data?.twelfthStandardMarkSheets?true:false}
                          >
                       </Input>
     
                         <FormFeedback>
                         {error.errors?.response?.data?.twelfthStandardMarkSheets}
                         </FormFeedback>
                     </FormGroup> */}

                     <FormGroup>
                         <Label for="tenthStandard">Tenth Standard</Label>
                         <Input
                          type="text"
                          id="tenthStandard" 
                          placeholder="Enter Here"
                          value={educationalDetails.tenthStandard}
                          onChange={(e)=>handleChange(e,'tenthStandard')}
                          invalid={error.errors?.response?.data?.tenthStandard?true:false}
                          >
                       </Input>
                       <p>{formErrors.tenthStandard}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.tenthStandard}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="tenthStandardSchoolName">Tenth School Name</Label>
                         <Input
                          type="text"
                          id="tenthStandardSchoolName" 
                          placeholder="Enter Here"
                          value={educationalDetails.tenthStandardSchoolName}
                          onChange={(e)=>handleChange(e,'tenthStandardSchoolName')}
                          invalid={error.errors?.response?.data?.tenthStandardSchoolName?true:false}
                          >
                       </Input>
                       <p>{formErrors.tenthStandardSchoolName}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.tenthStandardSchoolName}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="tenthStandardBoardName">Tenth Board Name</Label>
                         <Input
                          type="text"
                          id="tenthStandardBoardName" 
                          placeholder="Enter Here"
                          value={educationalDetails.tenthStandardBoardName}
                          onChange={(e)=>handleChange(e,'tenthStandardBoardName')}
                          invalid={error.errors?.response?.data?.tenthStandardBoardName?true:false}
                          >
                       </Input>
                       <p>{formErrors.tenthStandardBoardName}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.tenthStandardBoardName}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="tenthStandardPassingyear">Tenth Passout Year</Label>
                         <Input
                          type="text"
                          id="tenthStandardPassingyear" 
                          placeholder="Enter Here"
                          value={educationalDetails.tenthStandardPassingyear}
                          onChange={(e)=>handleChange(e,'tenthStandardPassingyear')}
                          invalid={error.errors?.response?.data?.tenthStandardPassingyear?true:false}
                          >
                       </Input>
                       <p>{formErrors.tenthStandardPassingyear}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.tenthStandardPassingyear}
                         </FormFeedback>
                     </FormGroup>

                     <FormGroup>
                         <Label for="tenthStandardCGPA_Percentage">Tenth CGPA(or %)</Label>
                         <Input
                          type="text"
                          id="tenthStandardCGPA_Percentage" 
                          placeholder="Enter Here"
                          value={educationalDetails.tenthStandardCGPA_Percentage}
                          onChange={(e)=>handleChange(e,'tenthStandardCGPA_Percentage')}
                          invalid={error.errors?.response?.data?.tenthStandardCGPA_Percentage?true:false}
                          >
                       </Input>
                       <p>{formErrors.tenthStandardCGPA_Percentage}</p>
                         <FormFeedback>
                         {error.errors?.response?.data?.tenthStandardCGPA_Percentage}
                         </FormFeedback>
                     </FormGroup>

                     {/* <FormGroup>
                         <Label for="tenthStandardMarkSheets">Upload Tenth Marksheet</Label>
                         <Input
                          type="file"
                          id="tenthStandardMarkSheets" 
                          placeholder="Enter Here" 
                          value={educationalDetails.tenthStandardMarkSheets}
                          onChange={(e)=>handleChange(e,'tenthStandardMarkSheets')}
                          invalid={error.errors?.response?.data?.tenthStandardMarkSheets?true:false}
                          >
                       </Input>
     
                         <FormFeedback>
                         {error.errors?.response?.data?.tenthStandardMarkSheets}
                         </FormFeedback>
                     </FormGroup> */}


                     <Container>
                      <Button className="ms-2" color="success" onClick={handleView}
                      hidden={localStorage.getItem("EducationalId")?false:true}
                      >View</Button>
                      <Button className="ms-2" color="secondary" onClick={handleReset}>Reset</Button>

                      <Button className="ms-2" color="warning" onClick={handleUpdate}
                      hidden={localStorage.getItem("EducationalId")?false:true}>Update</Button>

                      {/* <Button className="ms-2" color="danger" onClick={handleDelete}
                      hidden={localStorage.getItem("EducationalId")?false:true}>Delete</Button> */}

                      <Button className="ms-2" color="primary"
                      hidden={localStorage.getItem("EducationalId")?true:false}
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
export default EducationTab;