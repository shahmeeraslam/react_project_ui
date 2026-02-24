import React from 'react'

const Herosection = () => {
  return (
    <div className='h-full  w-full gap-5 flex p-5 md:px-50  md:justify-normal justify-center '>
      <div className='bg-amber-300 h-40 w-4'></div>
        <div className='flex flex-col gap-2'>
            <h3 className='text-white md:text-4xl font-sans font-stretch-50%  font-black capitalize'>
                 Premium Quality <br />  Wooden Pallets <br /> for Every Industry
             </h3>
             <button className='bg-amber-800 p-2 text-sm capitalize w-fit   rounded-b-4xl rounded-tr-4xl'>
                View Products
             </button>
        </div>
    </div>
  )
}

export default Herosection
