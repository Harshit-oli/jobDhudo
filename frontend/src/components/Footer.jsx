import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
   
   <footer className='border-t border-t-gray-200 py-8'>
    <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='md-4 md:mb-8'>
                <h2 className='text-xl font-bold'>Job Hunt</h2>
                <p className='text-sm'> 2024 Your Company. All rights reserved.</p>
            </div>
            <div className='flex space-x-4 mt-4 md:mt-0 '>
                <a href="https://facebook.com" className='hover:text-gray-400  'aria-label="Facebook">
                <FaFacebook size={30} />
                </a>
                <a href="https://facebook.com" className='hover:text-gray-400 'aria-label="Facebook">
                <FaTwitter size={30} />
                </a>
                <a href="https://facebook.com" className='hover:text-gray-400 'aria-label="Facebook">
                <FaLinkedin size={30} />
                </a>
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer
