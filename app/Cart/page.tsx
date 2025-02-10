import { Product } from "@/types/products";
import { useEffect, useState } from "react";
import { getCartItems } from "../actions/actions";

export default function Cart() {
    const [cartItems,setCartItems]= useState<Product[]>([])
    useEffect(() => {
        setCartItems(getCartItems())
    },[])
    return (
        <div className="min-h-screen">
            <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* Cart Items */}
      <div className="w-full md:w-2/3 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b py-4">
                <div>
                  <h3 className="text-lg font-semibold">itemname</h3>
                  <p className="text-gray-500">${item.price} x item.quantity</p>
                </div>
                <p className="text-lg font-semibold">(item.price * item.quantity).toFixed(2)</p>
              </li>
            ))}
          </ul>
        )}
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Proceed to Checkout
        </button>
      </div>
      
      {/* Total Bill Box */}
      <div className="w-full md:w-1/3 bg-gray-100 p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Total Bill</h2>
        <p className="text-lg font-semibold">Total: total.toFixed(2)</p>
      </div>
    </div>
        </div>
    
    );
  }
  