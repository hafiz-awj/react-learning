import React, { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";

const auth = getAuth(app);

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();


  const createUser = () => {
    const email=emailRef.current.value;
    const password = emailRef.current.value;
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };
  return (
    <div>
      <div>
        <label>Email</label>
        <input
          type="email"
          ref={emailRef}
          required
          placeholder="Enter your email here"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          required
          ref={passwordRef}
          placeholder="Enter your password here"
        />
      </div>
      <button onClick={createUser}>Sign Up</button>
    </div>
  );
}
