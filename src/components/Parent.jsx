import React, { useState } from "react";
import SignupForm from "./SignupForm";
import Counter from "./Counter";
import { ToggleUserNameContext } from "../App";
export default function Parent(props) {
  let defaultValue = props.counterStartVal;

  const [count, setCount] = useState(defaultValue);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const incr = () => {
    setCount(count + 1);
  };

  const decr = () => {
    setCount(count - 1);
  };

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

  const toggleSwitch = React.useContext(ToggleUserNameContext);

  return (
    <div>
      <button onClick={() => toggleSwitch.handleToggle()}>hideUserName</button>
      <br />
      <Counter count={count} incr={incr} decr={decr} />
      <hr />
      <SignupForm
        name={name}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        handleNameChange={handleNameChange}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
