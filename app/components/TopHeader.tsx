import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="header1">
      <div className="logo1">
        <img src="/logo1nike.png" alt="Nike" />
      </div>
      <nav>
        <ul className="navList1">
          <li>
            <Link href="/contact-us">Find A Store</Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/contact-us">Help</Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/Join-us">Join Us</Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/Login">Sign In</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
