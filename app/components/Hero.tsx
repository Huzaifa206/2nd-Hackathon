import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-2.5 w-screen">
             <div className="flex justify-center items-center mx-auto w-[90%] mt-5">
              <Image src={"/Image.png"} width={1200} height={1000} className="rounded-xl" alt="Air Max Pulse" layout="responsive" />
              </div>
             <h1 className="text-3xl mt-3 font-bold">NIKE AIR MAX PULSE</h1>
             <p className="text-base mb-5 leading-[1.5] px-7">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your limits and help u go to the max.
             </p>
             <div className="flex justify-center flex-wrap gap-2.5">
             <button className="px-5 py-2.5 rounded-full bg-black text-white text-base cursor-pointer transition-colors duration-300 hover:bg-red-500">Notify Me</button>
             <button className="px-5 py-2.5 rounded-full bg-gray-500 text-white text-base cursor-pointer transition-colors duration-300  hover:bg-red-500">Shop Air Max</button>
             </div> 
    </div>
  );
}