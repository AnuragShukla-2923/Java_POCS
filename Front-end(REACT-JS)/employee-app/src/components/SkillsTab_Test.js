import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { doSaveSkillId } from "../Auth";
import {
  createSkillsDetails,
  deleteSkillsDetails,
  getSkillsDetailsById,
  updateSkillsDetails,
} from "../Services/SkillsTab-Service";
import Base from "./Base";
import CustomEmployeeTabs from "./CustomEmployeeTabs";
import { SKillsTable } from "./Tables/SKillsTable";

const SkillsTab_Test = () => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [buttonActive, SetButtonActive] = useState("View");
  // const [state, setstate] = useState({ data: "" });

  const [skills, setSkills] = useState({
    softSkillsCounter: 0,
    softSkills: "",
    technicalSkillsCounter: 0,
    technicalSkills: "",
  });

  // setting skillstable to show details
  // const changeState = () => {
  //   setstate({
  //     data: `state/props of parent component
  //   is send by onClick event to another component`,
  //   });
  // };

  const handleReset = () => {
    setSkills({
      softSkills: "",
      technicalSkills: "",
    });
  };

  const handleChange = (event, property) => {
    setSkills({ ...skills, [property]: event.target.value });
    const { name, value } = event.target;
    console.log(skills);
  };

  const submitForm = (event) => {
    event.preventDefault();
    setFormErrors(validate(skills));
    setIsSubmit(true);
    //calling APIS   i.e use effect
  };
  // update value
  const handleUpdate = (event) => {
    event.preventDefault();
    updateSkillsDetails(skills)
      .then((data) => {
        toast.success("Updated Successfully!");
        handleReset();
      })
      .catch((error) => {
        console.log(error);
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  // View
  const handleView = (event) => {
    event.preventDefault();
    navigate("/user/showskills");

    // getSkillsDetailsById().then((data) => {
    //   console.log(data);
    //   setSkills(data);
    // });
  };

  // delete
  const handleDelete = () => {
    alert("Are You Sure Want to Delete this Record?");
    deleteSkillsDetails()
      .then((data) => {
        toast.success("Record Deleted Successfully!");
        handleReset();
      })
      .catch((error) => {
        toast.error("Something Wrong!");
      });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(skills);
      createSkillsDetails(skills)
        .then((data) => {
          toast.success("Skills Created Successfully!" + data.skillsId);
          handleReset();
          doSaveSkillId(data, () => {
            console.log("Skill Id Saved");
            navigate("/user/educationTab");
          });
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 400 || error.response.status == 404) {
            toast.error(error.response.data.message);
          } else {
            toast.error("Something went wrong on server!!");
          }
        });
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z \-]{4,25}$/i;
    const regex1 = /^[a-zA-Z \-\+]{2,25}$/i;

    if (!values.softSkills) {
      errors.softSkills = "Soft Skill is required";
    } else if (!regex.test(values.softSkills)) {
      errors.softSkills = "Invalid Soft Skills";
    }
    if (!values.technicalSkills) {
      errors.technicalSkills = "Technical Skill is required";
    } else if (!regex1.test(values.technicalSkills)) {
      errors.technicalSkills = "Invalid Technical Skills";
    }
    return errors;
  };

  return (
    <Base>
      <CustomEmployeeTabs />
      <Container>
        <Row className="mt-3">
          <Col sm={{ size: 8, offset: 2 }}>
            {/* <Card color="dark" inverse> */}
            <Card>
              <CardHeader>
                <h3> Enter Skills Details Here!!</h3>
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitForm}>
                  <FormGroup>
                    <Label for="softSkills">Soft Skills</Label>
                    <Input
                      type="select"
                      id="softSkills"
                      value={skills.softSkills}
                      onChange={(e) => handleChange(e, "softSkills")}
                    >
                      <option>--Select Soft Skills--</option>
                      <option value="Good Communication">
                        Good Communication
                      </option>
                      <option value="Problem Solving">Problem Solving</option>
                      <option value="Time Management">Time Management</option>
                      <option value="Critical Thinking">
                        Critical Thinking
                      </option>
                      <option value="Decision-making">Decision-making</option>
                      <option value="Organizational">Organizational</option>
                      <option value="Stress management">
                        Stress management
                      </option>
                      <option value="Adaptability">Adaptability</option>
                      <option value="Conflict management">
                        Conflict management
                      </option>
                      <option value="Leadership">Leadership</option>
                      <option value="Creativity">Creativity</option>
                      <option value="Resourcefulness">Resourcefulness</option>
                    </Input>
                    <p>{formErrors.softSkills}</p>
                  </FormGroup>

                  <FormGroup>
                    <Label for="technicalSkills">Technical Skills</Label>
                    <Input
                      type="select"
                      id="technicalSkills"
                      value={skills.technicalSkills}
                      onChange={(e) => handleChange(e, "technicalSkills")}
                    >
                      <option>--Select Technical Skills--</option>
                      <option value="Java">Java</option>
                      <option value="C">C language</option>
                      <option value="C++">C++</option>
                      <option value="Python">Python</option>
                      <option value="Devops">Devops</option>
                      <option value="React">React-js</option>
                      <option value="Fullstack">Fullstack</option>
                      <option value="IBM_ACE">IBM ACE</option>
                      <option value="IBM_BPM">IBM BPM</option>
                      <option value="Cloud Engineer">Cloud Engineer</option>
                      <option value="java-microservices">
                        Java-Microservices
                      </option>
                      <option value="Android">Android</option>
                      <option value="Machine-learning">Machine Learning</option>
                    </Input>
                    <p> {formErrors.technicalSkills}</p>
                  </FormGroup>
                  <Container>
                    <Button
                      color="success"
                      className="ms-2"
                      // hidden={localStorage.getItem("SkillId") ? false : true}
                      hidden={localStorage.getItem("SkillId") ? false : true}
                      onClick={handleView}
                    >
                      View
                    </Button>

                    {/* <div>{buttonActive === "View" && <SKillsTable />}</div> */}

                    {/* <Button
                      color="warning"
                      className="ms-2"
                      hidden={localStorage.getItem("SkillId") ? false : true}
                      onClick={handleUpdate}
                    >
                      Update
                    </Button> */}
                    {/* <Button color="danger"  className="ms-2"
          hidden={localStorage.getItem("SkillId")?false:true}
          onClick={handleDelete}
          >Delete</Button> */}

                    <Button
                      color="secondary"
                      className="ms-2"
                      onClick={handleReset}
                    >
                      Reset
                    </Button>
                    <Button
                      color="primary"
                      className="ms-2"
                      // hidden={localStorage.getItem("SkillId") ? true : false}
                    >
                      Save
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
export default SkillsTab_Test;
