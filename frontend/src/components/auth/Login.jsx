import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../redux/authSlice'
import { setUser } from '../../redux/authSlice'
import Spinner from "./Spinner"
import toast from 'react-hot-toast'
import { USER_API_END_POINT } from '../../utils/constant.jsx'

const login = (props) => {
 
  let isloggedIn= props.isloggedIn;  
 let setIsLoggedIn=props.setIsLoggedIn;
  const [input,setInput]=useState({
    email:"",
    password:"",
    role:"",
    

});
const {loading}=useSelector(store=>store.auth);
// const {user}=useSelector(store=>store.auth);
const navigate=useNavigate();
const dispatch=useDispatch();

const changeEventHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
}

const submitHandler=async(e)=>{
    e.preventDefault();
    // navigate('/');
    try {
        dispatch(setLoading(true));
        const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
          headers:{
            "Content-Type":"application/json"
          },
          withCredentials:true,
         
        });
        if (res.data.success) {
          // dispatch(setUser(res.data.user));
          // console.log(user);
            navigate("/");
            setIsLoggedIn(true);
            toast.success(res.data.success);
          }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        
    } finally{
        dispatch(setLoading(false));
    }
    }

  return (
    <div>
        {/* <Navbar/> */}
        <div className='flex flex-col items-center justify-center max-w-7xl mx-auto'>
            <form onSubmit={submitHandler} action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                <h1 className='font-bold text-xl mb-5'>Login</h1>
                <div className='my-2 flex flex-col'>
                    <label className='font-bold'>Email</label>
                    <input type="email"
                    value={input.email}
                     name="email"
                    onChange={changeEventHandler}
                     placeholder="oli@gmail.com" className='border border-gray-600'  ></input>
                </div>
                <div className='my-2 flex flex-col'>
                    <label className='font-bold'>Password</label>
                    <input type="password"
                    value={input.password}
                     name="password"
                    onChange={changeEventHandler}
                     placeholder="password" className='border border-gray-600'  ></input>
                </div>
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
                { !isloggedIn && 
                    loading ? <Spinner/>:(<button 
                       type="submit" className='bg-black rounded-md text-white px-3 py-1.5 mt-3 w-full'>Login</button>)
                }
                <span>Already have an account? <Link to="/signUp" className='text-blue-600'>SignUp</Link></span>
            </form>
        </div>
    </div>
  )
}

export default login
