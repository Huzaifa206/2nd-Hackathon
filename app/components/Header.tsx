"use client";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoHelp } from "react-icons/io5";
import Sidebar from "./Sidebar";


export default function Header() {
    return (
      <header className="w-screen flex justify-between items-center py-3 px-7 md:px-12 bg-white shadow-md">
        <div className="bg-cover w-[20%] md:w-[5%] mx-2 md:mx-10">
          <img src="TickLogo.png" alt="Nike" />
          </div>
        
        <ul className="hidden md:flex list-none gap-5">
            <li className="font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/">Home</Link>
            </li>

            <li className="font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/AllProducts">New & Featured</Link>
            </li>
            
            <li className="font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/AllProducts">Men</Link>
            </li>
            
            <li className="font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/AllProducts">Women</Link>
            </li>
            
            <li className="font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/AllProducts">Kids</Link>
            </li>
            <li className="font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/AllProducts">Sale</Link>
            </li>
            <li className="font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/AllProducts">SNKRS</Link>
            </li>
        </ul>
      
        {/* <div className="flex items-center justify-start gap-4">
          <div className="hidden md:flex rounded-3xl px-2 py-1.5 w-[65%] border-2 border-text-secondary-gray gap-2 bg-gray-100">
             <img src="/search.svg" alt="" />
             <input className="block focus-visible:outline-none w-[64%] bg-gray-100 " type="text" placeholder="Search" />
          </div>
          <div className="w-5 md:hidden"><Image src={"/search.svg"} width={800} height={600} alt="" layout="responsive" /></div>
          <div className="w-6"><Image src={"/wishlist.svg"} width={800} height={600} alt="" layout="responsive" /></div>
          <div className="w-5"><Image src={"/cart.svg"} width={800} height={600} alt="" layout="responsive" /></div>
        </div> */}

        <div className="flex items-center justify-start gap-4">
          <div className="hidden md:flex rounded-3xl px-2 py-1.5 w-[65%] border-2 border-text-secondary-gray gap-2 bg-gray-100">
            <FiSearch className="flex justify-center items-center size-6 " />
             <input className="block focus-visible:outline-none w-[64%] bg-gray-100 " type="text" placeholder="Search" />
          </div>
          <div className="md:hidden"><FiSearch className="flex justify-center items-center size-6 cursor-pointer transition-colors duration-300 hover:text-red-500" /></div>
          <Link href="/Wishlist"> <FiHeart className="flex justify-center items-center size-6 cursor-pointer transition-colors duration-300 hover:text-red-500" /> </Link>
          <Link href="/Cart"> <IoBagOutline style={{strokeWidth:"200"}} className="flex justify-center items-center size-6 cursor-pointer transition-colors duration-300 hover:text-red-500" /> </Link>
    
          <div className="md:hidden ">
          <Sidebar> 
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
          <button className="flex-1 py-2 px-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition duration-200">
            Join Us
          </button>
          {/* Sign In Button */}
          <button className="flex-1 py-2 px-4 rounded-full border border-white text-white font-medium hover:bg-gray-500 transition duration-200">
            Sign In
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="space-y-2">
        <button className="flex items-center space-x-4 w-full py-2 text-left hover:bg-gray-600 rounded-md transition duration-200">
          <span className="text-lg"><FaHome /></span>
          <span className="font-medium">Home</span>
        </button>
        <button className="flex items-center space-x-4 w-full py-2 text-left hover:bg-gray-600 rounded-md transition duration-200">
          <span className="text-lg"><AiFillProduct /></span>
          <Link href="/AllProducts"><span className="font-medium">Products</span></Link>
        </button>
        <button className="flex items-center space-x-4 w-full py-2 text-left hover:bg-gray-600 rounded-md transition duration-200">
          <span className="text-lg"><IoHelp /></span>
          <span className="font-medium">Help</span>
        </button>
        
      </div>
    </div>
        </Sidebar>
</div>
          
 

 
 </div>
        
      </header>
    );
  }
  