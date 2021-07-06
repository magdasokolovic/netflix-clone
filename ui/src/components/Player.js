import React, { useState } from 'react'
import ReactPlayer from "react-player"

const Player = () => {
    const [watchComplete, setWatchComplete] = useState(false)

    const handleWatchComplete = ({played}) => {
        if(played >= 0.7 && !watchComplete) {
            setWatchComplete(true)
        }
    }
    return (
        <>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=LHOtME2DL4g'
                width='100%'
                height='100%'
                controls={true}
                onProgress={handleWatchComplete}
              />
            </div>
            <div className={watchComplete 
                ? 
                "marker marker--is-complete" 
                : 
                "marker marker--not-complete" }>Completed
            </div>
        </>
    )
}

export default Player
