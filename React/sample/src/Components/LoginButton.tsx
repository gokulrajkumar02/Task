import "./LoginButton.css";

type Prop = {
  placeHolder: string;
  type: string;
};
const LogInButton = ({ placeHolder, type }: Prop) => {
  return <input type={type} className="loginButton" placeholder={placeHolder} />;
};

export default LogInButton;
