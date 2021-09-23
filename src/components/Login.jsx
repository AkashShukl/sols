import React, { useState } from "react";

export default function Login() {
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
      {name ? null :
        <label style={{ color: "red" }}> *required</label>
      }
      <br/>
      <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        ></input>
        {email.match(/.*@.*\..*/) ? (
          " "
        ) : (
          <label style={{ color: "red" }}> *Invalid Email </label>
        )}
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => handlePasswordChange(e)}
        ></input>{" "}
        {password ? (
          " "
        ) : (
          <label style={{ color: "red" }}> *required </label>
        )}
        <br />
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => handleConfirmPasswordChange(e)}
        ></input>{" "}
        {confirmPassword ? (
          " "
        ) : (
          <label style={{ color: "red" }}> *required </label>
        )}
        <br />
        {password === confirmPassword ? (
          " "
        ) : (
          <label style={{ color: "red" }}> Passwords do not match </label>
        )}
        <br />
        <button type="submit" onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
  );
}