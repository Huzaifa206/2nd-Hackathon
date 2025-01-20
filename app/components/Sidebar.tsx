// components/Sidebar.tsx
import { IoMenu } from "react-icons/io5";
import React, { useState } from 'react';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="hidden">{children}</div> 
      <div className="lg:hidden flex justify-center items-center size-6 ">
        <button onClick={toggleSidebar}>
           <div className="md:hidden "><IoMenu className="flex justify-center items-center size-6 cursor-pointer transition-colors duration-300 hover:text-red-500" /></div>
        </button>
        <div
          className={`z-50 fixed top-0 right-0 h-screen w-64 bg-green-600 transform transition-transform ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
            <button onClick={toggleSidebar!}>
           <div className="md:hidden"><IoMenu className="flex justify-center items-center size-6 cursor-pointer transition-colors duration-300 hover:text-red-500" /></div>
        </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;