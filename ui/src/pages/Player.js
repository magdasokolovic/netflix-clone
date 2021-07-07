import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useHistory } from "react-router-dom";
import Layout from "../components/Layout";

const Player = () => {
  const history = useHistory();
  const [id, setId] = useState(null);
  useEffect(() => {
    console.log(history.location.state);
    setId(history.location.state.data.key);
  }, []);
  return (
    <Layout>
      <div className="player-wrapper">
        {id && (
          <ReactPlayer
            className="react-player"
            url={`https://www.youtube.com/watch?v=${id}`}
            // key={id}
            // width="100%"
            // height="100%"
            controls={true}
          />
        )}
      </div>
    </Layout>
  );
};

export default Player;
