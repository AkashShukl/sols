import React from "react";
import { useParams } from "react-router";
import Greetings from "./Greetings";

export default function Home() {
  let params = useParams();

  return (
    <div>
      <h3>
        < Greetings name = {params.username ? params.username : "User" } />
      </h3>
    </div>
  );
}
