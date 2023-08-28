
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB7VQTuR-9h3eplbz0WigE4Puo8pzcIM7s",
  authDomain: "fir-learning-c03b8.firebaseapp.com",
  projectId: "fir-learning-c03b8",
  storageBucket: "fir-learning-c03b8.appspot.com",
  messagingSenderId: "28681498306",
  appId: "1:28681498306:web:a6fb97f6fcb3fa7d79155b",
  databaseURL: "https://fir-learning-c03b8-default-rtdb.firebaseio.com"
};


export const app = initializeApp(firebaseConfig);