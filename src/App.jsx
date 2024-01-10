import LogOutView from "./Pages/LogOutView"
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LogInView from "./Pages/LogInView";
import React from "react";
import { getFirestore } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { app } from '../src/Constants/FireBaseSetUp';


const auth = getAuth(app);
const db = getFirestore(app);

const FirebaseContext = React.createContext()

function App() {


  const [loogedIn, setLoggedIn] = React.useState(false)
  const [postData, setPostData] = React.useState([])



  /* === Global Constants === */
  const collectionName = "posts"


  function fetchInRealtimeAndRenderPostsFromDB() {
    const dataArray = []
    onSnapshot(collection(db, collectionName), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        dataArray.unshift(doc.data())
      });
    })
    setPostData(dataArray)
    console.log(postData)
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true)
      // fetchInRealtimeAndRenderPostsFromDB()
    } else {
      setLoggedIn(false)
    }
  })


  return (
    <>
      <FirebaseContext.Provider value={{ auth, db, postData }} >
        {loogedIn ? <LogInView /> : <LogOutView />}
      </FirebaseContext.Provider>
    </>
  )
}
export { FirebaseContext }
export default App
