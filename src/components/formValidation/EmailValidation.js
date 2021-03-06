import ValidationCheck from "../formValidation/ValidationCheck";

const EmailValidation = (props) => {
  return (
    <div>
      <div className={`row ${props.isValid ? "valid" : "invalid"}`}>
        <label htmlFor="emailRegister1">Email</label>
        <input
          type="text"
          id="emailregister1"
          value={props.value}
          onChange={props.valueHandler}
          placeholder="example@yourprovider.com"
        />
        <ValidationCheck isValid={props.isValid} />
      </div>
      <div className={`note ${props.valid ? "valid" : "invalid"}`}></div>
    </div>
  );
};

export default EmailValidation;
