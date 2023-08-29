import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';

function App() {
  let awj = "Awj";
  return (
    <div className="App">
      <Hello name={awj} />
    </div>
  );
}

export default App;
