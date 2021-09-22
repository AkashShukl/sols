import React, { useState } from "react";
import SignupForm from "./SignupForm";
import Counter from "./Counter"

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

  return (
    <div>

      <Counter count={count} incr ={incr} decr ={decr} />
      <hr/>
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
