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
      <label>Name</label>
      <input type="text" value={name} onChange={handleNameChange}></input><br/>
      <label>Email</label>
      <input type="text" value={email} onChange={handleEmailChange}></input><br/>
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
      ></input><br/>
      <label>Confirm Password</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      ></input><br/>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}