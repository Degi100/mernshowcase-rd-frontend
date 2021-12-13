import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext.js";

const PageLogin = () => {
  const { setCurrentUser, currentUserIsInGroup } =
    useContext(AppContext);
  const [loginFormMessage, setLoginFormMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [passwordsInputType, setPasswordsInputType] = useState("password");

  const handleShowPasswordButton = () => {
    setPasswordsInputType(
      passwordsInputType === "password" ? "text" : "password"
    );
  };
  const handleUsername = (e) => {
    const _username = e.target.value;
    setUsername(_username);
  };

  const handlePassword = (e) => {
    const _password = e.target.value;
    setPassword(_password);
  };

  const handleLoginButton = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/login`,
      requestOptions
    );
    if (!response.ok) {
      setUsername("");
      setPassword("");
      setLoginFormMessage("bad Login");
    } else {
      const _currentUser = await response.json();
      setCurrentUser((prev) => ({ ...prev, ..._currentUser }));
      navigate("/");
    }
  };

  return (
    <div>
      {currentUserIsInGroup("loggedOutUsers") && (
        <form>
          <fieldset>
            <legend>Login</legend>
            <div>{loginFormMessage}</div>
            <div className="row">
              <label htmlFor="username">Name</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsername}
              />
            </div>
            <div className="row">
              <label htmlFor="password">Password</label>
              <input
                type={passwordsInputType}
                id="password"
                onChange={handlePassword}
                value={password}
              />
              <div className="buttonRow">
                <button type="button" onClick={handleShowPasswordButton}>
                  {passwordsInputType === "password" ? "show" : "hide"}
                </button>
              </div>
            </div>
            <div className="buttonRow">
              <button type="submit" onClick={handleLoginButton}>
                Login
              </button>
            </div>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default PageLogin;
