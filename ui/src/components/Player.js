import React from 'react'
import ReactPlayer from "react-player/youtube"

const Player = () => {
    return (
        <>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=LHOtME2DL4g'
                width='80%'
                height='80%'
                controls={true}
              />
            </div>

        </>
    )
}

export default Player
