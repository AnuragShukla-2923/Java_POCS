import { useState } from "react";
import { json } from "react-router";
import { signUp } from "../Services/User-Service";
import {toast} from "react-toastify";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  FormFeedback,
} from "reactstrap";
import Base from "../components/Base";

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

  //handle change
  const handleChange=(event,property)=>{
    //dynamic setting the values
setData({...data,[property]:event.target.value})
console.log(data)
  };


  //resetting the form
  const resetData=()=>{
    setData({
      name:'',
      email:'',
      password:'',
      about:''

    });

  };


  //submitting the form
  const submitForm=(event)=>{
    event.preventDefault();

    // if(error.isError){
    //   toast.error("Form data is invalid !! ");
    //   return;
    // }
    // console.log(data);

    // data validations


    //call api for sending the data
    signUp(data).then((resp)=>{
      console.log(resp);
      console.log("success log");
      toast.success("User is Registered Successfully!!"+resp.id);
      setData({
        name:'',
        email:'',
        password:'',
        about:''

      });


    }).catch ((error)=>{
      console.log(error)
      console.log("Error log");
      //error handling in proper way
      setError({
        errors:error,
        isError:true
      })

    }) 

    };

  


  return (
    <Base>
      <Container>
        <Row className="mt-4">

         {/* {JSON.stringify (data)} */}


          <Col sm={{ size: 6, offset: 3 }}>
            {/* <Card color="dark" outline> */}
            <Card color="dark" inverse>
              <CardHeader>
                <h3>Fill Information to Register!!</h3>
              </CardHeader>
              <CardBody>
                {/* creating form here */}
                <Form onSubmit={submitForm}>
                  {/* Name Field */}
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter Your Name Here"
                      id="name"
                      onChange={(e)=>handleChange(e,'name')}
                      value={data.name}
                      invalid={error.errors?.resp?.data?.name?true:false}
                    ></Input>
                    <FormFeedback>
                    {error.errors?.resp?.data?.name}
                    </FormFeedback>
                  </FormGroup>

                  {/* Email Field */}
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter Your Email Here"
                      id="email"
                      onChange={(e)=>handleChange(e,'email')}
                      value={data.email}
                      invalid={error.errors?.resp?.data?.email?true:false}
                    ></Input>
                    <FormFeedback>
                    {error.errors?.resp?.data?.email}
                    </FormFeedback>
                  </FormGroup>

                  {/* Password Field */}
                  <FormGroup>
                    <Label for="password">Enter Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter Your Password Here"
                      id="password"
                      onChange={(e)=>handleChange(e,'password')}
                      value={data.password}
                      invalid={error.errors?.resp?.data?.password?true:false}
                    ></Input>
                    <FormFeedback>
                    {error.errors?.resp?.data?.password}
                    </FormFeedback>
                  </FormGroup>

                    {/* About Field */}
                    <FormGroup>
                    <Label for="about">Write Something about Yourself!</Label>
                    <Input
                      type="textarea"
                      placeholder="Enter  Here"
                      id="about"
                      style={{height:"100px"}}
                      onChange={(e)=>handleChange(e,'about')}
                      value={data.about}
                      invalid={error.errors?.resp?.data?.about?true:false}
                    ></Input>
                     <FormFeedback>
                    {error.errors?.resp?.data?.about}
                    </FormFeedback>
                  </FormGroup>

                  <Container className="text-center">
                    <Button outline color="primary">
                      Register
                    </Button>
                    <Button  onClick={resetData}
                      outline
                      color="secondary"
                      type="reset"
                      className="ms-2"
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
  );
};
export default SignUp;
