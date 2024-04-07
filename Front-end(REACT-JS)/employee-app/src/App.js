import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";
import Base from "./components/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Services from "./Pages/Services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import UserDashBoard from "./Pages/user_routes/UserDashBoard";
import ProfileInfo from "./Pages/user_routes/ProfileInfo";
import PersonalTab from "./components/PersonalTab";
// import PersonalTab_Test from './components/PersonalTab_Test';
import FamilyTab from "./components/FamilyTab";
import AccommodationTab from "./components/AccommodationTab";
import SkillsTab from "./components/SkillsTab";
import SalaryTab from "./components/SalaryTab";
import WorkExperienceTab from "./components/WorkExperienceTab";
import EducationTab from "./components/EducationTab";
import PersonalTab_Test from "./components/PersonalTab_Test";
import SkillsTab_Test from "./components/SkillsTab_Test";
import PersonalTabWithMultiPartFile from "./components/PersonalTabWithMultipartFile";
// import PersonalTab_Test from './components/PersonalTab_Test';
import FileUpload from "./components/FileUpload";
import MultipartFileUpload from "./components/MultipartFileUpload";
import SkillsList from "./components/Show_Skills_table";
import { SKillsTable } from "./components/Tables/SKillsTable";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        // all are private tabs which will be accessible only after login
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="dashboard" element={<UserDashBoard />} />
          <Route path="profile-info" element={<ProfileInfo />} />
          {/* <Route path="personalTab" element={<PersonalTab_Test />} /> */}
          <Route path="personalTab" element={<PersonalTab />} />
          <Route path="showskills" element={<SKillsTable />} />
          {/* <Route
            path="personalTab"
            element={<PersonalTabWithMultiPartFile />}
          /> */}
          {/* <Route path='fileUpload' element={<FileUpload/>}/> */}
          <Route path="fileUpload" element={<MultipartFileUpload />} />
          <Route path="familyTab" element={<FamilyTab />} />
          <Route path="accommodationTab" element={<AccommodationTab />} />
          {/* <Route path='skillsTab' element={<SkillsTab/>}/> */}
          <Route path="skillsTab" element={<SkillsTab_Test />} />
          <Route path="showskills" element={<SkillsList />} />
          <Route path="salaryTab" element={<SalaryTab />} />
          <Route path="workExperienceTab" element={<WorkExperienceTab />} />
          <Route path="educationTab" element={<EducationTab />} />
          {/* <Route path='summaryTab' element={<EducationTab/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
