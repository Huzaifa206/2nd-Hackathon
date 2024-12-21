import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
      <header className="w-[100vw] flex justify-between items-center p-[10px_40px] bg-white shadow-md">
        <div className="bg-cover w-[7%]"><img src="/logonike.png" alt="Nike" /></div>
        <nav>
          <ul className="flex list-none gap-5">
            <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/">New & Featured</Link>
            </li>
            
            <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/">Men</Link>
            </li>
            
            <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/">Women</Link>
            </li>
            
            <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/">Kids</Link>
            </li>
            <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/">Sale</Link>
            </li>
            <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">
              <Link href="/">SNKRS</Link>
            </li>
          </ul>
        </nav>
  
        <div className="flex items-center justify-between gap-4">
          <div className="flex rounded-3xl px-2 py-1 w-[80%] border-2 border-text-secondary-gray gap-2 bg-gray-100">
             <img src="/search.svg" alt="wishlist" />
             <input className="focus-visible:outline-none w-[64%] bg-gray-100" type="text" placeholder="Search" />
          </div>
          <div className="wishlist"><img src="/wishlist.svg" alt="wishlist" /></div>
          <div className="cart"><img src="/cart.svg" alt="cart" /></div>
        </div>
        
      </header>
    );
  }
  