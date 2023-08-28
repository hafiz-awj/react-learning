import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import "./App.css";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

const auth = getAuth(app);

function App() {

  return (
    <div className="App">
     <SignUp />
     <SignIn />
    </div>
  );
}

export default App;
