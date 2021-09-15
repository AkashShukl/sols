import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greetings name="akash"/>
      <Counter/>
    </div>
  );
}

export default App;
