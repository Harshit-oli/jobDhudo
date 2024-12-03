import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CategoryCarovsel from '../components/CategoryCarovsel'
import LatestJob from "../components/LatestJob"
import Footer from "../components/Footer"
import useGetAllJobs from '../hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs();
  return (
    <div>
     {/* <Navbar/> */}
     <HeroSection/>
     <CategoryCarovsel/>
     <LatestJob/>
    <Footer/>
     
    </div>
  )
}

export default Home
