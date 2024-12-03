import React from 'react'
import { FaRegBookmark } from "react-icons/fa";
import { SiCriticalrole } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

const Job = ({job}) => {
  const navigate=useNavigate();
  // const jobId="jshjdkbukjd";
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
    <div className='flex items-center justify-between'>
    <p className='text-sm text-gray-500'>2 days ago</p>
    <button className='rounded-full'><FaRegBookmark/></button>
    </div>
    <div className=' flex gap-3 items-center my-2'>
     <button><SiCriticalrole size={30} />
     </button>
     <div>
      <h1 className='font-medium text-lg'>{job.company.name}</h1>
      <p className='text-sm text-gray-500'>India</p>
     </div>
    </div>
    <div>
      <h1 className='font-bold text-lg my-2 text-blue-500'>{job.title}</h1>
      <p className='text-sm text-gray-600'>{job.description}</p>
    </div>
    <div className=' flex items-center gap-3 mt-4'>
            <p className='text-blue-700 font-bold border border-black bg-slate-100 rounded-lg px-1'>{job.position}</p>
            <p className='text-[#f83002] font-bold border border-black  bg-slate-100 rounded-lg px-1'>{job.jobType}</p>
            <p className='text-[#7209b7] font-bold border border-black  bg-slate-100 rounded-lg px-1'>{job.salary}</p>
        </div>
        <div className='flex item"s-center gap-4 mt-4'>
          <button className='bg-slate-300 rounded-sm px-2 py-1 text-white hover:text-blue-400' onClick={()=>navigate(`/description/${job._id}`)} variant="outline">Details</button>
          <button className='bg-blue-700 rounded-sm px-2 py-1 text-white hover:text-blue-400'>Save For later</button>
        </div>
    </div>
  )
}

export default Job
