import Image from "next/image";
import Link from "next/link";
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import Essential from "./components/Essentials";
import Head from "next/head";

export default function Home() {
  return (
    <div className="w-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" /></Head>
      <TopHeader />
      <Header />
      <main>
       <div className="flex flex-col justify-center items-center text-center gap-2.5 w-screen">
         <div className="flex justify-center items-center mx-auto w-[90%] mt-5">
          <Image src={"/Image.png"} width={1200} height={1000} className="rounded-xl" alt="Air Max Pulse" layout="responsive" />
          </div>
         <h1 className="text-3xl mt-3 font-bold">NIKE AIR MAX PULSE</h1>
         <p className="text-base mb-5 leading-[1.5]">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your limits and help u go to the max.
         </p>
         <div className="flex justify-center flex-wrap gap-2.5">
         <button className="px-5 py-2.5 rounded-full bg-black text-white text-base cursor-pointer transition-colors duration-300 hover:bg-red-500">Notify Me</button>
         <button className="px-5 py-2.5 rounded-full bg-gray-500 text-white text-base cursor-pointer transition-colors duration-300">Shop Air Max</button>
         </div> 
        </div>

        
        <ProductGrid />

        <div className="text-center w-screen">
        <div>
        <h1 className="font-semibold text-xl py-5 text-left ml-7">Featured</h1>
      </div>
      <div className="flex justify-center items-center"><img src="/Featured.png" alt="Heroimg" /></div>
      <div className="flex justify-center items-center flex-col gap-3 p-10 text-center">
        <h2 className=" text-4xl font-bold uppercase"> STEP INTO WHAT FEELS GOOD</h2>
        <p className="text-sm leading-5 w-[60%] pt-3 pb-2 text-center">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <button>Find Your Shoe</button>
      </div>
       </div>
        <Essential/>
        <Footer />
      </main>
    </div>
  );
}
