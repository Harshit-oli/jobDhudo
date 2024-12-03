
// import { useState } from 'react';
import toast from "react-hot-toast";
import { FaBeer } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { useState } from 'react'


// import { Link } from 'react-router-dom'


const Navbar = (props) => {
  // const [isloggedIn,setIsLoggedIn]=useState(false);
  // const {user}=useSelector(store=>store.auth);  
 let isloggedIn= props.isloggedIn;  
 let setIsLoggedIn=props.setIsLoggedIn;

    
  return (
    <div className='bg-white'>
        <div className="flex item-center justify-between mx-auto max-w-7xl h-16">
      <div>
        <h1 className="text-2xl font-bold">Job<span className="text-red-500">Portal</span></h1>
      </div>
      <div className='flex items-center gap-12'>
        <ul className='flex font-medium item-center gap-5'>
          <Link to='/'>
            <li>Home</li>
            </Link>
          <Link to='/jobs'>
            <li>Jobs</li>
            </Link>
            <Link to='/browse'>
            <li>Browse</li>
            </Link>
        </ul>
         
         { !isloggedIn &&
          <Link to="/login">
            <button
            className="border border-black rounded-md px-2 py-1">Login</button>
          </Link>
         }

         { !isloggedIn &&
          <Link to="/signUp">
            <button className="bg-black rounded-md text-white px-3 py-1.5">signUp</button>
          </Link>
         }

        { isloggedIn &&
          <h1><Link to='/connect'><FaBeer/></Link></h1>
        }
        
        </div>
      </div>
    </div>
  )
}

export default Navbar
