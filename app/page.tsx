import Image from "next/image";
import Link from "next/link";
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="container">
      <TopHeader />
      <Header />
      <main>
       <div className="hero">
         <div className="imagemain"><img src="/image.png" alt="Air Max Pulse" /></div>
         <h1>NIKE AIR MAX PULSE</h1>
         <p>
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your limits and help you go to the max.
         </p>
         <div className="button-container">
         <button className="button">Notify Me</button>
         <button className="button secondary">Shop Air Max</button>
         </div> 
        </div>

        
        <ProductGrid />

        <div className="featured">
        <div>
        <h1 className="font-semibold text-xl py-5 text-left ml-7">Featured</h1>
      </div>
      <div className="Featuredimg"><img src="/Featured.png" alt="Heroimg" /></div>
      <div className="flex justify-center items-center flex-col gap-3 p-10 text-center">
        <h2 className=" text-4xl font-bold uppercase"> STEP INTO WHAT FEELS GOOD</h2>
        <p className="text-sm leading-5 w-[60%] pt-3 pb-2 text-center">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <button>Find Your Shoe</button>
      </div>
       </div>
        
        <Footer />
      </main>
    </div>
  );
}
