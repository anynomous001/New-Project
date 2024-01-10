import React from 'react'
import { TbDoorExit, TbRuler2 } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import { FirebaseContext } from '../App'; // Correct the import

import { signOut, updateProfile } from "firebase/auth";
import UpdateTextArea from '../Components/UpdateTextArea';
import MoodFeature from '../Components/MoodFeature';
import RenderPost from '../Components/RenderPost';



const LogInView = () => {
    const { auth, db } = React.useContext(FirebaseContext);

    const user = auth.currentUser;
    const [displayName, setDisplayName] = React.useState(' ')
    const [photoURL, setphotoURL] = React.useState('')
    const [update, setUpdate] = React.useState(false)
    const [moodState, setMoodState] = React.useState(0)



    function authSignOut() {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.log(error.message)
        });
    }


    React.useEffect(() => {
        if (user !== null) {
            if (user.displayName !== null && user.photoURL !== null) {
                setDisplayName(user.displayName.split(' ')[0])
                setphotoURL(user.photoURL)
            }
        }
    }, [user]);

    function clearInputField(field) {
        field.value = ""
    }

    const authUpdateProfile = (e) => {
        e.preventDefault()
        setDisplayName(e.target.name.value.split(' ')[0])
        setphotoURL(e.target.image.value)

        updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL,
        }).then(() => {
            console.log("Profile")
        }).catch((error) => {
            console.log(error.message)
        })


        clearInputField(e.target.name)
        clearInputField(e.target.image)
    }



    return (
        <div className='h-screen relative bg-blue-500'>
            <div className="bg-red-200 h-24 p-4 grid items-center ">
                <TbDoorExit onClick={authSignOut} className='justify-self-end block hover:text-gray-800/40 hover:cursor-pointer border-2 border-black' size={35} />
            </div>
            <div className=" bg-red-500  p-6 flex flex-col items-center">
                <img
                    className='rounded-full w-24 h-24'
                    src={`${photoURL}`}
                    alt="User Profile Picture"
                />
                <h1 className="text-center mt-4 text-white text-2xl font-semibold">{`Hey ${displayName}, How Are You ?`}</h1>
                <button
                    onClick={() => setUpdate(true)}
                    className='bg-yellow-300 border-2 border-black p-4 my-2 font-bold tracking-wide  text-xl hover:bg-yellow-200 hover:cursor-pointer border-4 border-black '
                >Update Profile
                </button>


                {update && <form onSubmit={authUpdateProfile} className="absolute gap-8 top-80 border-4 px-6 py-10 border-black bg-blue-300  w-[90%] flex flex-col items-center" >
                    <div className="grid  w-full justify-items-end items-center  grid-cols-2   border-2 border-black">
                        <h1 className="text-[2.5rem] font-bold">Update Profile</h1>
                        <ImCross onClick={() => setUpdate(false)} size={25} className='text-gray-500  hover:text-black hover:cursor-pointer ' />
                    </div>
                    <input
                        type="text"
                        name='name'
                        placeholder='Your Name'
                        className="py-4 text-2xl text-gray-500 text-center
                     font-semibold bg-slate-50 focus:bg-slate-100 w-[70%]  rounded-lg border-4 border-black" />

                    <input
                        type="text"
                        name='image'
                        placeholder='Put URL Of Your Image'
                        className="py-4 text-2xl text-gray-500
                     text-center font-semibold bg-slate-50 focus:bg-slate-100 w-[70%] rounded-lg border-4 border-black" />


                    <button
                        type='submit'
                        className="flex justify-center gap-x-4 items-center w-[70%] bg-yellow-300 border-4 border-b-8 hover:border-b-4 border-black py-4
                font-bold text-3xl  rounded-lg">
                        <span> Update</span>
                    </button>
                </form>}
                <MoodFeature setMoodState={setMoodState} />

            </div>
            <UpdateTextArea moodState={moodState} />

            <RenderPost />
        </div >
    )
}



export default LogInView