import React from "react";

import {useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  //for putting trailer into redux store
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  useMovieTrailer(movieId);
 
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
    //the below is for state variable
    // <div><iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailerID} title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe></div>
  );
};

export default VideoBackground;
