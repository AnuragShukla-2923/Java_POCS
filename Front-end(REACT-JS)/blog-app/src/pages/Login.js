import { useState } from "react";
import { toast } from "react-toastify";
import { CardBody, Container, FormGroup,Form, Label,Input,Card,Row,Col ,CardHeader, Button} from "reactstrap";
import Base from "../components/Base";
import { loginUser } from "../Services/User-Service";
import {doLogin} from  '../Auth/index';
import { useNavigate } from "react-router-dom";

const Login=()=>{


const navigate= useNavigate();  

const[loginDetail,setLoginDetail]=useState({
username:'',
password:''

});


const handleChange=(event,field)=>{
  let actualValue=event.target.value;

  setLoginDetail({...loginDetail,[field]:actualValue});
};

const handleReset=()=>{
setLoginDetail({
  username:'',
  password:''
});
};


const handleFormSubmit=(event)=>{
event.preventDefault();
console.log(loginDetail);

//validation
if(loginDetail.username.trim()==''||loginDetail.password.trim()==''){
  toast.error("User name and password required !!");
  return;
}



//submit data to server to generate token

loginUser(loginDetail).then((data)=>{

  console.log("User Login");
  console.log(data);


// saving the data to the local storage
doLogin(data,()=>{
  console.log("Login details saved to local storage");
  //redirected to user dashboard
    navigate("/user/dashboard")

});

  toast.success("Successfully Login");
}).catch(error=>{
  console.log(error);

  if(error.response?.status==400||error.response?.status==404){
     toast.error(error.response.data.message);

  }else{
    toast.error("Something went wrong on the server !!");
  }
})

};





    return(
  <Base>
 <Container >
  <Row className="mt-4">
    <Col sm={{size:6,offset:3}}>
      <Card color="secondary" inverse>
       <CardHeader>
       <h3>Login Here!!</h3>
       </CardHeader>
      <CardBody>
        <Form onSubmit={handleFormSubmit}>
          {/* Email Field */}
          <FormGroup>
            <Label for="email">Enter Registered Email</Label>
            <Input
             type="email"
             placeholder="Email Address" 
             id="email"
             value={loginDetail.username}
             onChange={(e)=>handleChange(e,'username')}
             />

            
          </FormGroup>
          {/* Password Field */}
          <FormGroup>
            <Label for="password">Enter Password</Label>
            <Input
             type="password"
             placeholder="password"
             id="password"
             value={loginDetail.password}
             onChange={(e)=>handleChange(e,'password')}
             />
          </FormGroup>
          <Container className="text-center">
           <Button  color="primary">Login</Button>
           <Button outline color="dark" className="ms-2" onClick={handleReset}>Reset</Button>
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
    export default Login;