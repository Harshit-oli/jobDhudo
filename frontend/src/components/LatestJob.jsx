import React from 'react'
import LatestJobCarts from './LatestJobCarts';
import { useSelector } from 'react-redux';
import store from '../redux/store';
const randomJobs=[1,2,3,4,5,6,7,8];
const LatestJob = () => {
  const {allJobs}=useSelector(store=>store.job);
  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top</span>Job Openings</h1>
      <div className='grid grid-cols-3 gap-4 my-5'>
      {
        allJobs.length <=0 ? <h1>first signup and login the page</h1> :  allJobs?.slice(0,6).map((job)=><LatestJobCarts key={job._id} job={job}/>)
      }
      </div>
    </div>
  )
}

export default LatestJob
