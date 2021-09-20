import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Login from "./components/Login";

export const ToggleUserNameContext = React.createContext({});

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/home/:username?">
            <Home />
          </Route>

          <Route path="/counter">
            <Counter defaultValue={5} />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
