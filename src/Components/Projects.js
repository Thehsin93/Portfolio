import React from 'react'
import { bgimg } from '../Utils/constants';
import ImageFood from './ImageFood';
import ImageNetflix from './ImageNetflix';
import ImageYoutube from './ImageYoutube';
import { projectimg } from '../Utils/constants';
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <div className='w-screen text-sm'>
     
            <img src={projectimg} alt="proimage" className='h-screen md:h-[85%] w-screen absolute -z-10'></img>
      
        <div className='pt-[10%] flex flex-col md:flex-row md:justify-center items-center'>
        <div  className="m-4 p-4 w-[70%] md:w-[25%]  rounded-2xl bg-gray-100 hover:bg-gray-200 text-left cursor-pointer">
        <Link to={"/ViewProj/vcwsBgrUIS4"}>
        <ImageFood/>
       
        <h3 className="text-wrap font-bold underline">Food Ordering APP</h3>
        <h4 className="overflow-hidden whitespace-normal">A food delivery app designed for demo with Swiggy API</h4>
        
        </Link>
        </div>
       
      
        <div  className="m-4 p-4 w-[70%] md:w-[25%] rounded-2xl bg-gray-100 hover:bg-gray-200 cursor-pointer">
        <Link to={"/ViewProj/zf6M6pR9QA8"}>
       <ImageNetflix/>
        <h3 className="text-wrap font-bold underline">Netflix Clone</h3>
        <h4 className="overflow-hidden whitespace-normal">Clone of Netflix with TMDB,Firebase and Open AI Api Integrations</h4>
        
        </Link>
        </div>
       
       
        <div  className="m-4 p-4 w-[70%] md:w-[25%] rounded-2xl bg-gray-100 hover:bg-gray-200 cursor-pointer">
        <Link to={"/ViewProj/e5R91k4EEAA"}>
      <ImageYoutube/>
        <h3 className="text-wrap font-bold underline">YouTube Clone</h3>
        <h4 className="overflow-hidden whitespace-normal">Clone of Youtue with debouncing search, live chat , hierarchial comments</h4>
       
        </Link>
        </div>
        
        </div>
    </div>
  )
};

export default Projects