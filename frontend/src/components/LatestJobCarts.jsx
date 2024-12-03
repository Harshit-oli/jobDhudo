import React from 'react'

const LatestJobCarts = ({job}) => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        <div>
        <h1 className='font-medium text-lg'>{job.company.name}</h1>
        <p className='text-sm text-gray-500'>India</p>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>{job.title}</h1>
            <p className='text-sm text-gray-600'>{job.description}</p>
        </div>
        <div className=' flex items-center gap-3 mt-4'>
            <p className='text-blue-700 font-bold border border-black bg-slate-100 rounded-lg px-1'>{job.position}</p>
            <p className='text-[#f83002] font-bold border border-black  bg-slate-100 rounded-lg px-1'>{job.jobType}</p>
            <p className='text-[#7209b7] font-bold border border-black  bg-slate-100 rounded-lg px-1'>{job.salary}</p>
        </div>
    </div>
  )
}

export default LatestJobCarts
