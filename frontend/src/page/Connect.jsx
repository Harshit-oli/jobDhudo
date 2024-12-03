import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaBeer } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { USER_API_END_POINT } from '../utils/constant.jsx'
import { setUser } from '../redux/authSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Connect = (props) => {
  // const dispatch=useDispatch();
  let isloggedIn= props.isloggedIn;  
 let setIsLoggedIn=props.setIsLoggedIn;
const dispatch=useDispatch();
const navigate=useNavigate();
const {user}=useSelector((store)=>store.auth);

 const logoutHandler=async()=>{
  try{
    const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true});
    if(res.data.success){
      dispatch(setUser(null));
      navigate("/");
      toast.success(res.data.message);
      setIsLoggedIn(false);
    }

  }catch(error){
    console.log(error);
    toast.error(error.response.data.message);

  }
  // e.preventDefault();

  // setIsLoggedIn(false);
  // navigate("/")
  // toast.success("Logout successfully");
 }



  return (
    <div>
      
      {/* <h1 className='bg-blue-500'>Home</h1> */}
      <div className='flex  flex-col mx-[250px] text-xl gap-4'>
        <div className="flex gap-3">
        <h1><FaBeer/></h1>
      <h4 className="font-bold  justify-center text-xl">Oli Mernstack</h4>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      
      <div className='gap-10'>
      <div className='flex gap-3'>
        <h1><FaUser/></h1>
      <Link to="/profile">
       <div className='hover:underline cursor-pointer'> view profile</div>
       </Link>
       </div>
      
       <Link to="/">
       <div className='flex gap-3'>
      
       <h1><IoIosLogOut/></h1>
        <button onClick={logoutHandler} className='hover:underline cursor-pointer'>logout</button>
        </div>
        </Link>
        
      </div>
      </div>
    </div>
  )
}

export default Connect
