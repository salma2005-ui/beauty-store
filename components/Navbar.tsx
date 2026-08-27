import React from 'react'
import Link from 'next/link'
import {Heart,ShoppingCart,User} from'lucide-react'

const Navbar = () => {
  return (
   <header className="w-full">
    <div className=' w-full bg-pink-100  px-6 py-4  flex items-center justify-btween gap-6'>


<div className="w-1/3 flex justify-start">
        <div className=' w-40 border  border-pink-500'>
            <div className='relative'>
<input type="text" className='w-full' placeholder='search for products'></input>
</div>
</div>
</div>



<Link href="/" className=" w-1/3  flex justify-center text-3xl font-bold decoration-none ">Glow<span className="text-pink-400">I</span>fy ✨</Link>


<div  className='w-1/3 flex items-center justify-end gap-6'>
    <Heart className=' cursor-pointer hover:text-pink-700'/>
    <User  className=' cursor-pointer hover:text-pink-700'/>
        <ShoppingCart className=' cursor-pointer hover:text-pink-700'/>
        </div>











    </div>





    </header>
      
  )
}

export default Navbar