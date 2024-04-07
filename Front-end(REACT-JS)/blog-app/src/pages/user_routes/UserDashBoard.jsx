import React from "react";
import { Container } from "reactstrap";
import AddPost from '../../components/AddPost';
import Base from '../../components/Base';

const UserDashBoard = () => {
  return (
    
      <Base>
        <Container>
          <AddPost />
        </Container>
       
      </Base>
    
    
  );
};

export default UserDashBoard;
