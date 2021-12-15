import { useContext, useState, useEffect } from "react";
import AppContext from "../AppContext";
import { useNavigate } from "react-router";
import ValidationCheck from "../components/ValidationCheck";
import PasswordDisplayer from "../components/PasswordDisplayer";

const PageRegister = () => {
  const { setCurrentUser, currentUserIsInGroup} =
    useContext(AppContext);
  const navigate = useNavigate();

  const [userNameRegister, setUserNameRegister] = useState("");
  const [firstNameRegister, setFirstNameRegister] = useState("");
  const [secondNameRegister, setSecondNameRegister] = useState("");
  const [emailRegister1, setEmailRegister1] = useState("");
  const [emailRegister2, setEmailRegister2] = useState("");
  const [passwordRegister1, setPasswordRegister1] = useState("");
  const [passwordRegister2, setPasswordRegister2] = useState("");

  const [email1IsValid, setEmail1IsValid] = useState(false);
  const [userNameIsValid, setUserNameIsValid] = useState(false);
  const [firstNameIsValid, setFirstNameIsValid] = useState(false);
  const [secondNameIsValid, setSecondNameIsValid] = useState(false);
  const [email2IsValid, setEmail2IsValid] = useState(false);
  const [password1IsValid, setPassword1IsValid] = useState(false);
  const [password2IsValid, setPassword2IsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      email1IsValid &&
        email2IsValid &&
        userNameIsValid &&
        firstNameIsValid &&
        secondNameIsValid &&
        password1IsValid &&
        password2IsValid &&
        passwordRegister1 === passwordRegister2
    );
  }, [
    userNameIsValid,
    firstNameIsValid,
    secondNameIsValid,
    email1IsValid,
    email2IsValid,
    password1IsValid,
    password2IsValid,
    passwordRegister1,
    passwordRegister2,
  ]);

  const handleUserNameRegister = (e) => {
    const _userNameRegister = e.target.value;
    const userformat = /^[a-z0-9_-]{3,15}$/gi;
    setUserNameRegister(_userNameRegister);
    setUserNameIsValid(userformat.test(_userNameRegister));
  };

  const handleFirstNameRegister = (e) => {
    const _firstNameRegister = e.target.value;
    const userformat = /^[a-z]{1,15}$/gi;
    setFirstNameRegister(_firstNameRegister);
    setFirstNameIsValid(userformat.test(_firstNameRegister));
  };

  const handleSecondNameRegister = (e) => {
    const _secondNameRegister = e.target.value;
    const userformat = /^[a-z]{1,15}$/gi;
    setSecondNameRegister(_secondNameRegister);
    setSecondNameIsValid(userformat.test(_secondNameRegister));
  };

  const handleEmailRegister1 = (e) => {
    const _emailRegister1 = e.target.value;
    const mailformat = /^[a-z0-9_.-]{2,}@[a-z.]{2,}\.[a-z]{2,}$/gi;
    setEmailRegister1(_emailRegister1);
    setEmail1IsValid(mailformat.test(_emailRegister1));
  };

  const handleEmailRegister2 = (e) => {
    const _emailRegister2 = e.target.value;
    const mailformat = /^[a-z0-9_.-]{2,}@[a-z.]{2,}\.[a-z]{2,}$/gi;
    setEmailRegister2(_emailRegister2);
    setEmail2IsValid(mailformat.test(_emailRegister2));
  };

  const handlePasswordRegister1 = (e) => {
    const _passwordRegister1 = e.target.value;
    const passwordformat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    setPasswordRegister1(_passwordRegister1);
    setPassword1IsValid(passwordformat.test(_passwordRegister1));
  };
  const handlePasswordRegister2 = (e) => {
    const _passwordRegister2 = e.target.value;
    const passwordformat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    setPasswordRegister2(_passwordRegister2);
    setPassword2IsValid(passwordformat.test(_passwordRegister2));
  };

  const handleRegisterButton = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          username: userNameRegister,
          firstName: firstNameRegister,
          lastName: secondNameRegister,
          email1: emailRegister1,
          email2: emailRegister2,
          password1: passwordRegister1,
          password2: passwordRegister2,
        },
      }),
    };

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/createuser`,
      requestOptions
    );
    if (response.ok) {
      const _currentUser = await response.json();
      setCurrentUser((prev) => ({ ...prev, ..._currentUser }));
      setUserNameRegister("");
      setFirstNameRegister("");
      setSecondNameRegister("");
      setEmailRegister1("");
      setEmailRegister2("");
      setPasswordRegister1("");
      setPasswordRegister2("");
      navigate("/");
    }
  };

  return (
    <div>
      {currentUserIsInGroup("loggedOutUsers") && (
        <form>
          <fieldset>
            <legend>Register</legend>
            <div className={`row ${userNameIsValid ? "valid" : "invalid"}`}>
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                id="username"
                value={userNameRegister}
                onChange={handleUserNameRegister}
                placeholder="Username, User-name"
              />
              <ValidationCheck isValid={userNameIsValid} />
            </div>
            <div
              className={`note ${userNameIsValid ? "valid" : "invalid"}`}
            ></div>

            <div className={`row ${firstNameIsValid ? "valid" : "invalid"}`}>
              <label htmlFor="firstname">Name</label>
              <input
                type="text"
                id="firstNameRegister"
                value={firstNameRegister}
                onChange={handleFirstNameRegister}
                placeholder="John"
              />
              <ValidationCheck isValid={firstNameIsValid} />
            </div>

            <div className={`row ${secondNameIsValid ? "valid" : "invalid"}`}>
              <label htmlFor="secondname"></label>
              <input
                type="text"
                id="secondNameRegister"
                value={secondNameRegister}
                onChange={handleSecondNameRegister}
                placeholder="Doe"
              />
              <ValidationCheck isValid={secondNameIsValid} />
            </div>

            <div className={`row ${email1IsValid ? "valid" : "invalid"}`}>
              <label htmlFor="emailRegister1">Email</label>
              <input
                type="text"
                id="emailregister1"
                value={emailRegister1}
                onChange={handleEmailRegister1}
                placeholder="example@yourprovider.com"
              />
              <ValidationCheck isValid={email1IsValid} />
            </div>
            <div
              className={`note ${email1IsValid ? "valid" : "invalid"}`}
            ></div>

            <div className={`row ${email1IsValid ? "valid" : "invalid"}`}>
              <label htmlFor="emailRegister2"></label>
              <input
                type="text"
                id="emailregister2"
                value={emailRegister2}
                onChange={handleEmailRegister2}
                placeholder="example@yourprovider.com"
                />
                <ValidationCheck isValid={email2IsValid} />
            </div>
            <div
              className={`note ${email1IsValid ? "valid" : "invalid"}`}
            ></div>

            <PasswordDisplayer
              value={passwordRegister1}
              valueHandler={handlePasswordRegister1}
              isValid={password1IsValid}
              />

            <PasswordDisplayer
              value={passwordRegister2}
              valueHandler={handlePasswordRegister2}
              isValid={password2IsValid}
            />

            <div className={`row ${password2IsValid ? "valid" : "invalid"}`}>
              <label htmlFor="password"></label>
              <div
                className={`note ${password2IsValid ? "valid" : "invalid"}`}
              ></div>
            </div>
            <div className="buttonRow">
              <button disabled={!formIsValid} onClick={handleRegisterButton}>
                Register
              </button>
              <div className="buttonRow">
                <button>Reset</button>
              </div>
            </div>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default PageRegister;
