import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Login from "./components/Login";
import ApiCallings from "./components/ApiCallings";

export const ToggleUserNameContext = React.createContext({});
const queryClient = new QueryClient();
function App() {
  // const [toggleSwitch, settoggleSwitch] = useState(false);
  // const handleToggle = () => {
  //   settoggleSwitch(!toggleSwitch);
  // };

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

            <Route path="/apicalling">
            <QueryClientProvider client={queryClient}>
              <ApiCallings />
              </QueryClientProvider>
            </Route>
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
