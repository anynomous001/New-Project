import React from 'react'

const RenderPost = () => {
    return (
        <div className='w-full flex flex-col  items-center'>
            <button
                className=" w-[80%] flex  justify-center hover:text-white hover:bg-black gap-x-4 items-center bg-transparent border-4  border-black py-4 
                font-semibold text-3xl mb-6 rounded-lg ">
                <span> Fetch Post</span>
            </button>

            <div className="w-[80%]  mt-6 space-y-10">

                <div className="bg-gray-300/50 border-4 border-black h-40 flex flex-col justify-center p-6">
                    <div className='flex gap-8 '>
                        <h3>31 Aug 2023 - 19:36</h3>
                        <img src='../assets/emojis/1.png' />
                    </div>
                    <p>
                        My personal feeling is that this app is looking pretty darn' AMAZING!
                    </p>
                </div>

                <div className="bg-gray-300/50 border-4 border-black">
                    <div className='flex '>
                        <h3>31 Aug 2023 - 19:36</h3>
                        <img src='../assets/emojis/1.png' />
                    </div>
                    <p>
                        My personal feeling is that this app is looking pretty darn' AMAZING!
                    </p>
                </div>

            </div>
        </div>
    )
}

export default RenderPost

