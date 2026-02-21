import { Route, Routes } from "react-router-dom";
import Login from "../Main/Login";
import Home from "../Components/Home";
import {Contact} from "../Components/Contact/Contact";
import StudentDetails from "../Components/StudentDeatils/StudentDetails";
import Dashboard from "../Components/HOC/Dashboard";
import WithAuth from "../Components/HOC/WithAuth";
import CustomHook from "../Components/CustomHooks/CustomHook";
import UserRequest from "../Components/Contact/UserRequest";
const LoginRouter = () => {
  const DashboardwHOC =  WithAuth(Dashboard)
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/account" element={<Login />} />
      <Route path="/forgotPassword" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element  ={<Contact />} />
      <Route path="/studentDetails" element={<StudentDetails />} />

      <Route path="/dashboard" element= {<DashboardwHOC />} /> 
      <Route path="/customhook" element={<CustomHook/>}/>
      <Route path="/userrequest" element={<UserRequest/>}/>
    </Routes>
  );
};

export default LoginRouter;
