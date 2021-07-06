import React, { useState } from 'react'
import ReactPlayer from "react-player"

const Player = () => {

    return (
        <>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=LHOtME2DL4g'
                width='100%'
                height='100%'
                controls={true}
              />
            </div>

        </>
    )
}

export default Player
