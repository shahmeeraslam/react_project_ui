import React from "react";
import Products from "./Products";

const Ourproducts = (props) => {
  return (
    <div id="section4" className="p-1 h-screen justify-center gap-3 bg-black shadow-2xs shadow-amber-50 items-center flex  flex-col ">
      <h1 className="text-2xl font-black justify-start   ">Our  Products</h1>
      <div className=" flex flex-wrap justify-center w-fit  items-center object-cover  gap-10 py-2">
        {props.user4.map((img, ind) => (
          <Products key={ind} img={img.img} />
        ))}
      </div>
      <button className="text-amber-200 underline under">
        See more
      </button>
    </div>
  );
};

export default Ourproducts;
