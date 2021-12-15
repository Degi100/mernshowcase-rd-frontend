import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const PasswordDisplayer = (props) => {
  const [showingPassword, setShowingPassword] = useState(false);

  return (
    <div className={`row ${props.isValid ? "valid" : "invalid"}`}>
      <label htmlFor="passwordRegister2"></label>
      <input
        type={showingPassword ? "text" : "password"}
        id="passwordRegister2"
        value={props.value}
        onChange={props.valueHandler}
        placeholder="Repeat your password*"
      />
      <span className="passwordIcon" onClick={() => setShowingPassword(!showingPassword)}>
        {showingPassword && <AiFillEye />}
        {!showingPassword && <AiFillEyeInvisible />}
      </span>
    </div>
  );
};


export default PasswordDisplayer;
