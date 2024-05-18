import React from 'react'
import { headerbg } from '../Utils/constants'

const FoodComponent = () => {
  return (
    <div className='w-[45%] h-screen items-center  rounded-sm text-sm' >
       
        <img src={headerbg} alt="sideimg" className='absolute w-[100%] h-screen rounded-lg -z-10'/>
       
        <div className='relative py-[20%]'>
        <div className='rounded-full  py-[7.5%] border border-gray-400 mx-[5%] bg-beige-50 items-center'>
        <div className='flex flex-col text-center'>
        <h1 className='text-lg font-bold pb-[2%]'>Food Delivery App</h1>
        <p className='text-sm'>Sample demo app built with react with below features</p>
        <p>1. Listing of restaurants fetched from Swiggy API</p>
       
        <p>2. Search field for searching restaurants by name</p>
        <p>3. Navigation to restaurants by clicking on the restaurant cards</p>
        <p>4. React Routing to navigate across menu options</p>
        <p>5. Adding and Removing cart using Redux</p>
        <p>6.Styling using Tailwind CSS</p>
        <p>7. Built using React Hooks and React Components</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default FoodComponent