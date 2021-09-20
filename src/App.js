import "./App.css";
import Greetings from "./components/Greetings";
import Counter from "./components/Counter";
import ListView from "./components/ListView";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="app">
      <h1> Exercise 1</h1> <br />
      <Greetings name="akash" />
      <hr />
      <h1> Exercise 2</h1> <br />
      <Counter defaultValue={2} />
      <hr />
      <h1> Exercise 3</h1> <br />
      <ListView start="2" end="12" />
      <hr />
      <h1> Exercise 4</h1> <br />
      <SignupForm />
      <hr />
    </div>
  );
}

export default App;
