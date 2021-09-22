import React from "react";
import { useParams } from "react-router";
import Greetings from "./Greetings";
import { useSelector } from "react-redux";
export default function Home() {
  let params = useParams();
  const { userInfo }= useSelector(state => state.formreducer)
  console.log("home",userInfo)
  return (
    <div>
      <h3>
        < Greetings name = {params.username ? params.username : "User" } />
      </h3>
    </div>
  );
}
