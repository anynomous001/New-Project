import React from 'react'
import { FirebaseContext } from '../App';
import { moodImages } from '../Constants/MoodImagesArray';




const RenderPost = () => {
    const { postData } = React.useContext(FirebaseContext)


    // const [isFetched, setIsFetched] = React.useState(false)
    // async function fetchOnceAndRenderPostsFromDB() {
    //     setIsFetched(true)
    //     const dataArray = []
    //     const querySnapshot = await getDocs(collection(db, "posts"));
    //     querySnapshot.forEach((doc) => {
    //         dataArray.unshift(doc.data())
    //     });
    //     setPostData(dataArray)
    //     console.log(postData)
    // }



    function displayDate(firebaseDate) {
        const date = firebaseDate.toDate()

        const day = date.getDate()
        const year = date.getFullYear()

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const month = monthNames[date.getMonth()]

        let hours = date.getHours()
        let minutes = date.getMinutes()
        hours = hours < 10 ? "0" + hours : hours
        minutes = minutes < 10 ? "0" + minutes : minutes

        return `${day} ${month} ${year} - ${hours}:${minutes}`
    }

    // function replaceNewlinesWithBrTags(inputString) {
    //     return inputString.replace(/\n/g, <br></br>)
    // }

    const renderingUpdates = (data) => {
        return data.map(item => {
            return <div key={Math.random()} className="bg-gray-300/30 border-4 border-black h-40 flex flex-col justify-center p-6" >
                <div className='mb-2 flex items-center gap-8 '>
                    <h3 className='font-semibold text-gray-800/50'>{displayDate(item.createdAt)}</h3>
                    <img className='w-9 h-9 ' src={`${moodImages[item.mood] && moodImages[item.mood].image}`} />
                </div>
                <p className='font-bold tracking-wide text-xl'>
                    {/* {replaceNewlinesWithBrTags(item.body)} */}
                    {item.body}
                </p>
            </div >
        })
    }




    return (
        <div className='w-full flex flex-col  items-center'>
            {/* <button
                onClick={fetchOnceAndRenderPostsFromDB}
                className=" w-[80%] flex  justify-center hover:text-white hover:bg-black gap-x-4 items-center bg-transparent border-4  border-black py-4 
                font-semibold text-3xl mb-6 rounded-lg ">
                <span> Fetch Post</span>
            </button> */}

            <div className="w-[80%]  mt-6 space-y-10">
                {renderingUpdates(postData)}
            </div>
        </div>
    )
}

export default RenderPost














/* <div className="bg-gray-300/30 border-4 border-black h-40 flex flex-col justify-center p-6">
                    <div className='mb-2 flex items-center gap-8 '>
                        <h3 className='font-semibold text-gray-800/50'>31 Aug 2023 - 19:36</h3>
                        <img className='w-9 h-9 ' src={img} />
                    </div>
                    <p className='font-bold tracking-wide text-xl'>
                        My personal feeling is that this app is looking pretty darn' AMAZING!
                    </p>
                </div>
                <div className="bg-gray-300/30 border-4 border-black h-40 flex flex-col justify-center p-6">
                    <div className='mb-2 flex items-center gap-8 '>
                        <h3 className='font-semibold text-gray-800/50'>31 Aug 2023 - 19:36</h3>
                        <img className='w-9 h-9 ' src={img} />
                    </div>
                    <p className='font-bold tracking-wide text-xl'>
                        My personal feeling is that this app is looking pretty darn' AMAZING!
                    </p>
                </div> */