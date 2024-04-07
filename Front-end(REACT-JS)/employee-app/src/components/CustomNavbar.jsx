import { useEffect, useState } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import {doLogout, getCurrentUserDetail, isLoggedIn}  from '../../src/Auth/index';
// import Image from 'react-bootstrap/Image'

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
} from "reactstrap";

const CustomNavbar = () => {

  let navigate=useNavigate();

  const[isOpen,setIsOpen]=useState(false);
  const [login,setLogin] = useState(false);
const [user,setUser] = useState(undefined);

useEffect(()=>{
setLogin(isLoggedIn());
setUser(getCurrentUserDetail());
},[login]);


const logOut=()=>{
  doLogout(()=>{
    // logged out
    setLogin(false);
    navigate("/");
  });
  
  };

  const setprofile=(event)=>{
     console.log("its working");
  };

  return (
    <div>
      <Navbar 
      color="dark" 
      dark expand="md"
       fixed=""
       className="px-5">

        <NavbarBrand tag={ReactLink} to="/" >
          Employee Profile
          </NavbarBrand>
        <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav 
          className="me-auto"
           navbar>
          
            <NavItem><NavLink tag={ReactLink} to="/about">About</NavLink></NavItem>
            <NavItem><NavLink tag={ReactLink} to="/services">Services</NavLink></NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Contact us</DropdownItem>
                <DropdownItem >Facebook</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>LinkedIn</DropdownItem>
                <DropdownItem>Git-hub</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
           
           <Nav navbar>
            {
              login &&(
                <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/user/profile-info">Employee Profile</NavLink>
                </NavItem>


                <NavItem>
                  <NavLink>{
                  //  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  <img 
                  src={require("./Anurag_Profile_Picture.JPG")}
                  onClick={(event)=>setprofile(event)}
                  height={"30px"}
                  width={"30px"}
                 className="rounded-circle"
                alt="Avatar"/>}
      </NavLink>
                </NavItem>
              
                <NavItem>
                  {/* <NavLink tag={ReactLink} to="/user/dashboard"> */}
                  <NavLink tag={ReactLink} to="/user/personalTab">
                    {user.email}
                  </NavLink>
                </NavItem>
                <NavItem>
                <NavLink onClick={logOut}>Logout</NavLink>

                </NavItem>
                </>

              )
            }

{
           !login && (
           <>
             <NavItem>
            <NavLink tag={ReactLink} to="/login">
              Login
            </NavLink>
          </NavItem>

         
            <NavItem>
              <NavLink tag={ReactLink} to="/signup">
                SignUp
              </NavLink>
            </NavItem>  
           
           
           </>

           )

         }



           </Nav>



          {/* <NavbarText>Youtube</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
