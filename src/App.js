import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Counter from './components/Counter';
import ListView from './components/ListView';

function App() {
  return (
    <div className="App">
      <Greetings name="akash"/>
      <Counter defaultValue = "5"/>
      <ListView start= "2" end = "12" />
    </div>
  );
}

export default App;
