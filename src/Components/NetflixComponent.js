import React from 'react'
import { headerbg } from '../Utils/constants'
const NetflixComponent = () => {
  return (
    <div className='w-[100%] md:w-[45%] items-center  bg- rounded-lg' >
        
        <img src={headerbg} alt="sideimg" className='absolute w-[100%] h-screen rounded-lg -z-10'/>
       
        <div className='relative py-[20%]'>
        <div className='rounded-full py-[7.5%] border border-gray-400 mx-[5%] bg-beige-50 items-center text-sm'>
        <div className='flex flex-col text-center'>
        <h1 className='text-lg font-bold pb-[2%] underline'>Netflix Clone App</h1>
        <p>1. Sample demo app built cloning Netflix UI</p>
        <p>2. Authentication using Firebase API</p>
       
        <p>3. Display of Movie Trailer in background cloning netflix UI</p>
        <p>4. Display of movie cards</p>
        <p>5. React Routing to navigate to GPT screen</p>
        <p>6. Search field for movie suggestions from Open AI</p>
        <p>7. Multi language support</p>
        <p>8. State Management using Redux</p>
        <p><a href="https://main--netflixgptcj.netlify.app/" target="_blank" className='underline'>https://main--netflixgptcj.netlify.app/</a></p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default NetflixComponent