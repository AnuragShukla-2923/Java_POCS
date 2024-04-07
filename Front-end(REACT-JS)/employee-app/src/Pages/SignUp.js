import { useState } from "react";
import { Card, CardBody, CardHeader, Container, FormGroup, Input, Label,Form, Button, Col,Row, FormFeedback } from "reactstrap";
import Base from "../components/Base";
import { signUp } from "../Services/user-Service";  
import {toast} from 'react-toastify';

const SignUp = () => {


const[data,setData]=useState({
name:'',
email:'',
password:'',
about:''
});

const[error,setError]=useState({
errors:{},
isError:false

});
// resetting the form
const resetData=()=>{
setData({
name:'',
email:'',
password:'',
about:''
});
};


//submit the form
const submitForm=(event)=>{
  event.preventDefault();

  // if(error.isError){
  //   toast.error("Form data is inValid !!")
  //   setError({...error,isError:false});
  //   return ;
  // }

// data validation


// call  Server API for sending the data 
console.log(data);
signUp(data).then((resp)=>{
  console.log(resp);
  console.log("Success log");
  toast.success("User is Registered Successfully !! user id"+ resp.id);
  setData({
name:'',
email:'',
password:'',
about:''




  })
}).catch((error)=>{
  console.log(error)
  console.log("Error log")

  // handling error in proper way
  setError({
   errors:error,
   isError:true

  });
});
};



// handle Change
const handleChange=(event,property)=>{
  // console.log("name");
  // console.log(event.target.value);
  // setData({...data,name:event.target.value})

  //dynamic setting the values
  setData({...data,[property]:event.target.value})
  console.log(data)

};




  return (
    <Base>
    <Container>
{/* <h1 style={{border:'1px solid red'}}>This is for SignUp </h1> */}
<Row className="mt-4"> 


{/* {JSON.stringify(data)} */}

  <Col sm={{size:6,offset:3}}>
  <Card color="dark" inverse>
   <CardHeader>
      <h3>Fill Information to Register !!</h3>  
   </CardHeader>
   <CardBody>

    {/* Creating form */}
    <Form onSubmit={submitForm}>
      {/* Name Field */}
     <FormGroup>
      <Label for="name">Enter Name</Label>
      <Input 
       type="text"
       placeholder="Enter Your Name" 
       id="name"
       onChange={(e)=>handleChange(e,'name')}
       value={data.name}
       invalid={error.errors?.response?.data?.name?true:false}
      />
      <FormFeedback>
      {error.errors?.response?.data?.name}
      </FormFeedback>
     </FormGroup>

      {/* Email Field */}
      <FormGroup>
      <Label for="email">Enter Email</Label>
      <Input 
      type="email"
       placeholder="Enter Your Email" 
       id="email"
       onChange={(e)=>handleChange(e,'email')}
       value={data.email}
       invalid={error.errors?.response?.data?.email?true:false}
       
      />
      <FormFeedback>
      {error.errors?.response?.data?.email}
      </FormFeedback>
     </FormGroup>

      {/* Password Field */}
      <FormGroup>
      <Label for="password">Enter Password</Label>
      <Input 
      type="password"
       placeholder="Enter Your Password" 
       id="password"
       onChange={(e)=>handleChange(e,'password')}
       value={data.password}
       invalid={error.errors?.response?.data.password?true:false}
      />
      <FormFeedback>
      {error.errors?.response?.data.password}

      </FormFeedback>
     </FormGroup>

      {/* About Field */}
      <FormGroup>
      <Label for="about">Enter About Yourself </Label>
      <Input 
      type="textarea"
       placeholder="Enter Here" 
       id="about"
       style={{height:"150px"}}
       onChange={(e)=>handleChange(e,'about')}
       value={data.about}
       invalid={error.errors?.response?.data.about?true:false}
      />
      <FormFeedback>
      {error.errors?.response?.data.about}

      </FormFeedback>
     </FormGroup>

     <Container className="text-center">
      <Button color="primary" outline>Register</Button>
      <Button onClick={resetData} color="secondary" type="reset" className="ms-2">Reset</Button>
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
export default SignUp;
