import ProductGrid from './components/ProductGrid';
import Essential from "./components/Essentials";
import Head from "next/head";
import Hero from "./components/Hero";
import Featured from "./components/Featured";

export default function Home() {
  return (
    <div className="w-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero/>
      <ProductGrid />
      <Featured/>
      <Essential/>


      
    </div>
  );
}
