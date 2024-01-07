import React from 'react'
import pngone from '../assets/emojis/1.png'
import pngtwo from '../assets/emojis/2.png'
import pngthree from '../assets/emojis/3.png'
import pngfour from '../assets/emojis/4.png'
import pngfive from '../assets/emojis/5.png'

const MoodFeature = () => {

    const moodImages = [
        { id: 1, image: pngone },
        { id: 2, image: pngtwo },
        { id: 3, image: pngthree },
        { id: 4, image: pngfour },
        { id: 5, image: pngfive }
    ];


    function moodClick(e) {
        console.log(e.target.id)
    }

    return (
        <div className='flex h-40 w-[80%] justify-between items-center my-6 p-8 border-4 border-black'>
            {moodImages.map((img) => {
                return <button key={img.id} onClick={moodClick}>
                    <img className='w-16 h-16 hover:w-20 hover:h-20 hover:cursor-pointer' src={img.image} id={img.id} alt="Mood images" />
                </button>
            })}
        </div>)
}

export default MoodFeature