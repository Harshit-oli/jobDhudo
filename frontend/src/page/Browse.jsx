import React from 'react'
import Navbar from '../components/Navbar'
import Job from '../components/Job';

const RandomJobs=[1,2,3];
const Browse = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <div className='max-w-7xl mx-auto my-10'>
        <h1>Search Results {RandomJobs.length}</h1>
        <div className='grid grid-cols-3 gap-4'>
        {
            RandomJobs.map((item,index)=>{
                return(
                    <Job/>
                )
            })
        }
        </div>
      </div>
    </div>
  )
}

export default Browse
