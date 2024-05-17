import React from 'react'
import { headerbg } from '../Utils/constants'
const YoutubeComponent = () => {
  return (
    <div className='w-[45%] items-center  bg- rounded-lg' >
        <div className='w-[100%]'>
        <img src={headerbg} alt="sideimg" className='absolute w-[45%] h-screen rounded-lg -z-10'/>
        </div>
        <div className='relative py-[14%]'>
        <div className='rounded-full py-[14.5%] border border-gray-400 mx-[5%] bg-beige-50 items-center'>
        <div className='flex flex-col text-center'>
        <h1 className='text-2xl font-bold pb-[2%]'>Youtube Clone App</h1>
        <p>1. Sample demo app built cloning Youtube UI</p>
        <p>2. Listing of Movie Cards</p>
       
        <p>3. Toggling hamburger as in Youtube</p>
        <p>4. Debouncing Search</p>
        <p>5. React Routing for navigations</p>
        <p>6. Hirearchial Comments Section</p>
        <p>7. Live Chat</p>
        <p>8. State Management using Redux</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default YoutubeComponent