import React from "react";

const VideoTitle = (props) => {
  // console.log(props);
  const { title, overview, avg } = props;
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg font-semibold w-1/4">{overview}</p>
      <div className=" ">
        <button className="bg-white  rounded-lg text-black p-4 px-16 text-xl hover:opacity-80">
          {" "}
          ▶️ Play
        </button>
        <button className=" mx-2 bg-gray-500 bg-opacity-50 rounded-lg text-white p-4 px-16 text-xl">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
