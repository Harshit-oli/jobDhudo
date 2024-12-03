
import './App.css'
// import Navbar from './components/Navbar.jsx'
import { useState } from 'react'
import Home from './page/Home.jsx'
import Connect from './page/Connect.jsx'
import { Route,Routes } from 'react-router-dom'
import Login from './components/auth/Login.jsx'
import Signup from './components/auth/Signup.jsx'
import Navbar from './components/Navbar.jsx'
import Jobs from './page/Jobs.jsx'
import Browse from './page/Browse.jsx'
import Profile from './components/Profile.jsx'
import JobDescription from './components/JobDescription.jsx'


function App() {
  const [isloggedIn,setIsLoggedIn]=useState(false);
 

  return (
    <>
    <div>
      <Navbar isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn}/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/jobs" element={<Jobs/>}></Route>
      <Route path="/browse" element={<Browse/>}></Route>
      <Route path="/signUp" element={<Signup/>}></Route>
      <Route path="/login" element={<Login isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/connect" element={<Connect isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/description/:id" element={<JobDescription/>}></Route>
     </Routes>
    </div>
        
    </>
  )
}

export default App
