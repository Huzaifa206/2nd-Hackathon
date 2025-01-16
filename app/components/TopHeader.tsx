import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="w-screen h-[35px] flex justify-between items-center p-[10px_30px] bg-gray-100 shadow-md">
      <div className="bg-cover w-[3%]">
        <img src="/logo1nike.png" alt="Nike" />
      </div>
      <nav>
        <ul className="flex list-none gap-5 ">
          <li className="cursor-pointer transition-colors duration-300 text-sm font-bold hover:text-red-500">
            <Link href="/contact-us">Find A Store</Link>
          </li>
          <li>|</li>
          <li className="cursor-pointer transition-colors duration-300 text-sm font-bold hover:text-red-500">
            <Link href="/contact-us">Help</Link>
          </li>
          <li>|</li>
          <li className="cursor-pointer transition-colors duration-300 text-sm font-bold hover:text-red-500">
            <Link href="/Join-us">Join Us</Link>
          </li>
          <li>|</li>
          <li className="cursor-pointer transition-colors duration-300 text-sm font-bold hover:text-red-500">
            <Link href="/Login">Sign In</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
