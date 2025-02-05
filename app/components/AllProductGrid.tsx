"use client";
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { allProducts } from '@/sanity/lib/queries';
import { Product } from '@/types/products';
import React, { useState, useRef, useEffect } from 'react';
import { urlFor } from '@/sanity/lib/image';

const AllProductGrid = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Sidebar visibility state
  const sidebarRef = useRef<HTMLDivElement | null>(null); // Ref for sidebar

  // Toggle sidebar visibility
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarVisible(false); // Close sidebar if click is outside
      }
    };

    if (isSidebarVisible) {
      document.addEventListener('click', handleClickOutside);
    }

    // Cleanup event listener when sidebar is hidden
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSidebarVisible]);

  // const products = [
  //   { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/one.png' },
  //   { name: 'Nike Air Max 97 SE', price: '₹16,995', image: '/two.png' },
  //   { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/three.png' },
  //   { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/four.png' },
  //   { name: 'Nike Air Max 97 SE', price: '₹16,995', image: '/five.png' },
  //   { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/six.png' },
  //   { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/seven.png' },
  //   { name: 'Nike Air Max 97 SE', price: '₹16,995', image: '/eight.png' },
  //   { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/nine.png' },
  //   { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/ten.png' },
  //   { name: 'Nike Air Max 97 SE', price: '₹16,995', image: '/eleven.png' },
  //   { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/twelve.png' },
  //   { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/thirteen.png' },
  //   { name: 'Nike Air Max 97 SE', price: '₹16,995', image: '/fourteen.png' },
  //   { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/fifteen.png' },
  //   { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/sixteen.png' },
  //   { name: 'Nike Air Max 97 SE', price: '₹16,995', image: '/seventeen.png' },
  //   { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/eighteen.png' },
  //   { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/nineteen.png' },
  //   { name: 'Nike Air Max 97 SE', price: '₹16,995', image: '/twenty.png' },
  //   { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/twentyone.png' },
  //   { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/twentytwo.png' },
  //   { name: 'Nike Air Max 97 SE', price: '₹16,995', image: '/twentythree.png' },
  // ];
  const [product, setProduct] = useState<Product[]>([])
  useEffect(() => {
    async function fetchproducts(){
      const fetchedProduct : Product[] = await client.fetch(allProducts)
      setProduct(fetchedProduct)
    }
    fetchproducts();
  },[])
  

  return (
    <div className='bg-white border-t-2 border-gray-300'>
      <div className="flex items-center justify-between px-7 pt-7">
        <h1 className="font-semibold text-xl text-left">New(100)</h1>
        {/* Button to toggle sidebar */}
        <button
          onClick={toggleSidebar}
          className="font-semibold px-4 py-2 rounded-md md:hidden"
        >
          Categories

        </button>
      </div>

      <div className="flex relative w-screen">
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`bg-white fixed inset-0 p-4 pl-10 overflow-y-scroll transform transition-transform duration-300 z-10 ${
            isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
          } md:static md:translate-x-0 w-[40%] md:w-[20%] md:flex md:flex-col`}
        >
        <ul className=" font-[550] space-y-2 ">
          <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">Shoes</li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">Sports Bras</li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">Tops & T-Shirts</li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">Hoodies & Sweatshirts</li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">Jackets</li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">Trousers & Tights</li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">Shorts</li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">Tracksuits</li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">Jumpsuits & Rompers</li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">Skirts & Dresses</li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">Socks</li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-red-500">Accessories & Equipment</li>
        </ul>

      {/* Gender */}
      <div>
        <h3 className="font-semibold text-lg my-4">Gender</h3>
        <ul className="space-y-1">
          <li>
            <label className="flex items-center space-x-2 cursor-pointer transition-colors duration-300 hover:text-red-500">
              <input
                type="checkbox"
                className="form-checkbox rounded text-blue-600"
              />
              <span>Men</span>
            </label>
          </li>
          <li>
            <label className="flex items-center space-x-2 cursor-pointer transition-colors duration-300 hover:text-red-500">
              <input
                type="checkbox"
                className="form-checkbox rounded text-blue-600"
              />
              <span>Women</span>
            </label>
          </li>
          <li>
            <label className="flex items-center space-x-2 cursor-pointer transition-colors duration-300 hover:text-red-500">
              <input
                type="checkbox"
                className="form-checkbox rounded text-blue-600"
              />
              <span>Unisex</span>
            </label>
          </li>
        </ul>
      </div>

      {/* Kids */}
      <div>
        <h3 className="font-semibold text-lg my-4">Kids</h3>
        <ul className="space-y-1">
          <li>
            <label className="flex items-center space-x-2 cursor-pointer transition-colors duration-300 hover:text-red-500">
              <input
                type="checkbox"
                className="form-checkbox rounded text-blue-600"
              />
              <span>Boys</span>
            </label>
          </li>
          <li>
            <label className="flex items-center space-x-2 cursor-pointer transition-colors duration-300 hover:text-red-500">
              <input
                type="checkbox"
                className="form-checkbox rounded text-blue-600"
              />
              <span>Girls</span>
            </label>
          </li>
        </ul>
      </div>

      {/* Shop by Price */}
      <div>
        <h3 className="font-semibold text-lg my-4">Shop By Price</h3>
        <ul className="space-y-1">
          <li>
            <label className="flex items-center space-x-2 cursor-pointer transition-colors duration-300 hover:text-red-500">
              <input
                type="checkbox"
                className="form-checkbox rounded text-blue-600"
              />
              <span>Under 2,500 PKR</span>
            </label>
          </li>
          <li>
            <label className="flex items-center space-x-2 cursor-pointer transition-colors duration-300 hover:text-red-500">
              <input
                type="checkbox"
                className="form-checkbox rounded text-blue-600"
              />
              <span> 2,500 PKR - 5,000 PKR</span>
            </label>
          </li>
        </ul>
      </div>
        </div>

        {/* Main Content */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-1 p-1 md:p-5 w-full ">
          {product.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg  p-1 text-center"
            >
              {product.image && (
                <Image src={urlFor(product.image).url()} 
                width={200} 
                height={150} 
                alt={product.productName}
                className="w-full h-auto object-cover rounded-md mb-4"
                layout="responsive" />
              )}
              <p className="font-semibold text-base">{product.productName}</p>
              <p>{product.category}</p>
              <p className="text-black">{product.price} PKR</p>
              <button className="px-4 py-2 rounded-full bg-gray-500 text-white text-sm cursor-pointer transition-colors duration-300 hover:bg-red-500">Add to Cart</button>
              
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AllProductGrid;
