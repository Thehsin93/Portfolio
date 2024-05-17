import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { bgimg } from '../Utils/constants'
const Body = () => {
  return (
    <div>
         
       <Header/>
      
        <Outlet/>
    </div>
  )
}

export default Body