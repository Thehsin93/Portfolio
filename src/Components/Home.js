import React from 'react'
import { bgimg } from '../Utils/constants'
import { sideimg,chair,projectimg,headerbg } from '../Utils/constants'

const Home = () => {
  return (
    <div className='w-full  flex'>
        <div className='w-[70%] md:w-[50%] items-center   rounded-lg' >
            <div className='w-[100%]'>
        <img src={headerbg} alt="sideimg" className='absolute w-[70%] md:w-[55%] h-screen  rounded-lg -z-10 object-cover'/>
        </div>
        <div className='relative w-[90%] border rounded-full pl-[10%] pr-[5%] md:pr-0 bg-beige-50 mx-[5%] my-[11%] text-gray-600'>
        <div className='py-[15%] md:py-[1%]'>
            <h1 className='text-lg font-bold text-center italic'>Hello, I am Thehsin</h1>
            <p className='p-[2.15%] max-w-[85%] text-sm italic'>A passionate software developer with 6 years of industry experience possessing below skillset </p>
            <div className='flex'>
           
            <li className='list-none pt-[0.5%] w-[50%]'>
                <h1 className='font-bold text-sm italic'>Frameworks & Libraries </h1>
             <p className='text-sm italic'>Asp.Net Core, Asp.Net MVC, Redux, React Routing, WebPack, Parcel, Entity framework, SignalR, Context APIS, 
                React hooks</p>
            </li>
            <li className='list-none pt-[0.5%] w-[50%] '>
                <h1 className='font-bold text-sm italic'>Programming Languages</h1>
             <p className='text-sm italic'>ReactJS, C#, Javascript, Tailwind CSS, HTML, CSS, Java, Python</p>
            </li>
            </div>
            <div className='flex'>
            <li className='list-none p-[0.5%] w-[50%]'>
                <h1 className='font-bold text-sm italic'>Database</h1>
             <p className='text-sm italic'>MSSQL, Redis, MongoDB</p>
            </li>
            <li className='list-none p-[0.5%] w-[50%]'>
                <h1 className='font-bold text-sm italic'>Testing</h1>
             <p className='text-sm italic'>Jest, SoapUi, Postman</p>
            </li>
            </div>
            <div className='flex'>
            <li className='list-none p-[0.5%] w-[50%]'>
                <h1 className='font-bold text-sm italic'>Tools</h1>
             <p className='text-sm italic'>Visual Studio, Visual Studio Code, Intellij, Pycharm</p>
            </li>
            <li className='list-none p-[0.5%] w-[50%]'>
                <h1 className='font-bold text-sm italic'>Version control </h1>
             <p className='text-sm italic'>Git, TFS, Azure devops </p>
            </li>
            </div>
            <div>
           
            <li className='list-none  w-[100%] text-center'>
                <h1 className='font-bold text-sm pr-[12.5%]'>Others</h1>
             <p className='text-sm pr-[14%]'>xml, Json, WCF web services, Rest & Soap APis, functional components</p>
            </li>
            </div>
            </div>
</div>
        </div>
        <div className='w-[30%] md:w-[50%]  items-center shadow-lg bg-gray-300 rounded-lg'>
           <img src={projectimg} alt="sideimg" className='w-full h-screen object-cover  rounded-lg'/>
        </div>

        
    </div>
  )
}

export default Home