import React from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";



const AuthAccEmail = ({ auth }) => {



    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')


    function authSignInWithEmail() {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

            })
            .catch((error) => {
                console.log(error.message)
            });
    }





    function authCreateAccountWithEmail(e) {

        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
            })
            .catch((error) => {
                console.log(error.message)
            });


    }

    return (
        <form className='space-y-6 ' onSubmit={authSignInWithEmail}>
            <input
                type="text"
                placeholder='Email'
                value={email}
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                className="py-4 text-2xl text-gray-500 text-center
                     font-semibold bg-slate-50 focus:bg-slate-100 w-full  rounded-lg border-4 border-black" />

            <input
                type="password"
                value={password}
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                className="py-4 text-2xl text-gray-500
                     text-center font-semibold bg-slate-50 focus:bg-slate-100 w-full rounded-lg border-4 border-black" />


            <button
                type='submit'
                className="flex justify-center gap-x-4 items-center bg-yellow-300 border-4 border-b-8 hover:border-b-4 border-black py-4 w-full
                font-semibold text-3xl  rounded-lg">
                <span> Sign in</span>
            </button>

            <button
                onClick={authCreateAccountWithEmail}
                className="flex w-full justify-center hover:text-white hover:bg-black gap-x-4 items-center bg-transparent border-4  border-black py-4 
                font-semibold text-3xl  rounded-lg   ">
                <span> Create New Account</span>
            </button>
        </form>
    )
}

export default AuthAccEmail