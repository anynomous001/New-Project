import LogOutView from "./Pages/LogOutView"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LogInView from "./Pages/LogInView";
import React, { useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { app } from '../src/Constants/FireBaseSetUp';

// document.addEventListener('click', () => {

// })
// document.dispatchEvent("click")


// const testCallback = value => {
//   console.log(value)
// }

// class MyObservable {
//   _callbackList = []

//   constructor(value) {
//     this._value = value
//   }

//   get value() {
//     return this._value
//   }

//   set value(newValue) {
//     this._value = newValue
//     _callbackList.forEach(cb => cb(this._value))
//   }

//   subscribe(callback) {
//     _callbackList.push(callback)
//     _callbackList.forEach(cb => cb(this._value))

//     return () => {
//       _callbackList = _callbackList.filter(cb => cb !== callback)
//     }
//   }

//   unsubscribe(callback) {
//     _callbackList = _callbackList.filter(cb => cb !== callback)
//   }
// }

// const myObserver = new Observable(null) // _callbackList = []
// myObserver.value = "Tim"  // _callbackList = []
// // Nothing happened
// myObserver.value = "George"  // _callbackList = []
// // Nothing happened

// myObserver.subscribe(testCallback) // _callbackList = [testCallback]
// // "George"
// myObserver.value = "Tim"  // _callbackList = [testCallback]
// // "Tim"

// myoberserv.unsubscribe(testCallback) // _callbackList = []
// myObserver.value = "Julia"  // _callbackList = []
// // Nothing happened

// // -------------------------------------------------------------------------------------

// useEffect(() => {
//   const unsubscribe = new Observable("Mark").subscribe(() => { })

//   return unsubscribe
// })

// -------------------------------------------------------------------------------------

const auth = getAuth(app);
const db = getFirestore(app);

const FirebaseContext = React.createContext()

function App() {


  const [loggedIn, setLoggedIn] = React.useState(false)
  const [user, setUser] = React.useState(null)
  const [postData, setPostData] = React.useState([])


  const collectionName = "posts"


  function fetchInRealtimeAndRenderPostsFromDB() {
    const dataArray = []
    onSnapshot(collection(db, collectionName), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        dataArray.unshift(doc.data())
      })
      setPostData(dataArray)
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser)
    return unsubscribe
  }, [user])


  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, collectionName), (querySnapshot) => {
      if (user != null) {
        const dataArray = []
        querySnapshot.forEach((doc) => {
          dataArray.unshift(doc.data())
        })
        setPostData(dataArray)
        fetchInRealtimeAndRenderPostsFromDB()
      }
    })
    return unsubscribe
  }, [user])


  return (
    <>
      <FirebaseContext.Provider value={{ auth, db, postData }} >
        {user ? <LogInView /> : <LogOutView />}
      </FirebaseContext.Provider>
    </>
  )
}
export { FirebaseContext }
export default App
