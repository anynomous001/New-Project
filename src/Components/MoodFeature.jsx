import React from 'react'
import { moodImages } from '../Constants/MoodImagesArray';

const MoodFeature = ({ setMoodState, setMood, mood, isMoodSelected, setIsMoodSelected }) => {





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
                            alt="Mood images" />
                    </button>
                    {img.expression}
                </span>
            })}
        </div >)
}

export default React.memo(MoodFeature)