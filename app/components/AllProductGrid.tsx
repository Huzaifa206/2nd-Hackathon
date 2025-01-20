"use client";
import React, { useState, useRef, useEffect } from 'react';

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

  const products = [
    { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/10.jpeg' },
    { name: 'Nike Air Max 97 SE', price: '₹16,995', image: '/11.jpeg' },
    { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/12.jpeg' },
    { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/10.jpeg' },
    { name: 'Nike Air Max 97 SE', price: '₹16,995', image: '/11.jpeg' },
    { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/12.jpeg' },
    { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/10.jpeg' },
    { name: 'Nike Air Max 97 SE', price: '₹16,995', image: '/11.jpeg' },
    { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/12.jpeg' },
  ];

  return (
    <div>
      <div className="flex items-center justify-between px-7 mt-7">
        <h1 className="font-semibold text-xl text-left">Best of Air Max</h1>
        {/* Button to toggle sidebar */}
        <button
          onClick={toggleSidebar}
          className="bg-blue-500 text-white px-4 py-2 rounded-md md:hidden"
        >
          Categories
        </button>
      </div>

      <div className="flex relative w-screen">
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed inset-0 bg-green-300 p-4 overflow-y-auto transform transition-transform duration-300 z-10 ${
            isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
          } md:static md:translate-x-0 w-[40%] md:w-[20%] md:flex md:flex-col`}
        >
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Shoes
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Tops & T-Shirts
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Jackets
              </a>
            </li>
            {/* Add more categories here */}
          </ul>
        </div>

        {/* Main Content */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-1 p-1 w-full">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-1 text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AllProductGrid;
