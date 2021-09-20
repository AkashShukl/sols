import React, { useState } from "react";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const reset = () => {
    setName("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
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
