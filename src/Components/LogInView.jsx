import React from 'react'
import { TbDoorExit } from "react-icons/tb";
import { signOut } from "firebase/auth";

const LogInView = ({ auth }) => {
    const user = auth.currentUser;



    function authSignOut() {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.log(error.message)
        });
    }

    let displayName = ''
    let photoURL = ''


    if (user !== null) {
        displayName = user.displayName
        photoURL = user.photoURL

        if (displayName == null || photoURL == null) {
            displayName = 'Friend';
            photoURL = 'https://images.unsplash.com/photo-1548022401-6b11ed578cc7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        }
    }


    return (
        <div className='bg-blue-500 h-screen'>
            <div className="bg-red-200 h-24 p-4 grid items-center ">
                <TbDoorExit onClick={authSignOut} className='justify-self-end block hover:text-gray-800/40 hover:cursor-pointer border-2 border-black' size={35} />
            </div>
            <div className="h-screen p-6 flex flex-col items-center">
                <img
                    className='rounded-full w-24 h-24 '
                    src={`${photoURL}`}
                    alt="User Profile Picture"
                />
                <h1 className="text-center mt-4 text-white text-2xl font-semibold">{`Hey ${displayName}, How Are You ?`}</h1>
            </div>
        </div>
    )
}

export default LogInView