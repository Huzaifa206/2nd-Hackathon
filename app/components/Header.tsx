import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
      <header className="w-screen flex justify-between items-center p-[10px_30px] bg-white shadow-md">
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
  
        <div className="flex items-center justify-between gap-3">
         <div className="wishlist"><img src="/wishlist.svg" alt="wishlist" /></div>
         <div className="cart"><img src="/cart.svg" alt="cart" /></div>
        </div>
        
      </header>
    );
  }
  