import React from 'react'
import { FcGoogle } from "react-icons/fc";


const LogOutView = () => {
    return (
        <section className='w-full p-4 bg-red-200 flex-col flex justify-center items-center h-screen ' >
            <div className="w-4/5 flex flex-col  items-center p-4  border-2 border-red-800 h-[85%]">
                <h1 className="text-6xl font-bold mb-8">Hoody</h1>
                <button className="my-4 flex justify-center gap-x-4 items-center bg-slate-50 py-4 hover:bg-slate-100 
                font-semibold text-3xl w-[90%] rounded-lg   ">
                    <FcGoogle className=' ' />
                    <span> Sign In with Google</span>
                </button>

                <div className="flex flex-col justify-evenly h-[80%] w-[90%]  ">
                    <input type="text" placeholder='Email' className="py-4 text-2xl text-gray-500 text-center
                     font-semibold bg-slate-50 focus:bg-slate-100 w-full  rounded-lg border-4 border-black" />
                    <input type="text" placeholder='Password' className="py-4 text-2xl text-gray-500
                     text-center font-semibold bg-slate-50 focus:bg-slate-100 w-full rounded-lg border-4 border-black" />
                    <button className="flex justify-center gap-x-4 items-center bg-yellow-300 border-4 border-b-8  border-black py-4 hover:bg-slate-100 
                font-semibold text-3xl  rounded-lg   ">
                        <span> Sign in</span>
                    </button>
                    <button className="flex justify-center gap-x-4 items-center bg-transparent border-4  border-black py-4 
                font-semibold text-3xl  rounded-lg   ">
                        <span> Create New Account</span>
                    </button>

                </div>
            </div>
        </section>
    )
}

export default LogOutView