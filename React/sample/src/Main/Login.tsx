import LoginImage from "../Components/LoginImage/LoginImage";
import LoginForm from "../Components/LoginForm/LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="Container">
      <div className="loginContainer">
        <LoginImage />
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;
