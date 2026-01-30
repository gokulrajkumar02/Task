import "./LoginForm.css";
import LoginButton from "./LoginButton";
import { useState } from "react";
import {UserNameValidate} from "../Helper/UserNameValidate";
import { useLocation, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate()
  
  const location = useLocation()
  console.log(location.pathname);

  const [formData, setFormData] = useState ({
    name :"",
    password : ""
  })
  const handleChange = (e : any) => {
     const {name , value} = e.target;

     setFormData(prev => ({
       ...prev,[name] :value
      }))
      // console.log(formData)
  }
  const handleSubmit = () => {
      const userDetails : string = formData.name;

      const userValidation = UserNameValidate(userDetails)
      if(userValidation){
        console.log(formData); 
        setTimeout(() => navigate("/home"), 3000)
         
      } 
  }
  

  return (
    <div className="formDetails">
      <form action="" className="form">

        <h1>Sign In</h1>

        <LoginButton placeHolder={"Username or Email"} type ={"text"} name ="name" value ={formData.name} onChange = {handleChange} />
        <LoginButton placeHolder={"Password"} type ={"password"} name ="password" value ={formData.password} onChange = {handleChange} />
        <span className="forgetAccount">
          <h5 className="forgetBtn" >Forget Password?</h5>
        </span>

        <div className="loginBtn" role="button" onClick={handleSubmit}>
          Sign In
        </div>
        <p>
          New here ? <span className="newAccount"> Create a Account</span>{" "}
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
