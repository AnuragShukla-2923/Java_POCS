import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Base from "./components/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Services from "./pages/Services";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";
import ProfileInfo from "./pages/user_routes/ProfileInfo";
import UserDashBoard from "./pages/user_routes/UserDashBoard";
import AddPost from "./components/AddPost";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer position="top-center"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/post/:postId" element={<PostPage />} />

<Route path="/user" element={<PrivateRoute/>}>
<Route path="dashboard" element={<UserDashBoard />} />
<Route path="profile-info" element={<ProfileInfo />} />
<Route path="Addpost" element={<AddPost/>}/>


</Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
