import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

// redex
import { increment, incrementByAmount } from "../StateRedex/CounterSlice";
import type { AppDispatch, RootState } from "../StateRedex/Store";
// redex
import "./LoginForm.css";
import LoginButton from "../LoginButton/LoginButton";
import { UserNameValidate } from "../../Helper/UserNameValidate";

const routemap: Record<string, { label: string }> = {
  "/account": {
    label: "Sign Up",
  },
  "/": {
    label: "Sign In",
  },
  "/forgotPassword": {
    label: "Forgot",
  },
};

const LoginForm = () => {
  // react-redex
  const count = useSelector((state: RootState) => state.counter.studentCount);
  const dispatch = useDispatch<AppDispatch>();
  //

  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(formData)
  };
  const handleSubmit = () => {
    const userDetails: string = formData.name;

    const userValidation = UserNameValidate(userDetails);
    if (userValidation) {
      console.log(formData);
      localStorage.setItem("Username", formData.name);
      localStorage.setItem("Password", formData.password);
      sessionStorage.setItem("Username", formData.name);
      sessionStorage.setItem("Password", formData.password);
      document.cookie = `userName : ${formData.name}, Password : ${formData.password}`;
      dispatch(increment());
      // dispatch(incrementByAmount(10))  
      setTimeout(() => navigate("/home"), 3000);
    }
  };

  const [createFormData, setCreateFormData] = useState({
    name: "",
    password: "",
    confirm: "",
  });

  const handleCreateChange = (e: any) => {
    const { name, value } = e.target;

    setCreateFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(createFormData);
  };

  const handleCreateSubmit = () => {
    if (createFormData.password != createFormData.confirm) {
      console.log("Password and confirm password not match");

      return;
    }
    const userDetails: string = createFormData.name;
    const userValidation = UserNameValidate(userDetails);
    if (userValidation) {
      console.log(createFormData);
      navigate("/");
    }
  };

  return (
    <div className="formDetails">
      <form action="" className="form">
        <h1>
          {routemap[location.pathname]?.label} {count}
        </h1>
        {location.pathname === "/" && (
          <>
            <LoginButton
              placeHolder={"Username or Email"}
              type={"text"}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <LoginButton
              placeHolder={"Password"}
              type={"password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <span className="forgetAccount">
              <h5
                className="forgetBtn"
                onClick={() => navigate("/forgotPassword")}
              >
                Forget Password?
              </h5>
            </span>
            <div
              className="loginBtn"
              role="button"
              onClick={() => {
                handleSubmit();
              }}
            >
              Sign In
            </div>
            <p>
              New here ?{" "}
              <span
                className="newAccount"
                onClick={() => {
                  navigate("/account");
                }}
              >
                Create a Account
              </span>
            </p>
          </>
        )}
        {location.pathname === "/account" && (
          <>
            <LoginButton
              placeHolder={"Email"}
              type={"text"}
              name={"name"}
              value={createFormData.name}
              onChange={handleCreateChange}
            />
            <LoginButton
              placeHolder={"Password"}
              type={"password"}
              name={"password"}
              value={createFormData.password}
              onChange={handleCreateChange}
            />
            <LoginButton
              placeHolder={"confirm-Password"}
              type={"password"}
              name={"confirm"}
              value={createFormData.confirm}
              onChange={handleCreateChange}
            />
            <div
              className="loginBtn"
              role="button"
              onClick={() => {
                handleCreateSubmit();
              }}
            >
              Sign Up
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
