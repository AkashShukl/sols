import "./App.css";

import Parent from "./components/Parent";

function App() {
  return (
    <div className="app">
      <h1> Exercise 5</h1> <br />
      <Parent counterStartVal={ 5 } />
      <hr />
    </div>
  );
}

export default App;
