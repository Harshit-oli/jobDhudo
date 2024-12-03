import axios from 'axios'
import React,{useEffect} from 'react'
import { JOB_API_END_POINT } from '../utils/constant'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setSingleJob } from '../redux/jobSlice';
import store from '../redux/store';



const JobDescription = () => {
  const {singleJob}=useSelector((store)=>store.job);
  const {user}=useSelector((store)=>store.auth);
  const dispatch=useDispatch();
  const isApplied=true;
  const params=useParams();
  const jobId=params.id;
  // UsegetsingleJob(jobId);

  useEffect(()=>{
    const fetchSingleJob=async ()=>{
        try {
            const res=await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
            console.log(res);
            if(res.data.success){
                dispatch(setSingleJob(res.data.job));
                console.log(res.data.job);
            } 
        }catch (error) {
            console.log(error);   
        }
    }
    fetchSingleJob();
  },[jobId,dispatch,user._id]);
  return (
    <div className='max-w-7xl mx-auto my-10'>
     <div className='flex items-center justify-between'>
     <div>
        <h1 className='font-bold text-xl mx-auto'>{singleJob.title}</h1>
        <div className=' flex items-center gap-3 mt-4'>
              <p className='text-blue-700 font-bold border border-slate-400 bg-slate-100 rounded-lg px-1'>{singleJob.position}</p>
              <p className='text-[#f83002] font-bold border border-slate-400  bg-slate-100 rounded-lg px-1'>{singleJob.jobType}</p>
              <p className='text-[#7209b7] font-bold border border-slate-400  bg-slate-100 rounded-lg px-1'>{singleJob.salary}</p>
          </div>
          </div>
          <button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed p-2':'bg-[#7209b7] p-2'}`}>{isApplied ? 'Already Applied':'Apply Now'}</button>
     </div>
     <h1 className='border-b-2 border-b-gray-300 font-mediu py-4'>Job Description</h1>
     <div className='my-5'>
      <h1 className='font-bold my-1'>Role:<span className='pl-4 font-normal text-gray-800'>{singleJob.title}</span></h1>
      <h1 className='font-bold my-1'>Location:<span className='pl-4 font-normal text-gray-800'>{singleJob.location}</span></h1>
      <h1 className='font-bold my-1'>Description:<span className='pl-4 font-normal text-gray-800'>{singleJob.Description}</span></h1>
      <h1 className='font-bold my-1'>Experience:<span className='pl-4 font-normal text-gray-800'>{singleJob.experience} years</span></h1>
      <h1 className='font-bold my-1'>Salary:<span className='pl-4 font-normal text-gray-800'>{singleJob.salary}LPA</span></h1>
      <h1 className='font-bold my-1'>Total Applicants:<span className='pl-4 font-normal text-gray-800'>4</span></h1>
      <h1 className='font-bold my-1'>Post Date:<span className='pl-4 font-normal text-gray-800'>31-10-2024</span></h1>
     </div>
      </div>
  )
}
export default JobDescription
