import { useEffect, useState } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";

import { Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,UncontrolledDropdown,
  DropdownToggle,DropdownMenu,DropdownItem,NavbarText,NavItem,NavLink} from "reactstrap";
import { doLogout, getCurrentUserDetail,isLoggedIn } from "../Auth";

const CustomNavbar=()=>{

let navigate=useNavigate();

const [isOpen,setIsOpen] = useState(false);
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



return(
    
    <div>
      {/* <Navbar {...args}> */}
      <Navbar
      color="dark"
      dark expand="md"
      fixed=""
      className="px-5"
      >
        <NavbarBrand tag={ReactLink} to="/">MyBlog</NavbarBrand>

        {/* <NavbarToggler onClick={toggle} /> */}
        {/* <Collapse isOpen={isOpen} navbar> */}
        <NavbarToggler onClick={()=>setIsOpen(!isOpen)}/>
         <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>

              <NavItem>
              <NavLink tag={ReactLink} to="/">
                New Feed
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink  tag={ReactLink} to="/services">Services</NavLink>
            </NavItem>

            <NavItem>
              <NavLink  tag={ReactLink} to="/about">About</NavLink>
            </NavItem>
        
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem >Contact us</DropdownItem>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Youtube</DropdownItem>
                <DropdownItem>Instagram</DropdownItem>
                <DropdownItem>LinkedIn</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
          <Nav  navbar>

         {

           login && (
            <>

            <NavItem>
            <NavLink  tag={ReactLink} to="/user/profile-info">
              Profile Info
            </NavLink>
          </NavItem>

            <NavItem>
            <NavLink tag={ReactLink} to="/user/dashboard">
              {user.email}
            </NavLink>
          </NavItem>
            <NavItem>
            <NavLink  onClick={logOut}>
              Logout
            </NavLink>
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


          {/* <NavItem>
            <NavLink tag={ReactLink} to="/login">
              Login
            </NavLink>
          </NavItem>

         
            <NavItem>
              <NavLink tag={ReactLink} to="/signup">
                SignUp
              </NavLink>
            </NavItem>         */}
          


          </Nav>
          {/* <NavbarText>Youtube</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );




};
export default CustomNavbar;