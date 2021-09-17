import React, { useState,useContext } from "react";
import SignupForm from "./SignupForm";
import Counter from "./Counter"
import { ToggleUserNameContext } from "../App";
export default function Parent(props) {
  
  let defaultValue = props.counterStartVal;

  const [count, setCount] = useState(defaultValue);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const incr = () => {
    setCount(count + 1);
  };

  const decr = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setname("");
    setpassword("");
    setconfirmPassword("");
    setemail("");
  };

  const handleNameChange = (e) => {
    console.log("Called");
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
    if (!(name && email && password && confirmPassword)) {
      alert("All Fields are manadatory ");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match ");
    } else if (!email.match(/.*@.*\..*/)) {
      alert(" Invalid Email");
    } else {
      reset();
      alert("Submitted");
    }
  };

  const toggleSwitch = useContext(ToggleUserNameContext);
  return (
    <div>
    <button onClick={() => toggleSwitch.handleToggle()}>
    hideUserName
  </button><br/>
      <Counter count={count} incr ={incr} decr ={decr} />
      <hr/>
      <SignupForm
        name={name}
        email={email}
        handleNameChange={handleNameChange}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
