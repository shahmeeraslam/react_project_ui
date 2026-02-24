import React from 'react'

const Products = (props) => {
  return (
    <div >
      <img className='w-21 md:h-60 h-full shadow-2xl shadow-amber-50  md:w-90' src={props.img} alt="" />
    </div>
  )
}

export default Products
