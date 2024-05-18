import React from 'react'
import { headerbg } from '../Utils/constants'
const YoutubeComponent = () => {
  return (
    <div className='w-[100%] md:w-[45%] items-center  bg- rounded-lg' >
       
        <img src={headerbg} alt="sideimg" className='absolute w-[100%] h-screen rounded-lg -z-10'/>
      
        <div className='relative py-[20%]'>
        <div className='rounded-full py-[7.5%] border border-gray-400 mx-[5%] bg-beige-50 items-center text-sm'>
        <div className='flex flex-col text-center'>
        <h1 className='text-lg font-bold pb-[2%] underline'>Youtube Clone App</h1>
        <p>1. Sample demo app built cloning Youtube UI</p>
        <p>2. Listing of Movie Cards</p>
       
        <p>3. Toggling hamburger as in Youtube</p>
        <p>4. Debouncing Search</p>
        <p>5. React Routing for navigations</p>
        <p>6. Hirearchial Comments Section</p>
        <p>7. Live Chat</p>
        <p>8. State Management using Redux</p>
        <p><a href="https://myreactyoutube.netlify.app" target="_blank" className='underline'>https://myreactyoutube.netlify.app</a></p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default YoutubeComponent