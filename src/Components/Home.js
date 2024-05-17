import React from 'react'
import { bgimg } from '../Utils/constants'
import { sideimg,chair,projectimg,headerbg } from '../Utils/constants'

const Home = () => {
  return (
    <div className='w-full  flex'>
        <div className='w-[70%] md:w-[55%] items-center   rounded-lg' >
            <div className='w-[100%]'>
        <img src={headerbg} alt="sideimg" className='absolute w-[70%] md:w-[55%] h-screen  rounded-lg -z-10 object-cover'/>
        </div>
        <div className='relative w-[100%] border rounded-full pl-[10%] pr-[5%] md:pr-0 bg-beige-50 mt-[11%]'>
        <div className='py-[15%] md:py-[7%]'>
            <h1 className='text-2xl font-bold text-center'>Hello, I am Thehsin</h1>
            <p className='p-[1.15%]'>A passionate software developer with 6 years of industry experience possessing the below skillset</p>
            <div className='flex'>
           
            <li className='list-none pt-[0.5%] w-[50%]'>
                <h1 className='font-bold text-lg'>Frameworks & Libraries </h1>
             <p>Asp.Net Core, Asp.Net MVC, Redux, React Routing, WebPack, Parcel, Entity framework, SignalR, Context APIS, 
                React hooks</p>
            </li>
            <li className='list-none pt-[0.5%] w-[50%] '>
                <h1 className='font-bold text-lg'>Programming Languages</h1>
             <p>ReactJS, C#, Javascript, Tailwind CSS, HTML, CSS, Java, Python</p>
            </li>
            </div>
            <div className='flex'>
            <li className='list-none p-[0.5%] w-[50%]'>
                <h1 className='font-bold text-lg'>Database</h1>
             <p>MSSQL, Redis, MongoDB</p>
            </li>
            <li className='list-none p-[0.5%] w-[50%]'>
                <h1 className='font-bold text-lg'>Testing</h1>
             <p>Jest, SoapUi, Postman</p>
            </li>
            </div>
            <div className='flex'>
            <li className='list-none p-[0.5%] w-[50%]'>
                <h1 className='font-bold text-lg'>Tools</h1>
             <p>Visual Studio, Visual Studio Code, Intellij, Pycharm</p>
            </li>
            <li className='list-none p-[0.5%] w-[50%]'>
                <h1 className='font-bold text-lg'>Version control </h1>
             <p>Git, TFS, Azure devops </p>
            </li>
            </div>
            <div>
            <li className='list-none p-[0.5%] w-[100%]'>
                <h1 className='font-bold text-lg'>Others</h1>
             <p className='pl-[2.5%]'>xml, Json, WCF web services, Rest & Soap APis, functional components</p>
            </li>
            </div>
            </div>
</div>
        </div>
        <div className='w-[30%] md:w-[45%] object-cover items-center shadow-lg bg-gray-300 rounded-lg'>
           <img src={projectimg} alt="sideimg" className='w-full h-screen object-cover rounded-lg'/>
        </div>

        
    </div>
  )
}

export default Home