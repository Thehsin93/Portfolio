import React from 'react'
import { imgurl } from '../Utils/constants'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='w-full flex  flex-col md:flex-row   bg-beige-100 shadow-lg rounded-lg'>
        <div className='w-[100%] md:w-[70%] '>
        <img src={imgurl} alt="myimage" className="rounded-full w-[20%] md:w-[10%]"></img>
        </div>
        <div className='w-[100%] md:w-[30%] flex flex-col md:flex-row justify-between items-start md:items-center'>
            <Link to="/"><div className='text-lg underline cursor-pointer text-black hover:bg-gray-400 rounded-lg'>Home</div></Link>
            <Link to="/EmploymentHistory"><div className='text-lg underline cursor-pointer text-black hover:bg-gray-400 rounded-lg'>Employment History</div></Link>
            <Link to="/Projects"><div className='text-lg underline cursor-pointer text-black hover:bg-gray-400 rounded-lg'>Projects</div></Link>
            <Link to="/Contact"><div className='text-lg underline cursor-pointer text-black hover:bg-gray-400 rounded-lg'>Contact</div></Link>
        </div>

    </div>
  )
}

export default Header