import React from 'react'
import { useParams } from "react-router-dom";
import FoodComponent from './FoodComponent';
import NetflixComponent from './NetflixComponent';
import YoutubeComponent from './YoutubeComponent';
const ViewPage = () => {
    const {watchid} = useParams();
  return (
    <div className='w-[100%] flex h-[100%]'>
   {watchid=="vcwsBgrUIS4" &&<FoodComponent/>}
   {watchid=="zf6M6pR9QA8" &&<NetflixComponent/>}
   {watchid=="e5R91k4EEAA" &&<YoutubeComponent/>}
    <div className='w-[55%] items-center shadow-lg bg-gray-300 rounded-lg'>
    <iframe className="w-[100%] h-[100%] rounded-2xl"
           
           src={"https://www.youtube.com/embed/" +watchid+"?&autoplay=1&mute=1"}
           title="YouTube video player"
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           allowFullScreen
         ></iframe>
    </div>

    
</div>
  )
}

export default ViewPage