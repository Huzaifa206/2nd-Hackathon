"use client";
import { Product } from "@/types/products";
import { useEffect, useState } from "react";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

export default function Cart() {
    const [cartItems,setCartItems]= useState<Product[]>([])
    useEffect(() => {
        setCartItems(getCartItems())
    },[]);

    const handleRemove = (id:string) =>{
      Swal.fire({
            position:"center",
            width: 400,
            icon:"question",
            theme:"light",
            title:`<h5>Do you want to remove this item?</h5>`,
            showConfirmButton:true ,
            confirmButtonText: "Remove",
            confirmButtonColor:"black",
            showCancelButton: true,
            cancelButtonText: "Cancel",
            timer:3000,
      }).then((result) =>{
        if(result.isConfirmed){
          removeFromCart(id)
          setCartItems(getCartItems())
        }
      })
    }

    const handleQuantityChange= (id:string ,quantity:number) =>{
      updateCartQuantity(id,quantity)
      setCartItems(getCartItems())
    }

    const handleIncrement = (id:string) =>{
      const product =cartItems.find((item)=>item._id ===id);
      if(product)
        handleQuantityChange(id,product.inventory+1)
    }

    const handleDecrement = (id:string) =>{
      const product =cartItems.find((item)=>item._id ===id);
      if(product && product.inventory > 1)
        handleQuantityChange(id,product.inventory-1)
    }

    const calculatedTotal =()=>{
        return cartItems.reduce((total,item)=> total + item.price * item.inventory,0)
    }

    const handleProceed =()=>{
      Swal.fire({
        position:"center",
        width: 400,
        icon:"question",
        theme:"light",
        title:`<h5>Proceed to Checkout?</h5>`,
        showConfirmButton:true ,
        confirmButtonText: "Proceed",
        confirmButtonColor:"black",
        showCancelButton: true,
        timer:3000,
  }).then((result) =>{
    if(result.isConfirmed){
      Swal.fire("Success","Your Order has been successfuly Proceeded","success")
      setCartItems([])
    }
  })
    }

    return (
        <div className="min-h-screen p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Cart Items */}
            <div className="w-full md:w-2/3 bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                <div>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item._id} className="md:flex md:justify-between md:items-center border-b py-4">
                      <div className="flex gap-4">
                      <div>
                        {item.image && (
                                        <Image src={urlFor(item.image).url()} 
                                        width={500} 
                                        height={500} 
                                        alt={item.productName}
                                        className="w-16 h-16 object-cover rounded-md"
                                       />
                                      )}
                      </div>
                      <div>
                        <h3 className="text-md md:text-lg font-semibold">{item.productName}</h3>
                        <p className="text-gray-500">${item.price} x {item.inventory}</p>
                      </div>
                      </div>


                      <div>                 
                      <div className="flex justify-end items-center gap-2 my-2">
                        <button 
                          onClick={() => handleDecrement(item._id)} 
                          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
                          -
                        </button>
                        <span>{item.inventory}</span>
                        <button 
                          onClick={() => handleIncrement(item._id)} 
                          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
                          +
                        </button>
                        <button 
                          onClick={() => handleRemove(item._id)} 
                          className="ml-4 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
                          Remove
                        </button>
                      </div>
                      <div className="flex justify-end items-center">
                        <p className="text-lg font-semibold ">Rs {(item.price * item.inventory).toFixed(2)}</p></div>
                      </div> 
                    </li>
                  ))}
                </ul>
                
                </div>
              )}
              
              <button onClick={handleProceed} className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-700">
                Proceed to Checkout
              </button>
            </div>
            
            {/* Total Bill Box */}
            <div className="w-full md:w-1/3 bg-gray-100 p-6 shadow-lg rounded-lg">
              <h2 className="text-xl font-bold mb-4">Total Bill</h2>
              <p className="text-lg font-semibold">Total: Rs {calculatedTotal().toFixed(2)}</p>
            </div>
          </div>
        </div>
    );
}
