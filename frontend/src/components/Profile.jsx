import React from 'react'
import { SiCriticalrole } from "react-icons/si";
import { FaPen } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import AppliedJobTables from './AppliedJobTables';
import { useState } from 'react';
import UpdateProfileDialog from './UpdateProfileDialog';
// import { User } from '../../../backend/models/user.model';
import { useSelector } from 'react-redux';


// const skill=["html","css","js","reactjs"];
const isResume=true;

const Profile = () => {
  const [open,setOpen]=useState(false);
  const {user}=useSelector(store=>store.auth);

  return (
    <div>
      
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
        <div className='flex items-center gap-3 '>
        <SiCriticalrole size={40} />
        <div>
        
        <h1 className='font-medium text-xl'>{user?.fullname}</h1>
        <p>{user?.profile?.bio}</p>
        </div>
      </div>
      <button onClick={()=>setOpen(true)} className='text-right shadow-xl bg-white border p-2'><FaPen /></button>
      <UpdateProfileDialog open={open} setOpen={setOpen}/>
        </div>
       
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2'>
          <CiMail size={30} />
        <span>{user?.email}</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
          <IoMdContact size={30} />
          <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div>
          <h1>Skills</h1>
          <div className='flex gap-4'>
          {
           user?.profile?.skills.length !=0 ? user?.profile?.skills.map((item,index)=>((<div className='bg-black text-white px-2 py-1 rounded-xl'>{item}</div>) )) : <span>NA</span>
          }
          </div>
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <label className='text-md font-bold'>Resume</label>
          {
            isResume ? <a target='blank' href="https://youtube.com" className='text-blue-600'>youtube</a> :<span>NA</span>
          }
          {/* {user?.profile?.resumeOriginalName} */}
        </div>
      </div>
        <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
          <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
          <AppliedJobTables/>

        </div>
       
    </div>
  )
}

export default Profile
