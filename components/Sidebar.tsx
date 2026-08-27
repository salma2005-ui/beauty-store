
import React from 'react'
import sidebar from '../public/sidebar.png'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className="relative flex justify-center items-center my-20">
      {/* الصورة */}
      <Image 
        src={sidebar} 
        className="w-full h-[400px] object-cover" 
        alt="" 
      />
      
      {/* النص فوق الصورة */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl font-bold  mb-2">
          Sign Up For Our Newsletter
        </h1>
        <p className=" mb-6">
          to receive the latest beauty tips, exclusive offers
        </p>
        
        {/* الانبوت والزرار */}
        <div className="flex w-full max-w-md">
          <input 
            type="email" 
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none" 
            placeholder="Enter your email"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
