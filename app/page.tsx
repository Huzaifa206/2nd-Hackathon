import ProductGrid from './components/ProductGrid';
import Essential from "./components/Essentials";
import Head from "next/head";
import Hero from "./components/Hero";
import Featured from "./components/Featured";

export default function Home() {
  return (
    <div className="w-screen">
      
      <Hero/>
      <ProductGrid />
      <Featured/>
      <Essential/>


      
    </div>
  );
}
