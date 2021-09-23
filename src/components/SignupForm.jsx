import React, { useContext } from "react";
import { ToggleUserNameContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/counterSlice";
import Home from "./Home";
import { Link } from "react-router-dom";

export default function SignupForm(props) {
  const toggleSwitch = useContext(ToggleUserNameContext);

  const { userInfo } = useSelector((state) => state.formreducer);

  const dispatch = useDispatch();

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
      <button
        type="submit"
        onClick={() =>
          dispatch(
            updateUser({
              userInfo: {
                name: props.name,
                email: props.email,
                password: props.password,
                confirmPassword: props.confirmPassword
              },
            })
          )
        }
      >
        Submit
      </button>
      <Link to="/home">home</Link>
      {userInfo.email} {userInfo.name}
    </div>
  );
}
