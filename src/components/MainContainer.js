import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
    // console.log(movies);

    if(movies===null) return;

    const mainMovie = movies[0];
    const {original_title,overview,vote_average,id}=mainMovie;
    // console.log(mainMovie);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} avg={vote_average}/>
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
