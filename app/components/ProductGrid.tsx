// export default function ProductGrid() {
//     const products = [
//       { name:"Nike Air Max Pulse",price:"$10,000",image:"/10.jpeg"},
//       { name:"Nike Air Max 97 SE",price:"$20,000",image:"/11.jpeg"},
//       { name:"Nike Air Max Pulse",price:"$30,000",image:"/12.jpeg"},
//     ];
  
//     return (
//       <div>
//         <div className="flex justify-between">
//           <h1 className="font-semibold text-xl text-left ml-7 mt-7">Best of Air Max</h1>
//           </div>
//         <section className="w-screen flex gap-5 justify-evenly mt-[10px] flex-col md:flex-row">
//         {products.map((product, index) => (
//           <div key={index} className="bg-white p-3.5 rounded-lg text-center shadow-md">
//             <img src={product.image} className="max-w-full h-auto mb-2.5" alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>{product.price}</p>
//           </div>
//         ))}
//       </section>
//       </div>
      
//     );
//   }

"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { FiveProducts } from '@/sanity/lib/queries';
import { Product } from '@/types/products';
import { urlFor } from '@/sanity/lib/image';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


const ProductGrid: React.FC = () => {

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const [product, setProduct] = useState<Product[]>([])
    useEffect(() => {
      async function fetchproducts(){
        const fetchedProduct : Product[] = await client.fetch(FiveProducts)
        setProduct(fetchedProduct)
      }
      fetchproducts();
    },[])
    

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-5 md:px-7">
        <h1 className="flex items-center font-semibold  md:text-xl ml-2 md:ml-7 mt-7">Best of Air Max</h1>
        <div className="flex justify-evenly items-center gap-2 mr-2 md:mr-7 mt-7">
        <Link href="/AllProducts" className="font-semibold md:text-xl p-2 cursor-pointer hover:text-red-500">Shop Now</Link>
        <div className="flex justify-evenly items-center gap-2 ml-1 mr-2 relative">
          <button
            onClick={scrollLeft}
            className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 absolute top-52 right-[75vw] md:static"
          >
            <MdKeyboardArrowLeft className="size-8 md:size-6 " />
          </button>
          <button onClick={scrollRight} className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 absolute top-52 md:static">
           <MdKeyboardArrowRight className="relative size-8 md:size-6" />
          </button>
          </div>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-hidden scroll-smooth mt-5 px-7 md:px-14">
        {product.map((product) => (
          <div
            key={product._id}
            className="bg-white p-3.5 rounded-lg text-center shadow-md min-w-[90%] md:min-w-[30%]">
              {product.image && (<Image src={urlFor(product.image).url()} 
                              width={200} 
                              height={150} 
                              alt={product.productName}
                              className="max-w-full min-w-full h-auto mb-2.5"
                              layout="responsive" />
              )}
            <h3 className="font-medium">{product.productName}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
