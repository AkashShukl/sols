import React from "react";

export default function SignupForm(props) {
 
  return (
    <div>
    <div>
    <label>Name</label>
    <input type="text" value={props.name} onChange={(e) => props.handleNameChange(e)}></input>
    {props.name ? " " : <label style={{ color: "red" }}> *required </label>}
    <br />
    <label>Email</label>
    <input type="text" value={props.email} onChange={(e) => props.handleEmailChange(e)}></input>
    {props.email.match(/.*@.*\..*/) ? " " : <label style={{ color: "red" }}> *Invalid Email </label>}
    <br />
    <label>Password</label>
    <input
      type="password"
      value={props.password}
      onChange={(e) => props.handlePasswordChange(e)}
    ></input>{" "}
    {props.password ? " " : <label style={{ color: "red" }}> *required </label>}
    <br />
    <label>Confirm Password</label>
    <input
      type="password"
      value={props.confirmPassword}
      onChange={(e) => props.handleConfirmPasswordChange(e)}
    ></input>{" "}
    {props.confirmPassword ? (
      " "
    ) : (
      <label style={{ color: "red" }}> *required </label>
    )}
    <br />
    {props.password === props.confirmPassword ? (
      " "
    ) : (
      <label style={{ color: "red" }}> Passwords do not match </label>
    )}
    <br />
    <button type="submit" onClick={() => props.handleSubmit()}>
      Submit
    </button>
  </div>
    </div>
  );
}
