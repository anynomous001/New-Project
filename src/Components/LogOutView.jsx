import React from 'react'
import { FcGoogle } from "react-icons/fc";
import AuthAccEmail from '../Chunks/AuthAccEmail';

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();




const LogOutView = ({ auth }) => {

    function authSignInWithGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log('Signed With Google')

            }).catch((error) => {
                console.log(error.message)
            });
    }






    return (
        <section className='w-full p-4 bg-blue-200/80 flex-col flex justify-center items-center h-screen ' >
            <div className="w-4/5 flex flex-col  items-center p-4  border-2 border-red-800 h-[85%]">
                <h1 className="text-6xl font-bold mb-8">Hoody</h1>



                <div className="flex flex-col justify-evenly h-[80%] w-[90%]  ">

                    <button
                        onClick={authSignInWithGoogle}
                        className="my-4 flex justify-center shadow-xl shadow-gray-500/30 gap-x-4 items-center bg-slate-50 py-4 hover:bg-slate-100 
                        font-semibold text-3xl  rounded-lg ">
                        <FcGoogle />
                        <span> Sign In with Google</span>
                    </button>

                    <AuthAccEmail auth={auth} />

                </div>
            </div>
        </section>
    )
}

export default LogOutView