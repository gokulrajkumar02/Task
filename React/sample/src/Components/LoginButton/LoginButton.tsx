import { useState } from "react";
import "./LoginButton.css";

type Prop = {
  placeHolder: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
};
const LogInButton = ({ placeHolder, type, name, value, onChange }: Prop) => {
  const [showpassword, setShowPassword] = useState(false);

  return (
    <div className="input-btn">
      <input
        type={type === "password" && showpassword ? "text" : type}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onChange}
      />

      {type === "password" && (
        <span
          className="passwordsShow"
          onMouseDown={(e) => e.preventDefault()} 
          onClick={() => setShowPassword(!showpassword)}
        >
          {showpassword ? "👁️‍🗨️" : "👁️"}
        </span>
      )}
    </div>
  );
};

export default LogInButton;
