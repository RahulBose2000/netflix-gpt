import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    // const [trailerID,setTrailerID]=useState(null) // this could also be used for trailer id but when we have already use redux there is no mean to use state varibles
    //fetch trailer video
    const getMovieVideo = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json);
      const filterData = json.results.filter((video) => video.type === "Trailer");
      // console.log(filterData);
      const trailer = filterData.length ? filterData[0] : json.results[0];
      // console.log(trailer);
      // setTrailerID(trailer.key);
  
      //putting trailer into the redux store
      dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
      getMovieVideo();
    }, []);
  
}

export default useMovieTrailer