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

'use client';
import React, { useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

interface Product {
  name: string;
  price: string;
  image: string;
}

const ProductGrid: React.FC = () => {
  const products: Product[] = [
    { name: "Nike Air Max Pulse", price: "$10,000", image: "/14.jpeg" },
    { name: "Nike Air Max 97 SE", price: "$20,000", image: "/13.jpeg" },
    { name: "Nike Air Max Pulse", price: "$30,000", image: "/12.jpeg" },
    { name: "Nike Air Max Pulse", price: "$30,000", image: "/15.jpeg" },
    { name: "Nike Air Max Pulse", price: "$30,000", image: "/11.jpeg" },
    
  ];

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

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-7">
        <h1 className="font-semibold text-xl ml-7 mt-7">Best of Air Max</h1>
        <div className="space-x-2 mr-7 mt-7">
          <button
            onClick={scrollLeft}
            className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
          >
            <MdKeyboardArrowLeft className="size-5" />
          </button>
          <button onClick={scrollRight} className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300">
           <MdKeyboardArrowRight className="size-5" />
          </button>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-hidden scroll-smooth mt-5 px-14">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-3.5 rounded-lg text-center shadow-md min-w-[80%] md:min-w-[30%]">
            <img
              src={product.image}
              className="max-w-full min-w-full h-auto mb-2.5"
              alt={product.name}
            />
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
