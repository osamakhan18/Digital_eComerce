import React from 'react';
import Logo from '../assets/images/logo_03.png';
import { Link } from 'react-router-dom'; // Correct import for Link


function Navbar() {
  return (
    <>
      <nav
        className="w-full sticky  top-0.5 left-0 h-20  flex items-center justify-between gap-56"
        style={{
          backgroundColor: "rgb(229, 228, 226)",
          boxShadow: "0px 3px 2px rgb(128, 128, 128)",
        }}
      >
        {/* Image logo */}
    
     {/* <img
          src={Logo}
          alt="Logo"
          className="w-40 h-full object-contain  "
        /> */}

        <h1 className='text-3xl' > ☆ 𝓢𝔀𝓲𝓯𝓽 <span className='text-3xl text-[#39bfb4]'> 𝓑𝓾𝔂 ☆</span>
        </h1>

       <div className='w-auto h-auto  gap-16  flex justify-around items-center mr-1.5'>

       <div className='w-auto h-auto p-1.5  flex items-center justify-around  gap-10'>
          {/* Corrected Link syntax */}
   <Link to="/"  className='text-lg font-medium hover:text-[#39bfb4] hover:border-b-2  transition-all duration-600 ease-out'>HOME</Link>
   <Link to="/Product"  className='text-lg font-medium hover:text-[#39bfb4] hover:border-b-2  transition-all duration-600 ease-out'>PRODUCT</Link>
   <Link to="/Contact"   className='text-lg font-medium hover:text-[#39bfb4] hover:border-b-2  transition-all duration-600 ease-out'>CONTACT</Link>
  <Link to="/About"  className='text-lg font-medium hover:text-[#39bfb4] hover:border-b-2  transition-all duration-600 ease-out'>ABOUT</Link>
          {/* Fixed Link path */}
        </div>

        <div className='w-auto h-auto '>
        <Link to="/SignUp"  className='text-lg font-medium hover:text-[#39bfb4]   transition-all duration-600 ease-out'>SIGNUP</Link> 
        </div>
       </div>
    
      </nav>
    </>
  );
}

export default Navbar;
