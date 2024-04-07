// import  React,{ useState } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
// import { doSaveSkillId } from "../Auth";
// import { createSkillsDetails, deleteSkillsDetails, getSkillsDetailsById, updateSkillsDetails } from "../Services/SkillsTab-Service";
// import Base from "./Base";
// import CustomEmployeeTabs from './CustomEmployeeTabs';

// const SkillsTab=()=>{
//  const navigate =useNavigate();

//   const initialValues={softSkillsCounter:0,softSkills:"",technicalSkillsCounter:0,technicalSkills:""};
//   const [formValues,setFormValues]=useState(initialValues);
//   const[formErrors,setFormErrors]=useState({});
//   const[isSubmit,setIsSubmit]=useState(false);

// const handleReset=()=>{
//     setSkills({
//     softSkills:'',
//     technicalSkills:''
//     })

// };



// //m2:validation
// const handleChange=(event)=>{
// const{name,value}=event.target;
//   setFormValues({...formValues,[name]:value})
//   console.log(formValues);
// };



// const submitForm=(event)=>{
//   event.preventDefault();
//   setFormErrors(validate(formValues));
//   setIsSubmit(true);
  
//   //API calling
//   createSkillsDetails(formValues).then((data)=>{
//     toast.success("Created Successfully!"+data.skillsId);
//     handleReset();
//     console.log(data);
//     doSaveSkillId(data,()=>{
//       console.log("Skills Id Saved");
//       navigate("/user/educationTab");
//     });
  
//   }).catch(error=>{
//     console.log(error);
//     if(error.response.status==400|| error.response.status==404){
//       toast.error(error.response.data.message);
//     }else{
//       toast.error("Something Went Wrong on Server");
//     }
    
//   })


// };

// useEffect(()=>{
//  console.log(formErrors)
//   if(Object.keys(formErrors).length=== 0 && isSubmit){
//     console.log(formValues);
//   //   createSkillsDetails(formValues).then(data=>{
//   //     toast.success("Created Successfully!"+data.skillsId);
//   //     handleReset();
//   //     doSaveSkillId(data,()=>{
//   //       console.log("Skills Id Saved");
//   //       navigate("/user/educationTab");
//   //     });
    
//   //   }).catch(error=>{
//   //     console.log(error);
//   //     if(error.response.status==400|| error.response.status==404){
//   //       toast.error(error.response.data.message);
//   //     }else{
//   //       toast.error("Something Went Wrong on Server");
//   //     }
      
//   //   })
//   }
// },[formErrors]);


// const validate=(values)=>{
//   const errors={};
//   const regex=/^[a-zA-Z \-]{4,25}$/i;
//   const regex1=/^[a-zA-Z \-\+]{2,25}$/;
//   if(!values.softSkills){
//   errors.softSkills="Soft Skill is required";
//   }else if (!regex.test(values.softSkills)) {
//     errors.softSkills="Invalid Soft Skills";
//   }
//   if (!values.technicalSkills) {
//     errors.technicalSkills="Technical Skill is required"
//   }else if (!regex1.test(values.technicalSkills)) {
//     errors.technicalSkills="Invalid Technical Skills";
//   }
//   return errors;

// };

// return(
//   <Base>
//   <CustomEmployeeTabs/>
//   <Container>
//    <Row className="mt-3">
//     <Col sm={{ size: 8, offset: 2 }}>
//     <Card color="dark" inverse>
//       <CardHeader>
//        <h3> Enter Skills Details Here!!</h3>
//       </CardHeader>
//       <CardBody>
//         <Form onSubmit={submitForm}>
//           <FormGroup>
//             <Label for="softSkills">Soft Skills</Label>
//             <Input 
//             type="select" 
//             id="softSkills"
//             value={formValues.softSkills}
//             onChange={(e)=>handleChange(e)}
             
//              >
//                        <option >--Select Soft Skills--</option>
//                        <option value="Good Communication">Good Communication</option>
//                        <option value="Problem Solving">Problem Solving</option>
//                        <option value="Time Management">Time Management</option>
//                        <option value="Critical Thinking">Critical Thinking</option>
//                        <option value="Decision-making">Decision-making</option>
//                        <option value="Organizational">Organizational</option>
//                        <option value="Stress management">Stress management</option>
//                        <option value="Adaptability">Adaptability</option>
//                        <option value="Conflict management">Conflict management</option>
//                        <option value="Leadership">Leadership</option>
//                        <option value="Creativity">Creativity</option>
//                       <option value="Resourcefulness">Resourcefulness</option>
//                  </Input>
//                  <p>{formErrors.softSkills}</p>
// {/*                  
//                   <FormFeedback>
//                   {formErrors.softSkills}
//                  </FormFeedback> */}
//           </FormGroup>

//           <FormGroup>
//             <Label for="technicalSkills">Technical Skills</Label>
//             <Input
//              type="select" 
//              id="technicalSkills" 
//              value={formValues.technicalSkills}
//              onChange={handleChange}
            
            
//             >
//                        <option >--Select Technical Skills--</option>
//                        <option value="Java">Java</option>
//                        <option value="C">C language</option>
//                        <option value="C++">C++</option>
//                        <option value="Python">Python</option>
//                        <option value="Devops">Devops</option>
//                        <option value="React">React-js</option>
//                        <option value="Fullstack">Fullstack</option>
//                        <option value="IBM_ACE">IBM ACE</option>
//                        <option value="IBM_BPM">IBM BPM</option>
//                        <option value="Cloud Engineer">Cloud Engineer</option>
//                        <option value="java-microservices">Java-Microservices</option>
//                        <option value="Android">Android</option>
//                        <option value="Machine-learning">Machine Learning</option>
            
//             </Input>
//             <p> {formErrors.technicalSkills}</p>
           
//           </FormGroup>
//           <Container>
          
//           <Button color="secondary" className="ms-2" onClick={handleReset}>Reset</Button>
//           <Button color="primary" className="ms-2">Save</Button>
//           </Container>          
          

//         </Form>

//       </CardBody>
//     </Card>
    
//     </Col>
//     </Row>
//    </Container>
//   </Base>
// )

// };
// export default SkillsTab;