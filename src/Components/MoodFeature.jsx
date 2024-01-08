import React from 'react'
import pngone from '../assets/emojis/1.png'
import pngtwo from '../assets/emojis/2.png'
import pngthree from '../assets/emojis/3.png'
import pngfour from '../assets/emojis/4.png'
import pngfive from '../assets/emojis/5.png'
import { FirebaseContext } from '../App'

const MoodFeature = ({ setMoodState }) => {

    const moodImages = [
        { id: 1, image: pngone, expression: 'Awful', selected: false },
        { id: 2, image: pngtwo, expression: 'Bad', selected: false },
        { id: 3, image: pngthree, expression: 'Meh', selected: false },
        { id: 4, image: pngfour, expression: 'Good', selected: false },
        { id: 5, image: pngfive, expression: 'Amazing', selected: false }
    ];

    const [mood, setMood] = React.useState(moodImages)
    const [isMoodSelected, setIsMoodSelected] = React.useState(false)


    function moodClick(selectedMoodImageid) {
        setMoodState(selectedMoodImageid)

        setIsMoodSelected(true)
        setMood(moodImages)
        setMood(PrevMood => {

            return PrevMood.map(mood => {
                return mood.id !== selectedMoodImageid ? mood : { ...mood, selected: true }
            })
        })
    }

    return (
        <div className='flex h-40 w-[80%] justify-between items-center my-6 p-8 border-4 border-black'>
            {mood.map((img) => {
                return <span key={img.id} className={`flex flex-col items-center font-bold tracking-wide  ${(isMoodSelected && !img.selected) ? ' opacity-20 ' : ''}`} >
                    <button onClick={() => moodClick(img.id)}
                    >
                        <img
                            className={`w-16 h-16 hover:w-20 hover:h-20 hover:cursor-pointer `}
                            src={img.image}
                            id={img.id}
                            alt="Mood images" />
                    </button>
                    {img.expression}
                </span>
            })}
        </div >)
}

export default MoodFeature