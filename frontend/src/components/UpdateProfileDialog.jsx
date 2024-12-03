import React from 'react'
// import toast from 'react-hot-toast';
import Spinner from './auth/Spinner';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';  
import { USER_API_END_POINT } from '../utils/constant.jsx'
import axios from 'axios';
import { setUser } from '../redux/authSlice';
import toast from 'react-hot-toast';

const UpdateProfileDialog = ({open,setOpen}) => {

  const [loading,setLoading]=useState(false);
  const {user}=useSelector((store)=>store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email ?? '',
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio ?? '',
    skills: user?.profile?.skills?.map(skill => skill) ?? [],
    file: user?.profile?.resume,
  });

  const dispatch=useDispatch(); 
  const changeEventHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
}
const fileChangeHandler=(e)=>{
  const file=e.target.file?.[0];
  setInput({...input,file});
}

const submitHandler=async (e)=>{
  e.preventDefault();
  const formData=new FormData();
  formData.append("fullname",input.fullname);
  formData.append("email",input.email);
  formData.append("phoneNumber",input.phoneNumber);
  formData.append("bio",input.bio);
  formData.append("skills",input.skills);
  if(input.file){
    formData.append("file",input.file);
  }
  try {
    const res=await axios.post(`${USER_API_END_POINT}/profile/Update`,formData,{
       headers:{
        'content-type':'multipart/form-data'
       },
       withCredentials:true
    });
    if(res.data.success){
      dispatch(setUser(res.data.user));
      toast.success(res.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
    
  }
  setOpen(false); 

  console.log(input);
}

  return (
    <div>
   <dialog open={open} className='mx-auto' >
  <p>Update Profile</p>
  <form onSubmit={submitHandler}>
    <div className='flex gap-4 py-4 shadow-xl bg-white border border-gray-200 items-center h-[100px] w-[120%] pl-6 '>
      <label htmlFor='fullname' className='text-right'>Name</label>
      <input type="text"
      id="fullname"
      name="fullname"
      value={input.fullname}
      onChange={changeEventHandler}
      className='col-span-3 border border-gray-200'/>
    </div>
    <div className='flex gap-4 py-4 shadow-xl bg-white border border-gray-200 items-center h-[100px] w-[120%] pl-6 '>
      <label htmlFor="email" className='text-right'>Email</label>
      <input type="email"
      id="email"
      name="email"
      value={input.email}
      onChange={changeEventHandler}
      className='col-span-3 border border-gray-200'/>
    </div>
    <div className='flex gap-4 py-4 shadow-xl bg-white border border-gray-200 items-center h-[100px] w-[120%] pl-6 '>
      <label htmlFor='phoneNumber' className='text-right'>Number</label>
      <input type="text"
      id="phoneNumber"
      name="phoneNumber"
      value={input.phoneNumber}
      onChange={changeEventHandler}
      className='col-span-3 border border-gray-200'/>
    </div>
    <div className='flex gap-4 py-4 shadow-xl bg-white border border-gray-200 items-center h-[100px] w-[120%] pl-6 '>
      <label htmlFor="bio" className='text-right'>Bio</label>
      <input type="bio"
      id="bio"
      name="bio"
      value={input.bio}
      onChange={changeEventHandler}
      className='col-span-3 border border-gray-200'/>
    </div>
    <div className='flex gap-4 py-4 shadow-xl bg-white border border-gray-200 items-center h-[100px] w-[120%] pl-6 '>
      <label htmlFor="skills" className='text-right'>Skills</label>
      <input type="skills"
      id="skills"
      name="skills"
      value={input.skills}
      onChange={changeEventHandler}
      className='col-span-3 border border-gray-200'/>
    </div>
    <div className='flex gap-4 py-4 shadow-xl bg-white border border-gray-200 items-center h-[100px] w-[120%] pl-6 '>
      <label htmlFor="file" className='text-right'>Resume</label>
      <input type="file"
      id="file"
      name="file"
      value={input.file}
      // accept='application/pdf'
      onChange={fileChangeHandler}
      className='col-span-3 border border-gray-200'/>
    </div>
    {/* <footer> */}
    {
     loading ?<Spinner/>:(<button 
      type="submit" className='bg-black rounded-md text-white px-3 py-1.5 ml-10 mt-3 w-full'>Update</button>)
   }   
    {/* </footer> */}
  </form>
</dialog>
    </div>
  )
}

export default UpdateProfileDialog
