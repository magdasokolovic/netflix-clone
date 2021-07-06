import React from 'react'
import ReactPlayer from "react-player/youtube"

const Player = () => {
    return (
        <>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=LHOtME2DL4g'
                width='640px'
                height='360px'
                controls={true}
              />
            </div>

        </>
    )
}

export default Player
