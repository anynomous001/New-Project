import LogOutView from "./Components/LogOutView"
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import LogInView from "./Components/LogInView";
import React from "react";



const firebaseConfig = {
  apiKey: "AIzaSyCF2Ve1uRQodKYaSF9CpLVoZsHbvrz6mfU",
  authDomain: "hoody-7d62d.firebaseapp.com",
  projectId: "hoody-7d62d",
  storageBucket: "hoody-7d62d.appspot.com",
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  return (
    <>
      {isLoggedIn ? <LogInView /> : <LogOutView auth={auth} setIsLoggedIn={setIsLoggedIn} />}

    </>
  )
}

export default App
