import React from 'react'
import { emplink } from '../Utils/constants'
import {linkedin,gmail,github,contact}   from '../Utils/constants'
const Contact = () => {
  return (
    <div>
    <img src={contact} alt="proimage" className='absolute  w-[100%] h-[85%] object-cover  -z-10'></img>
    <div className='w-[40%] flex flex-col ml-[55%] my-[5%] py-[2%]  absolute  rounded-3xl bg-beige-50'>
       
   
    <div className="flex justify-center">
          <img src={linkedin} alt="linkimg" className='w-[5%] bg-transparent' ></img>
        <a href="https://www.linkedin.com/in/thehsin-cj-644489140" target="_blank"  className="text-sm italic underline pl-[1%]">
        www.linkedin.com/in/thehsin-cj-644489140
        </a>
       
        </div>
        
        
        
        

  
   
         <div className="flex justify-center">
          <img src={gmail} alt="linkimg" className='w-[5%]' ></img>
        <span className="text-sm italic underline pl-[1%]">
        thehsincj@gmail.com
        </span>
       
        </div>
        
        
      
        

   
   
        
   <div className="flex justify-center">
          <img src={github} alt="linkimg" className='w-[5%]' ></img>
        <a href="https://github.com/Thehsin93" target="_blank" className="text-sm italic underline pl-[1%]">
        https://github.com/Thehsin93
        </a>
       
        
       
        </div>
        
        
        

   
    
   
    </div>
    </div>
  )
}

export default Contact