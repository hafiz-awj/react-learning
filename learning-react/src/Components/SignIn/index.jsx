import React from "react";
import { useRef } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";

const auth = getAuth(app);

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const SignInUser = () => {
    const email = emailRef.current.value;
    const password = emailRef.current.value;
    signInWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Signed in")
    ).catch((err) => console.log(err));
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
      <button onClick={SignInUser}>Sign In</button>
    </div>
  );
};

export default SignIn;
