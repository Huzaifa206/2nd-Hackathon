
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoHelp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

 
   const toggleSidebar = () => {
     setIsSidebarOpen(!isSidebarOpen);
   };

   useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setIsSidebarOpen(false);
      }
    };
  
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);
  

  return (
    <div>
      
      <div className="lg:hidden flex justify-center items-center size-6 ">
        <button onClick={toggleSidebar}>
           <div className="md:hidden "><IoMenu className="flex justify-center items-center size-6 cursor-pointer transition-colors duration-300 hover:text-red-500" /></div>
        </button>
        <div
         ref={sidebarRef}
          className={`z-50 fixed top-0 right-0 h-screen w-64 bg-[#666666] text-white transform transition-transform ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
            <button onClick={toggleSidebar!}>
           <div className=" md:hidden"><IoMenu className="ml-5 mt-4 flex justify-center items-center size-6 cursor-pointer transition-colors duration-300 hover:text-red-500" /></div>
        </button>
          
          {/* Sidebar content */}
          <div className="w-64 h-screen bg-[#666666] text-white flex flex-col p-6 space-y-6">
      {/* Top Section */}
      <div className="space-y-4">
        <p className="text-sm text-gray-200">
          Become a member for the best products, inspiration, and stories in sport.{" "}
          <span className="text-blue-300 font-medium cursor-pointer hover:underline">
            Learn more
          </span>
        </p>

        <div className="flex space-x-4">
          {/* Join Us Button */}
          <button onClick={toggleSidebar!} className="flex-1 py-2 px-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition duration-200">
            <Link href="/Join-us">Join Us</Link>
          </button>
          {/* Sign In Button */}
          <button onClick={toggleSidebar!} className="flex-1 py-2 px-4 rounded-full border border-white text-white font-medium hover:bg-gray-500 transition duration-200">
          <Link href="/Login">Sign In</Link>
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="space-y-2">
        <button className="flex items-center space-x-4 w-full py-2 text-left hover:bg-gray-600 rounded-md transition duration-200">
          <span className="text-lg"><FaHome /></span>
          <Link onClick={toggleSidebar!} href="/"><span className="font-medium">Home</span></Link>
        </button>
        <button className="flex items-center space-x-4 w-full py-2 text-left hover:bg-gray-600 rounded-md transition duration-200">
          <span className="text-lg"><AiFillProduct /></span>
          <Link onClick={toggleSidebar!} href="/AllProducts"><span className="font-medium">Products</span></Link>
        </button>
        <button className="flex items-center space-x-4 w-full py-2 text-left hover:bg-gray-600 rounded-md transition duration-200">
          <span className="text-lg"><IoHelp /></span>
          <Link onClick={toggleSidebar!} href="/contact-us"><span className="font-medium">Help</span></Link>
        </button>
        
      </div>
    </div>



        </div>
      </div>
    </div>
  );
}

