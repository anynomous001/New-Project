import LogOutView from "./Components/LogOutView"
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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

  const [loogedIn, setLoggedIn] = React.useState(false)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  })

  return (
    <>
      {loogedIn ? <LogInView auth={auth} /> : <LogOutView auth={auth} />}

    </>
  )
}

export default App
