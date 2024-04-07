import { Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";

const CustomEmployeeTabs = () => {
  return (
    <>
      <Nav card fill tabs expand="md" className="px-5">
        <NavItem >
          <NavLink  tag={ReactLink} to="/user/personalTab" >Personal Info</NavLink>
        </NavItem>

        <NavItem>
          <NavLink
           tag={ReactLink}
           to="/user/skillsTab"
           disabled={localStorage.getItem("PersonalDetailId")?false:true}
           > Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
          tag={ReactLink} 
          to="/user/educationTab" 
          disabled={localStorage.getItem("SkillId")?false:true}
          >Education</NavLink>
        </NavItem>

        <NavItem>
          <NavLink 
          tag={ReactLink} 
          to="/user/familyTab" 
          disabled={localStorage.getItem("EducationalId")?false:true}
          >Family</NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
          tag={ReactLink} 
          to="/user/accommodationTab" 
          disabled={localStorage.getItem("FamilyId")?false:true}
          >Accommodation</NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
          tag={ReactLink}
           to="/user/workExperienceTab" 
           disabled={localStorage.getItem("AccommodationId")?false:true}
           >Work Experience</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
           tag={ReactLink} 
           to="/user/salaryTab" 
           disabled={localStorage.getItem("WorkExperienceId")?false:true}
           >Salary</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={ReactLink} to="/user/summaryTab" disabled>Summary/Upload</NavLink>
        </NavItem>
      </Nav>
    </>
  );
};
export default CustomEmployeeTabs;
