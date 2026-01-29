import LoginImage from "../Components/LoginImage";
import LoginForm from "../Components/LoginForm";
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
