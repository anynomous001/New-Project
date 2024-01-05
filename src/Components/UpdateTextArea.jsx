import React from 'react'
import { collection, addDoc } from "firebase/firestore";

const UpdateTextArea = ({ db }) => {

    const [postUpdate, setPostUpdate] = React.useState('')

    function handleChange(e) {
        setPostUpdate(e.target.value)
    }

    async function uploadPost() {

        try {
            const docRef = await addDoc(collection(db, "posts"), {
                body: postUpdate
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
    return (
        <div className="bg-white py-10 flex flex-col items-center">
            <textarea value={postUpdate} onChange={handleChange} className='text-xl font-semibold border-4 border-black rounded-lg w-3/4 h-40 p-4' name="Text Area" placeholder='Write Your daily Update' id="" cols="30" rows="10"></textarea>
            <button
                onClick={uploadPost}
                className='bg-yellow-300 border-2 border-black py-3 px-10 my-4 font-bold tracking-wide text-xl hover:bg-yellow-200 hover:cursor-pointer border-4 border-black '
            >Post</button>

        </div>
    )
}

export default UpdateTextArea