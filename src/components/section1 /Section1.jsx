import React from 'react'
import Navbar from './nav/Navbar'
import Herosection from './herosection/Herosection'
const Section1 = () => {
  const img_address = "https://imgs.search.brave.com/x8W7iyPAun3w1psqOvDIQrXt-rZfEKRL4nujlw6rkkY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90bWhl/LW1lZGlhLmF6dXJl/ZWRnZS5uZXQvcHVi/bGlzaGVkLzE3ODg5/XzI1MDB4NzAwX3Rv/eW90YSUyMG1oLmpw/Zw"
  return (
    <div id='Home' className='bg-amber-400   h-screen overflow-hidden'>
      <img className='h-full  w-full blur-xs absolute inset-0 object-cover object-center ' src={img_address} alt="" />
      <div className='absolute bg-black/50 inset-0'></div>
      <div className='relative  w-full flex flex-col gap-50 h-full '>
       <Navbar />
       <Herosection />
      </div>
     

      
    </div>
  )
}

export default Section1
