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
