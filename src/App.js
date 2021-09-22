import "./App.css";
import React, { useState } from "react";
import Parent from "./components/Parent";

export const ToggleUserNameContext = React.createContext({});

function App() {
  const [toggleSwitch, settoggleSwitch] = useState(false);
  const handleToggle = () => {
    settoggleSwitch(!toggleSwitch);
  };
  return (
    <div className="app">
      <h1> Exercise 5</h1> <br />
      <ToggleUserNameContext.Provider value={{ toggleSwitch, handleToggle }}>
        <Parent counterStartVal={5} />
      </ToggleUserNameContext.Provider>
      <hr />
    </div>
  );
}

export default App;
