import { useState } from "react";
import { toast } from "react-toastify";
import { Card,CardBody, CardHeader, Container, FormGroup, Input, Label,Col,Row,Form, Button } from "reactstrap";
import Base from "../components/Base";
import { getPersonByUserId, loginUser } from "../Services/user-Service";
import { doLogin } from "../Auth";
import { useNavigate } from "react-router-dom";

const Login=()=>{

const navigate=useNavigate();

const[loginDetail,setLoginDetail]=useState({
  username:'',
  password:''
});


const handleChange=(event,field)=>{
let actualValue=event.target.value;

setLoginDetail({
...loginDetail,
[field]:actualValue
});
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
  toast.error("User name and  password is required");
  return;
}
// submit data to server to generate token
loginUser(loginDetail).then((data)=>{


  // saving the data to local storage
  doLogin(data,()=>{
    console.log("Login detail is saved to localstorage");
    //redirect to user dashboard page
    // navigate("/user/dashboard")
    // getPersonByUserId().then((data)=>{
    //   console.log(data);
      

    // });
    navigate("/user/personalTab")
  });
  toast.success("Login Success");
}).catch(error=>{
  console.log(error);
if (error.response.status==400 ||error.response.status==404){
  toast.error(error.response.data.message);
}else{
 
  toast.error("Something went wrong on server!!");
}
})

};




    return(
      <Base>
    <Container>
      <Row className="mt-4">
        <Col sm={{size:6,
          offset:3}}>
      <Card  color="dark"  inverse>
       <CardHeader>
       <h3>Login Here !! </h3>
       </CardHeader>
      <CardBody>
{/* Login Form */}
        <Form onSubmit={handleFormSubmit}>
          {/* email field */}
         <FormGroup>
         <Label for="email">Enter Email</Label>
         <Input 
         type="email"
         id="email"
         placeholder="Enter Email"
         value={loginDetail.username}
         onChange={(e)=>handleChange(e,'username')}
         />
         </FormGroup>

           {/* Password field */}
           <FormGroup>
         <Label for="password">Enter Password</Label>
         <Input 
         type="password"
         id="password"
         placeholder="Enter Password"
         value={loginDetail.password}
         onChange={(e)=>handleChange(e,'password')}
         />
         </FormGroup>

         <Container className="text-center">
         <Button color="light" outline>Login</Button>
         <Button color="secondary" outline className="ms-2" onClick={handleReset}>Reset</Button>

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
    export default Login;