import React from 'react'

const VideoTitle = (props) => {
    // console.log(props);
    const {title,overview,avg}=props;
  return (
    <div className="pt-36 px-12">
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg font-semibold w-1/2'>{overview}</p>
        <div className=' '>
            <button className='bg-gray-500 bg-opacity-50 rounded-lg text-white p-4 px-16 text-xl' > ▶️ Play</button>
            <button className=" mx-2 bg-gray-500 bg-opacity-50 rounded-lg text-white p-4 px-16 text-xl">ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle