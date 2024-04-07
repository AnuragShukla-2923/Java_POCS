import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import { doSaveSalaryId } from "../Auth";
import { createSalaryDetails, deleteSalaryDetails, getSalaryDetailsById, updateSalaryDetails } from "../Services/SalaryTab-Service";
import Base from './Base';
import CustomEmployeeTabs from "./CustomEmployeeTabs";

const SalaryTab=()=>{
  const[formErrors,setFormErrors]=useState({});
 const[isSubmit,setIsSubmit]=useState(false);

    const[salaryDetails,setSalaryDetails]=useState({
        totolCTC:'',
        bankName:'',
        bankAddress:'',
        accountNo:'',
        ifscCode:''
});

const[error,setError]=useState({
    errors:{},
    isError:false
}) ;


const handleChange=(event,property)=>{
    setSalaryDetails({...salaryDetails,[property]:event.target.value});
    console.log(salaryDetails);
};

const handleReset=()=>{
setSalaryDetails({
    totolCTC:'',
    bankName:'',
    bankAddress:'',
    accountNo:'',
    ifscCode:''

})
};

const handleView=(event)=>{
    event.preventDefault();
    getSalaryDetailsById().then((data)=>{
        setSalaryDetails(data);
    })

};

const handleDelete=()=>{
    alert("Are You Sure Want to Delete this Record?");
    deleteSalaryDetails().then((data)=>{
      toast.success("Record Deleted Successfully!");
      handleReset();

    }).catch(error=>{
      toast.error("Something Wrong!");
    });

};

const handleUpdate=(event)=>{
    event.preventDefault();
    updateSalaryDetails(salaryDetails).then((data)=>{
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
    setFormErrors(validate(salaryDetails));
    setIsSubmit(true);
    //calling APIS
    };

// for calling API
useEffect(()=>{
console.log(formErrors);
if (Object.keys(formErrors).length===0 && isSubmit) {
  console.log(salaryDetails)
  createSalaryDetails(salaryDetails).then((data)=>{

      toast.success("Salary Details Created Successfully"+data.salaryId);
      handleReset();
      doSaveSalaryId(data,()=>{
      console.log("SalaryId Saved");

      });
  
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


// for validation
const validate=(values)=>{
  const errors={};
  const regex_totalCtc=/^([₹]{1})|([$]{1})([\d]{3,9})$/;
  const regex_bankName=/^[a-zA-Z \-\&]{5,25}$/;
  const regex_bankAddress=/^[a-zA-Z0-9 \-\,\.]{3,50}$/i;
  const regex_AccountNo=/^[0-9]{9,18}$/;
  const regex_IfscCode=/^[A-Z]{4}0[A-Z0-9]{6}$/;

if(!values.totolCTC){
  errors.totolCTC="Total Ctc is required";
  }else if (!regex_totalCtc.test(values.totolCTC)) {
    errors.totolCTC="Invalid CTC";
  }
  if(!values.bankName){
    errors.bankName="Bank Name is required";
    }else if (!regex_bankName.test(values.bankName)) {
      errors.bankName="Invalid Bank Name";
    }
    if(!values.bankAddress){
      errors.bankAddress="Bank Address is required";
      }else if (!regex_bankAddress.test(values.bankAddress)) {
        errors.bankAddress="Invalid Bank Address";
      }
      if(!values.accountNo){
        errors.accountNo="Account No is required";
        }else if (!regex_AccountNo.test(values.accountNo)) {
          errors.accountNo="Invalid Account No";
        }
        if(!values.ifscCode){
          errors.ifscCode="IFSC code is required";
          }else if (!regex_IfscCode.test(values.ifscCode)) {
            errors.ifscCode="Invalid IFSC";
          }
 
  return errors;

}



 return(
  <Base>
  <CustomEmployeeTabs/>
  <Container>
    <Row className="mt-3">
      <Col sm={{ size: 8, offset: 2 }}>
      <Card color="dark" inverse>
        <CardHeader>
          <h3>Enter Salary Details</h3>
        </CardHeader>
        <CardBody>
          <Form onSubmit={submitForm}>
            <FormGroup>
              <Label for="totolCTC">Total CTC</Label>
              <Input type="text"
              id="totolCTC"
              placeholder="Enter here"
              value={salaryDetails.totolCTC}
              onChange={(e)=>handleChange(e,'totolCTC')}
              invalid={error.errors?.response?.data?.totolCTC?true:false}
              ></Input>
              <p>{formErrors.totolCTC}</p>
              <FormFeedback>
                {error.errors?.response?.data?.totolCTC}
              </FormFeedback>
            </FormGroup>


            <FormGroup>
              <Label for="bankName">Enter Bank Name</Label>
              <Input type="text"
              id="bankName"
              placeholder="Enter here"
              value={salaryDetails.bankName}
              onChange={(e)=>handleChange(e,'bankName')}
              invalid={error.errors?.response?.data?.bankName?true:false}
              ></Input>
              <p>{formErrors.bankName}</p>
              <FormFeedback>
                {error.errors?.response?.data?.bankName}
              </FormFeedback>
            </FormGroup>


            <FormGroup>
              <Label for="bankAddress">Enter Bank Address</Label>
              <Input type="text"
              id="bankAddress"
              placeholder="Enter here"
              value={salaryDetails.bankAddress}
              onChange={(e)=>handleChange(e,'bankAddress')}
              invalid={error.errors?.response?.data?.bankAddress?true:false}
              ></Input>
              <p>{formErrors.bankAddress}</p>
              <FormFeedback>
                {error.errors?.response?.data?.bankAddress}
              </FormFeedback>
            </FormGroup>


            <FormGroup>
              <Label for="accountNo">Enter Account No</Label>
              <Input type="text"
              id="accountNo"
              placeholder="Enter here"
              value={salaryDetails.accountNo}
              onChange={(e)=>handleChange(e,'accountNo')}
              invalid={error.errors?.response?.data?.accountNo?true:false}
              ></Input>
              <p>{formErrors.accountNo}</p>
              <FormFeedback>
                {error.errors?.response?.data?.accountNo}
              </FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="ifscCode">IFSC Code</Label>
              <Input type="text"
              id="ifscCode"
              placeholder="Enter here"
              value={salaryDetails.ifscCode}
              onChange={(e)=>handleChange(e,'ifscCode')}
              invalid={error.errors?.response?.data?.ifscCode?true:false}
              ></Input>
              <p>{formErrors.ifscCode}</p>
              <FormFeedback>
                {error.errors?.response?.data?.ifscCode}
              </FormFeedback>
            </FormGroup>

            <Container>
              
             <Button 
             className="ms-2" 
             color="success" 
             onClick={handleView}
             hidden={localStorage.getItem("SalaryId")?false:true}
             >View</Button>
            <Button className="ms-2" color="secondary" onClick={handleReset}>Reset</Button>
            <Button className="ms-2" color="warning" onClick={handleUpdate}
             hidden={localStorage.getItem("SalaryId")?false:true}
            >Update</Button>
            {/* <Button className="ms-2" color="danger" onClick={handleDelete}
             hidden={localStorage.getItem("SalaryId")?false:true}
            >Delete</Button> */}
              <Button className="ms-2" color="primary"
               hidden={localStorage.getItem("SalaryId")?true:false}
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
export default SalaryTab;