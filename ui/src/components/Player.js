import React from 'react'
import ReactPlayer from "react-player/youtube"

const Player = ({key}) => {
  const baseYoutubeUrl = "https://www.youtube.com/watch?v=4sj1MT05lAA"
    return (
        <>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url={`${baseYoutubeUrl}`}
                width='80%'
                height='80%'
                controls={true}
              />
            </div>

        </>
    )
}

export default Player
