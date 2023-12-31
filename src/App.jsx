import LogOutView from "./Components/LogOutView"
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LogInView from "./Components/LogInView";
import React from "react";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCF2Ve1uRQodKYaSF9CpLVoZsHbvrz6mfU",
  authDomain: "hoody-7d62d.firebaseapp.com",
  projectId: "hoody-7d62d",
  storageBucket: "hoody-7d62d.appspot.com",
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const FirebaseContext = React.createContext()

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
      <FirebaseContext.Provider value={{ auth, db }} >
        {loogedIn ? <LogInView /> : <LogOutView />}
      </FirebaseContext.Provider>
    </>
  )
}
export { FirebaseContext }
export default App
