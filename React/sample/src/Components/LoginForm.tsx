import "./LoginForm.css";
import LoginButton from "./LoginButton";

const LoginForm = () => {
  return (
    <div className="formDetails">
      <form action="" className="form">
        <h1>Sign In</h1>

        <LoginButton placeHolder={"Username or Email"} type ={"text"} />
        <LoginButton placeHolder={"Password"} type ={"password"} />
        <span className="forgetAccount">
          <h5 className="forgetBtn">Forget Password?</h5>
        </span>

        <div className="loginBtn" role="button">
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
