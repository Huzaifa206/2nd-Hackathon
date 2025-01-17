import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

export default function Header() {
    return (
      <header className="w-screen flex justify-between items-center py-3 px-7 md:px-12 bg-white shadow-md">
        <div className="bg-cover w-[85px] md:w-[5%] mx-2 md:mx-10">
          <img src="TickLogo.png" alt="Nike" />
          </div>
        
        <ul className="hidden md:flex list-none gap-5">
            <li className="font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/">New & Featured</Link>
            </li>
            
            <li className="font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/">Men</Link>
            </li>
            
            <li className="font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/">Women</Link>
            </li>
            
            <li className="font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/">Kids</Link>
            </li>
            <li className="font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/">Sale</Link>
            </li>
            <li className="font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/">SNKRS</Link>
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
          <div className="md:hidden"><FiSearch className="flex justify-center items-center size-6 " /></div>
          <div ><FiHeart className="flex justify-center items-center size-6 " /></div>
          <div ><IoBagOutline style={{stroke:"black", strokeWidth:"20"}} className="flex justify-center items-center size-6 " /></div>
          <div className="md:hidden"><IoMenu className="flex justify-center items-center size-6 " /></div>
        </div>
        
      </header>
    );
  }
  