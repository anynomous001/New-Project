import React from 'react'
import { TbDoorExit } from "react-icons/tb";
import { signOut } from "firebase/auth";

const LogInView = ({ auth }) => {

    function authSignOut() {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error.message)
        });
    }
    return (
        <div className='bg-blue-500 h-screen'>
            <div className="bg-red-200 h-24 p-4 flex items-center ">
                <TbDoorExit onClick={authSignOut} className='justify-self-center hover:text-gray-800/40 hover:cursor-pointer border-2 border-black' size={35} />
            </div>

        </div>
    )
}

export default LogInView