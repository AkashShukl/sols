import React from "react";
import { useParams } from "react-router";
import Greetings from "./Greetings";
import { useSelector } from "react-redux";
export default function Home() {
  let params = useParams();
  const { userInfo }= useSelector(state => state.formreducer)
  
  return (
    <div>
      <h3>
        < Greetings name = {params.username ? params.username : "User" } />
        {userInfo.name} {userInfo.email} {userInfo.password} {userInfo.confirmPassword}
      </h3>
    </div>
  );
}
