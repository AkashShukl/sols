import React, { useState } from "react";

export default function SignupForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const reset = () => {
    setname("");
    setpassword("");
    setconfirmPassword("");
    setemail("");
  };

  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setemail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setconfirmPassword(e.target.value);
  };

  const handleSubmit = () => {
    reset();
    alert("Submitted");
  };

  return (
    <div>
      <label>Name</label>
      <input type="text" value={name} onChange={handleNameChange}></input>
      {name ? " " : <lable style={{ color: "red" }}> *required </lable>}
      <br />
      <label>Email</label>
      <input type="text" value={email} onChange={handleEmailChange}></input>
      {email ? " " : <lable style={{ color: "red" }}> *required </lable>}
      <br />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
      ></input>{" "}
      {password ? " " : <lable style={{ color: "red" }}> *required </lable>}
      <br />
      <label>Confirm Password</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      ></input>{" "}
      {confirmPassword ? (
        " "
      ) : (
        <lable style={{ color: "red" }}> *required </lable>
      )}
      <br />
      {password === confirmPassword ? (
        " "
      ) : (
        <lable style={{ color: "red" }}> Passwords do not match </lable>
      )}
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
