import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <div className="flex flex-col items-center py-10">
        <Image className="pb-5" src="/TickLogo.png" width={40} height={10} alt="Logo" />
        <h2 className="uppercase w-40 text-center font-bold pb-5">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h2>
        <form action="" className="flex flex-col mx-auto w-96 my-5 md:my-0">
          <input className="mx-auto w-80 md:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray" type="text" placeholder="Email Address" />
          <input className="mx-auto w-80 md:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray" type="text" placeholder="Password" />
          <div className="flex justify-between items-center py-3 flex-col md:flex-row gap-2">
            <div>
              <input type="checkbox" id="remember" />
              <label className="mr-4 pl-2 cursor-pointer text-text-secondary-gray" htmlFor="remember">
                  Keep me signed in
              </label>
            </div>
            <div>
              <span>
                <p className="text-[#BCBCBC] ">Forgotten your password?</p>
              </span>
            </div>
          </div>
          <p className="text-text-secondary-gray text-center pb-6 text-sm md:text-base">By logging in, you agree to Nike's <span> Privacy Policy</span> and <span>Terms of Use</span>.
         </p>
          <button className="rounded-sm py-3 bg-black mb-4 px-24 text-white text-center  hover:bg-slate-700">Sign in</button> 
          <p className="text-center"> <span className="text-text-secondary-gray">Not a Member? </span></p>
        
        </form>
      <Link href="/Join-us" className="flex items-center justify-center font-bold mb-[2%] underline cursor-pointer transition-colors duration-300 hover:text-red-500" >Join us</Link>
      </div>
    );
  }
  