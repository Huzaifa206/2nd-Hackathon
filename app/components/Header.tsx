
  import Link from "next/link";
  import Image from "next/image";
  
  export default function Header() {
    return (
      <header className="header2">
        <div className="logo2"><img src="/logonike.png" alt="Nike" /></div>
        <nav>
          <ul className="navList2">
            <li>
              <Link href="/">New & Featured</Link>
            </li>
            
            <li>
              <Link href="/">Men</Link>
            </li>
            
            <li>
              <Link href="/">Women</Link>
            </li>
            
            <li>
              <Link href="/">Kids</Link>
            </li>
            <li>
              <Link href="/">Sale</Link>
            </li>
            <li>
              <Link href="/">SNKRS</Link>
            </li>
          </ul>
        </nav>
  
        <div className="third">
         <div className="wishlist"><img src="/wishlist.svg" alt="wishlist" /></div>
         <div className="cart"><img src="/cart.svg" alt="cart" /></div>
        </div>
        
      </header>
    );
  }
  