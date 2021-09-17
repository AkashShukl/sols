import React, { useContext } from "react";
import { ToggleUserNameContext } from "../App";

export default function SignupForm(props) {
  const toggleSwitch = useContext(ToggleUserNameContext);

  return (
    <div>
      
      <label hidden={toggleSwitch.toggleSwitch}>Name</label>
      <input
        hidden={toggleSwitch.toggleSwitch}
        type="text"
        value={props.name}
        onChange={(e) => props.handleNameChange(e)}
      ></input>
      <br />
      <label>Email</label>
      <input
        type="text"
        value={props.email}
        onChange={(e) => props.handleEmailChange(e)}
      ></input>
      <br />
      <label>Password</label>
      <input
        type="password"
        value={props.password}
        onChange={(e) => props.handlePasswordChange(e)}
      ></input>
      <br />
      <label>Confirm Password</label>
      <input
        type="password"
        value={props.confirmPassword}
        onChange={(e) => props.handleConfirmPasswordChange(e)}
      ></input>
      <br />
      <button type="submit" onClick={() => props.handleSubmit()}>
        Submit
      </button>
    </div>
  );
}
