import React, { useState } from 'react'
import { arrowLink,emplink } from '../Utils/constants'
import ItemList1 from './ItemList1';
import ItemList2 from './ItemList2';
import ItemList3 from './ItemList3';
import ItemList4 from './ItemList4';
import ItemList5 from './ItemList5';
  
const EmploymentHistory = () => {
   const [clickstate,setclickstate] = useState(0);
    const handleclick=(i)=>{
        setclickstate(i);
    }
  return (<div>
    <img src={emplink} alt="proimage" className='absolute h-[175%] w-full md:w-[100%] object-cover  -z-10'></img>
    <div className=' w-[80%] md:w-[40%] flex flex-col ml-[10%] md:ml-[55%] my-[5%] pt-[2%] bg-gray-200 absolute  rounded-3xl'>
       
    <div className="w-10/12 mx-auto mb-2 bg-gray-50 shadow-lg p-4 rounded-3xl">
        <div className="flex justify-between" onClick={()=>handleclick(1)}>
        <span className="text-lg italic underline">
            Department Of Health (Jan 2023- Jan 2024)
        </span>
        <img className="w-6 h-6 md:w-5"src={arrowLink}></img>
        </div>
        
        
        <div className='bg-beige-100 rounded-lg'>
        {(clickstate==1) && <ItemList1></ItemList1>}
    </div>
        

    </div>
    <div className="w-10/12 mx-auto my-2 bg-gray-50 shadow-lg p-4 rounded-3xl">
        <div className="flex justify-between" onClick={()=>handleclick(2)}>
        <span className="text-lg italic underline">
            Unity Infotech (Oct 2021 - Jan 2023)
        </span>
        <img className="w-6 h-6 md:w-5"src={arrowLink}></img>
        </div>
        
        
        <div className='bg-beige-100 rounded-lg'>
        {(clickstate==2) && <ItemList2 ></ItemList2>}
    </div>
        

    </div>
    <div className="w-10/12 mx-auto my-2 bg-gray-50 shadow-lg p-4 rounded-3xl">
        <div className="flex justify-between" onClick={()=>handleclick(3)}>
        <span className="text-lg italic underline">
           Cinque Technologies (Mar 2019 - Aug 2020)
        </span>
        <img className="w-6 h-6 md:w-5"src={arrowLink}></img>
        </div>
        
        
        <div className='bg-beige-100 rounded-lg '>
        {(clickstate==3) && <ItemList3></ItemList3>}
    </div>
        

    </div>
    <div className="w-10/12 mx-auto my-2 bg-gray-50 shadow-lg p-4 rounded-3xl">
        <div className="flex justify-between" onClick={()=>handleclick(4)}>
        <span className="text-lg italic underline">
           Saar Information Technology (Mar 2018 - Mar 2019)
        </span>
        <img className="w-6 h-6 md:w-5"src={arrowLink}></img>
        </div>
        
        
        <div className='bg-beige-100 rounded-lg'>
        {(clickstate==4) && <ItemList4></ItemList4>}
    </div>
        

    </div>
    <div className="w-10/12 mx-auto mt-2 mb-6 bg-gray-50 shadow-lg p-4 rounded-3xl">
        <div className="flex justify-between" onClick={()=>handleclick(5)}>
        <span className="text-lg italic underline">
           Tata Elxsi (Nov 2016 - Jan 2018)
        </span>
        <img className="w-6 h-6 md:w-5"src={arrowLink}></img>
        </div>
        
        
        <div className='bg-beige-100 rounded-lg'>
        {(clickstate==5) && <ItemList5></ItemList5>}
    </div>
        

    </div>
    </div>
    </div>
  )
}

export default EmploymentHistory