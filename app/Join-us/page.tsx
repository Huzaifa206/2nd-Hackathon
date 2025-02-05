import Image from "next/image";
import Link from "next/link";

export default function JoinUs() {
    return (
    <div className="flex flex-col items-center py-10 mx-auto">
           <Image className="pb-5" src="/TickLogo.png" width={40} height={10} alt="Logo" />
           <h2 className="mx-auto w-72 md:w-96 uppercase text-center font-bold pb-5"> BECOME A NIKE MEMBER </h2>
           <p className='mx-auto w-72 md:w-96 text-center  pb-5'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
           <form action="" className="flex flex-col mx-auto w-72 md:w-96">
             <input className="mx-auto w-72 md:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] " type="text" placeholder="Email Address" />
             <input className="mx-auto w-72 md:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] " type="text" placeholder="Password" />
             <input className="mx-auto w-72 md:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] " type="text" placeholder="First Name" />
             <input className="mx-auto w-72 md:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] " type="text" placeholder="Last Name" />
             <input className="mx-auto w-72 md:w-96 border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px] " type="text" placeholder="Date of Birth" />
             <p className='mx-auto w-72 md:w-96 pb-3  text-sm md:text-base text-center'>Get a Nike Member Reward every year on your Birthday.</p>
             <select className="mx-auto w-72 md:w-96 border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px] " name="" id="">
               <option value="">India</option>
               <option value="">United States</option>
               <option value="">United Kingdom</option>
               <option value="">Pakistan</option>
              <option value="">Canada</option>
             </select>
      <div className='flex gap-5 mt-1 mx-auto w-72 md:w-96'>
        <div className='border-[#E5E5E5] rounded-md py-4 border-[2px] w-[50%] text-center'>Male</div>
        <div className='border-[#E5E5E5] rounded-md py-4 border-[2px] w-[50%] text-center'>Female</div>
      </div>
      <div className="flex justify-between items-center py-7 mx-auto w-72 md:w-96 text-sm md:text-base">
        
          <input type="checkbox" id="remember" />
          <label className="mx-auto w-72 md:w-96 pl-2 cursor-pointer " htmlFor="remember">
            Sign up for emails to get updates from Nike on products, offers and your Member benefits
          </label>
      
      </div>
      <p className="mx-auto w-72 md:w-96 text-sm md:text-base text-center pb-6">By creating an account, you agree to Nike's Privacy Policy and Terms of Use.</p>
      <button className="mx-auto w-72 md:w-96 rounded-sm py-3 bg-black text-white mb-2 hover:bg-slate-700">Sign Up</button>
      <p className="text-center"> <span className="">Already a Member? </span><Link href="/Login" className="flex justify-center font-bold cursor-pointer transition-colors duration-300 hover:text-red-500 underline" >Sign In</Link></p>
    </form>
    </div>
    );
  }
  