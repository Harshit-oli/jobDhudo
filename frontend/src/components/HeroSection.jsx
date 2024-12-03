import React from 'react'

const HeroSection = () => {
  return (
    <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
        <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-bold'>No.1 job Hunt Website</span>
        <h1 className='text-5xl font-bold'>Search,Apply & <br/> Get Your <span className='text-[#6A38C2]'>Dream Job</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eius ex ut aut. Expedita, quaerat?</p>
        <div className='flex w-[40%] shadow-lg border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
            <input 
            type="text"
            placeholder='Find your dream jobs'
            className='outline-none border-none w-full p-3'/>
            <button className='rounded-r-full p-3'>
                <p className='bg-black text-white rounded'>search</p>
            </button>
        </div>
        </div>
      
    </div>
  )
}

export default HeroSection
