import React from 'react'
import { useState,useEffect } from 'react'
import { Link, } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Navbar'
import axios from "axios"
import { USER_API_END_POINT } from '../../utils/constant.jsx'
import toast from 'react-hot-toast'

const Signup = () => {
    const navigate = useNavigate();


    const [input,setInput]=useState({
        fullname:"",
        email:"",
        phoneNumber:"",
        password:"",
        role:"",
        file:""
    });
   
    const changeEventHandler=(e)=>{
        setInput(input=>{
            return{ ...input,[e.target.name]:e.target.value}
        });
    }

    const changeFileHandler = (e)=>{
        setInput(input=>{ return{...input,file:e.target.files?.[0]

        }
    });
    }
    const submitHandler = async (e) => {
        // navigate('/login');
        e.preventDefault();
        const formData = new FormData();    //formdata object
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            
            const res = await axios.post(`${USER_API_END_POINT}/register`,formData,{
                headers:{'Content-Type':"multipart/form-data"},
                withCredentials:true,
            });
            
            if(res.data.success){
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error); 
            toast.error(error.response.data.message);
        }
        }
  return (
    <div>
        {/* <Navbar/> */}
        <div className='flex flex-col items-center justify-center max-w-7xl mx-auto'>
            <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                <h1 className='font-bold text-xl mb-5'>SignUp</h1>
                <div className='my-2 flex flex-col'>
                    <label className='font-bold'>FullName</label>
                    <input type="text" 
                    value={input.fullname}
                    name="fullname"
                    onChange={changeEventHandler}
                        placeholder=" Full name" className='border border-gray-600'  ></input>
                </div>
                <div className='my-2 flex flex-col'>
                    <label className='font-bold'>Email</label>
                    <input type="email"
                    value={input.email}
                     name="email"
                    onChange={changeEventHandler}
                     placeholder="oli@gmail.com" className='border border-gray-600'  ></input>
                </div>
                <div className='my-2 flex flex-col'>
                    <label className='font-bold'>Phone Number</label>
                    <input type="text"
                    value={input.phoneNumber}
                    name="phoneNumber"
                    onChange={changeEventHandler}
                     
                     placeholder=" PhoneNumber" className='border border-gray-600'  ></input>
                </div>
                <div className='my-2 flex flex-col'>
                    <label className='font-bold'>Password</label>
                    <input type="password"
                    value={input.password}
                     name="password"
                    onChange={changeEventHandler}
                     placeholder="password" className='border border-gray-600'  ></input>
                </div>
                <div className='flex justify-between '>
                <div>
                <input type="radio" id="r1" 
                name="role" 
                value="student" 
                checked={input.role=='student'} 
                onChange={changeEventHandler} 
                className='cursor-pointer'/>



                <label htmlFor="r1">Student</label><br/>


                <input type="radio" id="r2"
                 name="role" 
                 value="recruiter" 
                 checked={input.role=='recruiter'} 
                 onChange={changeEventHandler} 
                 className='cursor-pointer'/>
                 <label htmlFor="r2">Recruter</label><br/>
                </div>

                   <div className="flex items-center gap-2">
                    <label>Profile</label>
                    <input  accept="image/*" type="file" 
                    onChange={changeFileHandler}
                     className='cursor-pointer' />
                </div>
                </div>

                <button type="submit" className='bg-black rounded-md text-white px-3 py-1.5 mt-3 w-full'>signUp</button>
                <span>Do not have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
            </form>
        </div>
    </div>
  )
}

export default Signup
