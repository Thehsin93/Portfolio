import React from 'react'
import { headerbg } from '../Utils/constants'

const FoodComponent = () => {
  return (
    <div className='w-[100%] md:w-[45%]  items-center  rounded-sm text-sm' >
       
        <img src={headerbg} alt="sideimg" className='absolute w-[100%] h-screen rounded-lg -z-10'/>
       
        <div className='relative py-[20%]'>
        <div className='rounded-full  py-[7.5%] border border-gray-400 mx-[5%] bg-beige-50 items-center'>
        <div className='flex flex-col text-center'>
        <h1 className='text-lg font-bold pb-[2%]'>Food Delivery App</h1>
        <p className='text-sm w-[85%] pl-[8%] md:pl-0 md:w-[100%]'>Sample demo app built with react with below features</p>
        <p>1. Listing of restaurants fetched from Swiggy API</p>
       
        <p>2. Search field for searching restaurants by name</p>
        <p>3. Navigation to restaurants by clicking on the restaurant cards</p>
        <p>4. React Routing to navigate across menu options</p>
        <p className='hidden md:block'>5. Adding and Removing cart using Redux</p>
        <p className='hidden md:block'>6.Styling using Tailwind CSS</p>
        <p className='hidden md:block'>7. Built using React Hooks and React Components</p>
        <p className=''><a href="https://main--foodorderingcj.netlify.app/" target="_blank" className='underline'>https://main--foodorderingcj.netlify.app/</a></p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default FoodComponent