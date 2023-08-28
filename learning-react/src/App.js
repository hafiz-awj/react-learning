import { getDatabase , ref , set } from "firebase/database";
import { app } from "./firebase"
import './App.css';

const db = getDatabase(app);

function App() {

const putDara = () => {
  set(ref(db, "users/app"), {
    id: 88753,
    name: "Hafiz Ali Awj",
    age: 15,
  })
};

  return (
    <div className="App">
    <h1>This is a firebase project</h1>
    <button onClick={putDara}>Set Data</button>
    </div>
  );
}

export default App;
